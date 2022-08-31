function Balance(){
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
    </div>
  )
}