//Call function getComputerChoice
function getComputerChoice(choice){
    //write a variable with 3 options, print 1 option
    let options = ['rock', 'paper', 'scissors'];

    //randomly return computerSelection: either Rock Paper or Scissors
    computerSelection = options[Math.floor(Math.random() * options.length)];
    console.log("Computer chooses " + computerSelection); //DELETE
}
  
getComputerChoice();
    
//Get function getplayerChoice
function getplayerChoice(choice){

    //convet input to lower case
    playerSelection = input.toLowerCase();

    
    let validResponse = 'no';
    while (validResponse == 'no'){
        
        if (playerSelection == 'rock'){ //return playerSelection
            validResponse = 'yes';
        } else if (playerSelection == 'paper'){
            validResponse = 'yes';
        } else if (playerSelection == 'scissors'){
            validResponse = 'yes';
        } else { //while input isnt rock/paper/scissors, prompt again
            validResponse = 'no';
            input = prompt("Enter ONLY Rock, Paper or Scissors");
            playerSelection = input.toLowerCase();
        }
 
    console.log("You choose " + playerSelection);
  
 

    }
}
    //user prompt for Rock Paper or Scissors
    let input = prompt("Enter Rock, Paper or Scissors");
getplayerChoice(input);

//function to play 1 round
function playRound(computerSelection, playerSelection){
    let computerScore = 0;
    let playerScore = 0;

    if (computerSelection == 'rock' && playerSelection == 'scissors'){
        console.log("You Lose! Rock beats Scissors");
        computerScore++;
    } else if (computerSelection == 'paper' && playerSelection == 'rock'){
        console.log("You Lose! Paper beats Rock");
        computerScore++;
    } else if (computerSelection == 'scissors' && playerSelection == 'paper'){
        console.log("You Lose! Scissors beats Paper");
        computerScore++;
    } else if (computerSelection == 'scissors' && playerSelection == 'rock'){
        console.log("You Win! Rock beats Scissors");
        playerScore++;
    } else if (computerSelection == 'rock' && playerSelection == 'paper'){
        console.log("You Win! Paper beats Rock");
        playerScore++;
    } else if (computerSelection == 'paper' && playerSelection == 'scissors'){
        console.log("You Win! Scissors beats Paper");
        playerScore++;
    }
}

    //take 2 parameters playerSelection and computerSelection
    //RETURN a string that declares winner



playRound(computerSelection, playerSelection);

/*
const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

//Write function called game to call playRound
    //play 5 rounds and keep score 
    for (let i = 0; i < 5; i++){


    }
    //return a winner/loser
    //console.log(winner/loser)

    */