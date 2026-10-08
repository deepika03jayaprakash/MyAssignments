/*Classroom 2: Method overloading and Method overriding

Overloading
Create a class TextBox and implement method overloading for fill() with the following signatures:

fill(text: string)
fill(text: string, locator: string)
Ensure a single implementation handles both cases appropriately.*/

class TextBox {
    fill(text: string):void
    fill(text: string, locator: string):void

    fill(text: string, locator?: string)
    {
if(locator){
    console.log("Text:",text, "Locator:",locator)
}else{
    console.log("Text is ",text)
}
    }
}

let textbox = new TextBox()
textbox.fill("Playwright","Welcome")
// textbox.fill("Welcome")