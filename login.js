function Login(){
  const [show, setShow] = React.useState(true);
  return (
    <div>
      <Card 
          bgcolor = "Secondary"
          header="Login"
          body={show ? 
          <LoginForm setShow={setShow}/> :
          <Logout setShow={setShow}/>}
      />
    </div>
  )
}

function LoginForm(props){
  const ctx = React.useContext(UserContext);
  const users = ctx.users;
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleChange = () => {
    (users.every(user => user.email === email & user.password === password)) ? 
    props.setShow(false) :
    (<h5>The email and password do not match.</h5>);
    console.log(`email: ${email}, password:${password}`);
  }
  
  return(
    <div>
    Email<br/>
    <input type="email" value={email} placeholder="Enter Email" 
    onChange={e => setEmail(e.target.value)}/><br/>
    
    Password<br/>
    <input type="password" value={password} placeholder="Enter Password" 
    onChange={e => setPassword(e.target.value)}/>
    <br/><br/>
          
    <button className="btn btn-success" onClick={handleChange}>Login</button>
    </div>
  )
}

function Logout(props){
  return (
    <div>
      <h5>Login Successfully</h5>
      <button className="btn btn-success" onClick={e => props.setShow(true)}>Logout</button>
    </div>
  )
}