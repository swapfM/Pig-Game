'use strict';

const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0 = document.getElementById('current--0')
const current1 = document.getElementById('current--1')
var p0 = document.getElementsByClassName('player--0')
var p1 = document.getElementsByClassName('player--1')

score0.textContent = 0;
score1.textContent = 0;
diceEl.style.visibility = 'hidden';


var score = [0,0];
let currentscore = 0;
let activeP = 0;

function change(activeP){

    if(activeP == 0){
       p1[0].classList.add("player--active");
       p0[0].classList.remove("player--active");
      
    }
    else{
        p0[0].classList.add("player--active");
       p1[0].classList.remove("player--active");
      
    }
}

btnRoll.addEventListener('click', function(){

    const diceNum = Math.trunc(Math.random()*6)+1;

   diceEl.style.visibility = '';

    diceEl.src =  `dice-${diceNum}.png`;

    if(diceNum != 1) {

        currentscore+= diceNum;

    document.getElementById(`current--${activeP}`).textContent = currentscore;

    }
    else {

        document.getElementById(`current--${activeP}`).textContent = 0;

    
        if(activeP == 0){ score[0] += currentscore;
        score0.textContent = score[0];
        change(activeP);
        activeP = 1; }

        else { score[1] += currentscore;
            score1.textContent = score[1];
            change(activeP);
            activeP = 0;

        }

        currentscore = 0;
        
    }});


btnHold.addEventListener('click', function(){

        score[activeP] += currentscore;
        change(activeP);
       
        document.getElementById(`current--${activeP}`).textContent = 0;
        activeP = (activeP+1)%2;
        score0.textContent = score[0];
        score1.textContent = score[1];
        currentscore = 0;

});

btnNew.addEventListener('click', function(){

        currentscore = 0;
        current0.textContent = 0;
        current1.textContent = 0;
        score[0] = 0, score[1] = 0;
        score0.textContent = 0;
        score1.textContent = 0;
        diceEl.style.visibility = 'hidden';
        activeP = 0;
        change(activeP+1);
})




