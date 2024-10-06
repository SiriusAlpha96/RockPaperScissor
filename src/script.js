let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComputerChoice = () => {
      const option = ["rock", "paper", "scissors"];
      const randIdx = Math.floor(Math.random() * 3);
      return option[randIdx];
}

const drawGame = () => {
      // console.log("game was draw!!!")
      msg.innerText = "Game Draw. Play Again!!";
      msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
      if(userWin){
            userScore++;
            userScorePara.innerText = userScore;
            msg.innerText = `You Win!! Your ${userChoice} beats ${compChoice}`;
            // console.log("You Win!!")
            msg.style.backgroundColor = "green";
      }
      else{
            compScore++;
            compScorePara.innerText = compScore;
            msg.innerText = `You Loss!! Computer ${compChoice} beats your ${userChoice}`;
            msg.style.backgroundColor = "red";
            // console.log("You Loss!!")
      }
}

const playGame = (userChoice) => {
      // console.log("user choice = ", userChoice);
      // generate computer choice
      const compChoice = genComputerChoice();
      // console.log("comp choice = ", compChoice);

      if(userChoice === compChoice){
            // draw condition
            drawGame();
      }else{
            let userWin = true;
            if(userChoice === "rock" ){
                  // scissors, paper
                  userWin = compChoice === "paper" ? false : true;  
            }
            else if(userChoice === "paper"){
                  // rock, scissors
                  userWin = compChoice === "scissors" ? false : true;
            }
            else{
                  // rock, paper
                  userWin = compChoice === "rock" ? false : true;
            }
            showWinner(userWin, userChoice, compChoice);
      }
}

choices.forEach((choice) => {
      console.log(choice)
      choice.addEventListener("click", () => {
            const userChoice = choice.getAttribute("id");
            // console.log("choice was clicked", userChoice);
            playGame(userChoice);
      })
})