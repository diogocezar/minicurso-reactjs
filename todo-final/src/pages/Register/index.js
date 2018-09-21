import React, { Component, Fragment } from 'react'

/**
 * Components
 */

import HeaderPage   from '../../components/HeaderPage'
import RegisterForm from '../../components/RegisterForm'
import FooterPage   from '../../components/FooterPage'

class Register extends Component {
	render() {
		return (
			<Fragment>
				<HeaderPage />
				<RegisterForm addTodo={this.props.addTodo} />
				<FooterPage />
			</Fragment>
		)
	}
}

export default Register