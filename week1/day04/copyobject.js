// Write a function to create a copy of an object without changing original object.
// Do the same with an array as well.

var object={
    name: "mahi",
    age:23,
    background:"css"
}
function check(ar){
    var obj= Object.assign({},ar)
    return obj
}

var objj= check(object)
objj.name="rishav"
object.name="shubhra"
console.log(objj)
console.log(object)

var arr= [1,2,3,4,5]

var array=arr.map(function(el){
    return el;
})

array[1]=5;

console.log(arr)
console.log(array)