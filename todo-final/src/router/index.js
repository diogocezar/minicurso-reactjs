import React, { Component, Fragment }   from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";

/**
* Pages
*/
import Index    from '../pages/Index'
import About    from '../pages/About'
import Register from '../pages/Register'

/**
 * Api
 */
import Api from '../api'

class Router extends Component {
	constructor(props){
		super(props)
		this.state = {
			"todos": []
		}
	}
	loadData(){
		Api.endpoints
			.loadTodos()
			.then((res) => {
				this.setState({ todos: res.data.reverse() })
			})
	}
	componentDidMount(){
		this.loadData()
	}
	addTodo = (todo) => {
		/**
		 * Exemplo de Adição Local
		 */

		/*
		todo.id = Math.random()
		this.setState({ todos : [todo, ...this.state.todos]})
		*/

		/**
		 * Exemplo de Adição na API
		 */
		Api.endpoints
			.addTodo(todo)
			.then(setTimeout(() => { this.loadData() }, 100))
	}
	deleteTodo = (id) => {
		/**
		 * Exemplo Exclusão Local
		 */

		/*
		const newTodos = this.state.todos.filter((item) => {
			return id !== item.id
		})
		this.setState({ todos: newTodos })
		*/

		/**
		 * Exemplo Exclusão API
		 */
		Api.endpoints
			.deleteTodo(id)
			.then(setTimeout(() => { this.loadData() }, 100))
	}
	render() {
		return (
			<BrowserRouter>
				<Fragment>
					<Switch>
						<Route exact path="/" render={() => <Index deleteTodo={this.deleteTodo} todos={this.state.todos} />} />
						<Route path="/register" render={() => <Register addTodo={this.addTodo} />} />
						<Route path="/about" component={About} />
					</Switch>
				</Fragment>
			</BrowserRouter>
		)
	}
}

export default Router