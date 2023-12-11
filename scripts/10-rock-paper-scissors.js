let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  loses: 0,
  ties: 0,
}

updateScoreElement()

// if (!score) {
//   score = {
//     wins: 0,
//     loses: 0,
//     ties: 0,
//   }
// }

function playGame(playerMove) {
  const computerMove = pickComputerMove()

  let result = ''

  if (playerMove === 'Scissors') {
    if (computerMove === 'rock') {
      result = 'you lose.'
    } else if (computerMove === 'papper') {
      result = 'you win.'
    } else if (computerMove === 'Scissors') {
      result = 'Tie.'
    }
  } else if (playerMove === 'papper') {
    if (computerMove === 'rock') {
      result = 'you win.'
    } else if (computerMove === 'papper') {
      result = 'Tie.'
    } else if (computerMove === 'Scissors') {
      result = 'you lose.'
    }
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.'
    } else if (computerMove === 'papper') {
      result = 'you lose.'
    } else if (computerMove === 'Scissors') {
      result = 'you win.'
    }
  }

  if (result === 'you win.') {
    score.wins += 1
  } else if (result === 'you lose.') {
    score.loses += 1
  } else if (result === 'Tie.') {
    score.ties += 1
  }

  localStorage.setItem('score', JSON.stringify(score))

  updateScoreElement()

  document.querySelector('.js-result').innerHTML = result

  document.querySelector(
    '.js-moves'
  ).innerHTML = `You <img src="images/${playerMove}-emoji.png" alt="" class="move-icon" />
      <img src="images/${computerMove}-emoji.png" alt="" class="move-icon" /> Computer`
}

function updateScoreElement() {
  document.querySelector(
    '.js-score'
  ).innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`
}

function pickComputerMove() {
  const randomNumber = Math.random()

  let computerMove = ''

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock'
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'papper'
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'Scissors'
  }
  return computerMove
}
