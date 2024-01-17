// When the GO button is clicked run the get the users input and then randomly generate a number between 0 and 99.99

// The number generated will assign a value Rock,Paper,Scissor based on the random number 0-33, 34-66, 67-100

let compScore = 0
let playerScore = 0

document.getElementById('goBtn').onclick = function runTheMagic() {  
  let userInput = document.getElementById('userInput').value.toLowerCase(),
      cpuResult = document.getElementById('cpuResult'),
      msgHeading = document.getElementById('msgHeading'),
      randomize = Math.random() * 100,
      cpuChoice

  //  Now check to make sure that the user input a valid choice:  Rock, Paper or Scissor (proper case)
  //

  if (userInput === "rock" || userInput === "paper" || userInput === "scissor") {
    if (randomize > 0 && randomize < 33) {
      cpuChoice = "rock"
    } else if(randomize >=34 && randomize < 66) {
      cpuChoice = "paper"
    } else {
      cpuChoice = "scissor"
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
    } else if (userInput === "rock" && cpuChoice === "scissor") {
      msgHeading.innerHTML = "Rock crushes scissor. You Win!"
      msgHeading.style.color = "green"
    }

    if (userInput === "paper" && cpuChoice === "rock") {
      msgHeading.innerHTML = "Paper covers Rock. You Win!"
      msgHeading.style.color = "green";
    } else if (userInput === "paper" && cpuChoice === "scissor") {
      msgHeading.innerHTML = "Scissor cut Paper. You Lose!"
      msgHeading.style.color = "red"
    }

    if (userInput === "scissor" && cpuChoice === "rock") {
      msgHeading.innerHTML = "Rock crushes Scissor. You Lose!"
      msgHeading.style.color = "red"
    } else if (userInput === "scissor" && cpuChoice === "paper") {
      msgHeading.innerHTML = "Scissor cut Paper. You Win!"
      msgHeading.style.color = "green"
    }
  } else {
    msgHeading.style.color = "red"
    msgHeading.innerHTML = "Please enter Rock, Paper or Scissor"
    return false
  }
}

document.getElementById('resetBtn').onclick = function resetButtonClick() {  
      userInput = ""
      cpuResult = ""
      msgHeading = ""
      cpuChoice = ""
}