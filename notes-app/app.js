const chalk = require('chalk')
const getNotes = require('./notes.js')

const msg = getNotes('My name is Baibhav !!!!!!')
console.log(msg)

const greenmsg = chalk.blue.inverse.bold('Sucesssss!!!!!!!!!')
console.log(greenmsg)