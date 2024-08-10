// miejsce gdzie użytkownik wpisuje treść zadania
let todoInput
// info o braku zadań / konieczność wpisywania tekstu
let errorInfo
// przycisk ADD / dodaje nowe elementy do listy
let addBtn
// lista zadań / tagi UL
let ulList
// nowo dodane zadanie LI
let newTodo

// wywoływanie funkcji
const main = () => {
	prepareDomElements()
	prepareDomeEvents()
}
// pobieranie wszystkich elementów
const prepareDomElements = () => {
	todoInput = document.querySelector('.todo-input')
	errorInfo = document.querySelector('.error-info')
	addBtn = document.querySelector('.btn-add')
	ulList = document.querySelector('.todolist ul')
}
// nadawanie nasłuchiwania
const prepareDomeEvents = () => {
	addBtn.addEventListener('click', addNewTodo)
}

const addNewTodo = () => {
	if (todoInput.value !== '') {
		newTodo = document.createElement('li')
		newTodo.textContent = todoInput.value
		createToolsArea()
		ulList.append(newTodo)

		todoInput.value = ''
		errorInfo.textContent = ''
	} else {
		errorInfo.textContent = 'Wpisz treść zadania!'
	}
}
const createToolsArea = () => {
	
	const toolsPanel = document.createElement('div')
	toolsPanel.classList.add('tools')
	newTodo.append(toolsPanel)

	const completeBtn = document.createElement('button')
	completeBtn.classList.add('complete')
	completeBtn.innerHTML = '<i class="fas fa-check"></i>'

	const editBtn = document.createElement('button')
	editBtn.classList.add('edit')
	editBtn.textContent = 'EDIT'

	const deleteBtn = document.createElement('button')
	deleteBtn.classList.add('delete')
	deleteBtn.innerHTML = '<i class="fas fa-times"></i>'
	// strona internetowa zostaje wczytana - zabezpieczenie skryptu do wczytania strony
	toolsPanel.append(completeBtn, editBtn, deleteBtn)

}

document.addEventListener('DOMContentLoaded', main)