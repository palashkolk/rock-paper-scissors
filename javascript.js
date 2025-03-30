function getComputerChoice(){
    const randNumber=Math.random()*100+1;

    if (randNumber<=33.3){
        return "rock";
    }else if (randNumber>33.3 && randNumber<=66.6){
        return "paper";
    }else {
        return "scissors";
    }
}

function getHumanChoice(){
    const humanChoice=prompt("What's your choice? rock, paper or scissors?");
    return humanChoice;
}

function playGame(){
    let humanScore=0;
    let computerScore=0;

    function playRound(humanChoice, computerChoice){
        const humanChoiceLowerCase=humanChoice.toLowerCase();
        // console.log(humanChoiceLowerCase);
        if(humanChoiceLowerCase!=computerChoice){
            if(humanChoiceLowerCase=="rock" && computerChoice=="paper"){
                console.log(`You loose! ${computerChoice} beats ${humanChoiceLowerCase}!`);
                computerScore+=1;

            }else if(humanChoiceLowerCase=="scissors" && computerChoice=="rock"){
                console.log(`You loose! ${computerChoice} beats ${humanChoiceLowerCase}!`);
                computerScore+=1;

            }else if(humanChoiceLowerCase=="paper" && computerChoice=="scissors"){
                console.log(`You loose! ${computerChoice} beats ${humanChoiceLowerCase}!`);
                computerScore+=1;

            }else {
                console.log(`You win! ${humanChoiceLowerCase} beats ${computerChoice}!`);
                humanScore+=1;
            }

        }else{
            console.log("You tied!");
        }
        

    }
    let humanSelection;
    let computerSelection;
    for(let i=0;i<5;i++){    
            humanSelection=getHumanChoice();
            computerSelection=getComputerChoice();    
            playRound(humanSelection, computerSelection)

    }
function declareResult(){
    console.log(`Your score is ${humanScore} and computer score is ${computerScore}`)
    if(computerScore>humanScore){
        console.log("Computer won");
    }else if (humanScore>computerScore){
        console.log("You win");
    }else{
        console.log("You tied!")
    }

}


}

playGame()