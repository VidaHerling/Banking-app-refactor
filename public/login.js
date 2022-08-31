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
  const [inputs, setInputs] = React.useState({});
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}));
    console.log(`name: ${name}, value:${value}, inputs: ${JSON.stringify(inputs)}`)
  }
    
  const validation = () => {
    console.log(JSON.stringify(inputs));
    const value = users.filter(user => (user.email === inputs.email) && (user.password === inputs.password));
    if(value[0]) return true;
    else return false
  }
  const handleSubmit = () => {
    validation() ? 
    props.setShow(false) :
    alert("The email and password do not match.");
    console.log(`email: ${email}, password:${password}`);
  }
  
  return(
    <div>
    Email<br/>
    <input 
      type="email" 
      name="email"
      value={inputs.email || ""} 
      placeholder="Enter Email" 
      onChange={handleChange}
    /><br/>
    
    Password<br/>
    <input 
      type="password" 
      name="password"
      value={inputs.password || ""} 
      placeholder="Enter Password" 
      onChange={handleChange}
      /><br/><br/>
          
    <button className="btn btn-success" onClick={handleSubmit}>Login</button>
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