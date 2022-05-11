function computerPlay(){
    const tool = ["Rock", "Paper", "Scissors"];
    const randIndex = Math.floor(Math.random() * tool.length);
    return tool[randIndex];
};

function capFirst(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
};

function game(selection){

function playSet(){   
 
  let playerSelection = capFirst(selection);
  let computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
    
    
    if(playerSelection ===  computerSelection){
       return 'Dead heat' //"Play one more raund!"
    }
    else if(playerSelection === "Paper" && computerSelection === "Rock"){
        return 'Won' // "You are the winner! Paper beats Rock"
    }else if(playerSelection === "Scissors" && computerSelection === "Rock"){
        return 'Lose' // "You Lose! Rock beats Scissors"
    }else if(playerSelection === "Paper" && computerSelection === "Scissors"){
        return 'Lose' //"You Lose! Scissors beats Paper"
    }else if(playerSelection === "Scissors" && computerSelection === "Paper"){
        return 'Won' //"You are tehe winner! Scissors beats Paper"
    }else if(playerSelection === "Rock" && computerSelection === "Scissors"){
        return 'Won' //"You are the winner! Rock beats Scissors"
    }else if(playerSelection === "Rock" && computerSelection === "Paper"){
        return 'Lose' //"You Lose! Paper beats Rock"
    }else{
        return 'Error' //"Only Paper, Rock or Scissors are avaleble. "
    }
      };    
return playRound(playerSelection, computerSelection)
   };
   let arrayResult = [];
for (let i = 0; i < 5; i++)
arrayResult.push(playSet())
console.log(arrayResult)

const counts = {};
const sampleArray = arrayResult;
sampleArray.forEach((x) => { counts[x] = (counts[x] || 0) + 1; });
console.log(counts)
if (counts['Won'] > counts['Lose']){alert(arrayResult + " \nYou are the winer!")} 
else if(counts['Error']){alert("Only Paper, Rock or Scissors are avaleble. ")}
else if(counts['Won'] === counts['Lose']){alert(arrayResult + " \nIt's dead head, play one more set!")}
else{alert(arrayResult + " \nYou are the loser!");} 
 }

// game(prompt("Make your chose"))


