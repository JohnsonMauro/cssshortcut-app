# CSS Shortcut APP

[![Build Status](https://travis-ci.org/JohnsonMauro/cssshortcut-app.svg?branch=master)](https://travis-ci.org/JohnsonMauro/cssshortcut-app) 
[![devDependencies Status](https://david-dm.org/JohnsonMauro/cssshortcut-app/dev-status.svg)](https://david-dm.org/JohnsonMauro/cssshortcut-app?type=dev)
[![licence mit](https://img.shields.io/badge/licence-MIT-blue.svg)](https://github.com/afonsopacifer/open-source-boilerplate/blob/master/LICENSE.md) 

> Curso CSS ShortCut com Afonso Pacifer

## Stack

- Task Runner: [Gulp](https://gulpjs.com/)
- HTML Template Engine: [Pug](https://pugjs.org/api/getting-started.html)
- CSS Preprocessor: [Stylus](http://stylus-lang.com/)
- JS Transpiler: [Babel](https://babeljs.io/)

## Run the project locally

**1 -** Prepare the environment:

```sh
$ npm install -g gulp-cli
```

**2 -** Clone the project and install the dependencies:

```sh
$ git clone https://github.com/JohnsonMauro/csshortcut-app.git
$ cd csshortcut-app
$ npm install
```
**3 -** Run static server and livereload:

```sh
$ gulp server
```

## Folders Structure
      .
      ├── README.md
      ├── LICENSE.md
      ├── CONTRIBUTING.md
      ├── out/
      ├── src/
      |   ├── assets/
      |   |   ├── img/
      |   |   ├── scripts/
      |   |   |   └── script.js
      |   |   └── styles/
      |   |       ├── modules/
      |   |       └── style.styl
      |   ├── partials/
      |   |   ├── footer.pug
      |   |   └── header.pug
      |   ├── layouts/
      |   |   └── default.pug
      |   ├── projects.pug
      |   └── index.pug
      ├── gulpfile.js
      ├── package.json
      ├── projects.json
      ├── .editorconfig
      └── .gitignore

## Automatic Tasks

- `$ gulp build`: Compile, concat and minify all files.
- `$ gulp server`: Watch the files to build and start a static server.

## Versioning

To keep better organization of releases we follow the [Semantic Versioning 2.0.0](http://semver.org/) guidelines.

## Contributing
Find on our [roadmap](https://github.com/JohnsonMauro/cssshortcut-app/issues/1) the next steps of the project ;)
<br>
Want to contribute? [Follow these recommendations](https://github.com/JohnsonMauro/cssshortcut-app/blob/master/CONTRIBUTING.md).

## License
[MIT License](https://github.com/JohnsonMauro/cssshortcut-app/blob/master/LICENSE.md) © [Johnson Mauro](https://johnsonmauro.github.io/)
