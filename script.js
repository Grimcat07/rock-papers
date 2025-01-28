

function getComputerChoice(){
    let value=Math.random();
    if(value<0.34)
        return "rock";
    else if(value>0.34 && value<0.78)
        return "paper";
    else
        return "scissors"
}


let humanScore=0;
let computerScore=0;




function playRound(humanChoice,computerChoice){
 
        
    if(humanChoice=='rock' && computerChoice=='rock' || humanChoice=='paper' && computerChoice=='paper' ||  humanChoice=='scissors' && computerChoice=='scissors' ) 
    {
        humanScore+=0;computerScore+=0;
    } 
    if(humanChoice=='rock' && computerChoice=='scissors' || humanChoice=='paper' && computerChoice=='rock' || humanChoice=='rock' && computerChoice=='scissors')  
    {  
        humanScore=humanScore+1;computerScore+=0;
    }
    if(humanChoice=='scissors' && computerChoice=='rock' || humanChoice=='rock' && computerChoice=='paper' || humanChoice=='paper' && computerChoice=='scissors'  )
    {  
        humanScore+=0;computerScore=computerScore+1;
    }
    
}
let humanSelection;

let result;let point=0;
const div1=document.querySelector(".buttons");
const rbutton=document.createElement("button");rbutton.setAttribute("id","rockbutton");rbutton.textContent='Rock';
const pbutton=document.createElement("button");pbutton.setAttribute("id","paperbutton");pbutton.textContent='Paper';
const sbutton=document.createElement("button");sbutton.setAttribute("id","sbutton");sbutton.textContent='Scissors';
div1.appendChild(rbutton);
div1.appendChild(pbutton);
div1.appendChild(sbutton);
const buttons=document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click",(e)=>{
        const buttonid=e.target.id;
    switch (buttonid) {
        case 'rockbutton':
            playRound("rock",getComputerChoice());
            break;
        case 'sbutton':
            playRound("scissors",getComputerChoice());
            break;
        case 'paperbutton':
            playRound("paper",getComputerChoice());
            break;
        default:
            playRound(-1,getComputerChoice());
            break;
    }
    spanhuman.textContent=`Human:${humanScore}\n`;
    spancomp.textContent=`Computer:${computerScore}`;
    if(humanScore ==5 || computerScore==5){
        spanresult.textContent=result();
    }
});
});

    result=() =>{
        if(humanScore==5 ){
            humanScore=0;computerScore=0;
            return "Human Wins";}
           else if(computerScore==5){
            computerScore=0;humanScore=0;
            return( "Computer Wins");}
           else
            return('Draw');
    }

const rdiv=document.querySelector(".result");
const spanhuman=document.querySelector("#human");
const spancomp=document.querySelector("#computer");
const spanresult=document.querySelector("#result");
rdiv.appendChild(spanhuman);rdiv.appendChild(spancomp);rdiv.appendChild(result);

