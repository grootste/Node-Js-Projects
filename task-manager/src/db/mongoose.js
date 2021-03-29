const mongoose = require ('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser : true,
    useCreateIndex: true
})

const user =mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    age :{
        type: Number,
        validate(value){
            if(value < 0){
                throw new Error('Age must be a postive number')
            }
        }
    }
})

const me = new user({
    name : 'Baibhav',
    age: 'nice'
})

me.save().then(() =>{
    console.log(me)
}).catch((error) => {
    console.log('Error!', error)
    console.log("heloo guys this data has got error")
})

// const task = mongoose.model('Task', {
//     description: {
//         type : String
//     },
//     completed: {
//         type : Boolean
//     }
// })

// const work = new task({
//     description : "water the plant",
//     completed : false
// })

// work.save().then(() =>{
//     console.log(work)
// }).catch((error) =>{
//     console.log('Error!',  error)
// })