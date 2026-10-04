import {BankAccount} from "./accessModifierHomeAssgnmt"

class Balance extends BankAccount{

    accBalance()
    {
        console.log(this.balance)
    }

}

let accountbalance = new Balance()

accountbalance.accBalance()