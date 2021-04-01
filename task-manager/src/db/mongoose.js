const mongoose = require ('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser : true,
    useCreateIndex: true
})

// const User =mongoose.model('User', {
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     email:{
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error('Email is invalid')
//             }
//         }
//     },
//     password:{
//         type: String,
//         required: true,
//         minlength: 7,
//         trim: true,
//         validate(value) {
//             if(value.toLowerCase().includes('password')){
//                 throw new Error('Password cannot be set to password')
//             }
//         }
//     },
//     age :{
//         type: Number,
//         default: 0,
//         validate(value){
//             if(value < 0){
//                 throw new Error('Age must be a postive number')
//             }
//         }
//     }
  
// })


// const task = mongoose.model('tasks', {
//     description: {
//         type : String,
//         required: true,
//         trim: true
//     },
//     completed: {
//         type : Boolean,
//         default : false 
//     }
// })

// const tasks = new task({
//     description : "Takecare of the plant",
    
// })

// tasks.save().then(() =>{
//     console.log(tasks)
// }).catch((error) =>{
//     console.log('Error!',  error)
// })