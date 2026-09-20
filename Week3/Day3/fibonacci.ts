//fibonacci series

function fibonacci(n:number)
{
    let a =0
    let b =1

    if (n<=0)  // Handle negative numbers safely
    {
        console.log("Please enter a number greater than 0");
        return;
        
    }

    let firstnum=0; // First number of the series
    let secondnum=1; // Second number of the series

    console.log("Fibonacci Series:");
    

    for (let i=0;i<n;i++)  //Loop to generate and print each term
    {
        console.log(firstnum);  //Print the current number
        let nextnum=firstnum+secondnum  // Calculate the next number by adding the previous two
        firstnum=secondnum // Shift the numbers forward for the next iteration
        secondnum=nextnum  // Shift the numbers forward for the next iteration
        
        
    }
}

    fibonacci(10) //Print the first 10 numbers of the series


//Comment to run the typescript :npx tsx filename.ts from the file directory and not from root directory.
    