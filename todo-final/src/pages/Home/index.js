import React, { Component, Fragment } from 'react'

/**
 * Components
 */

import Header    from '../../components/Header'
import HomeItems from '../../components/HomeItems'
import Footer    from '../../components/Footer'

class Home extends Component {
	render () {
		return (
			<Fragment>
				<Header/>
				<HomeItems deleteTodo={this.props.deleteTodo} todos={this.props.todos}/>
				<Footer/>
			</Fragment>
		)
	}
}

export default Home