const url = "http://localhost:3000/todos"
var todos = []

const getFromApi = () => {
	fetch(url, { method: 'get'})
		.then((response) =>{
			response.text()
				.then((result) => {
					todos = JSON.parse(result)
					fillTodos()
				})
		})
}

const deleteTodo = (id) => {
	todos = todos.filter((todo) => {
		return todo.id !== id
	})
	fillTodos()
}

const fillTodos = () => {
	const $collection = document.querySelector("#list-items .collection")
	const todoList = todos.length ? (
		todos.map((item) => {
			return `<li class='collection-item' data-id='${item.id}'>${item.content}</li>`
		}).join('')
	) : (
			`<li class='collection-item'>Não existem ítens.</li>`
	)
	$collection.innerHTML = todoList
	setDeletOnClicks()
}

const setDeletOnClicks = () => {
	const $item = document.querySelectorAll("#list-items .collection .collection-item")

	$item.forEach((item) => {
		item.addEventListener("click", () => { deleteTodo(parseInt(item.dataset.id)) })
	})
}

getFromApi()