//higher order functions

//flatten array of arrays
function flatten(arr){
    return arr.reduce((acc, list) => acc.concat(list), [])
}

let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(flatten(arrays))

//loop function
function loop(n, test, update, body){
    for(let i = n; test(n); n = update(n)){
        body(n)
    }
}

loop(3, n => n > 0, n => n - 1, console.log);

//test if predicate is true for every elem in array
function every(arr, test){
    let not_test = (x) => !test(x)
    return arr.some(not_test) ? false : true;
}

let not_test = (pred) => !pred 
console.log(not_test(true))