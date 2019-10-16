const request = require('request');

const foreCast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/61c7f70822e612a390695ff5e6d891cf/' + latitude +','+ longitude ;
    request ({url : url, json : true}, (error, response) => {
        if (error) {
            callback('Unable to connect weather services.', undefined);
        } else if (response.body.error) {
            callback('Unable to find.', undefined);
        } else {
            callback(undefined, response.body.daily.data[1].summary + ' It is currently ' + response.body.daily.data[1].temperatureHigh + ' Degrees out. There is a ' + response.body.daily.data[1].precipProbability + '% chance of rain.');
        }
    });
}

module.exports = foreCast;