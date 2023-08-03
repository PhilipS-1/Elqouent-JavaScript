//arrays
const arr = ["bla", 2]
arr.push(null)
arr.pop()
console.log(arr)

//objects
let day = {
    squirrel: false,
    events: ["work", "touched grass", "pizza", "running"]
};
day.bla = "test"

console.log("day:", day)

let journal = [];

function addEntry(events, squirrel){
    journal.push({events, squirrel})
}

addEntry(["a", "b", "c"], "bla")
addEntry("test", true)

console.log(journal)

//for each loop
for (let entry of journal){
    console.log(`${entry.events.length} events.`);
}


//functions with infinite arguments
function max(...numbers){
    let result = -Infinity
    for(let number of numbers){
        if(number > result) result = number;
    }
    return result;
}

console.log(max(1,5,123,-2))

//spread out arguments with ... 
let ns = [1,4,5,2,1]
console.log(max(...ns))

//destructuring arrays
function reverseTriple([a, b, c]){
    return [c,b,a]
}

console.log(reverseTriple([1,2,3]))

//JSON
let message = {
    createdOn: "01.01.1992",
    text: "bla"
}

let jsonMessage = JSON.stringify(message)
//stringify obj. to JSON
console.log(jsonMessage)
//parse JSON to obj:
console.log(JSON.parse(jsonMessage).text)

//exercises
function range(start, end, step = 1){
    let result = [];
    while(start != end){
        let i = start
        result.push(i)
        start = start += step
    }
    result.push(end)
    return result;
}

function sum(numbers){
    return numbers.reduce((acc, x) => acc + x, 0)
}

//reverse array
function reverseArray(arr){
    let arrReverse = []
    let length = arr.length
    for(let i = 0; i <=length; i++){
        arrReverse.push(arr.pop())
    }
    return arrReverse;
}

function reverseArrayInPlace(arr){
    let middle = Math.floor(arr.length/2)
    let length = arr.length
    for(i = 0; i < middle -1; i++){
        let temp = arr[i]
        arr[i] = arr[length -i -1]
        arr[length - i -1] = temp
    }
}


//lists
function prepend(number, next = null){
    return {number, next}
}

function createListElem(number, next = null){
    return {number, next}
}

function arrayToList(arr){
    if (arr.length === 0) return null 
    else return createListElem(arr[0], arrayToList(arr.slice(1)))
}

function listToArray(list){
    if(list.next === null) return [(list.number)]
    else return [list.number].concat(listToArray(list.next))
}


function nth(list, n){
    if (n===0) return list.number 
    else return nth(list.next, n-1)
}

l = arrayToList([1,2,3])
console.log(l)
console.log(listToArray(l))
console.log(prepend(20, l))
console.log(nth(l, 1))
