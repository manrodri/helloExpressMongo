const mongoose = require('mongoose');
const DATABASE_CONNECTION = 'mongodb:/mongo/test';

var kittenSchema = mongoose.Schema({
    name: String
});
Kitten = exports.Kitten = mongoose.model('Kitten', kittenSchema);

exports.initializeMongo = function(){
    mongoose.connect(DATABASE_CONNECTION);
    console.log("Trying to connect to " + DATABASE_CONNECTION);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error: we might not be as connected as we thought!'));
    db.once('open', function(){
        console.log('We are connected you and I');
        addRandomCat();
    });
};

function addRandomCat(){
    var silence = new Kitten({
        name: 'silence' + Math.random()
    });
    silence.save(function(err){
        if(err){
            return console.log(err);
        }
        else{
            console.log(silence.name + " added to database")
        }
    });
}
