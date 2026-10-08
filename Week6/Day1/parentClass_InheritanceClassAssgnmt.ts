/*ClassRoom Activity 1 :
---------------------
Parent file
Create class Browser
Create 2 methods browserType(),browserVersion()

1st Child file
Create class Chrome 
Create 1 method launchBrowser
Create object for Chrome

2nd Child file
Create class Edge
Create 1 method launchBrowser
Create object for Edge*/

export class  Browser{

    public browserType()
    {
        console.log("Chrome")
    }

    public browserVersion()
    {
        console.log("Version 5.0")
    }
}

// let browser = new Browser()
// browser.browserType()
// browser.browserVersion()