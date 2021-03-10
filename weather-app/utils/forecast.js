const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + encodeURIComponent(latitude) + '&lon=' + encodeURIComponent(longitude) + '&exclude={part}&appid=95149d295c0d6ec477b50fe633e071c6'
    
    request({ url , json: true}, (error, {body}) => {
        if(error){
           callback('Unable to connect to weather serices!!', undefined) 

        }else if (body.error){
            callback('Nothing to Geocode', undefined)
        } 
        else{ 
                callback(undefined, 'There are ' + body.current.weather[0].description + '.  It is currently  ' + body.current.temp  + '  Kelvin out.    There is a '+ body.hourly[0].pop + '% chances of rain.')
        } 
       
    }
)

}

module.exports = forecast