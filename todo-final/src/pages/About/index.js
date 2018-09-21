import React, { Component, Fragment } from 'react'

/**
 * Components
 */

import HeaderPage   from '../../components/HeaderPage'
import AboutContent from '../../components/AboutContent'
import FooterPage   from '../../components/FooterPage'

class About extends Component {
	render () {
		return (
			<Fragment>
				<HeaderPage />
				<AboutContent/>
				<FooterPage />
			</Fragment>
		)
	}
}

export default About