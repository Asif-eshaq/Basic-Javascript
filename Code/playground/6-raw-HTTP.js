const https = require('https');
url = 'https://api.darksky.net/forecast/61c7f70822e612a390695ff5e6d891cf/40,-75';

const request = https.request(url, (response) => {
    let data = '';
    response.on('data', (chunk) => {
        data = data + chunk.toString();
        console.log(chunk);
    });

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    });
});

request.on('error', (error) => {
    console.log('An error', error);
    
});
request.end();