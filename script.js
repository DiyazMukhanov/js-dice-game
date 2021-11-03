'use strict';
const btnRoll = document.querySelector('.btn--roll');
// const currentScore = document.querySelectorAll('.current-score');
const imageDice = document.querySelector('.dice');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');
const showScore0 = document.querySelector('#score--0');
const showScore1 = document.querySelector('#score--1')

let currentFirstCounter = 0;
let currentSecondCounter = 0;
let totalScoreFirst = 0;
let totalScoreSecond = 0;
const buttonHold = document.querySelector('.btn--hold');
const buttonNew = document.querySelector('.btn--new');


console.log(buttonNew);

const newGameLogic = function(){
    currentFirstCounter = 0;
    currentSecondCounter = 0;
    totalScoreFirst = 0;
    totalScoreSecond = 0;
    showScore0.textContent = totalScoreFirst;
    showScore1.textContent = totalScoreSecond;
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
}

const changeImageDice = function(){
    let imageRandomNumber = Math.floor(Math.random()*6)+1;
    imageDice.src = `dice-${imageRandomNumber}.png`;
    if( imageRandomNumber === 1){
      if(player0.classList.contains('player--active')){
          player0.classList.remove('player--active');
          player1.classList.add('player--active');
          imageRandomNumber = Math.floor(Math.random()*6)+1;
      } else {
        player1.classList.remove('player--active');
        player0.classList.add('player--active');
        imageRandomNumber = Math.floor(Math.random()*6)+1;
      }
    };
    if(player0.classList.contains('player--active')){
         currentFirstCounter = currentFirstCounter + imageRandomNumber;
         current0.textContent = currentFirstCounter;
    } else {
        currentSecondCounter = currentSecondCounter + imageRandomNumber;
        current1.textContent = currentSecondCounter;
    }
}

const holdLogic = function(){
    if(player0.classList.contains('player--active')){
        player1.classList.add('player--active');
        player0.classList.remove('player--active');
        // player1.classList.toggle('player-active');
        totalScoreFirst = totalScoreFirst + currentFirstCounter;
        currentFirstCounter = 0;
        showScore0.textContent = totalScoreFirst;
        current0.textContent = currentFirstCounter;
    } else {
        player0.classList.add('player--active');
        player1.classList.remove('player--active');
        // player0.classList.toggle('player-active');
        totalScoreSecond = totalScoreSecond + currentSecondCounter;
        currentSecondCounter = 0;
        showScore1.textContent = totalScoreSecond;
       current1.textContent = currentSecondCounter;
    }
}


console.log(current1);
btnRoll.addEventListener('click', changeImageDice );
buttonHold.addEventListener('click', holdLogic);
buttonNew.addEventListener('click', newGameLogic );