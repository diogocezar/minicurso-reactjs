import React, {Fragment} from 'react'
import { NavLink, Link } from 'react-router-dom'

import './header-page.css'

const Header = () => {
	return (
		<Fragment>
			<header>
				<nav className="nav-bar indigo darken-3">
					<div className="container">
						<div className="nav-wrapper">
							<Link to="/">
								<div className="brand-logo">
									<img src="./assets/images/logo-todo.svg" alt="Todo List Icon" />
									<h2>Todo Puro</h2>
								</div>
							</Link>
							<ul className="right hide-on-med-and-down">
								<li><NavLink exact to="/">Principal</NavLink></li>
								<li><NavLink to="/register">Novo Todo</NavLink></li>
								<li><NavLink to="/about">Sobre</NavLink></li>
							</ul>
						</div>
					</div>
				</nav>
			</header>
		</Fragment>
	)
}

export default Header