const express = require('express');
const app = express();
app.get('/', function(req, res){
    res.sendFile(__dirname+"/src/quiz/home.html")
    })

app.listen(8080)
