const chalk = require('chalk')
const { argv } = require('yargs')
const yargs = require('yargs')
const getNotes = require('./notes.js')


// custom version

yargs.version('1.1.0')


//create add comand
yargs.command({
    command: 'add',
    describe : 'Add a new note',
    builder:{
        title : {
            describe : 'Note title',
            demandOption : true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
  
    handler: function (argv) {
        console.log('Title:' + argv.title)
        console.log('Body:' + argv.body)
    }
})

// create remove command
yargs.command({
    command : 'remove',
    describe : 'Removing the note ',
    handler :  function() {
        console.log('Removing a note',argv)
    }
    
})

//create read
yargs.command({
    command: 'read',
    describe: 'Read the note',
    handler: function(){
        console.log('Reading the note', argv)
    }
})

//create list
yargs.command({
    command:'list',
    describe:'Listing the note',
    handler : function (){
        console.log('Listing the note', argv)
    }
})

//add, remove, read, list
yargs.parse()



