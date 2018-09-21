import React, { Component, Fragment } from 'react'

/**
 * Components
 */

import HeaderPage from '../../components/HeaderPage'
import IndexItems  from '../../components/IndexItems'
import FooterPage from '../../components/FooterPage'

class Index extends Component {
	render () {
		return (
			<Fragment>
				<HeaderPage/>
				<IndexItems deleteTodo={this.props.deleteTodo} todos={this.props.todos}/>
				<FooterPage/>
			</Fragment>
		)
	}
}

export default Index