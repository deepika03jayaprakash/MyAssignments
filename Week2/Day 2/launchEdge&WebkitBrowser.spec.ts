
import { test, chromium, webkit } from "@playwright/test" // importing test and chromimum from playwright package

test('testEdge&WebkitBrowserLaunch', async () => {

    const edgeBrowser = await chromium.launch({ headless: false, channel: "msedge" }) //Using Headed mode and opening in edge browser
    const edgeContext = await edgeBrowser.newContext()              //context
    const edgePage = await edgeContext.newPage()                    //page

    await edgePage.goto("https://www.redbus.in", { //Method to load the url
        waitUntil: "domcontentloaded",   // Wait unitl the dom content get loaded
        timeout: 60000, //wait for 1 minute
    })

    console.log("RedBus Page Title:", await edgePage.title()); // Retreive the page title and print it in terminal
    console.log("RedBus Page Url:", edgePage.url()); // Retreive the page url and print it in terminal

    const webkitBrowser = await webkit.launch({ headless: false, channel: "webkit" }) //Using Headed mode and opening in webkit browser
    const webkitContext = await webkitBrowser.newContext()              //context
    const webkitPage = await webkitContext.newPage()                    //page

    await webkitPage.goto("https://www.flipkart.com", { //Method to load the url
        waitUntil: "domcontentloaded",   // Wait unitl the dom content get loaded
        timeout: 60000, //wait for 1 minute
    })

    console.log("Flipkart Page Title:", await webkitPage.title()); // Retreive the page title and print it in terminal
    console.log("Flipkart Page Url:", webkitPage.url()); // Retreive the page url and print it in terminal


})


