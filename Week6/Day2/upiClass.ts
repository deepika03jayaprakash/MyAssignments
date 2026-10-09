import {Payment} from "./interfaceClassAssgnmt"

class UPI implements Payment{
     pay(amount: number){

        console.log(amount, "Amount paid through UPI")
     }

}

let upi = new UPI()
upi.pay(2000)