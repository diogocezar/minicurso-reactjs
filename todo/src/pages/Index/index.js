import React, {Fragment, Component} from 'react'
import FooterPage from '../../components/FooterPage'
import HeaderPage from '../../components/HeaderPage'
import IndexItems from '../../components/IndexItems'

class Index extends Component{
	render(){
		return <Fragment>
				<HeaderPage />
				<IndexItems todos={this.props.todos} deleteTodo={this.props.deleteTodo}/>
				<FooterPage />
			</Fragment>;
	}

}

export default Index