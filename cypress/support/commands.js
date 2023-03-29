const { apiServer } = Cypress.config();

Cypress.Commands.add("api_get_fotos", () => {
  cy.api({
    method: "GET",
    url: `${apiServer}/flavio/photos`,
  });
});

Cypress.Commands.add("api_post_login", (body) => {
  cy.api({
    method: "POST",
    url: `${apiServer}/user/login`,
    body: body,
  });
});
