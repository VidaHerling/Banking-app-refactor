function Balance(){
  const [data, setData] = React.useState('');

  React.useEffect(() => {
    // fetch all data from API
    fetch(`/account/balance/`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setData(JSON.stringify(data));
      });
  }, []);

  return (
    <div>
      <Card 
          bgcolor = "warning"
          header="Balance"
          body={
          <BankForm
            email="email"
            buttonName="Check Balance"
          />}
      />
      {data.balance}
    </div>
  )
}