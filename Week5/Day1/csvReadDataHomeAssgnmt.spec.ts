import { expect, test } from "@playwright/test"
import fs from 'fs' //Used to read files from your computer. Without fs, Playwright cannot read the CSV file
import path from 'path' //Used to create file paths safely
import { parse } from "csv-parse/sync" //converts CSV text into JavaScript objects

// Locate the CSV file
const csvFilePath = path.join(__dirname, "../../../Utils/loginData.csv");
//Read CSV file
const csvData = fs.readFileSync(csvFilePath, "utf-8"); //using utf-8 to convert bytes to string

console.log("Read CSV using fs", csvData);

// Convert CSV into JavaScript objects
const loginData: any[] = parse(csvData, {
    columns: true,  //Uses first row as object keys
    skip_empty_lines: true //Empty rows are ignored
});

console.log("Convert CSV into JavaScript objects", loginData);

for (let cred of loginData) {  //Loop through each object

//Dynamic test creation - For first row:csvReadDataValidation DemoCSR,For second row:csvReadDataValidation DemoCSR2
    test(`csvReadDataValidation ${cred.username}`, async ({ page }) => { 

        await page.goto('https://leaftaps.com/opentaps/control/main')
        await page.locator('#username').fill(cred.username)

        await page.locator('#password').fill(cred.password)

        await page.locator('.decorativeSubmit').click()

        let homepage = page.getByRole('link', { name: "CRM/SFA" });
        await expect(homepage).toBeVisible();

    })
}



//fs reads the file; csv-parse converts the CSV content into js objects.