import React, { Component, Fragment } from 'react'

/**
 * Components
 */

import Header from '../../components/Header'
import RegisterForm from '../../components/RegisterForm'
import Footer from '../../components/Footer'

class Register extends Component {
	render() {
		return (
			<Fragment>
				<Header />
				<RegisterForm addTodo={this.props.addTodo} />
				<Footer />
			</Fragment>
		)
	}
}

export default Register