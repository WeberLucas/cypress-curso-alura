describe("Login de registro de usuarios alura pic", () => {
  beforeEach(() => {
    cy.visit("https://alura-fotos.herokuapp.com");
    cy.intercept("POST", "https://apialurapic.herokuapp.com/user/login", {
      statusCode: 400,
    }).as("stubPost");
  });

  //TODO resolver depois
  it.skip("fazer login de usuario valido", () => {
    cy.pause();
    cy.login(Cypress.env("userName"), Cypress.env("password"));
    cy.wait("@stubPost");
    cy.contains("a", "(Logout)").should("be.visible");
  });

  it("fazer login de usuario invalido", () => {
    cy.login("jacqueline", "1234");
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Invalid user name or password");
    });
  });
  const usuarios = require("../../fixtures/usuarios.json");
  usuarios.forEach((usuario) => {
    it("registra novo uusário" + usuario.userName, () => {
      cy.contains("a", "Register now").click();
      cy.contains("button", "Register").click();
      cy.get('input[formcontrolname="email"]').type(usuario.email);
      cy.get('input[formcontrolname="fullName"]').type(usuario.fullName);
      cy.get('input[formcontrolname="userName"]').type(usuario.userName);
      cy.get('input[formcontrolname="password"]').type(usuario.password);
      cy.contains("button", "Register").click();
    });
  });
});
