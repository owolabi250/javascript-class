const todoList = ['make dinner', 'wash dishes']

renderTodoList()

function renderTodoList() {
  let todoListHtml = ''

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i]
    const html = `<p>${todo}</p>`
    todoListHtml += html
  }

  console.log(todoListHtml)

  document.querySelector('.js-todo-list').innerHTML = todoListHtml
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input')
  const name = inputElement.value

  todoList.push(name)
  console.log(todoList)

  inputElement.value = ''

  
  renderTodoList()

  displayTodos()
}

// function displayTodos() {
//   const todoListParagraph = document.querySelector('.js-todo-list')
//   let todoListHtml = '<ul>' // Start an unordered list

//   for (const todo of todoList) {
//     todoListHtml += `<li>${todo}</li>`
//   }

//   todoListHtml += '</ul>' // End the unordered list

//   todoListParagraph.innerHTML = todoListHtml
// }
