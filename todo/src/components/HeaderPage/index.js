import React, {Fragment} from 'react'
import './header-page.css'

const HeaderPage = () => {
	return (
		<Fragment>
			<header>
				<nav className="nav-bar indigo darken-3">
					<div className="container">
						<div className="nav-wrapper">
							<a href="index.html">
								<div className="brand-logo">
									<img src="./assets/images/logo-todo.svg" alt="Todo List Icon" />
									<h2>Todo Puro</h2>
								</div>
							</a>
							<ul className="right hide-on-med-and-down">
								<li className="active"><a href="index.html">Principal</a></li>
								<li><a href="register.html">Novo Todo</a></li>
								<li><a href="about.html">Sobre</a></li>
							</ul>
						</div>
					</div>
				</nav>
			</header>
		</Fragment>
	);
};

export default HeaderPage