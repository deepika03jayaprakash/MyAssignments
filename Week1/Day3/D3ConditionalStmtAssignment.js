function launchBrowser(browserName)
{
if (browserName==="chrome"){
    console.log("Browser Name is Chrome");
}
else
    {
console.log("Othrwise")
}
    
}

launchBrowser();

function runTests(testType)
{
switch (testType)
{
    case "smoke":
        console.log("Test type is" ,testType);
        break;
    case "sanity":
        console.log("Test type is" ,testType);
        break;
    case "regression":
        console.log("Test type is" ,testType);
        break;
    default:
        console.log("Test type is Smoke");
        
        
        
}
}
runTests();