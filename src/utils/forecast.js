const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=c171d801d32a9ae0df638cb00be3d02b&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error){
            callback('Unable to connect to forecast service!', undefined)
        } else if ( body.error ) {
            callback('Unable to find forecast weather!. Try again', undefined)
        } else {
            callback(undefined, 
                body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degress out. It feels like ' + body.current.feelslike + ' degress out. The humidity is ' + body.current.humidity + '%'
            )
        }
    })
}

module.exports = forecast