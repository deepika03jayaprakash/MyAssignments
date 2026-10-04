
export class BankAccount
{
    //Properties
    public accountHolder:string ="Deepika"
    private accountNumber:number = 142578963214
    protected balance:number = 1000000

    public deposit ()
    {
        console.log("Amount Credited")
    }

    public withdraw ()
    {
        console.log ("Amount Debited")
    }

    public get readData()
    {
        return this.accountNumber
    }
}

let bank = new BankAccount()
console.log(bank.accountHolder)
bank.deposit()
bank.withdraw()
console.log (bank.readData)
