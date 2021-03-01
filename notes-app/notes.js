const fs =  require('fs')
const chalk = require('chalk')

const getNote = (a) =>{
    return a
}

const addNote = (title, body) =>{
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if(!duplicateNote){
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

const removeNote = (title) => {
    const notes = loadNotes()
    const noteTokeep = notes.filter((note) => note.title !== title)


if (notes.length > noteTokeep.length){
    console.log(chalk.green.inverse('Notes Removed') )
    saveNotes(noteTokeep)
}
else{
     console.log(chalk.red.inverse('Notes not found to be removed'))
}

}

const listNotes =() =>{
    const notes = loadNotes()
    console.log(chalk.inverse('Your Notes'))

    notes.forEach((note) => {
        console.log(note.title)
    })
     

}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note)=> note.title ==title)
    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }
    else{
        console.log(chalk.red.inverse('Note not found'))
    }

}

const saveNotes = (notes) =>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)

}  

const loadNotes = () => {

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
    removeNote : removeNote,
    listNotes: listNotes,
    readNote: readNote
}