let calculator = localStorage.getItem('calculator') || ''
solution()

function updateCalculator(value) {
  calculator += value
  solution()
  localStorage.setItem('calculator', calculator)
}

function solution() {
  document.querySelector('.js-calculatorValue').innerHTML = calculator
}
