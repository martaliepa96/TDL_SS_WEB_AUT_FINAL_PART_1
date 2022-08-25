import BasePage from "./Base.page";

class LoginPage extends BasePage {
  static get url() {
    return "/";
  }

  static get xxx() {
    return cy.get("x[y=z]");
  }
}

export default LoginPage;
