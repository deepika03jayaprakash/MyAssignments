class APIClient {
    // Overload 1
    sendRequest(endpoint: string): void
    // Overload 2
    sendRequest(endpoint: string, requestbody: string, requeststatus: boolean): void
    // Implementation
    sendRequest(endpoint: string, requestbody?: string, requeststatus?: boolean) {

 //We use !== undefined to check whether requeststatus was provided, even when its value is false.
        if (requeststatus !== undefined) {
            console.log(endpoint, requestbody, requeststatus);

        } else {
            console.log(endpoint)
        }

    }

}
// Create object
let apiclient = new APIClient()
// apiclient.sendRequest("./username")  // Calling overloaded version 1
// apiclient.sendRequest("./username", "Deepika", true) // Calling overloaded version 2

apiclient.sendRequest("./username", "Deepika", false) //Calling overloaded version 2


