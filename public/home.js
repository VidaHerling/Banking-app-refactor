function Home(){
  return (
    <div>
      <Card 
          bgcolor = "alert"
          header="Steadfast Bank"
          body={
            <div>
              <img src="bank_account.jpeg" alt="bank account" width="200px"/>
              <h5>Welcome to the Steadfast Bank!</h5>
            </div>
          }
      />
    </div>
  )
}