const choices = ["rock", "paper", "scissors"];
let userScore = 0;
let cpuScore = 0;

function game(userChoice){
    let cpuChoice = choices[Math.floor(Math.random() * choices.length)];

    if (userChoice === cpuChoice){
        document.getElementById("result").innerHTML = "It's a tie!";
    }
    else if (userChoice === "rock" && cpuChoice === "scissors"){
        userScore++;
        document.getElementById("result").innerHTML = `You win! ${userChoice} beats ${cpuChoice}`;
        document.getElementById("user-num").innerHTML = userScore;
    }
    else if (userChoice === "scissors" && cpuChoice === "paper"){
        userScore++;
        document.getElementById("result").innerHTML = `You win! ${userChoice} beats ${cpuChoice}`;
        document.getElementById("user-num").innerHTML = userScore;
    }
    else if (userChoice === "paper" && cpuChoice === "rock"){
        userScore++;
        document.getElementById("result").innerHTML = `You Win! ${userChoice} beats ${cpuChoice}`;
        document.getElementById("user-num").innerHTML = userScore;
    }
    else{
        cpuScore++;
        document.getElementById("result").innerHTML = `You lose! ${cpuChoice} beats ${userChoice}`;
        document.getElementById("cpu-num").innerHTML = cpuScore;

    }
}

document.getElementById("rock").addEventListener("click", function(){
    game("rock");
});

document.getElementById("paper").addEventListener("click", function(){
    game("paper");
});

document.getElementById("scissors").addEventListener("click", function(){
    game("scissors");
});