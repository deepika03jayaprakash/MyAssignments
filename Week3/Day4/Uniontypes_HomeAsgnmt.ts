type PaymentMethod = "UPI" | "Creditcard" | "Paypal"  //Created Custom Union Type
function makePayment(Paymentname: PaymentMethod) {  //Created function with the custom union type which accepts only that union type
    if (Paymentname === "UPI") {  //Using if conditional stmts to check the valid methods

        console.log("Selected Payment method is", Paymentname);

    } else if (Paymentname === "Creditcard") {

        console.log("Selected Payment method is", Paymentname);
    } else if(Paymentname === "Paypal"){
        console.log("Selected Payment method is", Paymentname);

    }else {

        console.log("Invalid Payment method is", Paymentname); //To handle the Invalid stmt 
    }

}

makePayment("UPI") //Calling the function by passing the argument
makePayment("Creditcard")
// makePayment("Debitcard")
