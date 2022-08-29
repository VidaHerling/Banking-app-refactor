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
        <a class="nav-link active" aria-current="page" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#CreateAccount">Create Account</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#Login">Login</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#Deposit">Deposit</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#Withdraw">Withdraw</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#Balance">Balance</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#AllData">All Data</a>
      </li>
    </ul>
  </div>
</div>
</nav>
`;

const navigation = document.getElementById("navigation");
navigation.innerHTML += ui.navigation;