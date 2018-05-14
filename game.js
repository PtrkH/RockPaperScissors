let computerSelection;
let playerScore = 0;
let computerScore = 0;

const keepScore = document.getElementById('Score');
const gameLog1 = document.getElementById('gameLog1');
const gameLog2 = document.getElementById('gameLog2');
const outcome = document.getElementById('outcome');
const body = document.getElementById('body');

function computerPlay(){
  let random = Math.floor(Math.random()*3);
  computerSelection = (random == 0)? "Rock" : (random == 1)? "Paper" : "Scissors";
  return computerSelection;
}

//One Round of the game - Returns the outcome
function Round(playerSelection,computerSelection){
  playerPc = playerSelection + computerSelection;

  switch (playerPc) {
    case "RockRock":
    case "PaperPaper":
    case "ScissorsScissors":
    body.style.background="#d4d6d4";
      return "It is a Tie!";
      break;

    case "RockScissors":
    case "ScissorsPaper":
    case "PaperRock":
      playerScore++;
      body.style.background= "#4ea76a";
      return "Player Wins!";
      break;

    case "ScissorsRock":
    case "PaperScissors":
    case "RockPaper":
      computerScore++;
      body.style.background="#d8635f";
      return "Computer Wins!";
      break;

    default:
      return "Error";
      break;
  }
}

//Runs Round function until one side wins and displays the out come + the score
function game(playerSelection){
    let RoundOutCome = Round(playerSelection,computerPlay());

    if (RoundOutCome!="Error") {
      keepScore.innerHTML=`${playerScore}:${computerScore}`;
      gameLog1.innerHTML=`Player: *${playerSelection}* | Computer: *${computerSelection}*`;
      outcome.innerHTML=RoundOutCome;
    }
  if (playerScore == 5){
    outcome.innerHTML="*Player Wins The Game*";
    gameReset();
  }
  if(computerScore == 5){
    outcome.innerHTML="*Computer Wins The Game*";
    gameReset();
  }
}

function gameReset(){
  playerScore=0;
  computerScore=0;
  keepScore.innerHTML=`${playerScore}:${computerScore}`;
}

let rockbtn = document.querySelector("#rock");
rockbtn.addEventListener("click", () => {
  game("Rock");
});
let paperbtn = document.querySelector("#paper");
paperbtn.addEventListener("click", () =>{
  game("Paper");
});
let scissorsbtn = document.querySelector("#scissors");
scissorsbtn.addEventListener("click", () =>{
  game("Scissors");
});
