const path = require('path');
const express = require('express');

console.log(__dirname);
console.log(path.join(__dirname, '../public'));

const app = express();
const publicDirPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs');

app.use(express.static(publicDirPath));

// Dynamic rendering

app.get('', (req, res) => {
    res.render('index', {
        title : 'Weather',
        name : 'Jack Sparrow'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title : 'About pirate',
        name : 'Jack Sparrow'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title : 'Help page',
        name : 'Jack Sparrow'
    });
});

app.get('/weather', (req, res) => {
    res.send({
        forecast : 'It is showing',
        location : 'Daha'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});