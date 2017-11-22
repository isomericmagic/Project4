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
const boxesParent = document.getElementsByClassName('boxes')[0];
const boxLi0 = document.createElement('li');
const boxLi1 = document.createElement('li');
const boxLi2 = document.createElement('li');
const boxLi3 = document.createElement('li');
const boxLi4 = document.createElement('li');
const boxLi5 = document.createElement('li');
const boxLi6 = document.createElement('li');
const boxLi7 = document.createElement('li');
const boxLi8 = document.createElement('li');
//need something to remove all the click event listeners instead
const endDiv = document.createElement('div');
const endHeader = document.createElement('header');
const endH1 = document.createElement('h1');
const endP = document.createElement('p');
const endATag = document.createElement('a');
const winningCombos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


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

function testWinner () {
	for (i = 0; i < winningCombos.length; i++) {
		if (player1.takenMoves.includes(winningCombos[i][0]) && player1.takenMoves.includes(winningCombos[i][1]) && player1.takenMoves.includes(winningCombos[i][2])) {
      return true;
		} else if (player2.takenMoves.includes(winningCombos[i][0]) && player2.takenMoves.includes(winningCombos[i][1]) && player2.takenMoves.includes(winningCombos[i][2])) {
      return true;
		}
	}
	return false;
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

function hoverSpot(spot) {
	if (gameBoard.currentPlayer === 'player1') {
		 spot.style.backgroundImage= "url('img/o.svg')";
	} else if (gameBoard.currentPlayer === 'player2') {
		spot.style.backgroundImage= "url('img/x.svg')";	
	}
}

function unhoverSpot(spot) {
		 spot.style.backgroundImage= "";
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

function showZero () {
	hoverSpot(document.getElementById('box-0'));
}

function hideZero () {
	unhoverSpot(document.getElementById('box-0'));
}

function showOne () {
	hoverSpot(document.getElementById('box-1'));
}

function hideOne () {
	unhoverSpot(document.getElementById('box-1'));
}

function showTwo () {
	hoverSpot(document.getElementById('box-2'));
}

function hideTwo () {
	unhoverSpot(document.getElementById('box-2'));
}

function showThree () {
	hoverSpot(document.getElementById('box-3'));
}

function hideThree () {
	unhoverSpot(document.getElementById('box-3'));
}

function showFour () {
	hoverSpot(document.getElementById('box-4'));
}

function hideFour () {
	unhoverSpot(document.getElementById('box-4'));
}

function showFive () {
	hoverSpot(document.getElementById('box-5'));
}

function hideFive () {
	unhoverSpot(document.getElementById('box-5'));
}

function showSix () {
	hoverSpot(document.getElementById('box-6'));
}

function hideSix () {
	unhoverSpot(document.getElementById('box-6'));
}

function showSeven () {
	hoverSpot(document.getElementById('box-7'));
}

function hideSeven () {
	unhoverSpot(document.getElementById('box-7'));
}

function showEight () {
	hoverSpot(document.getElementById('box-8'));
}

function hideEight () {
	unhoverSpot(document.getElementById('box-8'));
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
  box0.addEventListener("mouseover", showZero);
  box0.addEventListener("mouseout", hideZero);
  box0.addEventListener("click", function boxZeroClick () {
    markSpot(box0);
    box0.removeEventListener("click", boxZeroClick);
    box0.removeEventListener("mouseover", showZero);
    box0.removeEventListener("mouseout", hideZero);
    checkWinner();
    switchPlayers();
  });
  box1.addEventListener("mouseover", showOne);
  box1.addEventListener("mouseout", hideOne);
  box1.addEventListener("click", function boxOneClick () {
    markSpot(box1);
    box1.removeEventListener("click", boxOneClick);
    box1.removeEventListener("mouseover", showOne);
    box1.removeEventListener("mouseout", hideOne);
    checkWinner();
    switchPlayers();
  });
  box2.addEventListener("mouseover", showTwo);
  box2.addEventListener("mouseout", hideTwo);
  box2.addEventListener("click", function boxTwoClick () {
    markSpot(box2);
    box2.removeEventListener("click", boxTwoClick);
    box2.removeEventListener("mouseover", showTwo);
    box2.removeEventListener("mouseout", hideTwo);
    checkWinner();
    switchPlayers();
  });
  box3.addEventListener("mouseover", showThree);
  box3.addEventListener("mouseout", hideThree);
  box3.addEventListener("click", function boxThreeClick () {
    markSpot(box3);
    box3.removeEventListener("click", boxThreeClick);
    box3.removeEventListener("mouseover", showThree);
    box3.removeEventListener("mouseout", hideThree);
    checkWinner();
    switchPlayers();
  });
  box4.addEventListener("mouseover", showFour);
  box4.addEventListener("mouseout", hideFour);
  box4.addEventListener("click", function boxFourClick () {
    markSpot(box4);
    box4.removeEventListener("click", boxFourClick);
    box4.removeEventListener("mouseover", showFour);
    box4.removeEventListener("mouseout", hideFour);
    checkWinner();
    switchPlayers();
  });
  box5.addEventListener("mouseover", showFive);
  box5.addEventListener("mouseout", hideFive);
  box5.addEventListener("click", function boxFiveClick () {
    markSpot(box5);
    box5.removeEventListener("click", boxFiveClick);
    box5.removeEventListener("mouseover", showFive);
    box5.removeEventListener("mouseout", hideFive);
    checkWinner();
    switchPlayers();
  });
  box6.addEventListener("mouseover", showSix);
  box6.addEventListener("mouseout", hideSix);
  box6.addEventListener("click", function boxSixClick () {
    markSpot(box6);
    box6.removeEventListener("click", boxSixClick);
    box6.removeEventListener("mouseover", showSix);
    box6.removeEventListener("mouseout", hideSix);
    checkWinner();
    switchPlayers();
  });
  box7.addEventListener("mouseover", showSeven);
  box7.addEventListener("mouseout", hideSeven);
  box7.addEventListener("click", function boxSevenClick () {
    markSpot(box7);
    box7.removeEventListener("click", boxSevenClick);
    box7.removeEventListener("mouseover", showSeven);
    box7.removeEventListener("mouseout", hideSeven);
    checkWinner();
    switchPlayers();
  });
  box8.addEventListener("mouseover", showEight);
  box8.addEventListener("mouseout", hideEight);
  box8.addEventListener("click", function boxEightClick () {
    markSpot(box8);
    box8.removeEventListener("click", boxEightClick);
    box8.removeEventListener("mouseover", showEight);
    box8.removeEventListener("mouseout", hideEight);
    checkWinner();
    switchPlayers();
  });
}

function clearBoard () {
  for (i = 0; i < 9; i ++) {
    //hideZero();
    //hideOne();
    //hideTwo();
    //hideThree();
    //hideFour();
    //hideFive();
    //hideSix();
    //hideSeven();
    //hideEight();
    gameBoard.availableMoves = [0,1,2,3,4,5,6,7,8];
    gameBoard.takenMoves = [];
    player1.takenMoves = [];
    player2.takenMoves = [];
    gameBoard.currentPlayer = 'player1';
    /*
    boxesParent.appendChild(boxLi0);
    boxLi0.className = 'box';
    boxesParent.appendChild(boxLi1);
    boxLi1.className = 'box';
    boxesParent.appendChild(boxLi2);
    boxLi2.className = 'box';
    boxesParent.appendChild(boxLi3);
    boxLi3.className = 'box';
    boxesParent.appendChild(boxLi4);
    boxLi4.className = 'box';
    boxesParent.appendChild(boxLi5);
    boxLi5.className = 'box';
    boxesParent.appendChild(boxLi6);
    boxLi6.className = 'box';
    boxesParent.appendChild(boxLi7);
    boxLi7.className = 'box';
    boxesParent.appendChild(boxLi8);
    boxLi8.className = 'box';
    */
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
	startATag.addEventListener("click", function () {
    hideDiv(startDiv);
    showDiv(board);
    addIdToBox();
    player1Active();
    makeBoxesClickable();    
  });
}

function checkWinner () {
  if (gameBoard.availableMoves.length > 0) {
    if (testWinner ()) {
    	hideDiv(board);
    	body.appendChild(endDiv);
    	if (gameBoard.currentPlayer = 'player1') {
    		showDiv(endDiv);
    	  endDiv.className = "screen screen-win screen-win-one";
    	  endDiv.id = "finish";
        endDiv.appendChild(endHeader);
	      endHeader.appendChild(endH1);
	      endH1.innerHTML = "Tic Tac Toe";
	      endHeader.appendChild(endP);
	      endP.className = "message";
	      endP.innerHTML = "Winner";
	      endHeader.appendChild(endATag);
	      endATag.href = "#";
	      endATag.className = "button";
	      endATag.innerHTML = "New game";
    	  endATag.addEventListener("click", function () {
          hideDiv(endDiv);
          clearBoard();
          showDiv(board);
          addIdToBox();
          player1Active();
          makeBoxesClickable();
          gameBoard.currentPlayer = 'player1';          
    	  });	
    	} else if (gameBoard.currentPlayer = 'player2') {
    	  endDiv.className = "screen screen-win screen-win-two";
    	  endDiv.id = "finish";
    	}
    } 
  } else if (gameBoard.availableMoves.length === 0 && testWinner ()) {
  	  hideDiv(board);
  	  body.appendChild(endDiv);
    	if (gameBoard.currentPlayer = 'player1') {
    	  endDiv.className = "screen screen-win screen-win-one";
    	  endDiv.id = "finish";	
    	} else if (gameBoard.currentPlayer = 'player2') {
    	  endDiv.className = "screen screen-win screen-win-two";
    	  endDiv.id = "finish";
    	}
  } else {
  	  hideDiv(board);
  	  body.appendChild(endDiv);
    	  endDiv.className = "screen screen-win screen-win-tie";
    	  endDiv.id = "finish";
  }
}

startGame();