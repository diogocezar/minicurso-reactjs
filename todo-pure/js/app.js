var todos = [
	{ id: 1, content: "Comprar um leite" },
	{ id: 2, content: "Pagar conta de água" },
	{ id: 3, content: "Estudar para a prova de matemática" },
	{ id: 4, content: "Assistir ao último capítulo de Breaking Bad" },
	{ id: 5, content: "Lavar a louça" },
	{ id: 6, content: "Comprar shampoo" },
	{ id: 7, content: "Levar o cachorro no PetShop" },
	{ id: 8, content: "Comprar caneta" },
	{ id: 9, content: "Comprar borracha" },
	{ id: 10, content: "Levar o carro na manutenção" },
	{ id: 11, content: "Comprar cerveja" },
	{ id: 12, content: "Estudar para a prova de C++" },
	{ id: 13, content: "Vender o livro de Java" },
	{ id: 14, content: "Ligar para a diretoria" },
	{ id: 15, content: "Pagar os impostos" },
	{ id: 16, content: "Jogar LOL" },
	{ id: 17, content: "Comprar carregador de celular" },
	{ id: 18, content: "Estudar para a prova de PHP" }
];

const deleteTodo = (id) => {
	todos = todos.filter((todo) => {
		return todo.id !== id
	})
	fillTodos()
};

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

fillTodos()