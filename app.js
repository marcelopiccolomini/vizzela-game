const express = require('express');
var bodyParser = require('body-parser')
const app = express();
const handlebars = require('express-handlebars');
const hbs = handlebars.create({ defaultLayout:'main' });
const games = require("./models/games")

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.static("./src/public"));
app.get('/', function(req, res){
    res.render('home', {title:' Vizzela Games', css:['home.css']});
    })

app.post('/add-email', function(req, res){
    games.create({
        email: req.body.email
    })
    //res.redirect('/quiz')
    //res.send()
})

app.get('/quiz', function(req, res){
    res.render('quiz', {title: 'Vizzela Quiz', css:['quiz-final.css']});
    })

app.get('/final', function(req, res){
    res.render('final', {title: 'Vizzela Quiz', css:['final.css']});
    })

app.get('/memory-game', function(req, res){
    res.render('memory_game', {title: '🧠 Jogo da memória', css:['styles.css']});
    })
var porta = 8080
app.listen(porta)
console.log('Servidor rodando na porta: '+ porta)