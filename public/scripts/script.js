

function onRadioButtonChange() {
  const check1 = document.form1.beer.checked;
  const check2 = document.form1.nihonshu.checked;
  const check3 = document.form1.wiskey.checked;
  const check4 = document.form1.shochu.checked;
  const check5 = document.form1.wine.checked;
  if (check1 == true) {
    document.getElementById("target").setAttribute("value","5");
  } else if (check2 == true) {
    document.getElementById("target").setAttribute("value","15");
  } else if (check3 == true) {
    document.getElementById("target").setAttribute("value","40");
  } else if (check4 == true) {
    document.getElementById("target").setAttribute("value","25");
  } else if (check5 == true) {
    document.getElementById("target").setAttribute("value","14");
  } 
}

function clickBtn(number) {
  var num = document.getElementById('list' + number);
  var minus = document.getElementById('plus' + number);
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
