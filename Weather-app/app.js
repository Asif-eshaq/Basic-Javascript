const geoCode = require('./Utils/geocode.js');
const foreCast = require('./Utils/forcast.js');

geoCode('New york', (error, data) => {
    console.log(('Error', error));
    console.log('Data', data);
    foreCast(data.latitude, data.longitude, (error, data) => {
        console.log("Error", error);
        console.log('Data', data);
    });
});

