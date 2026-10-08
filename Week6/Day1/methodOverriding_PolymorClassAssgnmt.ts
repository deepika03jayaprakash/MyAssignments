/*Overriding
Create a parent class Browser with a method browserVersion().
Create a child class Chrome that overrides browserVersion() and prints a specific browser version.*/

class Browser{
    browserVersion()
    {
        console.log("Browser version is latest V1 version")
    }
}

class Chrome extends Browser{
    browserVersion() {

        console.log("Browser version is V2 version")
        super.browserVersion() // Calling parent class in child class using super keyword
        
    }
}

let chrome = new Chrome()
chrome.browserVersion()  //Browser version is V2 version

//Oveririding the parent class with child class method as both method name are same - Overriding
