const mongo = require('mongodb').MongoClient;

mongo.connect(
  'mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    if (err) {
      console.log('Connection error: ', err);
      throw err;
    }

    const db = client.db('news');
    const users = db.collection('users');

    users.insertOne({"name": "Ruslan", "age": 19, languages: ["english", "spanish"]},
      function(err, result) {   
        if(err){ 
          return console.log(err);
        }
        console.log(result.ops);
        client.close();
      }
    )

    console.log('finish');
  }
)
