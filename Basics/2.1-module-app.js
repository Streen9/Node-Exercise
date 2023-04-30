//Importing modules to variables

const sharableNames = require('./2.2-module-names')

const sayHi = require('./2.3-module-util')

const alternativeSyntax = require('./2.4-module-alternative-syntax')

//require('./mind-grenade')  --> invoking but not importing anything

sayHi(sharableNames.john)

sayHi('local function')

sayHi(sharableNames.peter)

console.log(alternativeSyntax)

console.log(alternativeSyntax['person']['name'][0])

console.log(alternativeSyntax[0])