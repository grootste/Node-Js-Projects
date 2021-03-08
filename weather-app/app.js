const request = require('request')

// const url ='https://api.openweathermap.org/data/2.5/onecall?lat=27.46&lon=85.27&exclude={part}&appid=95149d295c0d6ec477b50fe633e071c6'

// request({ url: url, json: true}, (error, response) => {

//     if(error){
//         console.log('Unable to connect to weather serices!!') 

//     }else if (response.body.error){
//         console.log('Nothing to Geocode')
//     } 
//     else{
//         console.log('There are some ',response.body.current.weather[0].description,'It is currently',response.body.current.temp - 273.15, 'Farenheight out. There is a ', response.body.hourly[0].pop, '% chances of rain.')
//     } 
   
// })

//Geo  coding

// const geocodeURL ='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZ3Jvb3RzdGUiLCJhIjoiY2tseHFtM2g3M2N3cjJvbjF6YWRocjV6NSJ9.xTANt32PCfs-Rp6CIzPeEw'

// request({ url: geocodeURL, json: true}, (error, response) => {
//     if(error){
//         console.log('Unable to connect to geocoding services ')
//     }else if(response.body.message){
//         console.log('Not Authorized - Invalid Location')
//     }
//     else{
//     const latitude =response.body.features[0].center[1];
//     const longitude =response.body.features[0].center[0];
//     console.log(latitude, longitude)}
// })


const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZ3Jvb3RzdGUiLCJhIjoiY2ttMHE0NG5nMWxpczJ3cnp3aTRjbGNpaSJ9.8d3gd4DBG_ylRR-AmdBGZw'
    
    request({ url: url, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to geocoding services ', undefined)
        }
        else if ( response.body.features.length === 0){
            callback('Unable to find the location. Try another search', undefined)
        }
        else{
            callback(undefined, {
                latitude :response.body.features[0].center[1],
                longitude :response.body.features[0].center[0],
                location : response.body.features[0].place_name
            })
        }
})

}


geocode('Philadelphia New York', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})