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
    email:{
        type: String,
        required: true,
        validate(value){
            if(validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    age :{
        type: Number,
        validate(value){
            if(value < 0){
                throw new Error('Age must be a postive number')
            }
        }
    },
    password:{
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if(value.tolowerCase().includes('password')){
                throw new Error('Password cannot be set to password')
            }
        }
    }
})

// const me = new user({
//     name : 'Baibhav',
//     email: none
   
// })

// me.save().then(() =>{
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
//     console.log("heloo guys this data has got error")
// })

const task = mongoose.model('Task', {
    description: {
        type : String,
        required: true,
        trim: true
    },
    completed: {
        type : Boolean,
        default : false 
    }
})

// const task = new task({
//     description : "water the plant",
//     completed : false
// })

// work.save().then(() =>{
//     console.log(work)
// }).catch((error) =>{
//     console.log('Error!',  error)
// })