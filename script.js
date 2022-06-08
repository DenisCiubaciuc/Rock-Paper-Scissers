function computerPlay(){
    const tool = ["Rock", "Paper", "Scissors"];
    const randIndex = Math.floor(Math.random() * tool.length);
    return tool[randIndex];
};

let arrayHumanResult = [0];
let arrayComputerResult = [0];

function playRoundWithComputerPlay(value){

    let playerSelection = value;
    let computerSelection = computerPlay()


        function playRound(playerSelection, computerSelection) {
            
            if(playerSelection === "Paper" && computerSelection === "Rock"){
                return arrayHumanResult.push(1),arrayComputerResult.push(0)
            }else if(playerSelection === "Scissors" && computerSelection === "Rock"){
                return arrayHumanResult.push(0),arrayComputerResult.push(1) 
            }else if(playerSelection === "Paper" && computerSelection === "Scissors"){
                return arrayHumanResult.push(0),arrayComputerResult.push(1) 
            }else if(playerSelection === "Scissors" && computerSelection === "Paper"){
                return arrayHumanResult.push(1),arrayComputerResult.push(0) 
            }else if(playerSelection === "Rock" && computerSelection === "Scissors"){
                return arrayHumanResult.push(1),arrayComputerResult.push(0) 
            }else if(playerSelection === "Rock" && computerSelection === "Paper"){
                return arrayHumanResult.push(0),arrayComputerResult.push(1) 
            }else if(playerSelection ===  computerSelection){
                return arrayHumanResult.push(0),arrayComputerResult.push(0)
            }else{
                return 'Error' 
            }
        };
    document.getElementById('lose-or-win').innerHTML = loseOrWinMessage()

    document.getElementById('human-points').innerHTML = arrayHumanResult.reduce((x, y) => x + y) 
    document.getElementById('computer-points').innerHTML = arrayComputerResult.reduce((x, y) => x + y)

    return playRound(playerSelection, computerSelection)
      
}     

function loseOrWinMessage(){
    if (arrayHumanResult.reduce((x, y) => x + y)  === 5 && arrayHumanResult.reduce((x, y) => x + y)  !== (2,3,4) && arrayComputerResult.reduce((x, y) => x + y) < 5 ){
        document.getElementById('lose-or-win').innerHTML = "Congratulations, you bit computer AI"
    } else if(arrayComputerResult.reduce((x, y)  => x + y) === 6 && arrayComputerResult.reduce((x, y)  => x + y) !== (2,3,4) && arrayHumanResult.reduce((x, y) => x + y)  < 5 ){
        document.getElementById('lose-or-win').innerHTML = "Armagrddon, computer bit all humanity!"
    } else if (arrayComputerResult.reduce((x, y)  => x + y) >= 6 || arrayHumanResult.reduce((x, y)  => x + y) >= 6){
        resetGame()
    } else {
        document.getElementById('lose-or-win').innerHTML = "Keep playing!" 
    } 
}

function resetGame(){
    Array.prototype.remove = function(valueHuman) {         //Function which remove all similer elements from an Array (1 in this case) 
        for (var i = this.length; i--; )
        {
            if (this[i] === valueHuman) {
                this.splice(i, 1);
            }
        }
    }

    Array.prototype.remove = function(valueComputer) {
        for (var i = this.length; i--; )
        {
            if (this[i] === valueComputer) {
                this.splice(i, 1);
            }
        }
    }
     
    const valueComputer = 1;
    const valueHuman = 1;
     
    arrayComputerResult.remove(valueHuman);
    arrayHumanResult.remove(valueComputer);
    
    document.getElementById('human-points').innerHTML = arrayHumanResult.reduce((x, y) => x + y)
    document.getElementById('computer-points').innerHTML = arrayComputerResult.reduce((x, y) => x + y)
    document.getElementById('lose-or-win').innerHTML = " " 
}

document.getElementById('lose-or-win').innerHTML = loseOrWin()


document.getElementById('human-points').innerHTML = arrayHumanResult.reduce((x, y) => x + y) 
document.getElementById('computer-points').innerHTML = arrayComputerResult.reduce((x, y) => x + y)
