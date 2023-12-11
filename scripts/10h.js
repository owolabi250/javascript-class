window.console.log('window')

function handleCostKeydown(event) {
  if (event.key === 'Enter') {
    calculateTotal()
  }
}

function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input')
  let cost = Number(inputElement.value)
  if (cost > 0 && cost < 40) {
    cost = cost + 10
    cost = `$${cost}`
  } else if (cost >= 40) {
    cost = `$${cost}`
  } else {
    // cost = `Error: cost cannot be less than $0`
    cost = `<span class="cost-error">Error: cost cannot be less than $0</span>`
  }
  document.querySelector('.js-total-cost').innerHTML = cost
}

function Subscribe() {
  const buttonElement = document.querySelector('.js-subscribe-button')
  if (buttonElement.innerText === 'Subscribe') {
    buttonElement.innerText = 'Subscribed'
    buttonElement.classList.add('is-subscribed')
  } else {
    buttonElement.innerText = 'Subscribe'
    buttonElement.classList.remove('is-subscribed')
  }
}
