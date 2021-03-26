const mongoose = require ('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser : true,
    useCreateIndex: true
})

const user =mongoose.model('User', {
    name: {
        type: String
    },
    age :{
        type: Number
    }
})

// const me = new user({
//     name : 'Baibhav',
//     age: 'nice'
// })

// me.save().then(() =>{
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })

const task = mongoose.model('Task', {
    description: {
        type : String
    },
    completed: {
        type : Boolean
    }
})

const 