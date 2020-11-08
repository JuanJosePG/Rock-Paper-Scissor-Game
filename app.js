// Variables
let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreBoard=document.querySelector(".score-board");
const result_p=document.querySelector(".result > p");
const rock_div=document.getElementById("rock");
const paper_div=document.getElementById("paper");
const scissor_div=document.getElementById("scissor");

function getComputerChoice(){
    const choices=["rock", "paper", "scissor"];
    const randomNumber=(Math.floor(Math.random()*3));
    return choices[randomNumber];
}

function getFirstLetterUpperCase(option){
    if(option==="rock") return "Rock";
    if(option==="paper") return "Paper";
    if(option==="scissor") return "Scissor";
}

function win(userChoice,computerChoice){
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML=`${getFirstLetterUpperCase(userChoice)} beats ${getFirstLetterUpperCase(computerChoice)}. You win this time!`;
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(()=>document.getElementById(userChoice).classList.remove("green-glow"),750);
}

function lose(userChoice,computerChoice){
    computerScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML=`${getFirstLetterUpperCase(userChoice)} loses to ${getFirstLetterUpperCase(computerChoice)}. You lost...!`;
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(()=>document.getElementById(userChoice).classList.remove("red-glow"),750);
}

function draw(userChoice, computerChoice){
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML=`${getFirstLetterUpperCase(userChoice)} equals ${getFirstLetterUpperCase(computerChoice)}. Nobody wins, continue!`;
    document.getElementById(userChoice).classList.add("gray-glow");
    setTimeout(()=>document.getElementById(userChoice).classList.remove("gray-glow"),750);
}

function game(userChoice){
    const computerChoice=getComputerChoice();
    switch(userChoice+"_"+computerChoice){
        // Usuario gana
        case "rock_scissor":
        case "paper_rock":
        case "scissor_paper":
            win(userChoice,computerChoice);
            break;
        // Usuario pierde
        case "rock_paper":
        case "paper_scissor":
        case "scissor_rock":
            lose(userChoice,computerChoice);
            break;
        // Empate
        case "rock_rock":
        case "paper_paper":
        case "scissor_scissor":
            draw(userChoice,computerChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener("click", function(){
        game("rock");
    });
    paper_div.addEventListener("click", function(){
        game("paper");
    });
    scissor_div.addEventListener("click", function(){
        game("scissor");
    });
}

main();
