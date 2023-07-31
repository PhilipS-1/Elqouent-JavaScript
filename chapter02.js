//looping triangle
let s = "#";

for( let i = 1; i< 6; i++){
    console.log(s.repeat(i))
}

//fizzBuzz
for(let i = 1; i<=15; i++){
    let s = ""
    if(i % 3 == 0) s += "fizz"
    if(i % 5 == 0) s += "buzz"
    if(s == "") console.log(i)
    else console.log(s)
}

//chessboard
let size = 8;
for( let i = 0; i < size; i++){
    let row = ""
    for( let j = 0; j < size; j++){
        if(j % 2 == 0){
            if(i % 2 == 0) row += "#";
            else row += " ";
        }
        else{
            if(i % 2 == 0) row += " ";
            else row += "#";
        }
    }
    console.log(row)
}