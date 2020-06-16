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
  if(num.style.display == "block") {
    num.style.display = "none";

    listHead.style.backgroundColor = "rgb(249, 252, 252)";
    if(listHead.classList.contains("blue")) {
      listHead.style.color = "rgb(143, 179, 226)";
    } else if(listHead.classList.contains("violet")) {
      listHead.style.color = "rgb(207, 147, 241)";
    } else if(listHead.classList.contains("bluepink")) {
      listHead.style.color = "rgb(219, 128, 192)";
    } else if(listHead.classList.contains("pink")) {
      listHead.style.color = "rgb(245, 115, 169)";
    } else if(listHead.classList.contains("red")) {
      listHead.style.color = "rgb(209, 56, 55)";
    } else {
      listHead.style.color = "rgb(129, 217, 230)";
    }
  } else {
    num.style.display = "block"

    listHead.style.color = "white";
    if(listHead.classList.contains("blue")) {
      listHead.style.backgroundColor = "rgb(143, 179, 226)";
    } else if(listHead.classList.contains("violet")) {
      listHead.style.backgroundColor = "rgb(207, 147, 241)";
    } else if(listHead.classList.contains("bluepink")) {
      listHead.style.backgroundColor = "rgb(219, 128, 192)";
    } else if(listHead.classList.contains("pink")) {
      listHead.style.backgroundColor = "rgb(245, 115, 169)";
    } else if(listHead.classList.contains("red")) {
      listHead.style.backgroundColor = "rgb(209, 56, 56)";
    } else {
      listHead.style.backgroundColor = "rgb(129, 217, 230)";
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

function wordSetting() {
  const wordSettingCheck = document.form3.wordsetting;
  if(wordSettingCheck.checked) {
    document.getElementById('header-span').textContent = "ALCOHOL RECORD";
    document.querySelector('.add').textContent = "ADD +";
    document.getElementById('change1').textContent = "Total alcohol consumption";
    document.getElementById('change2').textContent = "Total amount";
    document.getElementById('change3').textContent = "Total calorie intake";
    document.getElementById('change4').textContent = "Until getting sober…about";
    document.getElementById('change5').textContent = "hours";
    document.getElementById('change6').innerHTML = "※It is the calculation method that the amount of alcohol can be broken down in one hour is <span>(weight（kg）x 0.1)</span>, the disassembly time is <span>(the amount of consumpted absolute alcohol(g)/ The amount of alcohol that can be decomposed in one hour).</span>";
    document.getElementById('change7').innerHTML = "※The calculation method of the blood alcohol concentration is  <span>(alcohol percentage(%)x quantity of liquor(ml)/ (weight(kg)x 833)).</span>";
    document.getElementById('change8').setAttribute('value', 'BREAKUP');

  } else {
    document.getElementById('header-span').textContent = "今回の飲酒記録";
    document.querySelector('.add').textContent = "追加 +";
    document.getElementById('change1').textContent = "総飲酒量";
    document.getElementById('change2').textContent = "総額";
    document.getElementById('change3').textContent = "総カロリー量";
    document.getElementById('change4').textContent = "アルコールが抜けるまで…約";
    document.getElementById('change5').textContent = "時間";
    document.getElementById('change6').innerHTML = "※一時間に分解できるアルコール量は<span>(体重（kg）x 0.1)</span>、分解にかかる時間は<span>(摂取した純アルコール量(g)/ 一時間に分解できるアルコール量)</span>で計算しています。";
    document.getElementById('change7').innerHTML = "※酔いの状態を計るためのアルコール血中濃度は<span>(アルコール度数(%)x 容量(ml)/ (体重(kg)x 833))</span>で計算しています。";
    document.getElementById('change8').setAttribute('value', '解散');
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
    registerTranslate[6].textContent = "RETURN";
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
    registerTranslate[6].textContent = "もどる";
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

