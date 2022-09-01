const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
let db = null;

//connect to mongo

MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client){
  console.log("Connected successfully to mongodb");

  // connect to my banking-app database
  db = client.db("banking-app");
});

// create user account
function createAccount(name, email, password){
  return new Promise((resolve, reject) => {
    const collection = db.collection('users');
    const doc = {name, email, password, balance: 0};
    collection.insertOne(doc, {w:1}, function(err, result){
      err ? reject(err) : resolve(doc);
    });
  })
}

// all users
function allUsers(){
  return new Promise((resolve, reject) => {
    let customers = db
      .collection('users')
      .find({})
      .toArray(function(err, docs){
        err ? reject(err) : resolve(docs);
      });
  })
}

module.exports = {createAccount, allUsers};