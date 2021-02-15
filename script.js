import { startConfetti, stopConfetti, removeConfetti} from './confetti.js';

const playerScoreEL = document.getElementById('playerScore');
const playerChoiceEl = document.getElementById('playerChoice');
const computerScoreEL = document.getElementById('computerScore');
const computerChoiceEl = document.getElementById('computerChoice');
const resultText = document.getElementById('resultText');


const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

let computerChoice='';

const allGameIcons = document.querySelectorAll('.far');

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let playerScoreNumber =0;
let computerScoreNumber = 0;
// Reset selected icons
function resetSelected(){
  allGameIcons.forEach((icon) =>{
    icon.classList.remove('selected');
  });
  stopConfetti();
  removeConfetti();
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Computerc choice function random
function computerRandomChoice(){
  const computerChoiceNumber= Math.random();
  if(getRandomInt(0,4) === 0){
    computerChoice ='rock';
  } else if(getRandomInt(0,4) ===1){
    computerChoice='paper';
  } else if(getRandomInt(0,4) === 2){
    computerChoice ='scissors';
  } else if(getRandomInt(0,4) === 3){
    computerChoice='lizard';
  } else {
    computerChoice='spock';
  }

}

// Add selected styling for computer
function displayComputerChoice() {
  switch (computerChoice){
    case 'rock' :
      computerRock.classList.add('selected');
      computerChoiceEl.textContent = ' --- Rock';
      break;
    case 'paper' :
      computerPaper.classList.add('selected');
      computerChoiceEl.textContent = ' --- Paper';
       break;
     case 'scissors' :
      computerScissors.classList.add('selected');
      computerChoiceEl.textContent = ' --- Scissors';
      break;
    case 'lizard' :
      computerLizard.classList.add('selected');
      computerChoiceEl.textContent = ' --- Lizard';
      break;
     case 'spock' :
      computerSpock.classList.add('selected');
      computerChoiceEl.textContent = ' --- Spock'; 
      break;
    default:
      break;
  }
}

// Chech result, incresease scores, update result text
function updateScore(playerChoice){
  if(playerChoice === computerChoice){
    resultText.textContent = "It's a tie.";

  } else {
    const choice = choices[playerChoice];
    if(choice.defeats.indexOf(computerChoice) > -1){
      startConfetti();
      resultText.textContent='You Won!';
      playerScoreNumber++;
      playerScoreEL.textContent=playerScoreNumber;
    } else {
      computerScoreNumber++;
      computerScoreEL.textContent=computerScoreNumber;
      resultText.textContent ='Computer Won!';
    
    }
  }

}

// Call function ton process turn
function checkResult(playerChoice){
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice);
}

// Passing player selection value and styling icons
function select(playerChoice) {
  checkResult(playerChoice);
  // Add 'selected' styling and update playerChoince
  switch (playerChoice){
    case 'rock' :
      playerRock.classList.add('selected');
      playerChoiceEl.textContent = ' --- Rock';
      break;
    case 'paper' :
      playerPaper.classList.add('selected');
      playerChoiceEl.textContent = ' --- Paper';
       break;
     case 'scissors' :
      playerScissors.classList.add('selected');
      playerChoiceEl.textContent = ' --- Scissors';
      break;
    case 'lizard' :
      playerLizard.classList.add('selected');
      playerChoiceEl.textContent = ' --- Lizard';
      break;
     case 'spock' :
      playerSpock.classList.add('selected');
      playerChoiceEl.textContent = ' --- Spock'; 
      break;
    default:
      break;
  }
}
window.select = select;

//Reset everything
function reset(){
  resultText.textContent='Good Luck!';
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  playerScoreEL.textContent =playerScoreNumber;
  computerScoreEL.textContent =computerScoreNumber;
  playerChoiceEl.textContent="";
  computerChoiceEl.textContent="";
  resetSelected();
  stopConfetti();
}
window.reset = reset;


reset();





