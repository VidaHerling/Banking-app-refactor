function Withdraw(){
  return (
    <div>
      <Card 
          bgcolor = "secondary"
          header="Withdraw"
          body={
          <BankForm
            email="email"
            amount="amount"
            buttonName="Withdraw"
          />}
      />
    </div>
  )
}