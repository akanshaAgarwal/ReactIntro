
SETUP COMMANDS : 
$ sudo npm i -g create-react-app@1.5.2
$ create-react-app react-app

The app gets created with lightweight development
server, webpack for bundling our files
and babel for compiling js code as well as some 
other tools
[zero config setup]


COMMON COMMANDS FOR USE :
$ npm start 
    [starts the development server]
$ npm run build
    [bundles app into static files for production]
$ npm test
    [starts test runner]
$ npm run eject
    [removes this tool and copies build dependencies,
    config files and scripts into app directory.]


GETTING STARTED (AFTER APP IS CREATED) :
$ cd react-app
$ npm start [launches dev server at port 3000]

In public/index.html, the div tag with id='root'
is the main container where everything goes.

Babel - pass code through babel, which is modern js 
compiler. 

All the components go into a components folder in src
Use jsx instead of js for better code completion

Jsx expressions must have a parent element 
since it gets converted to React.createelement('h1')
so we need a parent div 