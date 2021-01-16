const chalk = require('chalk')
const getNotes = require('./notes.js')

const msg = getNotes('My name is Baibhav !!!!!!')
console.log(msg)

const greenmsg = chalk.blue.inverse.bold('Sucesssss!!!!!!!!!')
console.log(greenmsg)

const command = process.argv[2]

if(command == 'add'){
    console.log('Adding note')
} else if( command == 'remove'){
    console.log('Removing note!!')
}