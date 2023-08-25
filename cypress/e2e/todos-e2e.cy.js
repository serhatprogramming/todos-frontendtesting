describe("Todos App E2E", () => {
  beforeEach(() => {
    cy.request("POST", "http://localhost:3001/api/e2e/reset-test-db");
    const user = {
      name: "John Doe",
      username: "johnd",
      password: "1234",
    };
    cy.request("POST", "http://localhost:3001/api/users/", user);
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
    cy.request("POST", "http://localhost:3001/api/e2e/reset-test-db");
    const user = {
      name: "John Doe",
      username: "johnd",
      password: "1234",
    };
    cy.request("POST", "http://localhost:3001/api/users/", user);
    cy.visit("http://localhost:3000");
    cy.get('input[type="text"]').type("johnd");
    cy.get('input[type="password"]').type("1234");
    cy.get("form").submit();
  });
  it("should add a new todo after successful login", () => {
    const todoText = "Test Todo Item with data-testid";
    cy.get('[data-testid="new-task-input"]').type(todoText);
    cy.contains("Add").click();
    cy.contains(todoText);
  });
  it("shows error message when adding todo with empty textbox", () => {
    cy.contains("Add").click();
    cy.contains("Creation Failed");
    // Check if the error message disappears after a short delay
    cy.contains("Creation Failed").should("not.exist");
  });
  it("logs out successfully", () => {
    cy.contains("Log Out").click();
    cy.contains("username");
    cy.contains("password");
  });
});

// describe("Todos App E2E", () => {
//   beforeEach(() => {
//     cy.visit("http://localhost:3000");
//   });

//   it("should open the application and display Todo Application", () => {
//     cy.contains("Todo Application");
//   });

//   it("should display Todo List", () => {
//     cy.contains("Todo List");
//   });

//   it("should be able to login successfully", () => {
//     cy.get('input[type="text"]').type("johnd");
//     cy.get('input[type="password"]').type("1234");
//     cy.get("form").submit();
//     cy.contains("Howdy, johnd!");
//   });

//   it("should display an error message for invalid login", () => {
//     cy.get('input[type="text"]').type("invalidUsername");
//     cy.get('input[type="password"]').type("invalidPassword");
//     cy.get("form").submit();
//     cy.contains("Invalid login credentials");
//   });
// });
