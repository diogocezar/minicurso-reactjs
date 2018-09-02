import axios from 'axios'

class Api{
	constructor(){
		this.url = 'http://localhost:9090/'
		this.axios = axios.create({
			baseURL : this.url
		});
		this.endpoints = this.loadApis()
	}
	loadApis = () => {
		return {
			loadTodos  : ()     => this.axios.get('todos'),
			addTodo    : (todo) => this.axios.post('todos', todo),
			deleteTodo : (id)   => this.axios.delete(`todos/${id}`)
		}
	}
}

const api = new Api()

export default api