const superheros: string[] = []
superheros.push("Batman")
// 'number' is not assignable to parameter of type 'string'
//superheros.push(12) //error

//* 2nd way
const popularity: Array<number> = []
popularity.push(123)


//* 3rd way
type User = {
    name: string;
    isActive: boolean; 
}

const allUsers: User[] = []
allUsers.push({name: "Abhilash", isActive:true})


const MLmodels: number[][] = [
    [255, 255, 255],
    [234.6,4,66,4,45,5]
]
