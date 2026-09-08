// let a="MoM"
// a=a.split("");
// console.log(a);

let word1 = "Mom"
let sm = word1.split("")
let revword1=""
for(let i=sm.length-1;i>=0;i--){
    revword1=revword1+sm[i]
    console.log(revword1);
    
}
    if(word1===revword1){
        console.log("it is a palindrome")}
        else{
            console.log("it is not a palindrome")
        }
    

console.log(revword1)

