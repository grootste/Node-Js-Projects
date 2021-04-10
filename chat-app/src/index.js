 const path = require('path')
 const express = require('express')

 const app =express()
 cosnt 

 const port = process.env.PORT || 3000

 const publicDirectoryPath=  path.join(__dirname, '../public')
 console.log("hello from the other side")
 
 app.listen(port, ()=>{
     console.log('Server is up on '+ port)
 })