var turn = 0;
var tdAll = document.querySelectorAll('td');

var endCase = document.querySelector('.endCase');

for(var i=0; i<tdAll.length; i++){
    tdAll[i].addEventListener('click', boxClick);
}

function boxClick(){
  if (turn%2 != 0){
    this.innerHTML = 'X';
  }
  else {
    this.innerHTML = 'O';
  }
  this.removeEventListener('click', boxClick );
  checkWinner(); //something broke here please help
  turn++;
}

var arrayWinCases = [
                    ['t1', 't4', 't7'],
                    ['t2', 't5', 't8'],
                    ['t3', 't6', 't9'],
                    ['t1', 't2', 't3'],
                    ['t4', 't5', 't6'],
                    ['t7', 't8', 't9'],
                    ['t1', 't5', 't9'],
                    ['t3', 't5', 't7']
                    ];

function checkWinner(){

  var temp_array = [];
  var temp_array2 = [];

  for(var i=0; i<tdAll.length; i++){
    console.log('checking' + i);

      if(tdAll[i].innerHTML === 'X'){
        temp_array.push('t'+(i+1));
      }
      else if(tdAll[i].innerHTML === 'O'){
        temp_array2.push('t'+(i+1));
      }
  }

  for(var i=0; i<arrayWinCases.length; i++){
    var condi1 = temp_array.indexOf(arrayWinCases[i][0]);
    var condi2 = temp_array.indexOf(arrayWinCases[i][1]);
    var condi3 = temp_array.indexOf(arrayWinCases[i][2]);

    var condi4 = temp_array2.indexOf(arrayWinCases[i][0]);
    var condi5 = temp_array2.indexOf(arrayWinCases[i][1]);
    var condi6 = temp_array2.indexOf(arrayWinCases[i][2]);

    if(condi1 !== -1 && condi2 !== -1 && condi3 !== -1){
      endCase.style.display = 'block';
      return;
    }
    else if(condi4 !== -1 && condi5 !== -1 && condi6 !== -1){
      endCase.style.display = 'block';
      return;
    }
  }
}
