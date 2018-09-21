import React, { Component, Fragment } from 'react';
import Index from './pages/Index'
import Register from './pages/Register'
import About from './pages/About'
import Api from './api'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: []
		};
	}
	componentDidMount() {
		this.loadData();
	}
	loadData() {
		Api.endpoints.loadTodos().then(res => {
			this.setState({ todos: res.data.reverse() });
		});
	}
	deleteTodo = id => {
		Api.endpoints.deleteTodo(id).then(
			setTimeout(() => {
				this.loadData();
			}, 100)
		);
	};
	render() {
		return <Fragment>
				<Index todos={this.state.todos} deleteTodo={this.deleteTodo} />
			</Fragment>;
	}
}

export default App;
