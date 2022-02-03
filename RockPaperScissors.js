//Generates a random option to act as the computer
function computerPlay(){
    let choice = Math.floor(Math.random()*3+1);
    //console.log(choice);
    if (choice == 1){
        return "Rock";

    }else if (choice == 2){
        return "Paper";

    }else{
        return "Scissors";
    }
}

//console.log(computerPlay());
let scores = [0, 0 ,0];
console.log(scores);

function playRound(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()){
        scores[2] += 1;
        return "It's a Tie! You both chose the same";
    }else if(playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper"){
        scores[1] += 1;
        return "You Lose! Paper beats Rock";
    }else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors"){
        scores[0] += 1;
        return "You Win! Rock beats Scissors";

    }else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors"){
        scores[1] += 1;
        return "You Lose! Scissors beats Paper";

    }else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock"){
        scores[0] += 1;
        return "You Win! Paper beats Rock";

    }else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper"){
        scores[0] += 1;
        return "You Win! Scissors beats Paper";

    }else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock"){
        scores[1] += 1;
        return "You Lose! Rock beats Scissors";

    }else{
        return "Wrong Choice" 
    }
}
/** 
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection,scores));*/
/** 
const buttons = document.querySelectorAll('button');
console.log(buttons);
buttons.forEach((button) => {
    button.addEventListener('click', () =>{
        //console.log(button.textContent);
        const scores = document.createElement("div");
        const resultText = document.createElement("div");
        resultText.textContent = playRound(button.textContent, computerPlay());

        const resultDiv = document.getElementById('results');
        resultDiv.appendChild(resultText);
    });
});
*/
const round = 0;
function removeLastGame(){
    const resultText = document.getElementById('results');
    console.log(resultText.childNodes);
    if (resultText.childNodes.length !== 0){
    resultText.removeChild(resultText.lastChild);
    }
};

function updateScores(){
  const scoresText = document.querySelectorAll('h4');
  for (let index = 3; index < scoresText.length; index++) {
      scoresText[index].textContent = scores[index-3];
      
  }
};

function startGame(){
  //hide starGame div and unhide the gameDisplay
  const startingDisplay = document.getElementById("startingDisplay");
  console.log(startingDisplay.style.display);
  startingDisplay.style.display = "none";

  const startGame = document.getElementById("startGame");
  startGame.style.display = "initial";

};

function endGame(){
    const endGame = document.getElementById("endGame");
    endGame.style.display = "initial";
    const finalResults = document.createElement('h2');
    if(scores[0] === 5){
        finalResults.textContent = "You won! Great Job!";
    }else if(scores[1] === 5 ){
        finalResults.textContent = "You lost! Better luck next time!";
    }

    const finalTally = document.getElementById("scores");
    //console.log(finalTally.childNodes);
    finalTally.children[0].textContent = "Final Scores";
   // finalTally.style.position = "inline;"
    endGame.prepend(finalTally);
    endGame.prepend(finalResults);
    


};

window.addEventListener('click', function(e){
    
    console.log(e.target.textContent, scores, e.target.nodeName);
    if(e.target.nodeName !== "BUTTON") 
    {
        return;
    }else if(e.target.textContent === "Play Game!"){
        startGame();
        return;
    }else if(e.target.textContent === "Play again!"){
        scores[0] = 0;
        scores[1] = 0;
        scores[2] = 0;
        const playAgain = document.getElementById("endGame");
        playAgain.style.display = 'none';
        const startGame = document.getElementById("startGame");
        const scoreTally = document.getElementById("scores");
        scoreTally.children[0].textContent = "Scores";
        startGame.prepend(scoreTally);
        playAgain.removeChild(playAgain.firstChild);
       // playAgain.removeChild(playAgain.lastChild);
        removeLastGame();
        updateScores();
        startGame();
        return;
    }
    removeLastGame();
    const selection = e.target.textContent;
    const resultText = document.createElement("div");
    resultText.textContent = playRound(selection, computerPlay());
    const resultDiv = document.getElementById('results');
    updateScores();
    resultDiv.appendChild(resultText);
    if(scores[0] >= "5" || scores[1] >="5" /*|| scores[2] >= "5"*/){
        console.log("endGame");
        endGame();
    }
    console.log(selection);
});


/** 
const selections = document.querySelectorAll('button');
selections.forEach(button => button.addEventListener('click',function(e){
    console.log(e,scores);
}));*/
