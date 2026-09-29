import {test} from "@playwright/test"

import {parse} from "csv-parse/sync"

import fs from 'fs'

import path from 'path'

let value:any[]=parse(fs.readFileSync('Data/sflogin.csv','utf-8'),{columns:true,skip_empty_lines:true})

test.describe.serial('run test in serial mode', async()=>{

for(let details of value){

test(`learn to read data from csv file ${details.tcid}`,async ({page}) => {

await page.goto('https://login.salesforce.com/')

await page.locator('#username').fill(details.username)

await page.locator('#Login').click()

await page.locator("#password").fill(details.password)

await page.locator('#Login').click()

    
})

}

})