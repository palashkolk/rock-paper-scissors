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
div.addEventListener('click', (event)=>{
    let target =event.target;
    playRound(getHumanChoice(target.textContent), getComputerChoice());
});
let para1 =document.createElement("p");
let para2 =document.createElement("p");
para2.textContent="Let's play";
div.appendChild(para1)
div.appendChild(para2);



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

}


// function playGame(){
//     let humanScore=0;
//     let computerScore=0;

//     function playRound(humanChoice, computerChoice){
//         const humanChoiceLowerCase=humanChoice.toLowerCase();
//         // console.log(humanChoiceLowerCase);
//         if(humanChoiceLowerCase!=computerChoice){
//             if(humanChoiceLowerCase=="rock" && computerChoice=="paper"){
//                 console.log(`You loose! ${computerChoice} beats ${humanChoiceLowerCase}!`);
//                 computerScore+=1;

//             }else if(humanChoiceLowerCase=="scissors" && computerChoice=="rock"){
//                 console.log(`You loose! ${computerChoice} beats ${humanChoiceLowerCase}!`);
//                 computerScore+=1;

//             }else if(humanChoiceLowerCase=="paper" && computerChoice=="scissors"){
//                 console.log(`You loose! ${computerChoice} beats ${humanChoiceLowerCase}!`);
//                 computerScore+=1;

//             }else {
//                 console.log(`You win! ${humanChoiceLowerCase} beats ${computerChoice}!`);
//                 humanScore+=1;
//             }

//         }else{
//             console.log("You tied!");
//         }
        

//     }
//     let humanSelection;
//     let computerSelection;
//     // for(let i=0;i<5;i++){    
//     //         humanSelection=getHumanChoice();
//     //         computerSelection=getComputerChoice();    
//     //         playRound(humanSelection, computerSelection)

//     // }
//     declareResult();
    
//     function declareResult(){
//         console.log(`Your score is ${humanScore} and computer score is ${computerScore}`)
//         if(computerScore>humanScore){
//             console.log("Final result: Computer won");
//         }else if (humanScore>computerScore){
//             console.log("Final result: You win");
//         }else{
//             console.log("Final result: Result tied!")
//         }
//     }
// }

// playGame()