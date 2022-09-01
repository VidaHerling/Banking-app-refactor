const express = require("express");
const cors = require("cors");
const app = express();
const dal = require('./dal.js');

// serve static files from public directory
app.use(express.static("public"));
app.use(cors());

// create user account
app.get('/account/create/:name/:email/:password', function(req, res){
  dal.createAccount(req.params.name, req.params.email, req.params.password)
    .then((user) => {
      console.log(user);
      res.send(user);
    })
});

// // user login
// app.get('/account/login/:email/:password', function(req, res){
//   res.send({
//     email: req.params.email,
//     password: req.params.password
//   });
// });

// // user deposit, withdraw and balance
app.get('/account/deposit/:email/:amount', function(req, res){
  dal.deposit(req.params.email, req.params.amount)
    .then(user => {
      console.log(user);
      res.send(user);
    })
});

app.get('/account/withdraw/:email/:amount', function(req, res){
  dal.withdraw(req.params.email, req.params.amount)
    .then(user => {
      console.log(user);
      res.send(user);
    })
});

app.get('/account/balance/:email', function(req, res){
  dal.balance(req.params.email)
    .then(user => {
      console.log(user)
      res.send(user)
    })
});

// all accounts
app.get('/account/all', function(req, res){
  dal.allUsers()
    .then(users => {
      console.log(users);
      res.send(users);
    });
});

const port = 3000;
app.listen(port, console.log("Running on port: " + port));