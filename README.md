# Minicurso React JS

Olá pessoas, bem vindo ao Minicurso de ReactJS apresentado na Secomp 2018.

A Secomp é um evento organizado pela UTFPR com o objetivo de agitar a comunidade de desenvolvimento com minicursos e palestras na área de tecnologias e desenvolvimento.

Sou o professor Diogo Cezar, e estarei com vocês nessa jornada para descobrimos juntos um pouco do ReactJS!

## Pré-requisitos

ReactJS é um passo a mais no desenvolvimento Front-End. Por isso é essencial que você tenha conhecimentos básicos sobre:
* HTML5;
* CSS3;
* JavaScript ES6;
* Git e GitHub;

Mas não se preocupem, vou tirar todas as dúvidas a medida em que elas aparecerem!

## Apresentação

Preparei uma apresentação inicial para definição dos conceitos.

Ela está disponível em: http://bit.ly/2LHr0jT

## Objetivos

Ao final do minicurso e da atividade prática espera-se que o aluno possa compreender:

* Dicas Gerais no Mundo do Desenvolvimento;
* O que é ReactJS;
* Vantagens e Desvantagens;
* Como o ReactJS Funciona;
* Componentes, Props, State, Events;
* JSX;
* Rotas;
* create-react-app
* SPA;
* Noções de Redux e Context (Não será visto na prática);

## Prática

Na atividade prática nós iremos trabalhar de uma forma incremental.

Para essa atividade vamos criar um simples aplicativo de Lista de Tarefas (é o clássico).

Para minizar os trabalho, vamos utilizar um framework CSS, neste caso o [Materilize.css](https://materializecss.com/)

Um exemplo "pronto" de todos os passos pode ser encontrado na pasta __todo-final__.

### Passo 1

Conhecer e revisar os conhecimentos básicos que estão no exemplo da pasta __todo-pure__

* Entender a estrutura de arquivos;
* Entender a separação dos arquivos por componentes;
	* Recomendações de Estudo:
		* RSCSS -> http://bit.ly/2N7xCMZ;
		* ITCSS -> http://bit.ly/2wsQigE;
* Analisar as estruturas dos arquivos HTML;
* Revisar e entender os pacotes npm instalados;
* Entender a API que consome os dados de /database/todos.json;

### Passo 2

Entender o aplicativo criado em /js/app.js

* O que cada função faz?

Executar a aplicação localmente

* O que faz o __http-server__ e o __json-server__;

Identificar quais seriam os possíveis componentes desse sistema puro.

* Quais dos elementos poderiam se transformar em componentes?

### Passo 3

Criar um novo aplicativo em React com o ```create-react-app``` e realocálo na pasta __todo__

* Estudar a estrutura de pastas criada pelo ```create-react-app```
* Entender como a 'mágica' acontece:
	* WebPack;
	* Babel;
	* Por que é importante e por que utilizamos?
* Utilizar os comandos básicos para iniciar a aplicação e fazer o seu build;

### Passo 4

Transformar o exemplo básico em um aplicativo escrito em react.

* Mover os componentes;
* Criar e organizar páginas, componentes e objetos;
* Criar o sistema de roteamento entre as páginas do site.

### Passo 5

Instalar o __axios__;

* Entender a diferença entre o __Fetch__ e o __Axios__

### Passo 6

Criar um arquivo JavaScript central de API para gerenciar a api fornecida pelo __json-server__

* Criar um arquivo em uma pasta na raiz de __src__ chamada __api__;
* Criar os comandos necessários para o CRUD que irá consumir a api criada pelo __json-server__

### Passo 7

Fazer o aplicativo se comunicar com a API e deixá-lo funcional.

* Refatorar o aplicativo obter e salvar informações do JSON definido como banco de dados.

## Conclusão

É claro que esse minicurso é apenas o começo! É continuar seus estudos e avançar na tecnologia para poder criar aplicativos mais dinâmicos e produtos!

É isso pessoal,

Qualquer dúvida, basta entrar em contato pelo e-mail: diogo@diogocezar.com