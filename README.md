# Desafio do devMozao #

Desafio em ReactJS para que as pessoas iniciantes de front-end possam desenvolver uma aplicação que vai testar seus conhecimentos e te proporcionar um feedback construtivo para crescer na stack.

Autor: Diogo Fonseca, aka “Mozão”

Link do repositório original: https://github.com/devMozao/desafio-reactjs

## Instalação ##

Versões do node e yarn utilizadas no projeto
```
node -v
v14.16.1

yarn -v
1.22.10
```


1. Clone o repositório na sua máquina

```
    git clone https://github.com/viniciuscondev/desafio-reactjs.git
```

2. Acessar a pasta react-app

```
    cd desafio-reactjs/react-app
```

3. Baixar as dependências do projeto

```
    yarn
```

4. Rodar o app em ambiente de desenvolvimento

```
    yarn start
```

OU

4. Rodar a build de deploy do app

```
    yarn build
```

## Bibliotecas utilizadas ##

* [axios](https://github.com/axios/axios) - Usei para fazer as requisições à API do Github, simplesmente porque eu usei fetch nos meus últimos projetos e quis lembrar um pouco como se usa o axios.
* [react-icons](https://github.com/react-icons/react-icons) - Usei pela facilidade de conseguir os ícones e não precisar lidar com SVGs e imagens.
* [styled-components](https://github.com/styled-components/-styled-components) - Usei pela organização do CSS específico de cada componente, evitando sobreposição de elementos e classes com mesmo nome.
* [parse-link-header](https://github.com/thlorenz/parse-link-header) - Usei para buscar o número de repositórios "estrelados" de cada usuário. A API do Github não disponibiliza essa informação diretamente, então tive que pegar pela paginação retornada no Link do Header da requisição que lista todos os repositórios estrelados de um usuário. O parse-link-header transforma a string em um objeto para facilitar a extração de informações.

## Estrutura do projeto ##

```
.
├── App.jsx - Arquivo principal com as rotas
├── components
│   ├── Repository
│   │   └── index.jsx - Lista de repositórios do usuário
│   └── Sidebar
│       └── index.jsx - Barra com as informações do usuário
├── index.jsx
└── pages
    ├── Home
    │   └── index.jsx - Página inicial
    └── Perfil
        └── index.jsx - Página de perfil do usuário
```