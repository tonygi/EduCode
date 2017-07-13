var stage;
var pieces = [];
var selectedPieces = [];
var pieceContainer, pieceTxt;
var score = 0;
const PUZZLE_COLUMNS = 1;
const PUZZLE_ROWS = 3;
const PUZZLE_SIZE = 150;

function init() {
stage = new createjs.Stage('drop2');
buildPuzzle();
startGame();
addListener();
}


function buildPuzzle()
{
		
		var i, piece;
		var l = PUZZLE_COLUMNS * PUZZLE_ROWS;
		var col = 0;
		var row = 0;
		
		for(i = 0; i < l; i++)
		{
			piece = new createjs.Bitmap("images/puzzle_base_small.png");
			piece.homePoint = {x:col * PUZZLE_SIZE, y: row * PUZZLE_SIZE};
			piece.x = piece.homePoint.x;
			piece.y = piece.homePoint.y;
			stage.addChild(piece);
			pieces[i] = piece;
			col ++;
			if (col === PUZZLE_COLUMNS) {
				col = 0;
				row ++;
			}
			piece.addEventListener('click', onPieceClick);
			
		}
		
		startGame();
}

function startGame() {
	createjs.Ticker.addEventListener("tick", function(){
		stage.update();
	});
	createjs.Ticker.setFPS(60);
}

function onPieceClick(e) {
	if (selectedPieces === 2) {
		return;
	}
	var piece = e.target;
	var matrix = new createjs.ColorMatrix().adjustColor(15, 10, 100, 180);
	piece.filters = [
	new createjs.ColorMatrixFilter(matrix)
	];
	piece.cache(0, 0, PUZZLE_SIZE, PUZZLE_SIZE);
	selectedPieces.push(piece);
	if (selectedPieces.length === 2) {
		swapPieces();
	}
}

function swapPieces() {
	alert("ca1");
	var piece1 = selectedPieces[0];
	var piece2 = selectedPieces[1];
	createjs.Tween.get(piece1).wait(300).to({x:piece2.x, y:piece2.y},200);
	createjs.Tween.get(piece2).wait(300).to({x:piece1.x, y:piece1.y},200);
	
}
function addListener(){
	var i, piece;
	var col = 0;
	var row = 0;
	var l = pieces.length;
	for (i = 0; i < l; i++) {
		//piece = ;
		//createjs.Tween.get(piece).to({x:col * PUZZLE_SIZE, y:row * PUZZLE_SIZE},200);
		pieces[i].addEventListener('click', onPieceClick);
		col++;
		if (col === PUZZLE_COLUMNS) {
			col = 0;
			row++;
		}
	}
}
