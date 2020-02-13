const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup status directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        
    })
})

app.get('/page-top', (req, res) => {
    res.render('index', {
        
    })
})

app.get('/servicii', (req, res) => {
    res.render('index', {
        
    })
})

app.get('/portfolio', (req, res) => {
    res.render('index', {
        
    })
})

app.get('/tehnologii', (req, res) => {
    res.render('index', {
        
    })
})

app.get('/despre', (req, res) => {
    res.render('index', {
        
    })
})

app.get('/contact', (req, res) => {
    res.render('index', {
        
    })
})

app.get('/galerie/litere-volumetrice', (req, res) => {
    res.render('litereVolumetrice', {
       
    })
})

app.get('/galerie/mobilier', (req, res) => {
    res.render('mobilier', {
       
    })
})

app.get('/galerie/reclame', (req, res) => {
    res.render('reclame', {
       
    })
})

app.get('/galerie/standuri-expo', (req, res) => {
    res.render('standuriExpo', {
       
    })
})

app.get('/galerie/unicate', (req, res) => {
    res.render('unicate', {
       
    })
})

app.get('/galerie/*', (req, res) => {
    res.render('404', {
       
    })
})

app.get("*", (req, res) => {
    res.render('404', {
    
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})