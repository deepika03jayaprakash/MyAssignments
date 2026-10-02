import { expect, test } from "@playwright/test"
import fs from 'fs'
import path from 'path'
import { parse } from 'csv-parse/sync'
import dotenv from 'dotenv'
import employeetdetails from '../../../Data/lflead.json'

dotenv.config({ path: 'Data/lfqa.env' })

let dropdownvalue: any[] = parse(fs.readFileSync('Data/lflead.csv', 'utf-8'), { columns: true, skip_empty_lines: true })

//Converting env key value into string and storing it in the variable
const lfurl = process.env.lf_url as string
const lfusername = process.env.lf_username as string
const lfpassword = process.env.lf_password as string

for (let dropdowndetails of dropdownvalue) {

    test(`dataParameterizationUsing_differentdataformats ${dropdowndetails.Source}`, async ({ page }) => {

        //Using Env data format for login functionality
        await page.goto(lfurl)
        await page.locator('#username').fill(lfusername)
        await page.locator('#password').fill(lfpassword)
        await page.locator('.decorativeSubmit').click()
        let homepage = page.getByRole('link', { name: "CRM/SFA" });
        await expect(homepage).toBeVisible();

        await homepage.click()
        await page.getByRole('link', { name: 'Leads' }).click() //using getByRole playwright locator with link role
        await page.getByRole('link', { name: 'Create Lead' }).click() //using getByRole playwright locator with link role

        //Using JSON data format to fill the companyname,fname&lname
        await page.locator('[name="companyName"]').nth(1).fill(employeetdetails.CompanyName)
        await page.locator('[name="firstName"]').last().fill(employeetdetails.Forename)
        await page.locator('[id="createLeadForm_lastName"]').fill(employeetdetails.Surname)

        //Using CSV data format to select the dropdown values (Select Dropdown)
        await page.locator('#createLeadForm_dataSourceId').selectOption({ label: dropdowndetails.Source })

        //Getting the count and print all the values of marketcampaign
        let marketcampaign = page.locator('#createLeadForm_marketingCampaignId')
        let marketcampaigncount = await marketcampaign.count()
        console.log(marketcampaigncount)
        for (let i = 0; i < marketcampaigncount; i++) {
            console.log("Market Campagign Values:", await marketcampaign.nth(i).innerText())
        }

        await marketcampaign.selectOption({ label: dropdowndetails.Marketing_Campaign })

        await page.locator('#createLeadForm_industryEnumId').selectOption({ label: dropdowndetails.Industry })
        await page.locator('#createLeadForm_currencyUomId').selectOption({ label: dropdowndetails.Preferred_Currency })
        await page.locator('#createLeadForm_generalCountryGeoId').selectOption({ label: dropdowndetails.Country })

        //Get the count of all states and print the values in the console
        let state = page.locator('#createLeadForm_generalStateProvinceGeoId')
        let statecount = await state.count()
        console.log(statecount)
        for (let j = 0; j < statecount; j++) {
            console.log("State Values:", await state.nth(j).innerText())

        }
        await state.selectOption({ label: dropdowndetails.StateOrProvince })
        await page.locator('[name="submitButton"]').click()

    })
}

