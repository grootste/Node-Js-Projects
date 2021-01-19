const chalk = require('chalk')
const { demandOption, argv } = require('yargs')
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
        }
    },
    handler : function () {
        console.log('Title:' + argv.title)
    }
})

// create remove command
yargs.command({
    command : 'remove',
    describe : 'Removing the note ',
    handler :  function() {
        console.log('Removing a note')
    }
    
})

//create read
yargs.command({
    command: 'read',
    describe: 'Read the note',
    handler: function(){
        console.log('Reading the note')
    }
})

//create list
yargs.command({
    command:'list',
    describe:'Listing the note',
    handler : function (){
        console.log('Listing the note')
    }
})

//add, remove, read, list
yargs.parse()

