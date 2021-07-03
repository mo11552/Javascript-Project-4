  var moves = 0;
  var rockBtn = document.querySelector('.rock');
  var paperBtn = document.querySelector('.paper');
  var scissorBtn = document.querySelector('.scissor');
  var playerOptions = [rockBtn,paperBtn,scissorBtn];
  var computerOptions = ['rock','paper','scissors']
  var playerScore = 0;
  var computerScore = 0;

const playGame = () => {    
  playerOptions.forEach(option => {
    option.addEventListener('click',function(){

      var movesLeft = document.querySelector('.movesleft');
      moves++;
      movesLeft.innerText = `Moves Left: ${10-moves}`;
          

      var choiceNumber = Math.floor(Math.random()*3);
      var computerChoice = computerOptions[choiceNumber];

      winner(this.innerText,computerChoice,playerScore,computerScore)
          
      if(moves == 10){
        gameOver(playerOptions,movesLeft);
      }
    })
  })
}

const winner = (player,computer) => {
  var result = document.querySelector('.result');
  var playerScoreBoard = document.querySelector('.p-count');
  var computerScoreBoard = document.querySelector('.c-count');
  player = player.toLowerCase();
  computer = computer.toLowerCase();
  if(player === computer){
    result.textContent = 'Tie' + ' ' + 'and' + ' ' + 'Computer chose' + ' ' + computer;
  }
  else if(player == 'rock'){
    if(computer == 'paper'){
      result.textContent = 'Computer Won' + ' ' + 'and' + ' ' + 'Computer chose' + ' ' + computer;
      computerScore++;
      computerScoreBoard.textContent = computerScore;

    }else{
      result.textContent = 'Player Won' + ' ' + 'and' + ' ' + 'Computer chose' + ' ' + computer;
      playerScore++;
      playerScoreBoard.textContent = playerScore;
    }
  }
  else if(player == 'scissors'){
    if(computer == 'rock'){
      result.textContent = 'Computer Won' + ' ' + 'and' + ' ' + 'Computer chose' + ' ' + computer;
      computerScore++;
      computerScoreBoard.textContent = computerScore;
    }else{
      result.textContent = 'Player Won' + ' ' + 'and' + ' ' + 'Computer chose' + ' ' + computer;
      playerScore++;
      playerScoreBoard.textContent = playerScore;
    }
  }
  else if(player == 'paper'){
    if(computer == 'scissors'){
      result.textContent = 'Computer Won' + ' ' + 'and' + ' ' + 'Computer chose' + ' ' + computer;
      computerScore++;
      computerScoreBoard.textContent = computerScore;
    }else{
      result.textContent = 'Player Won' + ' ' + 'and' + ' ' + 'Computer chose' + ' ' + computer;
      playerScore++;
      playerScoreBoard.textContent = playerScore;
    }
  }
}

    // Function to run when game is over
const gameOver = (playerOptions,movesLeft) => {

  var chooseMove = document.querySelector('.move');
  var result = document.querySelector('.result');
  var reloadBtn = document.querySelector('.reload');

  playerOptions.forEach(option => {
    option.style.display = 'none';
  })
  
  chooseMove.innerText = 'Game Over!!'
  movesLeft.style.display = 'none';

  if(playerScore > computerScore){
    result.style.fontSize = '2rem';
    result.innerText = 'You Won The Game'
    result.style.color = '#308D46';
  }
  else if(playerScore < computerScore){
    result.style.fontSize = '2rem';
    result.innerText = 'You Lost The Game';
    result.style.color = 'red';
  }
  else{
    result.style.fontSize = '2rem';
    result.innerText = 'Tie';
    result.style.color = 'grey'
  }
  reloadBtn.innerText = 'Restart';
  reloadBtn.style.display = 'flex'
  reloadBtn.addEventListener('click',() => {
    window.location.reload();
  })
}

function game() {
  playGame();
}

game();

