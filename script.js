// array challenegs from read me

// 1: Always Hungry

console.log("QUESTION 1 ANSWER")

function alwaysHungry(arr) {
    for(i=0; i < arr.length; i++){
        if (arr[i] == "food") {
            console.log("yummy")
        }
    }
    if (arr.includes("food") == false) {
        console.log("I'm hungry")
    }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);

alwaysHungry([4, 1, 5, 7, 2]);




// 2: High Pass Filter

console.log("QUESTION 2 ANSWER")

function highPass(arr, cutoff) {
    var filteredArr = [];
    for (i=0; i < arr.length; i++){
        if (arr[i] > cutoff){
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);



// 3: Better Than Average

console.log("QUESTION 3 ANSWER")

function betterThanAverage(arr) {
    var sum = 0;
    for (i=0; i < arr.length; i++){
        sum += arr[i]
    }
    var avg = sum / arr.length;
    var count = 0;
    for (i=0; i < arr.length; i++){
        if (arr[i] > avg) {
            count += 1
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result);



// 4: Array Reverse

console.log("QUESTION 4 ANSWER")

function reverse(arr) {
    arr.reverse()
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); 


// 5: Fibonacci Array

console.log("QUESTION 5 ANSWER")

function fibonacciArray(n) {
    var fibArr = [0, 1];
    for (i=2; i < n; i++){
        fibArr.push(fibArr[i-1] + fibArr[i-2])
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); 


