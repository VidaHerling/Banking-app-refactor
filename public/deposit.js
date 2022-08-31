function Deposit(){
  return (
    <div>
      <Card 
          bgcolor = "warning"
          header="Deposit"
          body={
          <BankForm
            email="email"
            amount="amount"
            buttonName="Deposit"
          />}
      />
    </div>
  )
}