const path = require('path');
const express = require('express');
const hbs = require('hbs');

console.log(__dirname);
console.log(path.join(__dirname, '../public'));

const app = express();

// Path defining for express config
const publicDirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Handlebars and locating view
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setting up static directory to server
app.use(express.static(publicDirPath));

// Dynamic rendering

// Index
app.get('', (req, res) => {
    res.render('index', {
        title : 'Weather',
        name : 'Jack Sparrow'
    });
});

// About
app.get('/about', (req, res) => {
    res.render('about', {
        title : 'About pirate',
        name : 'Jack Sparrow'
    });
});

// Help
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

app.get('/help/*', (req, res) =>{
    res.render('404-page', {
        title : '404',
        name : 'Jack Sparrow',
        errorMessage : 'Help article not found.'
    });
});

// 404 page
app.get('*', (req, res) => {
    res.render('404-page', {
        title : '404',
        name : 'Jack Sparrow',
        errorMessage : 'Page not found.'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});