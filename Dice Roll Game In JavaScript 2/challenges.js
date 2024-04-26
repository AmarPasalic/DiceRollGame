const roll_btn = document.getElementsByClassName("btn-roll")[0];
const loseNumber = 1;
let currentScore1 = 0;
let currentScore2 = 0;
let current = 0;
const current1 = document.getElementById("current-0")
const score1 = document.getElementById("score-0");

const current2 = document.getElementById("current-1")
const score2 = document.getElementById("score-1");




score1.textContent = 0;
score2.textContent = 0;
current2.textContent = 0;
current1.textContent = 0;

const player1={
    score:0,
    active:true,
}
const player2={
    score:0,
    active:false,
}
let player1Panel = document.getElementsByClassName("player-0-panel")[0]
let player2Panel = document.getElementsByClassName("player-1-panel")[0]

function rollDice() {
    let finalScore = parseInt(document.getElementById("winningScore").value);
    const numbers = [1, 2, 3, 4, 5, 6];
    const dice2 = document.getElementById("dice2");
    const dice1 = document.getElementById("dice1");
    const num1 = Math.floor(Math.random() * numbers.length);
    const num2 = Math.floor(Math.random() * numbers.length);
    dice1.src = `dice-${numbers[num1]}.png`;
    dice2.src = `dice-${numbers[num2]}.png`;
    if(player1.score >= finalScore  ){
        score1.textContent = player1.score;
        newGame()
     }
     else if( player2.score >= finalScore){
        score2.textContent = player2.score;
        newGame()
     };

    if (player1.active==true) {
        if (numbers[num1] === loseNumber || numbers[num2] === loseNumber) {
            player1.score = 0;
        }
        else {
            player1.score = numbers[num1] + numbers[num2] + player1.score;
        };
        score1.textContent = player1.score;
        current = numbers[num1] + numbers[num2];
        current1.textContent = current;

    }
    else {
        if (numbers[num1] === loseNumber || numbers[num2] === loseNumber) {
            player2.score = 0;
        }
        else {
            player2.score = numbers[num1] + numbers[num2] + player2.score;
        };
        score2.textContent = player2.score;
        current = numbers[num1] + numbers[num2];
        current2.textContent = current;
    }
    if (player1.active && player1.score==0) {
        player1.active=false;
        player2.active=true;
     }
     else if(player2.active &&player2.score ==0 ) {
         player1.active = true;
         player2.active = false;
     };
     if (player1.active == false) {
         player1Panel.classList.remove("active")
         player2Panel.classList.add("active")
     }
     else {
         player1Panel.classList.add("active")
         player2Panel.classList.remove("active")
     };
    
  
};



roll_btn.addEventListener("click", rollDice)

const hold_btn = document.getElementsByClassName("btn-hold")[0];


function holdBtn() {
    if (player1.active == true) {
        player1.active = false;
        player2.active =true;
    }
    else  {
        player1.active = true;
        player2.active =false;
    };
    if (player1.active == false) {
        player1Panel.classList.remove("active")
        player2Panel.classList.add("active")
    }
    else {
        player1Panel.classList.add("active")
        player2Panel.classList.remove("active")
    }
}
hold_btn.addEventListener("click", holdBtn)



const newGameBtn = document.getElementsByClassName("btn-new")[0];
function newGame() {
    score1.textContent = 0;
    score2.textContent = 0;
    current2.textContent = 0;
    current1.textContent = 0;
    current=0;
    player1.score=0;
    player2.score=0;
    player1.active = true;
    player2.active=false;
    if (player1.active == false) {
        player1Panel.classList.remove("active")
        player2Panel.classList.add("active")
    }
    else {
        player1Panel.classList.add("active")
        player2Panel.classList.remove("active")
    }
}
newGameBtn.addEventListener("click", newGame)










