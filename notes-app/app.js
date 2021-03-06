const chalk = require('chalk')
const { argv } = require('yargs')
const yargs = require('yargs')
const { readNote } = require('./notes.js')
const notes = require('./notes.js')


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

    handler(argv) {
       notes.addNote(argv.title, argv.body)
    }
})

// create remove command
yargs.command({
    command : 'remove',
    describe : 'Removing the note ',

    builder:{
        title:{
        describe :'Remove a title',
        demandOption : true,
        type: 'string'
        }
    },
 
    handler(argv) {
        notes.removeNote(argv.title)
       
    }
      
})

//create read
yargs.command({
    command: 'read',
    describe: 'Read the note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption : true,
            type: 'string'

        }
    },
   
    handler(argv){
       notes.readNote(argv.title)
    }
})

//create list
yargs.command({
    command:'list',
    describe:'Listing the note',
  
    handler(){
        notes.listNotes()
    }
})

//add, remove, read, list
yargs.parse()



