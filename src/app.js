const path = require('path');
const express = require('express');
const hbs = require('hbs');
const app = express();
const MongoClient = require('mongodb').MongoClient;

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials');

//Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//Setup status directory to serve
app.use(express.static(publicDirectoryPath));

//DB stuff
const uri = "mongodb+srv://SerasAlin:SerasAlin96@elderom-mqw6m.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//heroku
const port = process.env.PORT || 3000

client.connect((err, database) => {
    db = database.db("elderom_cluj");
    app.listen(port, function () {
    })
});

app.get('', (req, res) => {
    res.render('index', {
        title:"Elderom Cluj-Napoca"
    })
});

app.get('/galerie/litere-volumetrice', async(req, res) => {
    try{
        await db.collection('litere_volumetrice').find().toArray(function (err, result) {
            if (err) {
                return console.log(err)
            }
            res.render('litereVolumetrice',
                {
                    data: result,
                    title: "Elderom-Litere-volumetrice"
                })
        });
    } catch(err) {
        console.log(err);
    }
});

app.get('/galerie/mobilier-iluminare',async(req, res) => {
    try{
        await db.collection('mobilier_iluminare').find().toArray(function (err, result) {
            if (err) {
                return console.log(err)
            }
            res.render('mobilier',
                {
                    data: result,
                    title: "Elderom-Mobilier"
                })
        });
    } catch(err) {
        console.log(err);
    }
});

app.get('/galerie/panouri-reclame', async(req, res) => {
    try{
        await db.collection('panouri_reclame').find().toArray(function (err, result) {
            if (err) {
                return console.log(err)
            }
            res.render('reclame',
                {
                    data: result,
                    title: "Elderom-Reclame"
                })
        });
    } catch(err) {
        console.log(err);
    }
});

app.get('/galerie/standuri-expo-totemuri', async(req, res) => {
    try{
        await db.collection('standuri_expo_totemuri').find().toArray(function (err, result) {
            if (err) {
                return console.log(err)
            }
            res.render('standuriExpo',
                {
                    data: result,
                    title: "Elderom-Standuri-Expo"
                })
        });
    } catch(err) {
        console.log(err);
    }
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
                    title: "Elderom-Unicate"
                })
        });
    } catch(err) {
        console.log(err);
    }
});

app.get('/galerie/*', (req, res) => {
    res.render('404', {
        title: "404",
        subtitle1:"Page Not Found",
        subtitle2:"Pagina nu a fost gasita"
    })
});

app.get("*", (req, res) => {
    res.render('404', {
        title: "404",
        subtitle1:"Page Not Found",
        subtitle2:"Pagina nu a fost gasita"
    })
});
