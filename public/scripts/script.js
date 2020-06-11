

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

