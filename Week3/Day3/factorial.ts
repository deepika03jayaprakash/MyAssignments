function factorial(n: number) { //created factorial function and passing the number parameter

    if (n < 0) {
        console.log("Factorial is not computed for negative numbers") //Handle negative numbers

    }
    let result: number = 1;
    for (let i = 2; i <= n; i++) {  //Using loop for iteration

        result = result * i;  // factorial formula

    }

    console.log(result) //Printing the result

}
factorial(5) //Calling function by sending argument