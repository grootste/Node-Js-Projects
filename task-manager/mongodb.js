//CRUD create read update delete

const { MongoClient, ObjectID} = require('mongodb') 

const connectionURL= 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'



MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client)=> {
    if(error){
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    // db.collection('users').findOne({ _id: new ObjectID("6058d7dbcd94e9148cedc870")}, (error, user)=>{
    //     if(error){
    //         return console.log('Unable to fetch the  data')
    //     }

    //     console.log(user)

    // })

    db.collection('task').find({completed : false}).toArray((error, nothing)=>{
        console.log(nothing)


    })

    db.collection('task').findOne({_id: new ObjectID("6058c8fb2a226a397c9ada88")}).toArray((error, count)=>{
        console.log(count)


    })

})