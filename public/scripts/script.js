'use strict';

  function onRadioButtonChange(avgpercent) {
    const target = document.getElementById("target");
    target.setAttribute("value", avgpercent);
  }
  
  function changeCheckbox(idname) {
    const obj = document.getElementById(idname);
    obj.checked = !obj.checked;
  }
  
  function averageKcal(kcalnum) {
    const avgKcal = document.getElementById('avgkcal');
    avgKcal.setAttribute("value", kcalnum);
  }
  
  function clickBtn(number) {
    const num = document.getElementById('list' + number);
    const minus = document.getElementById('plus' + number);
    const listHead = document.getElementById('alcohol-listheader' + number);
    const listHeadStyle = listHead.style;
    if(num.style.display == "block") {
      num.style.display = "none";
      listHeadStyle.backgroundColor = "rgb(255, 255, 252)";
      if(listHead.classList.contains("blue")) {
        listHeadStyle.color = "rgb(143, 179, 226)";
      } else if(listHead.classList.contains("violet")) {
        listHeadStyle.color = "rgb(207, 147, 241)";
      } else if(listHead.classList.contains("bluepink")) {
        listHeadStyle.color = "rgb(219, 128, 192)";
      } else if(listHead.classList.contains("pink")) {
        listHeadStyle.color = "rgb(245, 115, 169)";
      } else if(listHead.classList.contains("red")) {
        listHeadStyle.color = "rgb(209, 56, 55)";
      } else {
        listHeadStyle.color = "rgb(129, 217, 230)";
      }
  
    } else {
      num.style.display = "block"
      listHeadStyle.color = "white";
      if(listHead.classList.contains("blue")) {
        listHeadStyle.backgroundColor = "rgb(143, 179, 226)";
      } else if(listHead.classList.contains("violet")) {
        listHeadStyle.backgroundColor = "rgb(207, 147, 241)";
      } else if(listHead.classList.contains("bluepink")) {
        listHeadStyle.backgroundColor = "rgb(219, 128, 192)";
      } else if(listHead.classList.contains("pink")) {
        listHeadStyle.backgroundColor = "rgb(245, 115, 169)";
      } else if(listHead.classList.contains("red")) {
        listHeadStyle.backgroundColor = "rgb(209, 56, 56)";
      } else {
        listHeadStyle.backgroundColor = "rgb(143, 234, 246)";
      }
    }
  
    if(minus.textContent == "+") {
      minus.textContent = "×";
      minus.style.color = "white";
    } else {
      minus.textContent = "+";
      minus.style.color = "rgb(189, 172, 172)";
    }
  }
  
  
  function weightDisplay(weight) {
    const weightDisplay = document.settingform.weightdisplay;
    const nowWeight = document.getElementById('nowweight');
    if(weightDisplay.checked) {
      nowWeight.setAttribute("placeholder", weight);
    } else {
      nowWeight.removeAttribute("placeholder", weight);
    }
  }
  
  const wordTranslate = [
    document.getElementById('header-span'),
    document.getElementById('change1'),
    document.getElementById('change2'),
    document.getElementById('change3'),
    document.getElementById('change4'),
    document.getElementById('change5'),
    document.getElementById('change6'),
    document.getElementById('change7'),
    document.getElementById('change8'),
  ];
  
  function wordSetting() {
  
    const wordSettingCheck = document.form3.wordsetting;
  
    if(wordSettingCheck.checked) {
      wordTranslate[0].textContent = "ALCOHOL RECORD";
      wordTranslate[1].textContent = "Total alcohol consumption";
      wordTranslate[2].textContent = "Total amount";
      wordTranslate[3].textContent = "Total calorie intake";
      wordTranslate[4].textContent = "Until getting sober…about";
      wordTranslate[5].textContent = "hours";
      wordTranslate[6].innerHTML = "※It is the calculation method that the amount of alcohol can be broken down in one hour is <span>(weight（kg）x 0.1)</span>, the disassembly time is <span>(the amount of consumpted absolute alcohol(g)/ The amount of alcohol that can be decomposed in one hour).</span>";
      wordTranslate[7].innerHTML = "※The calculation method of the blood alcohol concentration is  <span>(alcohol percentage(%)x quantity of liquor(ml)/ (weight(kg)x 833)).</span>";
      wordTranslate[8].setAttribute('value', 'BREAKUP');
      document.querySelector('.add').textContent = "ADD +";
  
    } else {
      wordTranslate[0].textContent = "今回の飲酒記録";
      wordTranslate[1].textContent = "総飲酒量";
      wordTranslate[2].textContent = "総額";
      wordTranslate[3].textContent = "総カロリー量";
      wordTranslate[4].textContent = "アルコールが抜けるまで…約";
      wordTranslate[5].textContent = "時間";
      wordTranslate[6].innerHTML = "※一時間に分解できるアルコール量は<span>(体重（kg）x 0.1)</span>、分解にかかる時間は<span>(摂取した純アルコール量(g)/ 一時間に分解できるアルコール量)</span>で計算しています。";
      wordTranslate[7].innerHTML = "※酔いの状態を計るためのアルコール血中濃度は<span>(アルコール度数(%)x 容量(ml)/ (体重(kg)x 833))</span>で計算しています。";
      wordTranslate[8].setAttribute('value', '解散');
      document.querySelector('.add').textContent = "追加 +";
    }
  }
  
  const registerTranslate = [
    document.getElementById('register-header'),
    document.getElementById('register-p1'),
    document.getElementById('register-p2'),
    document.getElementById('register-p3'),
    document.getElementById('register-p4'),
    document.getElementById('register-p5'),
    document.getElementById('returnbutton'),
    document.getElementById('register-beer'),
    document.getElementById('register-chuhai'),
    document.getElementById('register-nihonshu'),
    document.getElementById('register-whiskey'),
    document.getElementById('register-shochu'),
    document.getElementById('register-umeshu'),
    document.getElementById('register-wine'),
    document.getElementById('register-other'),
    document.getElementById('register30'),
    document.getElementById('register60'),
    document.getElementById('register90'),
    document.getElementById('register120'),
    document.getElementById('register180'),
    document.getElementById('register350'),
    document.getElementById('register500'),
  ];
  const buttonTranslate = [
    document.getElementById('registerbutton'),
  ];
  
  function exchangeWordRegister() {
    const exchangeRegister = document.form4.wordsettingregister;
    if(exchangeRegister.checked) {
      registerTranslate[0].textContent = "REGISTER";
      registerTranslate[1].textContent = "TYPE";
      registerTranslate[2].textContent = "QUANTITY";
      registerTranslate[3].textContent = "ALCOHOL PERCENT";
      registerTranslate[4].textContent = "PRICE";
      registerTranslate[5].textContent = "CALORIE";
      registerTranslate[6].innerHTML = "<i class='fas fa-less-than'></i>RETURN";
      registerTranslate[7].textContent = "beer";
      registerTranslate[8].textContent = "chuhai";
      registerTranslate[9].textContent = "sake";
      registerTranslate[10].textContent = "whiskey";
      registerTranslate[11].textContent = "shochu";
      registerTranslate[12].textContent = "plum wine";
      registerTranslate[13].textContent = "wine";
      registerTranslate[14].textContent = "other";
      registerTranslate[15].innerHTML = "[whiskey:<br>single]";
      registerTranslate[16].innerHTML = "[whiskey:<br>double]";
      registerTranslate[17].innerHTML = "[shochu:over<br>plum wine:over]";
      registerTranslate[18].innerHTML = "[wine: a glass]";
      registerTranslate[19].innerHTML = "[sake: a glass]";
      registerTranslate[20].innerHTML = "[beer: a can]";
      registerTranslate[21].innerHTML = "[beer(long): a can]";
      
      buttonTranslate[0].setAttribute("value", "REGISTER");
    } else {
      registerTranslate[0].textContent = "登録";
      registerTranslate[1].textContent = "種類";
      registerTranslate[2].textContent = "量";
      registerTranslate[3].textContent = "度数";
      registerTranslate[4].textContent = "金額";
      registerTranslate[5].textContent = "カロリー";
      registerTranslate[6].innerHTML = "<i class='fas fa-less-than'></i>もどる";
      registerTranslate[7].textContent = "ビール";
      registerTranslate[8].textContent = "チューハイ";
      registerTranslate[9].textContent = "日本酒";
      registerTranslate[10].textContent = "ウイスキー";
      registerTranslate[11].textContent = "焼酎";
      registerTranslate[12].textContent = "梅酒";
      registerTranslate[13].textContent = "ワイン";
      registerTranslate[14].textContent = "その他";
      registerTranslate[15].innerHTML = "[ウイスキー:<br>シングル]";
      registerTranslate[16].innerHTML = "[ウイスキー:<br>ダブル]";
      registerTranslate[17].innerHTML = "[焼酎:ロック、<br>梅酒:ロック]";
      registerTranslate[18].innerHTML = "[ワイン:一杯]";
      registerTranslate[19].innerHTML = "[日本酒:一合]";
      registerTranslate[20].innerHTML = "[缶ビール:一本]";
      registerTranslate[21].innerHTML = "[缶ビール(ロング):一本]";
  
      buttonTranslate[0].setAttribute("value", "登録");
    }
  }
  
  function startImgDisplay() {
    const cheersCheck = document.querySelector('.kanpai');
    const cheersImg = document.querySelector('.start-imgs');
    console.log(cheersImg);
    if(cheersCheck.classList.contains('kanpainow')) {
      cheersImg.style.display = "block";
    } else {
      cheersImg.style.display = "none";
    }
  }

