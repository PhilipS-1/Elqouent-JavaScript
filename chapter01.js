//type coercion
console.log(false == 0) //true
console.log(0 == null) //false 
console.log("5" + 1) //51
console.log("5" - 1) //4 ??? 

//precise comparison
console.log(0 == false) //true -> type coercion
console.log(0 === false) //false 

console.log(0 != false) //false
console.log(0 !== false) //true 