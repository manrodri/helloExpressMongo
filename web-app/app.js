const express = require('express');
const database = require('./database');
const app = express();
const port = 3000;

database.initializeMongo();


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/testFind', function(req, res){
    database.Kitten.find(function(err, kittens){
        if(err) return res.error(err);
        console.log(kittens);
        res.json(kittens);
    });
});