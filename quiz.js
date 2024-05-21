const $startGameButton = document.querySelector(".start-quiz")
const $nextQuestionButton = document.querySelector(".next-question")
const $questionsContainer = document.querySelector(".questions-container")
const $questionText = document.querySelector(".question")
const $answersContainer = document.querySelector(".answers-container")
const $answers = document.querySelectorAll(".answer")

let currentQuestionIndex = 0
let totalCorrect = 0

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

function startGame() {
  $startGameButton.classList.add("hide")
  $questionsContainer.classList.remove("hide")
  displayNextQuestion()
}

function displayNextQuestion() {
  resetState()
  
  if (questions.length === currentQuestionIndex) {
    return finishGame()
  }

  $questionText.textContent = questions[currentQuestionIndex].question
  questions[currentQuestionIndex].answers.forEach(answer => {
    const newAsnwer = document.createElement("button")
    newAsnwer.classList.add("button", "answer")
    newAsnwer.textContent = answer.text
    if (answer.correct) {
      newAsnwer.dataset.correct = answer.correct
    }
    $answersContainer.appendChild(newAsnwer)

    newAsnwer.addEventListener("click", selectAnswer)
  })
}

function resetState() {
  while($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild)
  }

  document.body.removeAttribute("class")
  $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event) {
  const answerClicked = event.target

  if (answerClicked.dataset.correct) {
    document.body.classList.add("correct")
    totalCorrect++
  } else {
    document.body.classList.add("incorrect") 
  }

  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true

    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
  })
  
  $nextQuestionButton.classList.remove("hide")
  currentQuestionIndex++
}

function finishGame() {
  const totalQuestions = questions.length
  const performance = Math.floor(totalCorrect * 100 / totalQuestions)
  
  let message = ""

  switch (true) {
    case (performance >= 90):
      message = "Excelente :)"
      break
    case (performance >= 70):
      message = "Muito bom :)"
      break
    case (performance >= 50):
      message = "Bom"
      break
    default:
      message = "Pode melhorar :("
  }

  $questionsContainer.innerHTML = 
  `
    <p class="final-message">
      Você acertou ${totalCorrect} de ${totalQuestions} questões!
      <span>Resultado: ${message}</span>
    </p>
    <button 
      onclick=window.location.reload() 
      class="button"
    >
      Refazer teste
    </button>
  `
}


const questions = [
  {
    question: "Qual é a música mais famosa do Yunk Vino ?",
    answers: [
      { text: "Dialogo", correct: false },
      { text: "30 Dias", correct: false },
      { text: "Leans.pt2", correct: true },
      { text: "Vlife", correct: false }
    ]
  },
  {
    question: "Qual artista o Yunk Vino possue mais feats ?",
    answers: [
      { text: "Igu", correct: true },
      { text: "Veigh", correct: false },
      { text: "Kyan", correct: false },
      { text: "Sidoka", correct: false }
    ]
  },
  {
    question: 'Em que ano o Yunk Vino lançou 3 álbuns ?',
    answers: [
      { text: '2019', correct: false },
      { text: '2022', correct: false },
      { text: '2021', correct: false },
      { text: "2020", correct: true }
    ]
  },
  {
    question: 'Qual o nome do álbum que o Yunk Vino tem junto com o Igu ?',
    answers: [
      { text: "237", correct: false },
      { text: "LA", correct: false },
      { text: "Cypherpunk", correct: false },
      { text: "Workstars", correct: true }
    ]
  },
  {
    question: 'Qual o único álbum do Yunk Vino que tem uma continuação ?',
    answers: [
      { text: 'MidnightCalls', correct: false },
      { text: '237', correct: true },
      { text: 'OFF', correct: false },
      { text: 'M.A.D', correct: false }
    ]
  },
  {
    question: 'Qual é a gravadora do Yunk Vino ?',
    answers: [
      { text: 'Pineapple', correct: false },
      { text: 'Labbel Records', correct: true },
      { text: '30PRAUM', correct: false },
      { text: 'MainStreet', correct: false }
    ]
  },
  {
    question: 'Qual é o nome verdadeiro no Yunk Vino ?',
    answers: [
      { text: 'Rafael Silva', correct: false },
      { text: 'Dhiego Salinas', correct: false },
      { text: 'Gabriel Sales', correct: false },
      { text: 'Marcos Vinicius', correct: true },
    ]
  },
]