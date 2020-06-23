const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=ed984f457b022658c696fe597bd3549a&query=' + latitude +','+ longitude

    request({ url, json: true}, (error, {body}) => { 
        if(error){
            callback('Unable to connect to weather service! ')
        }
        else if(body.error){
            callback('Unable to find location')
        }
        else{
        callback(undefined,body.current.weather_descriptions[0]
         + '. It is currently '+ body.current.temperature + '°C. ' +
        'There is a '+ body.current.precip + '% chance of rain.')
        
        }
    }) 
}
module.exports = forecast