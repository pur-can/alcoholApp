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
  if(num.style.display == "block") {
    num.style.display = "none";
  } else {
    num.style.display = "block"
  }

  if(minus.textContent == "+") {
    minus.textContent = "×";
  } else {
    minus.textContent = "+";
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

// function wordSetting() {
//   console.log(document.getElementById('header-span'));
//   const wordSettingCheck = document.settingform.wordsetting;
//   if(wordSettingCheck.checked) {
//     document.getElementById('header-span').textContent = "Drinking record";
//     console.log(document.getElementById('header-span'));
//   } 
// }

var headerSpan = document.getElementById('header-span');

function wordSetting() {
  console.log(headerSpan);

}


