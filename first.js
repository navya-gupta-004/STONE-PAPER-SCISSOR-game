let user = 0;
let computer =0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscore = document.querySelector("#userScore");
const compscore = document.querySelector("#computerScore");

const genComChoice = () =>{
    const options =["rock", "scissors","paper"];
    const index = Math.floor(Math.random()*3);
    return options[index];

}

const drawGame = () =>{
    console.log("game was draw.");
    msg.innerText = "Game was draw";
    msg.style.backgroundColor = "#1F0C24"

};

const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        user++;
        userscore.innerText = user;
        console.log("you win !");
        msg.innerText = `you win your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        msg.style.fontSize ="medium" ;

    }
    else{
       computer++;
       compscore.innerText = computer;
       console.log("you lose");
       msg.innerText = `you lose ${compChoice} beats your ${userChoice}`;
       msg.style.backgroundColor = "red";
       msg.style.fontSize ="medium" ;
    }
};


const playGame =(userChoice)=>{
    console.log("user choice =",userChoice);
    //generate computer choice
    const compChoice = genComChoice();
    console.log("computer choice = ",compChoice)
    if(userChoice === compChoice)
    {
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper"?false:true;
        }
        else if(userChoice === "paper")
        {
            userWin = compChoice === "scissors"?false:true;
        }
        else if (userChoice ==="scissors"){
            userWin = compChoice === "rock"? false:true;
        }
    showWinner(userWin,userChoice,compChoice);
    }
};





choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id")
        //console.log("choice was clicked",userChoice);
        playGame(userChoice);
    })
})