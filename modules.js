let ui = {};

ui.navigation = `<nav class="navbar navbar-expand-lg bg-light">
<div class="container-fluid">
  <a class="navbar-brand" href="#">Steadfast Bank</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#" onClick="loadHome()">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#CreateAccount" onClick="loadCreateAccount()">Create Account</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#Login" onClick="loadLogin()">Login</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#Deposit" onClick="loadDeposit()">Deposit</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#Withdraw" onClick="loadWithdraw()">Withdraw</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#Balance" onClick="loadBalance()">Balance</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#AllData" onClick="loadAllData()">All Data</a>
      </li>
    </ul>
  </div>
</div>
</nav>
`;

const navigation = document.getElementById("navigation");
navigation.innerHTML += ui.navigation;
const page = document.getElementById("root");

ui.home = `
<div class="card" style="width: 18rem;">
  <img src="bank_account.jpeg" class="card-img-top" alt="bank account">
  <div class="card-body">
    <h5 class="card-title">Steadfast Bank Homepage</h5>
    <p class="card-text">Welcome to the bank!</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
`;
const loadHome = () => {
  page.innerHTML = ui.home;
}

ui.createAccount = `
<div class="card" style="width: 18rem;">
  <img src="bank_account.jpeg" class="card-img-top" alt="bank account">
  <div class="card-body">
    <h5 class="card-title">Create Account</h5>
    Name<br>
    <input type="text" id="name" placeholder="Name"><br>
    Email<br>
    <input type="email" id="email" placeholder="Email"><br>
    Password<br>
    <input type="password" id="password" placeholder="Email"><br>
    <button class="btn btn-primary" onClick="createAccount()">Create Account</button>
    <div id="accountStatus"></div>
  </div>
</div>
`;

const loadCreateAccount = () => {
  page.innerHTML = ui.createAccount;
}

ui.login = `
<div class="card" style="width: 18rem;">
  <img src="bank_account.jpeg" class="card-img-top" alt="bank account">
  <div class="card-body">
    <h5 class="card-title">Log in</h5>
    <input id="email" type="email" placeholder="Email">
    <input id="password" type="password" placeholder="Password">
    <a href="#" class="btn btn-primary">Login</a>
  </div>
</div>
`;

const loadLogin = () => {
  page.innerHTML = ui.login;
}

ui.deposit = `
<div class="card" style="width: 18rem;">
  <img src="bank_account.jpeg" class="card-img-top" alt="bank account">
  <div class="card-body">
    <h5 class="card-title">Log in</h5>
    <input id="email" type="email" placeholder="Email">
    <input id="password" type="password" placeholder="Password">
    <a href="#" class="btn btn-primary">Login</a>
  </div>
</div>
`;

const loadDeposit = () => {
  page.innerHTML = ui.deposit;
}

ui.withdraw = `
<div class="card" style="width: 18rem;">
  <img src="bank_account.jpeg" class="card-img-top" alt="bank account">
  <div class="card-body">
    <h5 class="card-title">Log in</h5>
    <input id="email" type="email" placeholder="Email">
    <input id="password" type="password" placeholder="Password">
    <a href="#" class="btn btn-primary">Login</a>
  </div>
</div>
`;

const loadWithdraw = () => {
  page.innerHTML = ui.withdraw;
}

ui.balance = `
<div class="card" style="width: 18rem;">
  <img src="bank_account.jpeg" class="card-img-top" alt="bank account">
  <div class="card-body">
    <h5 class="card-title">Log in</h5>
    <input id="email" type="email" placeholder="Email">
    <input id="password" type="password" placeholder="Password">
    <a href="#" class="btn btn-primary">Login</a>
  </div>
</div>
`;

const loadBalance = () => {
  page.innerHTML = ui.balance;
}

ui.allData = `
<div class="card" style="width: 18rem;">
  <img src="bank_account.jpeg" class="card-img-top" alt="bank account">
  <div class="card-body">
    <h5 class="card-title">All data display here</h5>
    <button class="btn btn-success" onClick="showAllData()">Show all accounts data</button>
    <div id="allDataStatus"></div>
  </div>
</div>
`;

const loadAllData = () => {
  page.innerHTML = ui.allData;
}

loadHome();