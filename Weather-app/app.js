const geoCode = require('./Utils/geocode.js');
const foreCast = require('./Utils/forcast.js');
const address = process.argv[2];

if (!address) {
    console.log('Please for f@#k sake provide an address!');
} else {
    geoCode(address, (error, {latitude, longitude, location}) => {
        if (error) {
            return console.log(error);
        }
        foreCast(latitude, longitude, (error, forcastData) => {
            if (error) {
                return console.log(error);
            }
            console.log(location);
            console.log(forcastData);
        });
    });    
}