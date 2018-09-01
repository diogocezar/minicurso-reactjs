import React, { Component, Fragment } from 'react'

import './home-items.css'

class HomeItems extends Component {
	renderTodos = () =>{
		return this.props.todos.map((item) => {
			return (
				<li className="collection-item" key={item.id} onClick={() => {this.delete(item.id)}}>
					{item.content}
				</li>
			)
		})
	}
	delete = (index) => {
		this.props.deleteTodo(index)
	}
	render () {
		return (
			<Fragment>
				<section id="list-items" className="first-session">
					<div className="container">
						<h1 className="center">Lista de Tarefas</h1>
						<h5 className="center">Clique em um ítem para excluí-lo!</h5>
						<ul className="collection">
							{this.renderTodos()}
						</ul>
					</div>
				</section>
			</Fragment>
		)
	}
}

export default HomeItems