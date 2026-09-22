enum Environment {  //Created enum type
     Local = 'LocalEnv', //Assigning the value for the keys
     Development = 'DEV',
     Staging = 'STG',
     Production = 'PROD'
}

function runTests(Env: Environment): void { //Using function with void 

     console.log(Env)

}

runTests(Environment.Development) //Passing the enum as argument
runTests(Environment.Staging)
runTests(Environment.Production)


