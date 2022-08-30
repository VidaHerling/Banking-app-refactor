function App(){
  return (
    <HashRouter>
      <Navbar />
      <UserContext.Provider value={{users: [{name: "Peter Paker",
      email: "peter@mit.edu",
      balance: 0,
      password: "secret"}]}}>
        <div className="container">
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/Login/" component={Login} />
          <Route path="/Deposit/" component={Deposit} />
          <Route path="/Withdraw/" component={Withdraw} />
          <Route path="/Balance/" component={Balance} />
          <Route path="/AllData/" component={AllData} />
        </div>
      </UserContext.Provider>
    </HashRouter>

  )
}

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(<App />);