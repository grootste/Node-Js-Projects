const request = require('request')
const url ='http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=95149d295c0d6ec477b50fe633e071c6'

request({ url: url}, (error, response) => {
    console.log('response')
})