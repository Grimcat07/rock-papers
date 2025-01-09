

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
    {
        return -1;
        
    }
        

}

let humanScore=0;
let computerScore=0;




function playRound(humanChoice,computerChoice){
 
    if(humanChoice==-1)
        console.log("invalid human choice");
    if(humanChoice=='rock' && computerChoice=='rock' || humanChoice=='paper' && computerChoice=='paper' ||  humanChoice=='scissors' && computerChoice=='scissors' ) 
    {
        console.log("the round is a tie"); 
    } 
    if(humanChoice=='rock' && computerChoice=='scissors' || humanChoice=='paper' && computerChoice=='rock' || humanChoice=='rock' && computerChoice=='scissors')  
    {  
        console.log(`The Human Wins!! ${humanChoice} beats ${computerChoice}`);
        humanScore=humanScore+2;computerScore=0;
    }
    if(humanChoice=='scissors' && computerChoice=='rock' || humanChoice=='rock' && computerChoice=='paper' || humanChoice=='paper' && computerChoice=='scissors'  )
    {  
         console.log(`The Machine Wins!! ${computerChoice} beats ${humanChoice}`);
        humanScore=0;computerScore=computerScore+2;
    }
    
}

function playGame()
{
    let rounds=parseInt(prompt("enter the number of rounds"))

    
    for(let i=0;i<rounds;i++)
{
    const humanSelection=getHumanChoice();
    const computerSelection=getComputerChoice();
    console.log(humanScore);
    console.log(computerScore)

    playRound(humanSelection,computerSelection);
}
   if(humanScore>computerScore)
    return "Human Wins";
   else
    return "Computer Wins";
}

