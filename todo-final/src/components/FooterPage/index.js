import React, { Fragment } from 'react'

import './footer-page.css'

const FooterPage = () => {
	return (
		<Fragment>
			<footer className="page-footer indigo darken-3">
				<div className="container">
					<div className="row">
						<div className="col l12 s12 center">
							<h5 className="white-text">Todo Puro</h5>
							<p className="grey-text text-lighten-4">Projeto de demonstração de um TodoList puro apenas com HTML, CSS e JS.</p>
						</div>
					</div>
				</div>
				<div className="footer-copyright">
					<div className="container">
						© 2018 Todos os Direitos Reservados
					<a className="grey-text text-lighten-4 right" href="https://github.com/diogocezar/minicurso-reactjs">Projeto no GitHub</a>
					</div>
				</div>
			</footer>
		</Fragment>
	)
}

export default FooterPage