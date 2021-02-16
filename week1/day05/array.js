// Make an array of 3 strings of your choice.
// find if each string contains at least one vowel (a,e,i,o,u)
// if all the strings contain at least one vowel, print true otherwise print false on console.
var arr= ["masai", "school","bangalore"]
var count=0
for(var i=0;i<arr.length;i++)
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