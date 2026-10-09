import {Payment} from "./interfaceClassAssgnmt"

class CreditCard implements Payment{
     pay(amount: number){

        console.log(amount, "Amount paid through UPI")
     }

}

let credit = new CreditCard()
credit.pay(5000)