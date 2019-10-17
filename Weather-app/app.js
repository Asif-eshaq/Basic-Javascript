const geoCode = require('./Utils/geocode.js');
const foreCast = require('./Utils/forcast.js');
const address = process.argv[2];

if (!address) {
    console.log('Please for f@#k sake provide an address!');
} else {
    geoCode(address, (error, data) => {
        if (error) {
            return console.log(error);
        }
        foreCast(data.latitude, data.longitude, (error, forcastData) => {
            if (error) {
                return console.log(error);
            }
            console.log(data.location);
            console.log(forcastData);
        });
    });    
}