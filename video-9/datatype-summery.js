// premitive


// 7type : string,number ,boolearn, null , undifined ,symbol , bigint


const score = 100
const scoreValue = 100.5


const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id === anotherId);


const bigNumber = 2316514661555311312323533635n




// non primitive

// array, obj , function


const heros = ["udit", "nagrag", "daga"]
let myobj = {
    name: "hitesh",
    age: 22,

}

const myfunc = function(){
    console.log("udit");
}


myfunc()
console.log(typeof myobj);
