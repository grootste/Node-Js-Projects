const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')


const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) =>{
//     if(req.method === "GET"){
//             res.send("GET request are disabled")
//     }
//     else{
//         next()
//     }
// })

// app.use((req, res, next) =>{
//     if(req.method ==="POST"){
//         res.status(503).send("Server Under Maintainence")
//     }
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () =>{
    console.log('Server is up on ' + port)
})

const pet ={
    name:'Hal'
}

pet.toJSON = function (){
    return {}
}
console.log(JSON.stringify(pet))