//グラフチャレンジ
function chartDisplay() {
  var ctx = document.getElementById("myBarChart");
  var ctxS = document.getElementById("myBarChart2");
  var ctxT = document.getElementById("myBarChart3");
  var summl = document.querySelectorAll('.sum-ml');
  var sumvalue = document.querySelectorAll('.sum-value');
  var sumkcal = document.querySelectorAll('.sum-kcal');
  var timelist = document.querySelectorAll('.time-list');
  var newSumMlList = [];
  var newSumValueList = [];
  var newSumKcalList = [];
  var newTimeList = [];
  
  // var newSumMlList =  summl.map(function(i){
  //   return i.textContent;
  // }); 
  for(let i = 0; i < summl.length; i++) {
    newSumMlList.push(summl[i].textContent);
  }
  for(let i = 0; i < sumvalue.length; i++) {
    newSumValueList.push(sumvalue[i].textContent);
  }
  for(let i = 0; i < sumkcal.length; i++) {
    newSumKcalList.push(sumkcal[i].textContent);
  }
  for(let i = 0; i < timelist.length; i++) {
    newTimeList.push(timelist[i].textContent);
  }
 
  console.log(newTimeList);
    var myBarChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: newTimeList,
        datasets: [
          {
            label: '飲酒量',
            data: newSumMlList,
            backgroundColor: "rgba(255, 156, 178, 0.5)",
          }
        ]
      }
      // options: {
      //   title: {
      //     display: true,
      //     text: '統計'
      //   },
        // scales: {
        //   yAxes: [{
        //     ticks: {
        //       suggestedMax: 1000,
        //       suggestedMin: 0,
        //       stepSize: 10,
        //       callback: function(value, index, values){
        //         return  value + "ml";
        //       }
        //     }
        //   }]
        // },
      // }
    });
    var myBarChart = new Chart(ctxS, {
      type: 'bar',
      data: {
        labels: newTimeList,
        datasets: [{
            label: '使った額',
            data:  newSumValueList,
            backgroundColor: "rgba(130,201,169,0.5)"
          }]
      }
    });
    var myBarChart = new Chart(ctxT, {
      type: 'bar',
      data: {
        labels: newTimeList,
        datasets: [{
            label: '摂取カロリー',
            data: newSumKcalList,
            backgroundColor: "rgba(255,183,76,0.5)"
          }]
      }
    }); 
}
