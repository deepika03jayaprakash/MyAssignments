let num=[56,78,90,23,90,76,43,56]; //Declaring numbers in array

for(let i=0; i<num.length;i++) //Using for loop to check the numbers one by one in the array
{
        for(let j=i+1; j<num.length;j++) //Using nested loop to check the next numbers in the array
        {
            if(num[i]===num[j]) //Using if to check the duplicates
            {
                console.log("Duplicate",num[i])
            }
        }
}

