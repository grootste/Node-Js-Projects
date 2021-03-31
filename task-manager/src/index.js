const express = require('express')
require('./db/mongoose')
const User = require('./models/user')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', (req, res)=>{
    const me = new User(req.body)

    me.save().then(() =>{
        res.send(user)
    }).catch(()=>{

    })

})
app.listen(port, () =>{
    console.log('Server is up on ' + port)
})