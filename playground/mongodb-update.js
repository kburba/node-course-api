const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err) {
        return console.log('Unable to connect to the server.');
    }

    console.log('Connected to MongoDb');
    const db = client.db('TodoApp');
    
    // findOneAndUpdate
    db.collection('Users').findOneAndUpdate({
        name: 'Kestutis'
    }, { 
        $inc: 
            { age: +1 }
    }, { returnOriginal : false 
    }).then((result) => {
        console.log(result);
    })

    client.close();
});