const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err) {
        return console.log('Unable to connect to the server.');
    }

    console.log('Connected to MongoDb');
    const db = client.db('TodoApp');

    db.collection('Todos').insertOne({
        text: 'Something else to do',
        completed: true
    }, (err, result) => {
        if(err) {
            return console.log('Unable to insert to Todos collection');
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    })

    // db.collection('Users').insertOne({
    //     name: 'Kestutis',
    //     age: 31,
    //     location: 'Marijampole'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert to Users collection');
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //     console.log(result.ops[0]._id.getTimestamp());
    // })

    client.close();
});