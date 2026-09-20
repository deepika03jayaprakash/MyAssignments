import {test} from "@playwright/test"


test.use(
    {
       storageState:'Data/ltlogin.json'   //Calling the StorageState details for ltlogin.json from Data
    }
)

test('auth file to skip leaftap login', async ({page}) => {

await page.goto("https://leaftaps.com/opentaps/control/login;jsessionid=DBF5D31EEDC70E1AE6A082BFAB54E84F.jvm1") //Skipping Logging and Directly load this home page url

await page.waitForLoadState('domcontentloaded') //Waiting for domcontent to be loaded fully

console.log(await page.title()); //Fetching the title of the page from the Tab

})