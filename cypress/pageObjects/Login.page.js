import BasePage from "./Base.page";

class LoginPage extends BasePage {
  static get url() {
    return "/";
  }
  static get xxx() {
    return cy.get("x[y=z]");
  }
  static get UsernameField() {
    return cy.get("#user-name");
  }
  static get PasswordField() {
    return cy.get("#password");
  }
  static get LoginButton() {
    return cy.get("#login-button");
  }
  static get Notification() {
    return cy.get("[data-test=error]");
  }
  static get Default() {
    return cy.get(".inventory_item_description");
  }
  static get SortButton() {
    return cy.get('[class="product_sort_container"]');
  }
  static get FirstItem() {
    return cy.get('#item_5_title_link > .inventory_item_name');
  }
  static get ItemCosts() {
    return cy.get(`:nth-child(1) > .inventory_item_description > .pricebar > .inventory_item_price`);
  }
  static get ItemOne() {
    return cy.get(`#item_2_title_link > .inventory_item_name`);
  }
  static get Itemprice() {
    return cy.get(`:nth-child(1) > .inventory_item_description > .pricebar > .inventory_item_price`);
  }
  static get AnotherFirst() {
    return cy.get('#item_3_title_link > .inventory_item_name');
  }
  static get BoltTshirt() {
    return cy.get(`#item_1_title_link > .inventory_item_name`);
  }
  static get AddToCard() {
    return cy.get(`[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]`);
  }
  static  get BadgeButton() {
    return cy.get(".shopping_cart_badge");
  }
  static get BackToProducts() {
    return cy.get(`[data-test="back-to-products"]`);
  }
  static get AnotherTshirt() {
    return cy.get("#item_0_title_link > .inventory_item_name");
  }
  static get AddToCardTwo() {
    return cy.get(`[data-test="add-to-cart-sauce-labs-bike-light"]`);
  }
  static get BurgerButton() {
    return cy.get("#react-burger-menu-btn");
  }
  static get ResetButton() {
    return cy.get('#reset_sidebar_link');
  }
  static get RemoveButton() {
    return cy.get(`[data-test="remove-sauce-labs-bolt-t-shirt"]`);
  }
  static get AddToCardThree() {
    return cy.get(`[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]`);
  }
  static get ShoppingCart() {
    return cy.get(".shopping_cart_link");
  }
  static get Checkout() {
    return cy.get (`[data-test="checkout"]`);
  }
  static get FirstName() {
    return cy.get(`[data-test="firstName"]`);
  }
  static get LastName() {
    return cy.get(`[data-test="lastName"]`);
  }
  static get PostalCode() {
    return cy.get(`[data-test="postalCode"]`);
  }
  static get Continue() {
    return cy.get(`[data-test="continue"]`);
  }
  static get ItemName() {
    return cy.get(".inventory_item_name");
  }
  static get Finish() {
    return cy.get(`[data-test="finish"]`);
  }
  static get Header() {
    return cy.get('.complete-header');
  }

  
}
export default LoginPage;
