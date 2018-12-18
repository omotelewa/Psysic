var letterKey = {
  0: "a",
  1: "b",
  2: "c",
  3: "d",
  4: "e",
  5: "f",
  6: "g",
  7: "h",
  8: "i",
  9: "j",
  10: "k",
  11: "l",
  12: "m",
  13: "n",
  14: "o",
  15: "p",
  16: "q",
  17: "r",
  18: "s",
  19: "t",
  20: "u",
  21: "v",
  22: "w",
  23: "x",
  24: "y",
  25: "z"
}


let answer;
var win = document.getElementById("wins");
var loss = document.getElementById("losses");
var guessesLeft = document.getElementById("guessesLeft");
var guessSoFar = document.getElementById("guessSoFar");

var winGame;
var looseGame;
var guessesLeftGame;
var guessesLeftSoFar;

newGame();
document.onkeyup = function(event){
  keySelect(event); 
  };

function newGame() {

  winGame = 0;
  win.innerHTML = winGame;
  looseGame = 0;
  loss.innerHTML = looseGame;

  newLetter();

}

function keySelect(event) {
  var x = event.charCode || event.keyCode;
  var y = String.fromCharCode(x);

  if (y !== answer) {
    guessesLeftGame--;
    guessesLeft.innerHTML = "guesses left: " + guessesLeftGame;
    guessesLeftSoFar.push(y);
    guessesSoFar.innerHTML = "guesses so far: " + guessesLeftSoFar;

  }

  if (y === answer) {
    winGame++;
    win.innerHTML = "wins: " + winGame;
    newLetter();
  }

  if (guessesLeftGame === 0) {
    looseGame++;
    loss.innerHTML = "losses: " + looseGame;
    newLetter();
  }

}

function newLetter() {
  guessesLeftGame = 9;
  guessesLeft.innerHTML = guessesLeftGame;
  guessesLeftSoFar = [];
  guessesSoFar.innerHTML = guessesLeftSoFar;

  let num1 = Math.floor(Math.random() * Math.floor(26));
  answer = letterKey[num1];
}