/**
 * Definição da URL base da API
 */
const url = "http://localhost:3000/todos"

/**
 * Definição da variável que irá receber a lista de ítens da API
 */
var todos = []

/**
 * Função que recupera os dados da API por fetch
 */
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

/**
 * Função que remove a tarefa que foi clicada da API
 * @param id
 */
const deleteTodo = (id) => {
	return fetch(`${url}/${id}`, { method: 'delete'})
		.then((response) => {
			getFromApi()
		})
}

/**
 * Função que adiciona um noto TODO
 * @param todo
 */
const addTodo = (todo) => {
	return fetch(url, {
			method: 'post',
			body: JSON.stringify(todo),
			headers: {
				'Accept' : 'application/json',
				'Content-Type' : 'application/json'
			}
		}
		)
		.then((response) => {
			window.location = "index.html"
		})
}

/**
 * Função que preencher a lista de Todos com base nos ítens que estão no array global todo
 */
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
	setDeleteOnClicks();
}

/**
 * Função que seta todos os ítens montados ações de cliques
 */
const setDeleteOnClicks = () => {
	const $item = document.querySelectorAll("#list-items .collection .collection-item")
	$item.forEach((item) => {
		item.addEventListener("click", () => { deleteTodo(parseInt(item.dataset.id)) })
	})
}

/**
 * Função para o envio do formulário de registro
 */
const sendForm = () => {
	const todoValue = document.querySelector("#todo").value
	if(todoValue){
		const todo = { 'content' : todoValue };
		addTodo(todo)
	}
}

/**
 * Função para setar os botões caso a página seja a de registro
 */
const setButonsForm = () => {
	const $buttonAdd    = document.querySelector("#add")
	const $buttonCancel = document.querySelector("#cancel")
	$buttonAdd.addEventListener('click', sendForm)
	$buttonCancel.addEventListener('click', () => {
		window.location = 'index.html'
	})
}

/**
 * Switch executado com base em qual página foi carregada
 */
switch (window.location.pathname){
	case '/register.html':
		setButonsForm()
	break;
	default:
		getFromApi()
}