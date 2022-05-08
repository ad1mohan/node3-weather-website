const request = require('request')
const apiKey = '64e7faf175f30c64c9f41c45a50b2c80'

const forecast = (location,callBack)=>{
    const url = 'http://api.weatherstack.com/current?access_key='+apiKey+'&query='+location+'&units=s'
    request(
        {url:url, json:true},
        (error, response)=>{
            let msg = ''
            if (error){
                msg = 'Unable to connect to server.!'
            } 
            else if (response.body.error){
                msg = response.body.error.info
            }
            else{
                let place = response.body.location.name
                let weather_descriptions = response.body.current.weather_descriptions[0]
                msg = 'Here\'s weather forecast of '+ place + '. You might face '+weather_descriptions+' today.'
            }
            callBack(msg)
        })
    
        
}

module.exports = forecast