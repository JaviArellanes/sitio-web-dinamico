const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials')

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
    res.render('index', {
        autor : 'Javier Arellanes',
        year : new Date().getFullYear(),
        title : 'Inicio'
    });
});

app.get('/picasso', (req, res)=>{
    res.render('picasso', {
        autor : 'Javier Arellanes',
        year : new Date().getFullYear(),
        title : 'Pablo Picasso'
    });
});

app.get('/vincent', (req, res)=>{
    res.render('van_gogh', {
        autor : 'Javier Arellanes',
        year : new Date().getFullYear(),
        title : 'Vincent Van Gogh'
    });
});

app.get('/leonardo', (req, res)=>{
    res.render('davinci', {
        autor : 'Javier Arellanes',
        year : new Date().getFullYear(),
        title : 'Leonardo Da Vinci'
    });
});

app.get('/goya', (req, res)=>{
    res.render('goya', {
        autor : 'Javier Arellanes',
        year : new Date().getFullYear(),
        title : 'Francisco de Goya'
    });
});

app.listen(3000, ()=>{
    console.log('Escuchando el puerto 3000')
});