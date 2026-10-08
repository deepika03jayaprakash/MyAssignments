import { Browser } from "./parentClass_InheritanceClassAssgnmt";

class Edge extends Browser{

    launchBrowser()
    {
        console.log("Launching the Edge Browser")
    }
}

let edge = new Edge()
edge.launchBrowser()