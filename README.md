# FinApi Simple
It's a simple API Financial with a in-memory database (I used a vector)

## Requirements
- [ ] It should be able to create an account
- [ ] It should be able query a client's statement
- [ ] It should be able to make a deposit
- [ ] It should be able to withdraw
- [ ] It should be able query a account's statement by date
- [ ] It should be able to update client account data
- [ ] It should be able to get client account data
- [ ] It should be able delete a client account
- [ ] It should be able to get the account balance

## Business rules
- [ ] It should not be able to register an account with an existing cpf (cpf is a Social Security number in Brazil)
- [ ] It should not be able to deposit into a non-existing account
- [ ] It should not be able to search a statement from a non-existing account
- [ ] It should not be able to withdraw from a non-existing account
- [ ] It should not be able to delete a non-existing account
- [ ] It should not be able to withdraw when balance is insufficient 


## Testing


### Automation Testing 

- Testing with jest

`yarn test`

### Manual Testing

- Build the image docker

`docker build -t diegoguedes/finapi-simple  .`

- Run image doker
  
`docker run -p3333:3333 diegoguedes/finapi-simple`

- Use Insomnia Aplication
  
The Insomnia file is in "\test\Insomnia_TestFile.json"
