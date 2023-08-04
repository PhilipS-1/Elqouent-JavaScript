//methods 
function speak(line){
    console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = {type: "white", speak}
let hungryRabbit = {type: "hungry", speak}

whiteRabbit.speak("test")
hungryRabbit.speak("blalba")


//this in arrow functions
function normalize(){
    //expects an object with properties coords and length:
    console.log(this.coords.map(n => n / this.length));
}
normalize.call({coords: [1,2,3], length: 5});

//classes
//vector in 2 dim space
class Vec{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    plus(other){
        return new Vec(this.x + other.x, this.y + other.y);
    }

    minus(other){
        return new Vec(this.x - other.x, this.y - other.y);
    }
    get length(){
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
}

console.log(new Vec(1,2).plus(new Vec(1,2)))

//group class (implementation of a set)
class Group{
    constructor(){
        this.members = [];
    }
    static from(array){
        let group = new Group;
        group.members = array;
        return group;
    }
    add(elem){
        if(!(this.members.includes(elem))){
            this.members.push(elem);
        }
    }
    delete(elem){
        this.members = this.members.filter(n => n !== elem);
    }
    has(elem){
        return this.members.includes(elem);
    }

}

let g = Group.from([3,4])
g.add(5)
console.log(g)
g.delete(3)
console.log(g)
console.log(g.has(5))