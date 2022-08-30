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
    <div className={classes()} style={{maxWidth: "18rem"}}>
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        {props.title && (<h5 className="card-title">{props.title}</h5>)}
        {props.text && (<p className="card-text">{props.text}</p>)}
        {props.body}
        {props.status && (<div id="createAccountStatus">{props.status}</div>)}
      </div>
    </div>
  )
}