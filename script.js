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
    let hchoice=parseInt(prompt('enter your choice (1,2,3):\n\'1\'.Rock\n\'2\'.Papers\n\'3\'.Scissors'));
    if(hchoice===1)
        return "rock";
    else if(hchoice===2)
        return "paper";
    else if(hchoice===3)
        return "scissors";
    else
        return "WRONG CHOICE";

}
