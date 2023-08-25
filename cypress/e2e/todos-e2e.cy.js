describe("Todos App E2E", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should open the application and display Todo Application", () => {
    cy.contains("Todo Application");
  });

  it("should display Todo List", () => {
    cy.contains("Todo List");
  });

  it("should be able to login successfully", () => {
    cy.get('input[type="text"]').type("johnd");
    cy.get('input[type="password"]').type("1234");
    cy.get("form").submit();
    cy.contains("Howdy, johnd!");
  });

  it("should display an error message for invalid login", () => {
    cy.get('input[type="text"]').type("invalidUsername");
    cy.get('input[type="password"]').type("invalidPassword");
    cy.get("form").submit();
    cy.contains("Invalid login credentials");
  });
});

describe("Logged-In Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get('input[type="text"]').type("johnd");
    cy.get('input[type="password"]').type("1234");
    cy.get("form").submit();
  });
});
