//hide the board 
const boardDiv = document.getElementById('board');
const body = document.getElementsByTagName('body')[0];
const startDiv = document.createElement('div');
const startHeader = document.createElement('header');
const startH1 = document.createElement('h1');
const startATag = document.createElement('a');
const player1Li = document.getElementById('player1');
const player2Li = document.getElementById('player2');
const boxes = document.getElementsByClassName('box');


var gameBoard = {
  availableMoves: [0,1,2,3,4,5,6,7,8],
  takenMoves: [],
  currentPlayer: 'player1'
}

var player1 = {
	name: '',
	takenMoves: []
}

var player2 = {
	name: '',
  takenMoves: []
}

function markSpot(spotOnBoard) {
  let spotString = spotOnBoard.id.charAt(4);
  let spot = parseInt(spotString);
  let spotIndex = gameBoard.availableMoves.indexOf(spot);
  gameBoard.availableMoves.splice(spotIndex, 1);
  gameBoard.takenMoves.push(spot);
	if (gameBoard.currentPlayer === 'player1') {
		 spotOnBoard.className= "box box-filled-1";
		 player1.takenMoves.push(spot);
	} else if (gameBoard.currentPlayer === 'player2') {
		spotOnBoard.className = "box box-filled-2";
		player2.takenMoves.push(spot);		
	}
}

//setup functions to hide / show stuff
function hideDiv(div) {
  div.style.display = 'none';
}

function showDiv(div) {
  div.style.display = '';
}

function player1Active () {
	player1Li.className = "players active";
	player2Li.className = "players";
}

function player2Active () {
	player2Li.className = "players active";
	player1Li.className = "players";
}

function switchPlayers () {
	if (gameBoard.currentPlayer === 'player1') {
		player2Active();
		gameBoard.currentPlayer = 'player2';
	} else if (gameBoard.currentPlayer === 'player2') {
		player1Active();
		gameBoard.currentPlayer = 'player1';		
	}
}

function addIdToBox () {
	for (i = 0; i < 9; i += 1) {
		let currentBox = boxes[i];
    currentBox.id = 'box-'+ i.toString();
	}
}

function makeBoxesClickable () {
  let box0 = document.getElementById('box-0');
  let box1 = document.getElementById('box-1');
  let box2 = document.getElementById('box-2');
  let box3 = document.getElementById('box-3');
  let box4 = document.getElementById('box-4');
  let box5 = document.getElementById('box-5');
  let box6 = document.getElementById('box-6');
  let box7 = document.getElementById('box-7');
  let box8 = document.getElementById('box-8');
  box0.addEventListener("click", function boxZeroClick () {
    markSpot(box0);
    box0.removeEventListener("click", boxZeroClick);
    switchPlayers();
  });
  box1.addEventListener("click", function boxOneClick () {
    markSpot(box1);
    box1.removeEventListener("click", boxOneClick);
    switchPlayers();
  });
  box2.addEventListener("click", function boxTwoClick () {
    markSpot(box2);
    box2.removeEventListener("click", boxTwoClick);
    switchPlayers();
  });
  box3.addEventListener("click", function boxThreeClick () {
    markSpot(box3);
    box3.removeEventListener("click", boxThreeClick);
    switchPlayers();
  });
  box4.addEventListener("click", function boxFourClick () {
    markSpot(box4);
    box4.removeEventListener("click", boxFourClick);
    switchPlayers();
  });
  box5.addEventListener("click", function boxFiveClick () {
    markSpot(box5);
    box5.removeEventListener("click", boxFiveClick);
    switchPlayers();
  });
  box6.addEventListener("click", function boxSixClick () {
    markSpot(box6);
    box6.removeEventListener("click", boxSixClick);
    switchPlayers();
  });
  box7.addEventListener("click", function boxSevenClick () {
    markSpot(box7);
    box7.removeEventListener("click", boxSevenClick);
    switchPlayers();
  });
  box8.addEventListener("click", function boxEightClick () {
    markSpot(box8);
    box8.removeEventListener("click", boxEightClick);
    switchPlayers();
  });
}

function startGame () {
	hideDiv(board);
	body.appendChild(startDiv);
	startDiv.className = "screen screen-start";
	startDiv.id = "start";
	startDiv.appendChild(startHeader);
	startHeader.appendChild(startH1);
	startH1.innerHTML = "Tic Tac Toe";
	startHeader.appendChild(startATag);
	startATag.href = "#";
	startATag.className = "button";
	startATag.innerHTML = "Start game";
	startATag.addEventListener("click", function() {
    hideDiv(startDiv);
    showDiv(board);
    addIdToBox();
    player1Active();
    makeBoxesClickable();
  });
}

startGame();