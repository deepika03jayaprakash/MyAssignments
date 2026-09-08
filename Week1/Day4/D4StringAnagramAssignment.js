//Example:1
let s1="Hello World"
s1=s1.split(" ");
let lastWord1 = s1[s1.length -1]
console.log("the last word is" , lastWord1, "with length", lastWord1.length)

//Example:2
let s2="fly me to the moon"
s2=s2.trim();
//console.log(s2);
let words = s2.split(" ")
//console.log(words)
let lastword2 = words[words.length -1]
console.log("the last word is" , lastword2, "with length", lastword2.length)

//Example:3

let str1 = "silent";
let str2 = "listen";

let a = str1.toLowerCase().split("").sort().join("");
let b = str2.toLowerCase().split("").sort().join("");

if (a === b) {
    console.log("The strings are Anagrams");
} else {
    console.log("The strings are Not Anagrams");
}

function str(str1,str2){

}


str()

