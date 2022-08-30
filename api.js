// context is globally shared
const ctx = {
  "accounts": [
    {
      "name": "Peter Paker",
      "email": "peter@mit.edu",
      "balance": 0,
      "password": "secret"
    }
  ]
}

const createAccount = () => {
  //get handles on the elements
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const status = document.getElementById("accountStatus");

  ctx.accounts.push(
    {
      "name": name.value,
      "email": email.value,
      "balance": 0,
      "password": password.value
    }
  );
  // clear the fields
  name.value = "";
  email.value = "";
  password.value = "";
  status.innerHTML = "Account created successfully!"
}

const showAllData = () => {
  const status = document.getElementById("allDataStatus");
  status.innerHTML = JSON.stringify(ctx.accounts);
}
