function AllData(){
  const [data, setData] = React.useState('');
  
  React.useEffect(() => {
    // fetch all data from API
    fetch('/account/all')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setData(JSON.stringify(data));
      });
  }, []);

  return (
    <div>
      <h1>All Data shown here:</h1>
      {data}
    </div>
  );
}