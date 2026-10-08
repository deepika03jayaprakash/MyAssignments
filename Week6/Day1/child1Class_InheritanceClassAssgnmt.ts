import { Browser } from "./parentClass_InheritanceClassAssgnmt";
class Chrome extends Browser{
    public launchBrowser()
    {
        console.log("Launching the Browser Chrome")
    }
}

let chrome = new Chrome()
chrome.launchBrowser()