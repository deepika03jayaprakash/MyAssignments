// Task 1: Function Declaration:

function userProfile(name) //Named Function
{
console.log("Hello", name); //Hello Deepika

}
userProfile("Deepika") //Calling the function

//Task 2: Arrow Function:

let double=(a)=>a*2 //Arrow function
console.log("The double value is",double(10)); //20

//Task 3: Anonymous Function

let message= function() //Declared anonymous function
{
console.log("This message is delayed by 2 seconds");

}

setTimeout(message,2000); //Using setTimeout(function, delay); for timeout

// Task 4: Callback Function
function getUserData(callback) //calling the function 'a' by passing 'callback' parameter
{
    setTimeout(callback,3000); //Using setTimeout(function, delay); calling the callback function with 3 sec wait
        
    }

function a() // Using this function for callback
{
console.log("Call Back Function");

}

getUserData(a) //Calling getUserData function by passing function 'a' as argument.





