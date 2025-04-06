let btnArray=[];
let choiceList=['rock', 'paper', 'scissors'];
let numberOfChoice=choiceList.length;
for (let i=0;i<numberOfChoice;i++){
    btnArray.push(document.createElement("button"));
    btnArray[i].textContent=choiceList[i];
    btnArray[i].style.minWidth="100px";
    btnArray[i].style.minHeight="50px";
    btnArray[i].style.borderRadius="8px";
    btnArray[i].style.fontSize="22px";

}
let div=document.querySelector("#container");
let div2=document.querySelector("#announcements");
for (let btn of btnArray){
    div.appendChild(btn);
}

div.style.display="flex";
div.style.justifyContent="center";
div.style.gap="20px";
div.style.padding="10px";

// div2.style.backgroundColor="grey";
div2.style.color="black";
div2.style.textAlign="center";
div2.style.fontSize="30px";
let paraShowResult =document.createElement("p");
let paraShowScore =document.createElement("p");
let paraShowChoice =document.createElement("p");
let paraArray=[paraShowChoice, paraShowResult, paraShowScore];

for (let para of paraArray){
    div2.appendChild(para);
}

initialChoice=`Computer choice = , Human choice = `;
initialResult="Let's play; Click above on your choice!";
initialScore="All score set to zero";
paraShowChoice.textContent=initialChoice;
paraShowResult.textContent=initialResult;
paraShowScore.textContent=initialScore;


let body=document.querySelector("body");
body.addEventListener('click', (event)=>{
    let target =event.target;
    let humanChoice=target.textContent;
    if(humanChoice=="rock"|| humanChoice=="paper"||humanChoice=="scissors"){
        playRound(getHumanChoice(humanChoice), getComputerChoice());
        paraShowScore.style.backgroundColor='white';
    }else {
        paraShowScore.textContent="Click on the button, please!";
        paraShowScore.style.backgroundColor='red';
    }
});

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
function getHumanChoice(choice){
    const humanChoice=choice;
    return humanChoice;
}
let humanScore=0;
let computerScore=0;
function playRound(humanChoice, computerChoice){
    const humanChoiceLowerCase=humanChoice.toLowerCase();
    paraShowChoice.textContent=`Computer choice = ${computerChoice}, human choice= ${humanChoiceLowerCase}!`;
    if(humanChoiceLowerCase!=computerChoice){
        if(humanChoiceLowerCase=="rock" && computerChoice=="paper"){
            paraShowResult.textContent=`You loose! ${computerChoice} beats ${humanChoiceLowerCase}!`;
            console.log(`You loose! ${computerChoice} beats ${humanChoiceLowerCase}!`);
            computerScore+=1;

        }else if(humanChoiceLowerCase=="scissors" && computerChoice=="rock"){
            paraShowResult.textContent=`You loose! ${computerChoice} beats ${humanChoiceLowerCase}!`;
            console.log(`You loose! ${computerChoice} beats ${humanChoiceLowerCase}!`);
            computerScore+=1;

        }else if(humanChoiceLowerCase=="paper" && computerChoice=="scissors"){
            paraShowResult.textContent=`You loose! ${computerChoice} beats ${humanChoiceLowerCase}!`;
            console.log(`You loose! ${computerChoice} beats ${humanChoiceLowerCase}!`);
            computerScore+=1;

        }else {
            paraShowResult.textContent=`You win! ${humanChoiceLowerCase} beats ${computerChoice}!`;
            console.log(`You win! ${humanChoiceLowerCase} beats ${computerChoice}!`);
            humanScore+=1;
        }

    }else{
        paraShowResult.textContent=`You tied!`;
        console.log("You tied!");
    }
    console.log(humanScore, computerScore);
    paraShowScore.textContent=`human score is: ${humanScore} and computer score is ${computerScore}`;
    if(humanScore==5 || computerScore==5){
        if(humanScore==5 ){
            paraShowScore.textContent =`We have a winner! The winner is Human`;
        }else if(computerScore==5){
            paraShowScore.textContent =`We have a winner! The winner is Computer`;
        }
        humanScore=0;
        computerScore=0
    }

}