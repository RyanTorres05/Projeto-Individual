const $startGameButton = document.querySelector(".start-quiz")
const $questionsContainer = document.querySelector.querySelector(".questions-container")

$startGameButton.addEventListener("click", startGame)

function startGame() {
    $startGameButton.classList.add("hide")
    $questionsContainer.classList.remove("hide")

}