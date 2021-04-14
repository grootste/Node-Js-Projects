const socket = io()

socket.on('message', (message)=>{
    console.log('The message is ', message)
})

// socket.on('countUpdated', (count) =>{
//     console.log('The count has been updated!!', count)
// }) 

document.querySelector('#sendMessage').addEventListener('click', ()=>{
    console.log('Clicked')
    io.emit('message')
})



