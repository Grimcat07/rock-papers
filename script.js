function getComputerChoice(){
    let value=Math.random();
    if(value<0.34)
        return "rock";
    else if(value>0.34 && value<0.78)
        return "paper";
    else
        return "scissors"
}

console.log(getComputerChoice());