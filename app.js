const express = require('express');
const app = express();
const ejs = require('ejs');

// テンプレートエンジンの指
app.set("view engine", "ejs");

const mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'dbuser01',
  password: '',
  database: 'alcohols',
});


app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

//スタート
app.get('/', function(req, res) {
  res.render('start.ejs');
});

//記録開始
app.post('/timestart', function(req, res) {
  
  connection.query('SELECT end FROM timemanagement WHERE start =( SELECT MAX(start) FROM timemanagement) LIMIT 1', function(error, results) {
    console.log(results);
    if (results[0].end !== null) {
      console.log('success');
      connection.query('INSERT INTO timemanagement(start) VALUES (CAST(now() as datetime))');
    } else {
      console.log('failed');
    };
  });
  connection.query('SELECT * FROM alcohols', function (error, results) {
    
    res.redirect('/top');
    
  });

});

//記録終わり
app.post('/timeend', function(req, res) {
 
  connection.query('UPDATE timemanagement SET end = CAST(now() as datetime) WHERE end IS NULL',  function (error, results) {
    console.log(results);
  });
  connection.query('SELECT * FROM alcohols', function (error, results) {
    res.render('start.ejs', {alcohols: results});
  });
  
})

//トップ
app.get('/top', function(req, res) {
  
  connection.query('SET @i := 0');
  connection.query('UPDATE alcohols SET id = (@i := @i + 1)');
  connection.query('SELECT * FROM alcohols WHERE start = (SELECT MAX(start) FROM timemanagement)', function (error, results) {
    res.render('top.ejs', {alcohols: results});
  });
});

//登録画面
app.get('/register', function (req, res) {
  res.render('register.ejs');
});

//追加
app.post('/create', function (req, res) {
  const alcohol = [req.body.alcoholName, req.body.ml, req.body.alcoholValue, req.body.alcoholKcal, req.body.alcoholPercent];
  connection.query('INSERT INTO alcohols(type, ml, value, kcal, percent, uptime) VALUES (?, CAST(now() as datetime))',
  [alcohol],
  function (error, results) {
    connection.query('SELECT * FROM alcohols', function (error, results) {
      res.redirect('/top');
    });
  });
  connection.query('UPDATE alcohols SET start = (SELECT MAX(start) FROM timemanagement LIMIT 1) WHERE id IN (SELECT * FROM (SELECT MAX(id) FROM alcohols LIMIT 1) AS P)');
});

//削除
app.post('/delete/:id', function (req, res) {
  connection.query('DELETE FROM alcohols WHERE id = ?',
  [req.params.id],
  function (error, results) {
    res.redirect('/top');
  });
});

//一覧から削除
app.post('/deleteIndex/:id', function (req, res) {
  connection.query('DELETE FROM alcohols WHERE id = ?',
  [req.params.id],
  function (error, results) {
    res.redirect('/index');
  });
});

//設定
app.get('/setting', function (req, res) {
  connection.query('SELECT * FROM alcohols WHERE id IN (SELECT * FROM (SELECT MAX(id) FROM alcohols) AS P) LIMIT 1', function (error, results) {
    res.render('setting.ejs', {alcohols: results});
  });
});

app.post('/set',  function (req, res) {
  console.log(req.body.weight);
  connection.query('ALTER TABLE alcohols ALTER COLUMN weight SET DEFAULT ?',
    [req.body.weight],
    function (error, results) {
      res.redirect('/top');
    });
});

//一覧画面
app.get('/index', function (req, res) {
  connection.query('SET @i := 0');
  connection.query('UPDATE alcohols SET id = (@i := @i + 1)');
  connection.query('SELECT * FROM alcohols' ,function (error, results) {
    res.render('index.ejs', {alcohols: results});
  });
});

app.listen(3000);
