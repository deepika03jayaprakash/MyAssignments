import {Payment} from "./interfaceClassAssgnmt"

class NetBanking implements Payment{
     pay(amount: number){

        console.log(`Amount ${amount} paid through UPI`)
     }

}

let netbanking = new NetBanking()
netbanking.pay(10000)