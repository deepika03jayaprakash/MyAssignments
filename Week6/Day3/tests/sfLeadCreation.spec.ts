import {test} from "@playwright/test"
import { SfLeadPage } from "../pages/sflead"

// test.use(
//     {
//        storageState:'auth/salesforcelogin.json' 
//     }
// )

test ('Salesforce Lead Creation Using POM',async ({page}) => {

    let sflead = new SfLeadPage(page)
   await sflead.sfloadUrl('https://login.salesforce.com/')
   await sflead.sfloginCredentials('deepika03jayaprakash.877ab22a2546@agentforce.com','Harinikaa@26')
   await sflead.sfnavigateToLead()
   await sflead.sfCreateLead()
   await sflead.sfVerifyLead()
    
})
