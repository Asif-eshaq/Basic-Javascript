const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geoCode = require('./Utils/geocode.js');
const forecast = require('./Utils/forcast.js');


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

// Weather
app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error : 'Please enter an address.'
        });
    }
    geoCode(req.query.address, (error, {latitude, longitude, location} = {}) => {
        if (error) {
            return res.send({error});
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({error});
            }
            res.send({
                forecast : forecastData,
                location,
                address : req.query.address
            });
        });
    });
});

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        });
    }

    console.log(req.query.search);
    
    res.send({
        products : []
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