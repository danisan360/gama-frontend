<!-- Logo -->

<h1 align="center" style="font-family: Ubuntu; font-size: 45px; color: #333; margin-bottom: 0">
  Grupo Gama
</h1>

<!-- Badges -->

<!-- <p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/igooralm192/nlw-01">
</p> -->

<!-- Description -->

<h4 align="center">
	🚀 Selective Processes Management Application 🚀
</h4>

<!-- Summary -->

<h2>Summary</h2>

- [:framed_picture: Layout](#framed_picture-layout)
- [:computer: Demo](#computer-demo)
- [:rocket: Technologies](#rocket-technologies)
- [:boom: How to run](#boom-how-to-run)
    - [Prerequisites](#prerequisites)
    - [Setting environment variables](#setting-environment-variables)
    - [Running the application](#running-the-application)
- [:wrench: Environment variables](#wrench-environment-variables)
- [:recycle: How to contribute](#recycle-how-to-contribute)
- [:memo: License](#memo-license)


<a id="layout"></a>

## :framed_picture: Layout

The layout of this application is available on [Figma](https://www.figma.com/file/HROTVF5axsVT9DBSjnpfUc/Grupo-Gama).

<a id="demo"></a>

## :computer: Demo

This application was hosted by [Netlify](https://www.netlify.com/) e can be found here: [Gama](https://gama-frontend.netlify.com/).

<a id="tecnologias"></a>

## :rocket: Technologies

This application uses this following technologies:

- [TypeScript](https://www.typescriptlang.org/)
- [ReactJS](https://reactjs.org/)
- [ESLint](https://eslint.org/) (Code standardization)
- [Prettier](https://prettier.io/) (Code formatting)
- [React Router](https://reactrouter.com/web/guides/quick-start)
- [Date-FNS](https://date-fns.org/) (Date formatting)

<a id="como-executar"></a>

## :boom: How to run

#### Prerequisites

To run this application, you need to have it on your machine:

- [NodeJS](https://nodejs.org/en/download/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/)


#### Setting environment variables
```sh
# Copy .env from .env.example to setup environment variables
$ cp .env.example .env
```

#### Running the application

```sh
# Clone this repository
$ git clone https://github.com/gama-group/gama-frontend

# Move to root directory
$ cd gama-frontend

# Install dependencies
$ yarn install

# Run on a local server
$ yarn start
```

<a id="variaveis-ambiente"></a>

## :wrench: Environment variables

| Name          | Description     | Default               |
| -             | -               | -                     |
| REACT_APP_API | URL of the API  | http://localhost:3333 |

---

<a id="como-contribuir"></a>

## :recycle: How to contribute

- Fork this repository
- Create a branch with the name of your feature: `git checkout -b my-feature`
- Commit your changes: `git commit -m 'feat: My new feature'`
- Push your branch: `git push origin my-feature`

<a id="licenca"></a>

## :memo: License

This project is under the MIT license. See the file [LICENSE](LICENSE) for more details.

