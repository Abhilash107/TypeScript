let greetings: string = "Abhilash";

//greetings = 4;
//* Type 'number' is not assignable to type 'string'.

console.log(greetings);


let userId: number = 3247596.7879;
// not compulsory to mention type in all situation
// cause TS automatically detects it

let numberOne = 123;//* Good practice




let isLoggedIn: boolean = false;


// Not a good practice
// let numberTwo: number
// numberTwo = 45 

// Any  ==> no typechecking
//! try to avoid this
let hero;// type is any
function getHero(){
    return "Batman"
}

hero = getHero();

export{}