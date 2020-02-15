const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()
const MongoClient = require('mongodb').MongoClient
const async = require("async");

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

//DB stuff
const uri = "mongodb+srv://SerasAlin:SerasAlin96@elderom-mqw6m.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect((err, database) => {
    db = database.db("elderom_cluj")
    app.listen(3000, function () {
    })
})

app.get('', (req, res) => {
    res.render('index', {
        
    })
})

app.get('/galerie/litere-volumetrice', (req, res) => {
    res.render('litereVolumetrice', {
       
    })
});

app.get('/galerie/mobilier-iluminare', (req, res) => {
    res.render('mobilier', {
       
    })
});

app.get('/galerie/panouri-reclame', (req, res) => {
    res.render('reclame', {
       
    })
});

app.get('/galerie/standuri-expo-totemuri', (req, res) => {
    res.render('standuriExpo', {
       
    })
});

app.get('/galerie/unicate-diverse', async(req, res) => {
    try{
        await db.collection('unicate').find().toArray(function (err, result) {
            if (err) {
                return console.log(err)
            }
            res.render('unicate',
                {
                    data: result,
                })
        });
    } catch(err) {
        console.log(err);
    }
});

app.get('/galerie/*', (req, res) => {
    res.render('404', {
       
    })
});

app.get("*", (req, res) => {
    res.render('404', {
    
    })
})
