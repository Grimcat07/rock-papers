function getComputerChoice(){
    let value=Math.random();
    if(value<0.34)
        return "rock";
    else if(value>0.34 && value<0.78)
        return "paper";
    else
        return "scissors"
}

function getHumanChoice(){
    let choicev=(prompt('enter your choice:\n1.Rock\n2.Paper\n3.Scissors'));
    const hchoice=choicev.toLowerCase();
    
    if(hchoice==="rock")
        return "rock";
    else if(hchoice==="paper")
        return "paper";
    else if(hchoice==="scissors")
        return "scissors";
    else
        return "WRONG CHOICE";

}

let humanScore=0;
let computerScore=0;

function playRound(humanChoice,computerChoice){
 
    if(humanChoice=='rock' && computerChoice=='rock' || humanChoice=='paper' && computerChoice=='paper' ||  humanChoice=='scissors' && computerChoice=='scissors' ) 
    {
        return "the round is a tie";
    } 
    if(humanChoice=='rock' && computerChoice=='paper' || humanChoice=='paper' && computerChoice=='rock' || humanChoice=='rock' && computerChoice=='scissors')  
       return `The Human Wins!! ${humanChoice} beats ${computerChoice}`;
    if(humanChoice=='scissors' && computerChoice=='rock' || humanChoice=='rock' && computerChoice=='paper' || humanChoice=='paper' && computerChoice=='scissors'  )
        return `The Machine Wins!! ${computerChoice} beats ${humanChoice}`;
}

const humanSelection=getHumanChoice();
const computerSelection=getComputerChoice();

playRound(humanSelection,computerSelection));