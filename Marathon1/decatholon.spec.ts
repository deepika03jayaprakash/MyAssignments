import { expect, test } from "@playwright/test"

test('DecatholonAddtoCart', async ({ page }) => {

    await page.goto('https://www.decathlon.in/')   //Load the url
    await page.waitForLoadState('networkidle')  //
    let homePage = page.locator('[data-test-id="header-desktop:decathlon-logo"]')
    await expect(homePage).toBeVisible({ timeout: 10000 })
    let Search = page.locator('[data-test-id="search-input-desktop:container"]')
    await expect(Search).toBeEditable({ timeout: 10000 })
    await Search.fill("shoes")
    await Search.press('Enter')
    await page.waitForLoadState('networkidle');
    let pageTitle = await page.title() // To get the Page title
    console.log("Current Search Page title is:", pageTitle)

    if (pageTitle === "Search | shoes") {
        console.log("Page title is matched")
    } else {
        console.log("Page title is not matched")
    }

    await page.locator('[aria-controls="gender_id_en"]').click()
    let men = page.locator('[data-test-id="filter-checkbox-gender_id_en-MEN"]')
    if (!(await men.isChecked())) {
        await men.click();
    }

    await expect(men).toBeChecked()

    await page.locator('[aria-controls="sport_pratice_en"]').click()
    let running = page.locator('[data-test-id="filter-checkbox-sport_pratice_en-Running"]')
    if (!(await running.isChecked())) {
        await running.click();
    }

    await expect(running).toBeChecked()

    await page.getByRole('button', { name: "Size" }).click()
    let size = page.locator('[data-test-id="filter-checkbox-indian_size-10.5"]')
    if (!(await size.isChecked())) {
        await size.click();
    }

    await expect(size).toBeChecked()

    await page.locator('[data-test-id="sort-bar-desktop:chevron-down-icon"]').click()
    await page.locator('[data-test-id="sort-option-dsi_pim_migration_price_asc"]').click()
    await page.locator('[data-test-id="product-card-product-image:img"]').first().click()
    await page.locator('[aria-label="Select size 10.5"]').click()
    await page.getByRole('button', { name: "Add to cart" }).click()
    // setTimeout(() => { debugger; }, 4000); //Add this code in developer tool console page to freeze the webpage and capture the toastmessage locator.

    let toastheading = page.getByRole('heading', { name: "Product(s) added to cart" })
    await expect(toastheading).toBeVisible({ timeout: 5000 });
    const message = await toastheading.textContent();
    console.log("Toast Message Captured:", message);
    let promopopupclosebtn = page.locator('[aria-label="Close"]')

    if (await promopopupclosebtn.isVisible({ timeout: 3000 })) {
        await promopopupclosebtn.click()
        console.log("Promotional popup modal successfully intercepted and closed")
    }

    await page.locator('[data-test-id="header-desktop:cart-icon"]').click()
    let Total = await page.locator('[data-test-id="order-summary-item-container"]').last().innerText()
    console.log(Total)

})

/*Not able to close the some promotional popup in decatholon page after add to cart. tried different way - used escape and force:true and playwright locator but nothing working
1. Esc:await page.keyboard.press('Escape');
2.click({ force: true })
3. X playwright locator not worked. but css selector worked (await page.getByRole('button',{name:"Close"}).click({force:true}))
4.Any otherway is there to close without locator for sudden promotional popup?
*/
