const fs =  require('fs')

const book = {
    "name": "Andrew",
    "planet": "Earth",
    "age" : 27
}
  
//const bookJSON = JSON.stringify(book)



//const dataBuffer = fs.readFileSync('1-json.json')

const dataBuffer = fs.readFileSync('data.json')



const dataJSON =  dataBuffer.toString()

const data = JSON.parse(dataJSON)

data.name="Baibhav"
data.planet = "Earth"
data.age ="23"


const bookJSON = JSON.stringify(data)
fs.writeFileSync('data.json', bookJSON)
console.log(bookJSON)