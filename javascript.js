let btnArray=[];
choiceList=['rock', 'paper', 'scissors'];
for (let i=0;i<3;i++){
    btnArray.push(document.createElement("button"));
    btnArray[i].textContent=choiceList[i];
}

let div=document.querySelector("#container");
for (let btn of btnArray){
    div.appendChild(btn);
}
let para1 =document.createElement("p");
let para2 =document.createElement("p");
let para3 =document.createElement("p");
para2.textContent="Let's play";
para3.textContent=`Computer choice = , Human choice = `;
div.appendChild(para3);
div.appendChild(para1)
div.appendChild(para2);

div.addEventListener('click', (event)=>{
    let target =event.target;
    if(target.textContent=="rock"|| target.textContent=="paper"||target.textContent=="scissors"){
        playRound(getHumanChoice(target.textContent), getComputerChoice());
        para2.style.backgroundColor='white';
    }else {
        para2.textContent="Click on the button, please!";
        para2.style.backgroundColor='red';
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
    para3.textContent=`Computer choice = ${computerChoice}, human choice= ${humanChoiceLowerCase}!`;
    if(humanChoiceLowerCase!=computerChoice){
        if(humanChoiceLowerCase=="rock" && computerChoice=="paper"){
            para1.textContent=`You loose! ${computerChoice} beats ${humanChoiceLowerCase}!`;
            console.log(`You loose! ${computerChoice} beats ${humanChoiceLowerCase}!`);
            computerScore+=1;

        }else if(humanChoiceLowerCase=="scissors" && computerChoice=="rock"){
            para1.textContent=`You loose! ${computerChoice} beats ${humanChoiceLowerCase}!`;
            console.log(`You loose! ${computerChoice} beats ${humanChoiceLowerCase}!`);
            computerScore+=1;

        }else if(humanChoiceLowerCase=="paper" && computerChoice=="scissors"){
            para1.textContent=`You loose! ${computerChoice} beats ${humanChoiceLowerCase}!`;
            console.log(`You loose! ${computerChoice} beats ${humanChoiceLowerCase}!`);
            computerScore+=1;

        }else {
            para1.textContent=`You win! ${humanChoiceLowerCase} beats ${computerChoice}!`;
            console.log(`You win! ${humanChoiceLowerCase} beats ${computerChoice}!`);
            humanScore+=1;
        }

    }else{
        para1.textContent=`You tied!`;
        console.log("You tied!");
    }
    console.log(humanScore, computerScore);
    para2.textContent=`human score is: ${humanScore} and computer score is ${computerScore}`;
    if(humanScore==5 ){
        para2.textContent =`We have a winner! The winner is Human`;
        humanScore=0;
        computerScore=0
    }else if(computerScore==5){
        para2.textContent =`We have a winner! The winner is Computer`;
        humanScore=0;
        computerScore=0
    }

}