//Play rock-paper-scissors against a bot
    let playerCount = 0;
    let compCount = 0;
    let computerSelection;

    


    const playerScoreSpan = document.getElementById("player-score");
    const botScoreSpan = document.getElementById("bot-score");
    const scoreBoardDiv = document.querySelector(".scoreboard");
    const resultP = document.querySelector(".result > p");
    const rockDiv = document.getElementById("rock");
    const paperDiv = document.getElementById("paper");
    const scissorsDiv = document.getElementById("scissors");


    //stop game after 5 wins for either player
    function gameCheck(){
        if (playerCount == 5){
            resultP.innerHTML = "You won 5 rounds congratulations! Refresh the page to play again";
            window.reload();
        }else if (compCount == 5) {
            resultP.innerHTML = "The computer won! Refresh the page to play again";
            window.reload();
        }
    }
    //creating a random choice of the three for the computer    
    function computerPlay(){
        let numchoice;
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
        return computerSelection
    }

    function win(){
        playerCount ++;
        playerScoreSpan.innerHTML = playerCount;
        botScoreSpan.innerHTML = compCount;
    }

    function lose(){
        compCount ++;
        playerScoreSpan.innerHTML = playerCount;
        botScoreSpan.innerHTML = compCount;
    }


    //checking to see the winner
    function game(playerSelection) {
        let computerSelection = computerPlay();
        gameCheck();
        switch (computerSelection){
            case 'rock':
                if (playerSelection == 'paper'){
                    resultP.innerHTML = "Your paper covered the computer's rock!";
                    win();
                } else if (playerSelection == 'scissors'){
                    resultP.innerHTML = "The computer's rock crushed your scissors!";
                    lose()
                } else {
                    resultP.innerHTML = "It's a draw!";
                }
                break;
            case 'paper':
                if (playerSelection == 'rock'){
                    resultP.innerHTML = "The computer's paper covered your rock!";
                    lose()
                } else if (playerSelection == 'scissors'){
                    resultP.innerHTML = "You cut the computer's paper!";
                    win()
                } else {
                    resultP.innerHTML = "It's a draw!";
                }
                break;
            case 'scissors':
                if (playerSelection == 'rock'){
                    resultP.innerHTML = "You crushed the computer's scissors!";
                    win()
                } else if (playerSelection == 'paper') {
                    resultP.innerHTML = "The computer cut your paper!";
                    lose()
                } else {
                    resultP.innerHTML = "It's a draw!";
                }
                break;
        }
    }
    
        //input from player
    function userPlay(){
        rockDiv.addEventListener('click', function(){
            console.log("you played rock");
            game('rock');
        })

        paperDiv.addEventListener('click', function(){
            console.log("you played paper");
        game('paper');
        })

        scissorsDiv.addEventListener('click', function(){
            console.log("you played scissors");
        game('scissors');
        })
    }

    userPlay();



    


