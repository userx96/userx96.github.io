const section = document.getElementById("score-board")

const userScoreText = document.getElementById("user-score")
const pcScoreText = document.getElementById("pc-score")

const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissor = document.getElementById("scissor")

const infoText = document.getElementById("info-text")
const roundText = document.getElementById("round-text")

let userScore = 0
let pcScore = 0

//! -------------- FUNCTIONS --------------------------

rock.addEventListener("click", () => {
    let result = startGame("taş")
    resultText()
    resultStyle(result, rock)
})

paper.addEventListener("click", () => {
    let result = startGame("kağıt")
    resultText()
    resultStyle(result, paper)
})

scissor.addEventListener("click", () => {
    let result = startGame("makas")
    resultText()
    resultStyle(result, scissor)
})

const startGame = (userChoice) => {
    let compChoice = pcChoice()

    if (userChoice === compChoice) {
        infoText.textContent = "Berabere !"
        return "draw"
    }
    else if ((userChoice === "taş" && compChoice === "makas") || (userChoice === "makas" && compChoice === "kağıt") || (userChoice === "kağıt" && compChoice === "taş")) {
        userScore++
        userScoreText.textContent = userScore
        infoText.textContent = `Sizin seçiminiz ${userChoice}, bilgisayarın seçimi ${compChoice}, siz kazandınız !`
        return "win"
    }
    else if ((userChoice==='taş' && compChoice==='kağıt') || (userChoice==='kağıt' && compChoice==='makas') || (userChoice==='makas' && compChoice==='taş')) {
        pcScore++
        pcScoreText.textContent = pcScore
        infoText.textContent = `Sizin seçiminiz ${userChoice}, bilgisayarın seçimi ${compChoice}, bilgisayar kazandı !`
        return "lose"
    }
}

const pcChoice = () => {
    let choice = ["taş", "kağıt", "makas"]
    let pcChoice = Math.floor(Math.random() * 3)
    return choice[pcChoice]
}

const resultText = () => {
    if (userScore >= 10) {
        roundText.textContent = "Bu turu kazandınız"
        userScore = 0
        pcScore = 0
        userScoreText.textContent = userScore
        pcScoreText.textContent = pcScore
        setTimeout(() => {roundText.textContent = ""}, 5000)
    }
    else if (pcScore >= 10) {
        roundText.textContent = "Bu turu kaybettiniz"
        userScore = 0
        pcScore = 0
        userScoreText.textContent = userScore
        pcScoreText.textContent = pcScore
        setTimeout(() => {roundText.textContent = ""}, 5000)
    }
}

const resultStyle = (result) => {
    if (result === "win") {
        section.classList.add('win');
        setTimeout(() => {section.classList.remove('win')}, 1000)
    }
    else if (result === 'draw') {
        section.classList.add('draw');
        setTimeout(() => {section.classList.remove('draw')}, 1000)
    } else {
        section.classList.add('lose');
        setTimeout(() => {section.classList.remove('lose')}, 1000)
    }
}