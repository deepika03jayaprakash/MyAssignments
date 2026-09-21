import { test,expect } from "@playwright/test"

test('pvrCinemasBookingSummary', async ({ page }) => {

    await page.goto('https://www.pvrcinemas.com/'); //navigate to pvr url
    await page.getByRole('heading',{name:'Chennai'}).click(); // Selecting the chennai city
    await page.locator('//div[@class="date-show"]/span[text()="Cinema"]').click() //Selecting the cinema tab
    await page.locator('//span[text()="Select Cinema"]').click(); //clicking the select cinema dropdown
    await page.getByText('INOX National,Virugambakkam').click(); //Selecting the cinema from dropdown
    await page.getByText('Today, 18 Sep').click(); //Clicking the date
    await page.getByRole('listbox').locator('li').filter({ hasText: 'MANDAADI' }).click(); //Selecting the movie
    await page.getByText('03:30 PM').click(); //Selecting the Time
    await page.getByRole('button', { name: 'Submit' }).click(); //Clicking on Book button
    await page.getByRole('button', { name: 'Accept' }).click(); //Accepting the Terms&Condition
    await page.locator('[id="SL.SILVER|D:11"]').click(); //Selecting the Seat number 11
    await expect(page.getByRole('heading',{name:'MANDAADI'})).toBeVisible() //Validating the Booking Summary
    const seatNumber =await page.locator('//div[@class="seat-info"]').innerText(); //Fetching the Seat info by using innertext method
    console.log(seatNumber) //Printing the Seat info
    const grandTotal =await page.locator('//div[@class="grand-amount"]').innerText(); //Fetching the Grandtotal info by using innertext method
    console.log(grandTotal) //Printing the Grand total info

})

/*If Seat is already selected, how to check and select the another seat? Kindly provide the input*/