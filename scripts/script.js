//Call function getComputerChoice
function getComputerChoice(choice){
    //write a variable with 3 options, print 1 option
    options = ['rock', 'paper', 'scissors'];

    //randomly return computerSelection: either Rock Paper or Scissors
    computerSelection = options[Math.floor(Math.random() * options.length)];
    console.log("Computer chooses " + computerSelection); //DELETE
}
  
getComputerChoice();
    
//Get function getplayerChoice
function getplayerChoice(choice){
    //user prompt for Rock Paper or Scissors
    let input = prompt("Enter Rock, Paper or Scissors");
    //convet input to lower case
    playerSelection = input.toLowerCase();

    
    let validResponse = 0;
    while (validResponse == 0){
        
        if (playerSelection == 'rock'){ //return playerSelection
            validResponse = 1;
        } else if (playerSelection == 'paper'){
            validResponse = 1;
        } else if (playerSelection == 'scissors'){
            validResponse = 1;
        } else { //while input isnt rock/paper/scissors, prompt again
            validResponse = 0;
            input = prompt("Enter ONLY Rock, Paper or Scissors");
            playerSelection = input.toLowerCase();
        }
 
    console.log("You choose " + playerSelection);
  
 

    }
}

getplayerChoice();

/*
//function to play 1 round
function playRound(playerSelection, conputerSelection){
    //take 2 parameters playerSelection and computerSelection
    //RETURN a string that declares winner
        //"You Lose! Rock beats Scissors"
        //"You Lose! Paper beats Rock"
        //"You Lose! Scissors beats Paper"
        //"You Win! Rock beats Scissors"
        //"You Win! Paper beats Rock"
        //"You Win! Scissors beats Paper"
        //console.log(return string7)

}

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