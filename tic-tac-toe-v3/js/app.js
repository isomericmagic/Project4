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

function addIdToBox () {
	for (i = 0; i < 9; i += 1) {
		let currentBox = boxes[i];
    currentBox.id = 'box-'+ i.toString();
	}
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
  });
}

startGame();