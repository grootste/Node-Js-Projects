const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + encodeURIComponent(latitude) + '&lon=' + encodeURIComponent(longitude) + '&exclude={part}&appid=95149d295c0d6ec477b50fe633e071c6'
    
    request({ url: url, json: true}, (error, response) => {
        if(error){
           callback('Unable to connect to weather serices!!', undefined) 

        }else if (response.body.error){
            callback('Nothing to Geocode', undefined)
        } 
        else{ 
                callback(undefined, 'There are ' + response.body.current.weather[0].description + '.  It is currently  ' + response.body.current.temp  + '  Kelvin out.    There is a '+ response.body.hourly[0].pop + '% chances of rain.')
        } 
       
    }
)

}

module.exports = forecast