const request = require("supertest");
const { validate } = require("uuid");

const app = require("../src");

describe("FinAPI", () => {
  it("It should be able to create an account", async () => {
    const response = await request(app)
      .post("/account")
      .send({
        cpf: "12345678900",
        name: "Diego Guedes",
      })
      .expect(201);
  });

  it("It should be able query a client's statement", async () => {
    const responseAccount = await request(app).post("/account").send({
      cpf: "12345678900",
      name: "Diego Guedes",
    });

    const responseDeposit = await request(app)
      .post("/deposit")
      .send({
        description: "Depositando um valor",
        amount: 1225.2,
      })
      .set("cpf", 12345678900);

    const responseStatement = await request(app)
      .get("/statement")
      .set("cpf", 12345678900);

    expect(responseStatement.body).toHaveLength(1);
  });
});
