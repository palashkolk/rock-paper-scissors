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
// console.log(getComputerChoice())
function getHumanChoice(){
    const humanChoice=prompt("What's your choice? rock, paper or scissors?");
    return humanChoice;
}
// console.log(getComputerChoice())
// console.log(getHumanChoice())

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


const humanSelection=getHumanChoice();
const computerSelection=getComputerChoice();
// console.log(humanSelection, computerSelection);
playRound(humanSelection, computerSelection)
