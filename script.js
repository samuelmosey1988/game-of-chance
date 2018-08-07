let playerChoice = ""

document.getElementById("Rock").onclick = function (event) {
    playerChoice = "Rock"
    computerChoose()
}

document.getElementById("Paper").onclick = function (event) {
    playerChoice = "Paper"
    computerChoose()
}

document.getElementById("Scissors").onclick = function (event) {
    playerChoice = "Scissors"
    computerChoose()
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function computerChoose() {

    let number = getRandomInt(3)
    let computerChoice = ""
    let textNode = ""

    if (number === 0) {
        computerChoice = "Rock"
    }
    if (number === 1) {
        computerChoice = "Paper"
    }
    if (number === 2) {
        computerChoice = "Scissors"
    }
    console.log(computerChoice)
    if (playerChoice === "Rock" && computerChoice === "Scissors") {
        textNode = document.createTextNode("For The Win!\n");
    }
    if (playerChoice === "Scissors" && computerChoice === "Paper") {
        textNode = document.createTextNode("For The Win!\n");
    }
    if (playerChoice === "Paper" && computerChoice === "Rock") {
        textNode = document.createTextNode("For The Win!\n");
       
    }
    if (computerChoice === "Rock" && playerChoice === "Scissors") {
        textNode = document.createTextNode("You lose :(\n");
        console.log("...bitch")
    }
    if (computerChoice === "Scissors" && playerChoice === "Paper") {
        textNode = document.createTextNode("You lose :(\n");
        console.log("...bitch")
    }
    if (computerChoice === "Paper" && playerChoice === "Rock") {
        textNode = document.createTextNode("You lose :(\n");
        console.log("...bitch")
    }
    if (computerChoice === playerChoice) {
        textNode = document.createTextNode("Tied!\n");
    }
    let element = document.createElement("p")
    element.appendChild(textNode)
    document.getElementById("result").appendChild(element)
}



