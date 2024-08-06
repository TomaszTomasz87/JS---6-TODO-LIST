// miejsce gdzie użytkownik wpisuje treść zadania
let todoInput
// info o braku zadań / konieczność wpisywania tekstu
let errorInfo
// przycisk ADD / dodaje nowe elementy do listy
let addBtn
// lista zadań / tagi UL
let ulList
// nowo dodane zadanie LI
let newTodos

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
		newTodos = document.createElement('li')
		newTodos.textContent = todoInput.value
		ulList.append(newTodos)

		todoInput.value = ''
		errorInfo.textContent = ''
	} else {
		errorInfo.textContent = 'Wpisz treść zadania!'
	}
}

// strona internetowa zostaje wczytana - zabezpieczenie skryptu do wczytania strony
document.addEventListener('DOMContentLoaded', main)
