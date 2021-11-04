var randomDiceNumber1 = (Math.floor(Math.random() * 6)) + 1;
var picDice1 = "images/dice" + randomDiceNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", picDice1);

var randomDiceNumber2 = (Math.floor(Math.random() * 6)) + 1;
var picDice2 = "images/dice" + randomDiceNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", picDice2);

if (randomDiceNumber1 > randomDiceNumber2) {
    document.querySelector("h1").innerHTML = ("Player 1 Wins");
} else if (randomDiceNumber2 > randomDiceNumber1) {
    document.querySelector("h1").innerHTML = ("Player 2 Wins");
} else {
    document.querySelector("h1").innerHTML = ("Draw!!");
}