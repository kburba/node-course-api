const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err) {
        return console.log('Unable to connect to the server.');
    }

    console.log('Connected to MongoDb');
    const db = client.db('TodoApp');
    
    // deleteMany
    db.collection('Todos').deleteMany({
                _id: new ObjectID('5b7b1ed21f80db2ee83c2c77')
            }, (result) => {
                console.log('Success');
            })

    // deleteOne
        
    // findOneAndDelete

    client.close();
});