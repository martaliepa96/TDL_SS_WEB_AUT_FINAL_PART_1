import HomePage from "../pageObjects/Home.page";
// import ItemPage from "../pageObjects/ItemPage";
import LoginPage from "../pageObjects/Login.page";
// import SortItems from "../pageObjects/SortItems.page";

describe("Swag Labs", () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it("Scenario 1", () => {
    // TODO: implement me
    LoginPage.UsernameField.click();
    LoginPage.UsernameField.type('locked_out_user');
    LoginPage.PasswordField.click();
    LoginPage.PasswordField.type('secret_sauce');
    LoginPage.LoginButton.click();
    LoginPage.Notification.should('contain.text', 'Epic sadface: Sorry, this user has been locked out.');
  });
  it("Scenario 2", () => {
    LoginPage.visit();
    LoginPage.UsernameField.click();
    LoginPage.UsernameField.type('standard_user');
    LoginPage.PasswordField.click();
    LoginPage.PasswordField.type('parole');
    LoginPage.LoginButton.click();
    LoginPage.Notification.should('contain.text', 'Epic sadface: Username and password do not match any user in this service');
  });
  it("Scenario 3", () => {
    LoginPage.visit();
    LoginPage.UsernameField.click();
    LoginPage.UsernameField.type('standard_user');
    LoginPage.PasswordField.click();
    LoginPage.PasswordField.type('secret_sauce');
    LoginPage.LoginButton.click();
    LoginPage.Default.should('have.length', '6');
    
  })
  it("Scenario 4", () => {
    LoginPage.visit();
    LoginPage.UsernameField.click();
    LoginPage.UsernameField.type('standard_user');
    LoginPage.PasswordField.click();
    LoginPage.PasswordField.type('secret_sauce');
    LoginPage.LoginButton.click();
    LoginPage.SortButton.select("Price (high to low)");
    LoginPage.FirstItem.should("have.text", "Sauce Labs Fleece Jacket");
    LoginPage.ItemCosts.should("have.text", "$49.99"); 
  })

  it("Scenario 5", () => {
    LoginPage.visit();
    LoginPage.UsernameField.click();
    LoginPage.UsernameField.type('standard_user');
    LoginPage.PasswordField.click();
    LoginPage.PasswordField.type('secret_sauce');
    LoginPage.LoginButton.click();
    LoginPage.SortButton.select("Price (low to high)");
    LoginPage.ItemOne.should("have.text", "Sauce Labs Onesie");
    LoginPage.ItemCosts.should("have.text", "$7.99");
     })
  it("Scenario 6", () => {
    LoginPage.visit();
    LoginPage.UsernameField.click();
    LoginPage.UsernameField.type('standard_user');
    LoginPage.PasswordField.click();
    LoginPage.PasswordField.type('secret_sauce');
    LoginPage.LoginButton.click();
    LoginPage.SortButton.select("Name (Z to A)");
    LoginPage.AnotherFirst.should("have.text", "Test.allTheThings() T-Shirt (Red)");
  })
  it("Scenario 7", () => {
    LoginPage.visit();
    LoginPage.UsernameField.click();
    LoginPage.UsernameField.type('standard_user');
    LoginPage.PasswordField.click();
    LoginPage.PasswordField.type('secret_sauce');
    LoginPage.LoginButton.click();
    LoginPage.BoltTshirt.click();
    LoginPage.AddToCard.click();
    LoginPage.BadgeButton.should("contain", "1");
    LoginPage.BackToProducts.click();
    LoginPage.AnotherTshirt.click();
    LoginPage.AddToCardTwo.click();
    LoginPage.BadgeButton.should("contain", "2");
  })
  it("Scenario 8", () => {
    LoginPage.visit();
    LoginPage.UsernameField.click();
    LoginPage.UsernameField.type('standard_user');
    LoginPage.PasswordField.click();
    LoginPage.PasswordField.type('secret_sauce');
    LoginPage.LoginButton.click();
    LoginPage.BoltTshirt.click();
    LoginPage.AddToCard.click();
    LoginPage.BackToProducts.click();
    LoginPage.BadgeButton.should("contain", "1");
    LoginPage.BurgerButton.click();
    LoginPage.ResetButton.click();
    LoginPage.BadgeButton.should('not.exist');
    
  })

  it("Scenario 9", () => {
    LoginPage.visit();
    LoginPage.UsernameField.click();
    LoginPage.UsernameField.type('standard_user');
    LoginPage.PasswordField.click();
    LoginPage.PasswordField.type('secret_sauce');
    LoginPage.LoginButton.click();
    LoginPage.BoltTshirt.click();
    LoginPage.AddToCard.click();
    LoginPage.BadgeButton.should("contain", "1");
    LoginPage.RemoveButton.click();
    LoginPage.BadgeButton.should('not.exist');

  })
  it("Scenario 10", () => {
    LoginPage.visit();
    LoginPage.UsernameField.click();
    LoginPage.UsernameField.type('standard_user');
    LoginPage.PasswordField.click();
    LoginPage.PasswordField.type('secret_sauce');
    LoginPage.LoginButton.click();
    LoginPage.AnotherFirst.click();
    LoginPage.AddToCardThree.click();
    LoginPage.ShoppingCart.click();
    LoginPage.Checkout.click();
    LoginPage.FirstName.click();
    LoginPage.FirstName.type('Marta');
    LoginPage.LastName.click();
    LoginPage.LastName.type('Liepa');
    LoginPage.PostalCode.click();
    LoginPage.PostalCode.type('1084');
    LoginPage.Continue.click();
    LoginPage.ItemName.should('contain', 'Test.allTheThings() T-Shirt (Red)')
    LoginPage.Finish.click();
    LoginPage.Header.should('contain', 'THANK YOU FOR YOUR ORDER');
  })
  
  

  


});
