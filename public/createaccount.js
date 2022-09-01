function CreateAccount(){
  const [status, setStatus] = React.useState("");
  const [show, setShow] = React.useState(true);

  return (
    <div>
      <Card 
          bgcolor = "primary"
          header="Create Account"
          status={status}
          // body={show ? 
          // <CreateForm setShow={setShow}/> :
          // <CreateNewForm setShow={setShow}/>}
          body={show ? 
            <BankForm 
              name="name"
              email="email"
              password="password"
              buttonName="Create Account"
              setShow={setShow}
            /> :
            <CreateNewForm setShow={setShow} />
          }

      />
    </div>
  )
}

// function CreateForm(props){
//   // set states for the form values
//   const [name, setName] = React.useState("");
//   const [email, setEmail] = React.useState("");
//   const [password, setPassword] = React.useState("");

//   const handleSubmit = () => {
//     console.log(name, email, password);
//     const url = `/account/create/${name}/${email}/${password}`;
//     (async () => {
//        const res = await fetch(url);
//        const data = await res.json();
//     })();
//     props.setShow(false);
//   }

//   return(
//     <div>
//       Name<br/>
//       <input type="text" value={name} placeholder="Enter Name" 
//       onChange={e => setName(e.target.value)}/><br/>
      
//       Email<br/>
//       <input type="email" value={email} placeholder="Enter Email" 
//       onChange={e => setEmail(e.target.value)}/><br/>
      
//       Password<br/>
//       <input type="password" value={password} placeholder="Enter Password" 
//       onChange={e => setPassword(e.target.value)}/>
//       <br/><br/>
      
//       <button className="btn btn-success" onClick={handleSubmit}>Create Account</button>
//     </div>
//   )
// }

function CreateNewForm(props){
  return (
    <div>
      <h5>Your account is created successfully!</h5>
      <button type="submit"
              className="btn btn-secondary"
              onClick={() => props.setShow(true)}>
      Create Another Account</button>
    </div>
  )
}