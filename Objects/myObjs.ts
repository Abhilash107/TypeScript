const User = {
    name: "Abhilash",
    email: "abhi@dj.dev"
}

//function createUser({name: string, isPaid: boolean}){}

//createUser({"Abhi", false})  error
//createUser({name: "Abhilash", isPaid: false})



function createSoftware():{name: string, isPaid: boolean}{
    return {name: "Resume scanner", isPaid: false}
}

//* Type Aliases

type User = {
    name: string;
    email: string;
    isActive: boolean
}

function createUser(user: User){
    return {name: "", email: "", isActive: true} ;
}

createUser({name: "", email: "", isActive: true})