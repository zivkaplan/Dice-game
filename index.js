const player1img = document.querySelector('img.p1') //selecting player 1 image
const player2img = document.querySelector('img.p2') // selecting player 2 image
const button = document.querySelector('button') // selecting the button

function randomDiceRoll() { // function to generate random int from 1-6
    return Math.floor(Math.random() * 6) + 1;
}

function setPic(player, num) { // function that changes the player's image to match the assigned dice roll
    player.setAttribute('src', `images/dice${num}.png`)
}

function isWinner(dice1, dice2) { // function that returns the winner
    if (dice1 > dice2) {
        return 1;
    }
    return 2;
}

function wins(winner) { // function that changes the h1 text to display the winner
    const h1 = document.querySelector('h1');
    if (winner === 1) {
        h1.innerText = `🚩 player 1 wins!`
    } else {
        h1.innerText = `player 2 wins! 🚩`

    }
}
button.addEventListener('click', () => {

    let dice1 = randomDiceRoll();
    setPic(player1img, dice1);

    let dice2 = randomDiceRoll();
    setPic(player2img, dice2);

    if (dice1 === dice2) {
        const h1 = document.querySelector('h1');
        h1.innerText = "Draw!"
    } else {
        wins(isWinner(dice1, dice2));
    }
});