// context is shared globally
// add Router functionalites
const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;

// add UserContext functionality
const UserContext = React.createContext(null);

// add a shared Card component
function Card(props){
  const classes = () => {
    const bgcolor = props.bgcolor;
    return (
      `card text-bg-${bgcolor} mb-3`
    )
  }
  return(
    <div className={classes()} style={{maxWidth: "50rem"}}>
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        {props.title && (<h5 className="card-title">{props.title}</h5>)}
        {props.text && (<p className="card-text">{props.text}</p>)}
        {props.body}
        {props.status && (<div id="status">{props.status}</div>)}
      </div>
    </div>
  )
}

function BankForm(props){
  const {name, email, amount, buttonName, password, setShow} = props;
  const [inputs, setInputs] = React.useState({});
  const ctx = React.useContext(UserContext);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}))
    console.log(`name: ${name}, value:${value}, inputs: ${JSON.stringify(inputs)}`)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(buttonName === "Create Account"){
      ctx.users.push(inputs);
      setShow(false);
    }
    return;
  }

  return(
    <form style={{maxWidth: "20rem"}}>
      {name && 
        <label>
          Name<br/>
          <input 
            type="text" 
            value={inputs.name || ""}
            name="name" 
            placeholder="Enter Name" 
            onChange={handleChange}/>
            <br/>
        </label>
      }
      
      {email &&
        <label>
          Email<br/>
          <input 
            type="email" 
            value={inputs.email || ""} 
            name="email"
            placeholder="Enter Email" 
            onChange={handleChange}/><br/>
        </label>
      }

      {amount &&
        <label>
          Amount<br/>
          <input 
            type="number" 
            value={inputs.amount || ""} 
            name="amount"
            placeholder="Enter Amount" 
            onChange={handleChange}/><br/>
        </label>
      }   
   
      {password &&
        <label>
          Password<br/>
          <input 
            type="password" 
            value={inputs.password || ""}
            name="password" 
            placeholder="Enter Password" 
            onChange={handleChange}/><br/>
        </label>
      }

      <br/><br/>
      <button className="btn btn-success" onClick={handleSubmit}>{buttonName}</button>
    </form>
  )
}