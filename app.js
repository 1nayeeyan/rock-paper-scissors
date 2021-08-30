//Play rock-paper-scissors against a bot

//creating a random choice of the three for the computer
    let computerSelection;
function computerplay(){
    let numchoice = 0;
    numchoice = Math.floor(Math.random() * 3) + 1;
    console.log(numchoice);

    if (numchoice == 1){
        computerSelection = String('rock');
        console.log('the computer played rock');
    } else if (numchoice == 2){
        computerSelection = String('paper');
        console.log('the computer played paper');
    } else {
        computerSelection = String('scissors');
        console.log('the computer played scissors');
    }

}
computerplay();


let playerSelection = window.prompt('rock, paper or scissors?')
/*
function checktype(playerSelection){
  if (playerSelection == typeof(String)){
      game();
  } else{
      window.prompt('type in either rock, paper or scissors');
  }
  while(playerSelection !== typeof(String)){
    checktype();
}
}
*/


function game(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'paper'){
        console.log('the computer covered your rock!');
    }
}

