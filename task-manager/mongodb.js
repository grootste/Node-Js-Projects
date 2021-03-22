//CRUD create read update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL= 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client)=> {
    if(error){
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    // db.collection('user').insertOne({
    //     name: 'Baibhav',
    //     Age: 24
    // }, (error, result) =>{
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })
    
    db.collection('task').insertMany([
    {
        description: 'Complete the task manager app',
        completed : false
    },{
        description: 'Complete Portfolio website',
        completed : false
    },{
        description: 'Complete the Resime file',
        completed : true
    }
    
    ], (error, result) => {
        if(error){
            return console.log('Unable to insert user')
        }
    
        console.log(result.ops)
    })

})