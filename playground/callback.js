

const add =(( a, b, callback) =>{
    setTimeout(()=>{
        const sum = a+b;
        console.log('2 sec are up')
        callback(sum)
    }, 2000)
})

add(1, 4, (sum) => {
    console.log(sum)
})
  