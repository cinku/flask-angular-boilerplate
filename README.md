# Flask-angular-boilerplate

Simple boilerplate with Python-Flask at backend and AngularJS written in Typescript as frontend.

## Prerequisites

You will need the following things properly installed on your computer:

* [Git](http://git-scm.com/)
* [Python](https://www.python.org/)
* [Virtualenv](https://virtualenv.pypa.io/en/latest/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)

## Installation

After installing prerequisites:

1. `git clone https://github.com/cinku/flask-angular-boilerplate.git` this repository
2. Create new virtualenv `virtualenv flask-angular-boilerplate`
3. Change into new directory
4. `npm install`
5. `bower install`
6. Start virtualenv `source Scripts/activate`
7. Install pip dependencies `pip install -r requirements.txt`
8. `gulp` to compile scripts and styles
9. Run `py app.py` to start the app

## Project structure

App template is located in templates/index.html. UI-Router views are rendered into ui-view div.

`static/vendor` - Bower dependencies
`static/styles` - scss location
`static/app` - Angular app location with corresponding folders to maintain clarity
`static/release` - Compiled style/javascript
`tsconfig.json` - Typescript project configuration for tsc