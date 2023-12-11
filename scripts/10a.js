function select(clickedButton) {
  const buttons = document.querySelectorAll('.js-button')

  buttons.forEach((button) => {
    if (button === clickedButton) {
      button.classList.add('selected')
    } else {
      button.classList.remove('selected')
    }
  })
}

function checkClassName() {
  const button = document.querySelector('.js-button-test')

  if (button.classList.contains('js-button-test')) {
    console.log('Button has the class js-button-test')
  } else {
    console.log('Button does not have the class js-button-test')
  }
}

function gaming() {
  const button = document.querySelector('.js-game')
  button.classList.toggle('is-toggled')
}

// function gmt(clickedButton) {
//   const buttons = document.querySelectorAll('.js-game-music-tech')

//   buttons.forEach((button) => {
//     if (button === clickedButton) {
//       button.classList.remove('is-toggled-gmt')
//     } else {
//       button.classList.add('is-toggled-gmt')
//     }
//   })
// }

// function gmt(clickedButton) {
//   const buttons = document.querySelectorAll('.js-game-music-tech')

// function gmt(clickedButton) {
//   const buttons = document.querySelectorAll('.js-game-music-tech')

//   buttons.forEach((button) => {
//     if (button === clickedButton) {
//       button.classList.add('is-toggled-gmt')
//     } else {
//       button.classList.remove('is-toggled-gmt')
//     }
//   })
// }

function gmt(clickedButton) {
  clickedButton.classList.toggle('is-toggled-gmt')
}
