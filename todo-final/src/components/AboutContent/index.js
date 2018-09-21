import React, { Component, Fragment } from 'react'

class AboutContent extends Component {
	render () {
		return (
			<Fragment>
				<section id="about-content" className="first-session">
					<div className="container">
						<h1 class="center">Minicurso React JS</h1>
						<p>Olá pessoas, bem vindo ao Minicurso de ReactJS apresentado na Secomp 2018.</p>
						<p>A Secomp é um evento organizado pela UTFPR com o objetivo de agitar a comunidade de desenvolvimento com minicursos e palestras
					na área de tecnologias e desenvolvimento.</p>
						<p>Sou o professor Diogo Cezar, e estarei com vocês nessa jornada para descobrimos juntos um pouco do ReactJS!</p>
						<h2 id="prrequisitos">Pré-requisitos</h2>
						<p>ReactJS é um passo a mais no desenvolvimento Front-End. Por isso é essencial que você tenha conhecimentos básicos sobre:</p>
						<ul>
							<li>HTML5;</li>
							<li>CSS3;</li>
							<li>JavaScript ES6;</li>
							<li>Git e GitHub;</li>
						</ul>
						<p>Mas não se preocupem, vou tirar todas as dúvidas a medida em que elas aparecerem!</p>
					</div>
				</section>
			</Fragment>
		)
	}
}

export default AboutContent