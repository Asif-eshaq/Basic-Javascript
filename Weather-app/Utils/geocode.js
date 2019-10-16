const request = require('request');

const geoCode = (address, callback) => {
    const url = 'http://api.mapbox.com/geocoding/v5/mapbox.places/' + address +'.json?access_token=pk.eyJ1IjoiYXNpZi1lc2hhcS0xIiwiYSI6ImNrMXQ2cTRxdDBucWQzZnA0MWtyeTd1eTYifQ._j9iVRC_rwvKUuc4M4YURA&limit=1'
    request({url : url, json : true}, (error, response) => {
        if (error) {
            callback('Unable to connect location services.', undefined);
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try again.', undefined);
        } else {
            callback(undefined, {
                latitude : response.body.features[0].center[0],
                longitude : response.body.features[0].center[1],
                location : response.body.features[0].place_name
            });
        }
    });
}

module.exports = geoCode;