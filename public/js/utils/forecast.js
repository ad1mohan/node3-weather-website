const request = require('request')
const apiKey = '64e7faf175f30c64c9f41c45a50b2c80'

const forecast = (location,callBack)=>{
    const url = 'http://api.weatherstack.com/current?access_key='+apiKey+'&query='+location+'&units=m'
    request(
        {url:url, json:true},
        (error, response)=>{
            let msg = ''
            if (error){
                msg = 'Unable to connect to server.!'
            } 
            else if (response.body.error){
                msg = response.body.error.type == "request_failed"? "Incorrect location, please try again.":pass
            }
            else{
                var filter = {
                    place: response.body.request.query,
                    localtime: response.body.location.localtime,
                    iconUrl: response.body.current.weather_icons[0],
                    temperature: response.body.current.temperature
                }
                console.log(filter)
                let place = response.body.location.name
                let weather_descriptions = response.body.current.weather_descriptions[0]
                msg = filter
            }
            callBack(msg)
        })
    
        
}

module.exports = forecast