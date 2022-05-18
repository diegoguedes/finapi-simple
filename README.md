# FinApi Simple
It's a simple API Financial with a in-memory database (I used a vector) writed in NodeJS

## Requirements
- [ ] It should be possible to create an account
- [ ] It should be possible query a client's statement
- [ ] It should be possible to make a deposit
- [ ] It should be possible to withdraw
- [ ] It should be possible query a account's statement by date
- [ ] It should be possible to update client account data
- [ ] It should be possible to get client account data
- [ ] It should be possible delete a client account
- [ ] It should be possible to get the account balance

## Business rules
- [ ] It should not be possible to register an account with an existing cpf (cpf is a Social Security number in Brazil)
- [ ] It should not be possible to deposit into a non-existing account
- [ ] It should not be possible to search a statement from a non-existing account
- [ ] It should not be possible to withdraw from a non-existing account
- [ ] It should not be possible to delete a non-existing account
- [ ] It should not be possible to withdraw when balance is insufficient 


## Testing

### Running with docker

- Build the image

`docker build -t diegoguedes/finapi-simple  .`

- Run image
  
`docker run -p3333:3333 diegoguedes/finapi-simple`

### Testing with insomnia
The Insomnia file is in "\test\Insomnia_TestFile.json"
