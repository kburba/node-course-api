const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err) {
        return console.log('Unable to connect to the server.');
    }

    console.log('Connected to MongoDb');
    const db = client.db('TodoApp');
    
    db.collection('Todos').find().count().then((count) => {
        console.log('All todos count: ' + count);
    })

    db.collection('Todos').find({ completed: true }).toArray().then((docs) => {
        console.log('Todos:');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    })

    // client.close();
});