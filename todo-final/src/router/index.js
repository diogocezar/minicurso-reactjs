import React, { Component, Fragment }   from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

/**
* Pages
*/
import Home     from '../pages/Home'
import About    from '../pages/About'
import Register from '../pages/Register'

class Router extends Component {
	constructor(props){
		super(props)
		this.state = {
			"todos": [
				{ "id": 1, "content": "Comprar um leite" },
				{ "id": 2, "content": "Pagar conta de água" },
				{ "id": 3, "content": "Estudar para a prova de matemática" }
			]
		}
	}
	addTodo = (todo) => {
		todo.id = Math.random()
		this.setState({ todos : [todo, ...this.state.todos]})
	}
	deleteTodo = (id) => {
		const newTodos = this.state.todos.filter((item) => {
			return id !== item.id
		})
		this.setState({ todos: newTodos })
	}
	render() {
		return (
			<BrowserRouter>
				<Fragment>
					<Redirect push="/"/>
					<Switch>
						<Route exact path="/" render={() => <Home deleteTodo={this.deleteTodo} todos={this.state.todos} />} />
						<Route path="/register" render={() => <Register addTodo={this.addTodo} />} />
						<Route path="/about" component={About} />
					</Switch>
				</Fragment>
			</BrowserRouter>
		)
	}
}

export default Router