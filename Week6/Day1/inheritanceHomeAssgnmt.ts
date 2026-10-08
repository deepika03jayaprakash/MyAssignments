// Parent / Superclass
// This class contains common properties and methods

class WebComponent {

    // // Property to store the selector of the web element
    selector: string

    // Constructor is called automatically when an object is created
    // It receives the selector and stores it in this.selector
    constructor(selector: string) {
        this.selector = selector
    }

    // Common method to simulate clicking the web component
    click() {
        console.log("Simulating a Click", this.selector)

    }

    // Common method to simulate focusing on the web component
    focus() {
        console.log("Simulating focusing on the component", this.selector)
    }
}

// Button is a child class / subclass of WebComponent
// It inherits selector, click() and focus() from WebComponent
class Button extends WebComponent {

    // Overriding the click() method of the parent class
    click() {

        // Calls the click() method of the parent class
        // This will execute WebComponent's click()
        super.click()
        console.log("Button Clicked")
    }

}

// TextInput is another child class / subclass of WebComponent
class TextInput extends WebComponent {

    // Property to store the text entered in the input field
    // Initially the value is an empty string
    value: string = ""

    // Method to simulate entering text into the input field
    enterText(text: string) {

        // Store the given text inside the value property
        this.value = text
        console.log("Simulating Text Entry:", this.value)
    }
}

// Function to demonstrate / test our classes
function testComponents() {

    // Create an object of Button
    // "new" means we are instantiating the Button class
    // "#login" is passed to the WebComponent constructor
    let button = new Button("#login")

    // Calls the overridden click() method in Button
    button.click()

    // focus() is inherited from WebComponent
    button.focus()
    console.log(button.selector)

    // Create an object of TextInput
    // "#username" is the selector
    let textinput = new TextInput("#username")

    // Call enterText() and pass "Deepika" as the input
    textinput.enterText("Deepika")
    console.log(textinput.value)
}
// Call the function to execute
testComponents()

