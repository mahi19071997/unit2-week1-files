// Write a hoisted code representation for the code you wrote for Array Vowels
var count;
count=0;
var i;
var arr;
arr= ["masai", "school","bangalore"]

for(i=0;i<arr.length;i++)
    {
        if(arr[i].includes("a") || arr[i].includes("e") || arr[i].includes("i") || arr[i].includes("o") || arr[i].includes("u") ){
            count++
            continue
        } else
        {
            break
        }
}
// console.log(count)
if(count>=arr.length){
    console.log("true")
}else{
    console.log("false")
}
