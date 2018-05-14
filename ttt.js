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

  for(var i=0; i<tdAll.length; i++){
    console.log('checking' + i);

      if(tdAll[i].innerHTML === 'X'){
        temp_array.push('t'+(i+1));
      }

      for(var j=0; j<arrayWinCases.length; j++){
        if(temp_array == arrayWinCases[j]){
          endCase.style.display = 'block';
        }
      }

  }
}
