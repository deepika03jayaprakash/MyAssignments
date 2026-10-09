interface PageRules {

    verifyPage(): void


}

abstract class BasePage {

    waitForPageLoad() {
        console.log("Waiting for page to load")
    }
    getPageTitle() {
        console.log("Getting page title")
    }
}

class LoginPage extends BasePage implements PageRules {

    verifyPage() {

        console.log('Login Page Verified');
    }

    enterUsername() {
        console.log('Username Entered')
    }
    enterPassword() {
        console.log('Password Entered');

    }
    clickLogin() {
        console.log("Login Button Clicked");

    }

}

class ProductPage extends BasePage implements PageRules {
    verifyPage() {

        console.log("Product Page Verified");

    }
    searchProduct() {
        console.log("Search for products in the app");

    }
    addToCart() {
        console.log("Add the product to the cart");

    }

}

let login = new LoginPage()
login.waitForPageLoad()
login.verifyPage()
login.enterUsername()
login.enterPassword()
login.clickLogin()
login.getPageTitle()

let product = new ProductPage()
product.waitForPageLoad()
product.verifyPage
product.getPageTitle
product.searchProduct()
product.addToCart()

//----------------------------------------------------------------------------------------------------------

/*Remember this simple rule:

Interface = WHAT must be done

Abstract class = WHAT must be done + shared implementation

Concrete class = actual implementation of page-specific behaviour*/

/*Interface (implements) — defining rules that a class must follow.

Abstract class (extends) — sharing common functionality across page objects.

Inheritance — reusing waitForPageLoad() and getPageTitle() in both page classes.

Encapsulation of responsibilities — keeping login-related methods in LoginPage and product-related methods in ProductPage. */