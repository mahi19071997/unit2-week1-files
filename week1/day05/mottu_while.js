var steps=0;
var destination= 26;
var currentPosition=0;

while(destination != currentPosition ){
    var max=0
    for(var i=1;i<=5;i++){
        var tempo= currentPosition + i
        if(tempo<=destination){
            max=i
        }
    }
    currentPosition+=max
    steps++
}
console.log(steps)
