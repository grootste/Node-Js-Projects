const chalk = require('chalk')
const getNotes = require('./notes.js')

const msg = getNotes('My name is Baibhav !!!!!!')
console.log(msg)

const greenmsg = chalk.green.inverse.bold('My name is Baibhav Singh!!!!!!!')
console.log(greenmsg)