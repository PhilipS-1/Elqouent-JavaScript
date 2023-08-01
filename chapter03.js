//functions
//define f to hold a function value
const f = (a) => {
    console.log(a + 2)
}
//less verbose
let h = a => console.log(a + 3)
//declare a function (on top of scope always)
function g(a, b){
    return a * b * 3.5
}

//closure
function multiplier(factor) {
    return number => number * factor //return a function that takes one arg (number) and returns factor * number
}

let twice = multiplier(2)
let thrice = multiplier(3)

console.log(twice(5))
console.log(thrice(5))

//exercises
//minimum function
function min(a, b){
    return (a-b) > 0 ? b : a
}

console.log(min(0, 10))
console.log(min(0, -10))

//recursion
function isEven(n){
    if (n < 0) return isEven(n * (-1))
    else if (n === 0) return true
    else if (n === 1) return false 
    else return isEven(n-2)
}

//bean counting
function countChar(word, char){
    return [...word].filter(c => c === char)
        .reduce((acc, c) => acc + 1, 0)
}

function countBs(word){
    return countChar(word, "B")
}
