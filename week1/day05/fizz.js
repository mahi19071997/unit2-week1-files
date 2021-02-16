// Write a program that outputs the string representation of numbers from 1 ton.



function runProgram(input) {
    var data = input.split(/[\r\n]+/)
    var times = Number(data[0])
    for (var i = 1; i < data.length; i++) {
        for (var j = 1; j <= data[i]; j++) {
            if (j % 3 == 0 && j % 5 == 0) {
                console.log("FizzBuzz")

            }
            else if (j % 3 == 0) {
                console.log("Fizz")

            }
            else if (j% 5 == 0) {
                console.log("Buzz")

            }
            else {
                console.log(j)

            }
        }



    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});