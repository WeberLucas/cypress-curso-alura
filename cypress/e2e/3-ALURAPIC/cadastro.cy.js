describe("cadastro usuarios alura pic", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("verifica mensagens de email invalido", () => {
    cy.contains("a", "Register now").click();
    cy.contains("button", "Register").click();
    cy.get('input[formcontrolname="email"]').type("weber");
    cy.contains("ap-vmessage", "Invalid e-mail").should("be.visible");
  });
  it("verifica mensagens validacao", () => {
    cy.contains("a", "Register now").click();
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Email is required!").should("be.visible");
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "User name is required!").should("be.visible");
    cy.contains("ap-vmessage", "Password is required!").should("be.visible");
    cy.contains("ap-vmessage", "Full name is required!").should("be.visible");
  });
  it("verifica mensagens de senha com menos de 8 caracteres", () => {
    cy.contains("a", "Register now").click();
    cy.contains("button", "Register").click();
    cy.get('input[formcontrolname="password"]').type("123");
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Mininum length is 8").should("be.visible");
  });
  it("verifica mensagens de nome com menos de 2 caracteres", () => {
    cy.contains("a", "Register now").click();
    cy.contains("button", "Register").click();

    //cy.get('input[formcontrolname="fullName"]').type('w');
    //a forma que usei em cima peguei o nome do campo para achar onde iria inserir o valor w, já em baixo usei uma função que pega o que
    //está escrito no campo, por exempo "digite seu nome"
    cy.get('input[placeholder="full name"]').type("w");

    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Mininum length is 2").should("be.visible");
  });

  it("verifica desafio", () => {
    cy.contains("a", "Register now").click();
    cy.contains("button", "Register").click();
    cy.get('input[placeholder="user name"]').type("WEBER");
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Must be lower case").should("be.visible");
  });
});
