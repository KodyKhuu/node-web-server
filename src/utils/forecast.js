const request = require('request')

const forecast = (lat, lon, callback) => {
   const url = `https://api.darksky.net/forecast/3aaf79078a5a37d62a86fd546d108a2e/${lat},${lon}`
   request({ url, json: true }, (err, { body }) => {
      if (err) {
         callback('Cannot make request')
      } else if (body.error) {
         callback('Unable to find location')
      } else {
         const current = body.currently
         callback(undefined, body.daily.summary + ` It is current ${current.temperature} degrees out. There is a ${current.precipProbability * 100}% chance of rain.`)   
         
      }
   })
}

module.exports = forecast