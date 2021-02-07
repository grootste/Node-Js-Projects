const fs = require('fs')

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
    const removableNote = notes.filter(function(note){
        return note.title === title

    })


if (removableNote.length===0){
    console.log('No notes found from that title')
}
else{
    const remove= function(notes){
        list=[]

    }
     console.log('Notes removed')
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