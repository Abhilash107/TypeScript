function addTwo(num: number){
    return num + 2
}


function getUpper(value: string){
    return value.toUpperCase()
}

function signUp(name:string, email:string, isPaid:boolean){}


let loginUser = (name:string, email:string, isPaid:boolean = false) => {

}
// isPaid argument isn't required as we have set fasle as default
loginUser("h", "jhjhd")



addTwo(7)
getUpper("3")
signUp("Abhilash", "asw33", false)



//* Types

function displayError(msg: string): void{
    console.error(msg)
    // this function doesn't return anything so mark as void
}

function handleError(msg: string): never{
    throw new Error(msg)
}
// The never type refers values which r never observed
// means that a function throws exception or terminates execution of the program
