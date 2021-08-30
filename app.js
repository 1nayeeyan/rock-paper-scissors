//Play rock-paper-scissors against a bot
    let playerCount = 0;
    let compCount = 0;
//creating a random choice of the three for the computer
    while (playerCount < 5 || compCount < 5) { 

    let computerSelection;
function computerplay(){
    let numchoice = 0;
    numchoice = Math.floor(Math.random() * 3) + 1;
    //console.log(numchoice);

    if (numchoice == 1){
        computerSelection = String('rock');
        //console.log('the computer played rock');
    } else if (numchoice == 2){
        computerSelection = String('paper');
        //console.log('the computer played paper');
    } else {
        computerSelection = String('scissors');
        //console.log('the computer played scissors');
    }

}
computerplay();

//input from player
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

//checking to see the winner
function game(playerSelection, computerSelection) {
   switch (computerSelection){
       case 'rock':
           if (playerSelection == 'paper'){
               console.log("your paper covered the computer's rock!");
               playerCount ++;
           } else if (playerSelection == 'scissors'){
               console.log("the computer's rock crushed your scissors!");
               compCount ++;
           } else {
               console.log("it's a draw!");
           }
            break;
        case 'paper':
            if (playerSelection == 'rock'){
                console.log("the computer's paper covered your rock!");
                compCount ++;
            } else if (playerSelection == 'scissors'){
                console.log("you cut the computer's paper!");
                playerCount ++;
            } else {
                console.log("it's a draw");
            }
            break;
        case 'scissors':
            if (playerSelection == 'rock'){
                console.log("you crushed the computer's scissors!")
                playerCount ++;
            } else if (playerSelection == 'paper') {
                console.log('"the computer cut your paper!')
                compCount ++;
            } else {
                console.log("it's a draw!")
            }
   }
}

    game(playerSelection, computerSelection);
    console.log("you've won " + playerCount +  " rounds");
    console.log("the computer's won " + compCount + " rounds");
}

    if (playerCount == 5){
        console.log("you won 5 rounds congratulations! refresh the page to play again");
    } else if (compCount == 5) {
        console.log("the computer won! refresh the page to play again");
    }