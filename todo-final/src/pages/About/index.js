import React, { Component, Fragment } from 'react'

/**
 * Components
 */

import Header from '../../components/Header'
import AboutContent from '../../components/AboutContent'
import Footer from '../../components/Footer'

class About extends Component {
	render () {
		return (
			<Fragment>
				<Header />
				<AboutContent/>
				<Footer />
			</Fragment>
		)
	}
}

export default About