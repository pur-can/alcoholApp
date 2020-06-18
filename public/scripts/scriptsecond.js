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

  for(let i = 0; i < timelist.length; i++) {
    newSumMlList.push(summl[i].textContent);
    newSumValueList.push(sumvalue[i].textContent);
    newSumKcalList.push(sumkcal[i].textContent);
    newTimeList.push(timelist[i].textContent);
  }
  var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: newTimeList,
      datasets: [{
        label: '飲酒量',
        data: newSumMlList,
        backgroundColor: "rgba(255, 156, 178, 0.5)",
      }]
    }
  });

  var myBarChart2 = new Chart(ctxS, {
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

  var myBarChart3 = new Chart(ctxT, {
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