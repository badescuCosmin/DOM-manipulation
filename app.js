var dice1        = document.querySelector(".dice__img");
var newGame      = document.querySelector(".players__btn-newGame");
var player1Score = document.querySelector(".score-0");
var player2Score = document.querySelector(".score-1");
var player1Img   = document.querySelector(".player1__img");
var player2Img   = document.querySelector(".player2__img");
var player1Turns = document.querySelector(".player1__turns-left");
var player2Turns = document.querySelector(".player2__turns-left");
var btnRoll      = document.querySelector(".players__btn-roll");
var btnHold      = document.querySelector(".players__btn-hold");
var player1Area  = document.querySelector(".section-player1");
var player2Area  = document.querySelector(".section-player2");
var player1Name  = document.querySelector(".player1__name");
var player2Name  = document.querySelector(".player2__name");
var activePlayer = 0;
var score = [0,0];
var lifes = [6, 6];
var game = false;
init();
newGame.addEventListener("click", function(){
    activePlayer =0;
    game = true;
    start();
})
btnRoll.addEventListener("click", function(){
    active();
    if (game === true) {
        dice1.style.display = 'block';
        displayScore = document.querySelector('.score-' + activePlayer);
        lifes[activePlayer] = lifes[activePlayer] - 1;
        var nr = randomNr();
        dice1.src = './img/dice-' + nr + '.png';
        var img1 = player1Img.src = './img/dice-' + lifes[0] + '.png';
        var img2 = player2Img.src = './img/dice-' + lifes[1] + '.png';
        decideImages();
        score[activePlayer] = score[activePlayer] + nr;
        displayScore.textContent = score[activePlayer];
        nextPlayer(); 
        if (lifes[0]=== 1 &&lifes[1]===1) {
            decideWinner();
            game = false;
        }
    }
})
function decideWinner() {
    if (score[0] > score[1]) {
        player1Name.textContent ='WINNER';
        player1Name.style.color = "rgba(217,30,24)";
        player1Score.style.color = "rgba(217,30,24)";  
    } else if (score[0] < score[1]){
        player2Name.textContent ='WINNER';
        player2Name.style.color = "rgba(217,30,24)";
        player2Score.style.color = "rgba(217,30,24)";
    } else if (score[0]===score[1]) {
        player1Name.textContent ='WINNER';
        player2Name.textContent ='WINNER';
    }
    player1Area.classList.remove('active-player');
    player2Area.classList.remove('active-player');
    player1Img.style.display = 'none';
    player2Img.style.display = 'none';
    player1Turns.style.display = 'none';
    player2Turns.style.display = 'none';
}
function decideImages(){
    if (lifes[0] === 0) {
        var img1 = player1Img.src = './img/dice-0.png';
    }else if (lifes[1] === 0) {
        var img2 = player2Img.src = './img/dice-0.png';
    } 
}
function nextPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;      
    } else {
        activePlayer = 0;    
    }
}
function active() {   
    if (activePlayer === 0 && game===true) {
        player1Area.classList.add('active-player');
        player2Area.classList.remove('active-player');   
    } else if(activePlayer===1 && game===true){
        player1Area.classList.remove('active-player');
        player2Area.classList.add('active-player');
    }
}
function start() {
    var activePlayer;
    game = true;
    score = [0, 0];
    lifes = [6, 6];
    player1Score.textContent="0";
    player2Score.textContent="0";
    activePlayer= 0;
    player1Img.src="./img/dice-6.png";
    player2Img.src="./img/dice-6.png";
    player1Img.style.display='inline-block';
    player2Img.style.display='inline-block';
    dice1.style.display= 'none';
    player1Turns.textContent="Turns left";
    player2Turns.textContent="Turns left";
    player1Turns.style.display = 'block';
    player2Turns.style.display = 'block';
    player1Name.style.color = "black";
    player1Score.style.color = "black";
    player2Name.style.color = "black";
    player2Score.style.color = "black";
    player1Name.textContent ='Player1';
    player2Name.textContent ='Player2';
    activePlayer =0;
    player1Area.classList.add('active-player');
    player2Area.classList.remove('active-player'); 
}
function init() {
   dice1.style.display = 'none';
   player1Img.style.display = 'none';
   player2Img.style.display = 'none';
   player1Score.textContent="";
   player2Score.textContent=""; 
}
function randomNr() {
    return Math.floor(Math.random() * 6) + 1;
}
