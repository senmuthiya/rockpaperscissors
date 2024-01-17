// When the GO button is clicked run the get the users input and then randomly generate a number between 0 and 99.99

// The number generated will assign a value Rock,Paper,Scissors based on the random number 0-33, 34-66, 67-100

let compScore = 0
let playerScore = 0

document.getElementById('goBtn').onclick = function runTheMagic() {  
  let userInput = document.getElementById('userInput').value.toLowerCase(),
      cpuResult = document.getElementById('cpuResult'),
      msgHeading = document.getElementById('msgHeading'),
      randomize = Math.random() * 100,
      cpuChoice

  //  Now check to make sure that the user input a valid choice:  Rock, Paper or Scissors (proper case)
  //

  if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
    if (randomize > 0 && randomize < 33) {
      cpuChoice = "rock"
    } else if(randomize >=34 && randomize < 66) {
      cpuChoice = "paper"
    } else {
      cpuChoice = "scissors"
    } 

  // Display the computer's choice
  //
    cpuResult.innerHTML = cpuChoice

  // Check for a tie and display output with styling of purple text
  //
    if (userInput === cpuChoice) {
      msgHeading.innerHTML = "It's a Tie. Try Again!"
      msgHeading.style.color = "purple"
    }
  // Check for winner or loser and display output with styling of green or red text
  //
    if (userInput === "rock" && cpuChoice === "paper") {
      msgHeading.innerHTML = "Paper covers Rock. You Lose!"
      msgHeading.style.color = "red";
      compScore += 1
      
    } else if (userInput === "rock" && cpuChoice === "scissors") {
      msgHeading.innerHTML = "Rock crushes scissors. You Win!"
      msgHeading.style.color = "green";
      playerScore += 1
     
    }

    if (userInput === "paper" && cpuChoice === "rock") {
      msgHeading.innerHTML = "Paper covers Rock. You Win!"
      msgHeading.style.color = "green";
       playerScore += 1

    } else if (userInput === "paper" && cpuChoice === "scissors") {
      msgHeading.innerHTML = "Scissors cut Paper. You Lose!"
      msgHeading.style.color = "red";
       compScore +=1
    }

    if (userInput === "scissors" && cpuChoice === "rock") {
      msgHeading.innerHTML = "Rock crushes Scissor. You Lose!"
      msgHeading.style.color = "red";
      compScore +=1
    } else if (userInput === "scissors" && cpuChoice === "paper") {
      msgHeading.innerHTML = "Scissors cut Paper. You Win!"
      msgHeading.style.color = "green";
      playerScore += 1
    }
  } else {
    msgHeading.style.color = "red"
    msgHeading.innerHTML = "Please select your choice!"
    return false
  }

  //Score Board

 
  if (playerScore > compScore)
  {
  playerScoreResult.innerHTML = playerScore
  compScoreResult.innerHTML = compScore
  playerScoreResult.style.color = "green"
  compScoreResult.style.color = "red"
  if(playerScore === 10)
  {
    msgHeading.innerHTML = "You Win! Click Reset to play again"
    msgHeading.style.color = "green"
    document.getElementById("goBtn").disabled = true;
    document.getElementById("userChoice1").disabled = true;
    document.getElementById("userChoice2").disabled = true;
    document.getElementById("userChoice3").disabled = true;
    goBtn.style.color = "gray";
  }
  }

  if (compScore > playerScore)
  {
  playerScoreResult.innerHTML = playerScore
  compScoreResult.innerHTML = compScore
  compScoreResult.style.color = "green"
  playerScoreResult.style.color = "red"
  if(compScore === 10)
  {
    msgHeading.innerHTML = "Computer Win! Click Reset to play again"
    msgHeading.style.color = "green"
    document.getElementById("goBtn").disabled = true;
    document.getElementById("userChoice1").disabled = true;
    document.getElementById("userChoice2").disabled = true;
    document.getElementById("userChoice3").disabled = true;
    goBtn.style.color = "gray";
  }
  } 

  if(playerScore === compScore){
  playerScoreResult.innerHTML = playerScore
  compScoreResult.innerHTML = compScore
  compScoreResult.style.color = "green"
  playerScoreResult.style.color = "green"
}
}

// reset code 
document.getElementById('resetBtn').onclick = function resetButtonClick() {  
      userInput.value = ""
      msgHeading.innerHTML = ""
      cpuResult.innerHTML = ""
      playerScoreResult.innerHTML = ""
      compScoreResult.innerHTML = ""
      compScore = 0
      playerScore = 0
      document.getElementById("goBtn").disabled = false;
      document.getElementById("userChoice1").checked = false;
      document.getElementById("userChoice2").checked = false;
      document.getElementById("userChoice3").checked = false;

      document.getElementById("userChoice1").disabled = false;
      document.getElementById("userChoice2").disabled = false;
      document.getElementById("userChoice3").disabled = false;
      
      goBtn.style.color = "white";
}
