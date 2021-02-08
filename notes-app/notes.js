const fs = require('fs')
const chalk = require('chalk')

const getNote = function(a){
    return a
}

const addNote = function(title, body){
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note){
        return note.title === title

    })

    if(duplicateNotes.length ===0){
        notes.push({
        title: title,
        body : body
    })

     saveNotes(notes)
     console.log('New Notes added!!!!')
} else {
    console.log('Note title taken')
}
}

const removeNote = function(title){
    const notes = loadNotes()
    const noteTokeep = notes.filter(function(note){
        return note.title !== title

    })


if (notes.length > noteTokeep.length){
    console.log(chalk.green.inverse('Notes Removed') )
    saveNotes(noteTokeep)
}
else{
     console.log(chalk.red.inverse('Notes not found to be removed'))
}

}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)

}

const loadNotes = function(){

    try{
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)

    }catch(e){
        return []
    }
    

}
 
module.exports = {
    getNote : getNote,
    addNote : addNote,
    removeNote : removeNote
}