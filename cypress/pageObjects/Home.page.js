import BasePage from "./Base.page";

class HomePage extends BasePage {
  static get url() {
    return "/inventory.html";
  }

  static get xxx() {
    return cy.get("x[y=z]");
  }
}

export default HomePage;
