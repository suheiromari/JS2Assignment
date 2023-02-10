        
let playerScore = 0 ,computerScore = 0;
const buttons = document.querySelectorAll("button");

buttons.forEach((button) =>{
        button.addEventListener('click', ()=>{
          game(button.id) ;     
        }) 
});


function game(option) {
   
  const playerSelection = String(option);  
  const computerSelection = computerPlay();
  
  let div1 = document.createElement("div");
  div1.style.cssText = 'border : 1px solid black; background-color:pink; width:300px';
  div1.textContent = playRound(playerSelection, computerSelection);
  document.body.appendChild(div1);
  document.getElementById("counter").textContent = playerScore; 
  
  if ((playerScore == 5) || (computerScore == 5)){
   
  }
 
  if (playerScore == 5 ) 
  {   let div2 = document.createElement("div");
      div2.style.cssText = 'border : 1px solid black; background-color:pink; width:300px;color : red'; 
      div2.textContent = "End of game YOU ARE THE WINNER!";
      document.body.appendChild(div2);
      return;
  }
       
  else if (computerScore == 5 ) 
  {   let div2 = document.createElement("div");
      div2.style.cssText = 'border : 1px solid black; background-color:pink; width:300px;color : red'; 
      div2.textContent = "End of game you lose Computer wins!";
      document.body.appendChild(div2);
      return;
  }
    
  
} //end of function game

// Math.random()*3 returns a random number between 0 and 3:
function computerPlay() {
  let option = Math.round(Math.random() * 3);
   

  // ‘Rock’, ‘Paper’ or ‘Scissors’.
  switch (option) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
} //end of function computerPlay

function playRound(playerSelection, computerSelection) {
   
  let msg = "";

  if (playerSelection == computerSelection) {
          msg  = "same selection , You have a tie";
           
    } else if ((playerSelection == "paper" && computerSelection == "rock")  
            ||
            (playerSelection == "scissors" && computerSelection == "paper")  
            ||
            (playerSelection == "rock" && computerSelection == "scissors") )
            {
                msg  = "You win";
                playerScore++;
              
            }
            else {
               msg  = "Computer wins";
               computerScore++ ; 
              }
  return msg;
} //end of function playRound

 