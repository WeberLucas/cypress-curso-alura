//const { expect } = require("chai");
describe("buscar fotos e dados", () => {
  it("buscar fotos do flavio", () => {
    cy.api_get_fotos().then((res) => {
      expect(res.status).to.be.equal(200);
      expect(res.body).is.not.empty;
      expect(res.body[0]).to.have.property("description");
      expect(res.body[0].description).to.be.equal("Farol iluminado");
    });

    it("fazer login do flavio", () => {
      cy.api_post_login(Cypress.env()).then((res) => {
        expect(res.status).to.be.equal(200);
        expect(res.body).is.not.empty;
        expect(res.body).to.have.property("id");
        expect(res.body.id).to.be.equal(1);
        expect(res.body).to.have.property("email");
        expect(res.body.email).to.be.equal("flavio@alurapic.com.br");
      });
    });
  });
});
