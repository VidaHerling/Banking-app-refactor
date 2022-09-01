const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, client){
  console.log('Connected');

  // set up database
  const dbName = "banking-app";
  const db = client.db(dbName);

  // new user
  let name = 'user' + Math.floor(Math.random() * 1000);
  let email = name + '@mit.edu';

  // insert into the database
  let collection = db.collection('customers');
  let doc = { name, email };
  collection.insertOne(doc, {w:1}, function(err, result){
    console.log('Document insert');
  });

  let customers = db
    .collection('customers')
    .find()
    .toArray(function(err, docs){
      console.log('Collection: ', docs);

      // clean up
      client.close();
    })
});



