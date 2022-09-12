// let player1 = prompt("Input Player 1 name");
// let player2 = prompt("Input Player 2 name");

// document.querySelectorAll("p")[0].innerHTML = player1;
// document.querySelectorAll("p")[1].innerHTML = player2;

document.querySelector("button").addEventListener("click", rollDice);

function rollDice() {
let randomNumber1 = Math.floor(Math.random()*6) + 1;
let randomNumber2 = Math.floor(Math.random()*6) + 1;

if (randomNumber1 === 1) {
    document.lastElementChild.querySelector("img").setAttribute("src", "./images/dice1.png");
} else if (randomNumber1 === 2) {
    document.lastElementChild.querySelector("img").setAttribute("src", "./images/dice2.png");
} else if (randomNumber1 === 3) {
    document.lastElementChild.querySelector("img").setAttribute("src", "./images/dice3.png");
} else if (randomNumber1 === 4) {
    document.lastElementChild.querySelector("img").setAttribute("src", "./images/dice4.png");
} else if (randomNumber1 === 5) {
    document.lastElementChild.querySelector("img").setAttribute("src", "./images/dice5.png");
} else if (randomNumber1 === 6) {
    document.lastElementChild.querySelector("img").setAttribute("src", "./images/dice6.png");
}

if (randomNumber2 === 1) {
    document.lastElementChild.querySelector("div.container :nth-child(4) :nth-child(1)").setAttribute("src", "./images/dice1.png");
} else if (randomNumber2 === 2) {
    document.lastElementChild.querySelector("div.container :nth-child(4) :nth-child(1)").setAttribute("src", "./images/dice2.png");
} else if (randomNumber2 === 3) {
    document.lastElementChild.querySelector("div.container :nth-child(4) :nth-child(1)").setAttribute("src", "./images/dice3.png");
} else if (randomNumber2 === 4) {
    document.lastElementChild.querySelector("div.container :nth-child(4) :nth-child(1)").setAttribute("src", "./images/dice4.png");
} else if (randomNumber2 === 5) {
    document.lastElementChild.querySelector("div.container :nth-child(4) :nth-child(1)").setAttribute("src", "./images/dice5.png");
} else if (randomNumber2 === 6) {
    document.lastElementChild.querySelector("div.container :nth-child(4) :nth-child(1)").setAttribute("src", "./images/dice6.png");
}


    document.querySelector('h4').textContent = "You should make " + (randomNumber1 + randomNumber2) + " moves!";

}

