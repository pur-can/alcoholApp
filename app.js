const express = require('express');
const app = express();
const ejs = require('ejs');

// テンプレートエンジンの指定
app.set("view engine", "ejs");

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'dbuser01',
  password: '',
  database: 'alcohols',
});
connection.connect();

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

//トップ
app.get('/', function(req, res) {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'dbuser01',
    password: '',
    database: 'alcohols',
  });
  connection.connect();

  connection.query('SET @i := 0');
  connection.query('UPDATE alcohols SET id = (@i := @i + 1)');
  connection.query('SELECT * FROM alcohols', function (error, results) {
    res.render('top.ejs', {alcohols: results});
  });
  connection.end();
  
});

//登録画面
app.get('/register', function (req, res) {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'dbuser01',
    password: '',
    database: 'alcohols',
  });
  connection.connect();
  res.render('register.ejs');
  connection.end();
});

//追加
app.post('/create', function (req, res) {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'dbuser01',
    password: '',
    database: 'alcohols',
  });
  connection.connect();
  
  const alcohol = [req.body.alcoholName, req.body.ml, req.body.alcoholValue, req.body.alcoholKcal, req.body.alcoholPercent];

  connection.query('INSERT INTO alcohols(type, ml, value, kcal, percent) VALUES (?)',
  [alcohol],
  function (error, results) {
      res.redirect('/');
      console.log(results);
  });
  connection.end();
});

//一覧
// app.get('/new', function (req, res) {
//   const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'dbuser01',
//     password: '',
//     database: 'alcohols',
//   });
//   connection.connect();
  
//   connection.query('SET @i := 0');
//   connection.query('UPDATE alcohols SET id = (@i := @i + 1)');
//   connection.query('SELECT * FROM alcohols', function (error, results) {
//     res.render('new.ejs', {alcohols: results});
//   });
  
  
//   connection.end();
// });

//削除
app.post('/delete/:id', function (req, res) {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'dbuser01',
    password: '',
    database: 'alcohols',
  });
  connection.connect();
  connection.query('DELETE FROM alcohols WHERE id = ?',
  [req.params.id],
  function (error, results) {
    res.redirect('/');
  });
  connection.end();
});

app.listen(3000);
