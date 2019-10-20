const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/61c7f70822e612a390695ff5e6d891cf/' + latitude +','+ longitude;
    request ({url, json : true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect weather services.', undefined);
        } else if (body.error) {
            callback('Unable to find.', undefined);
        } else {
            callback(undefined, body.daily.data[1].summary + ' It is currently ' + body.daily.data[1].temperatureHigh + ' Degrees out. There is a ' + body.daily.data[1].precipProbability + '% chance of rain.');
        }
    });
}

module.exports = forecast;