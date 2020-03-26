
const contentClass = 'item-content'
const acceptButtonClass = 'accept-button'
const deleteButtonClass = 'delete-button'

function createTodoItem(content, onChecked, onDelete) {
  const el = document.createElement('li')
  el.className = 'item'

  el.innerHTML = `
    <span class="${contentClass}">${content}</span>
    <button class="${acceptButtonClass}">check</button>
    <button class="${deleteButtonClass}">delete</button>
  `

  const acceptButton = el.querySelector(`.${acceptButtonClass}`)
  const deleteButton = el.querySelector(`.${deleteButtonClass}`)

  acceptButton.addEventListener('click', (event) => {
    onChecked(el)
  })

  deleteButton.addEventListener('click', (event) => {
    onDelete(el)
  })

  return el
}

const form = document.querySelector('#form')
const inputField = document.querySelector('#input')
const list = document.querySelector('#list')

function removeItem(element) {
  list.removeChild(element)
}

function checkItem(element) {
  element.querySelector(`.${contentClass}`).classList.toggle('checked')
}

function addItem() {
  const itemContent = inputField.value
  const el = createTodoItem(itemContent, checkItem, removeItem)
  list.prepend(el)
}

form.onsubmit = function (event) {
  event.preventDefault()

  addItem()
}