import React, { Component, Fragment } from 'react'

class AboutContent extends Component {
	render () {
		return (
			<Fragment>
				<section id="about-content" className="first-session">
					<div className="container">
						<h1 id="minicursoreactjs" className="center">Minicurso React JS</h1>
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
						<h2 id="apresentao">Apresentação</h2>
						<p>Preparei uma apresentação inicial para definição dos conceitos.</p>
						<p>Ela está disponível em: http://bit.ly/2LHr0jT</p>
						<h2 id="objetivos">Objetivos</h2>
						<p>Ao final do minicurso e da atividade prática espera-se que o aluno possa compreender:</p>
						<ul>
							<li>Dicas Gerais no Mundo do Desenvolvimento;</li>
							<li>O que é ReactJS;</li>
							<li>Vantagens e Desvantagens;</li>
							<li>Como o ReactJS Funciona;</li>
							<li>Componentes, Props, State, Events;</li>
							<li>JSX;</li>
							<li>Rotas;</li>
							<li>create-react-app</li>
							<li>SPA;</li>
							<li>Noções de Redux e Context (Não será visto na prática);</li>
						</ul>
						<h2 id="prtica">Prática</h2>
						<p>Na atividade prática nós iremos trabalhar de uma forma incremental.</p>
						<p>Para essa atividade vamos criar um simples aplicativo de Lista de Tarefas (é o clássico).</p>
						<p>Para minizar os trabalho, vamos utilizar um framework CSS, neste caso o <a href="https://materializecss.com/">Materilize.css</a></p>
						<p>Um exemplo "pronto" de todos os passos pode ser encontrado na pasta <strong>todo-final</strong>.</p>
						<h3 id="passo1">Passo 1</h3>
						<p>Conhecer e revisar os conhecimentos básicos que estão no exemplo da pasta <strong>todo-pure</strong></p>
						<ul>
							<li>Entender a estrutura de arquivos;</li>
							<li>Entender a separação dos arquivos por componentes;</li>
							<li>Analisar as estruturas dos arquivos HTML;</li>
						</ul>
						<h3 id="passo2">Passo 2</h3>
						<p>Identificar quais seriam os possíveis componentes desse sistema puro.</p>
						<ul>
							<li>Quais dos elementos poderiam se transformar em componentes?</li>
						</ul>
						<h3 id="passo3">Passo 3</h3>
						<p>Criar um novo aplicativo em React com o <code>create-react-app</code> e realocálo na pasta <strong>todo</strong></p>
						<ul>
							<li>Estudar a estrutura de pastas criada pelo <code>create-react-app</code></li>
							<li>Entender onde estão os transpiladores de código;</li>
							<li>Utilizar os comandos básicos para iniciar a aplicar e fazer o seu build;</li>
						</ul>
						<h3 id="passo4">Passo 4</h3>
						<p>Transformar o exemplo básico em um aplicativo escrito em react.</p>
						<ul>
							<li>Mover os componentes;</li>
							<li>Criar e organizar páginas, componentes e objetos;</li>
							<li>Criar o sistema de roteamento entre as páginas do site.</li>
						</ul>
						<p>Deixar o exemplo funcional localmente, sem utilizar nenhuma API.</p>
						<ul>
							<li>Criar localmente um array de ítens que será manipulado pela aplicação;</li>
						</ul>
						<h3 id="passo5">Passo 5</h3>
						<p>Instalar o <strong>axios</strong> e o <strong>json-server</strong></p>
						<ul>
							<li>Entender seus conceitos e para que servem;</li>
						</ul>
						<h3 id="passo6">Passo 6</h3>
						<p>Criar um arquivo central de API para gerenciar a api fornecida pelo <strong>json-server</strong></p>
						<ul>
							<li>Criar um arquivo em uma pasta na raiz de <strong>src</strong> chamada <strong>api</strong>;</li>
							<li>Criar os comandos necessários para o CRUD que irá consumir a api criada pelo <strong>json-server</strong></li>
						</ul>
						<h3 id="passo7">Passo 7</h3>
						<p>Fazer o aplicativo se comunicar com a API e deixá-lo funcional.</p>
						<ul>
							<li>Refatorar o aplicativo obter e salvar informações do JSON definido como banco de dados.</li>
						</ul>
						<h2 id="concluso">Conclusão</h2>
						<p>É claro que esse minicurso é apenas o começo! É continuar seus estudos e avançar na tecnologia para poder criar aplicativos
					mais dinâmicos e produtos!</p>
						<p>É isso pessoal,</p>
						<p>Qualquer dúvida, basta entrar em contato pelo e-mail: diogo@diogocezar.com</p>
					</div>
				</section>
			</Fragment>
		)
	}
}

export default AboutContent