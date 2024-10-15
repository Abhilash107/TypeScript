let score: number | string | boolean = 33;

score = 44
score = false;


// Example
type User = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    id: number;
}

let abhilash: User | Admin = {
    name: "Abhilash",
    id: 234
}

abhilash = {
    username: "abhi",
    id: 2345,
}


// Example
function getDbId(id: number | string){
    //console.log(`Db id is: ${id}`);
   if(typeof id === "string") id.toLowerCase()

}
// getDbId(9)
// getDbId("9")



//Arrays
//const data: number[] = [1,2,3,4,5,6,"8"]//error
const data1: number[] = [1,2,3,4,5,6,8]

const data2: string[] = ["1","2","3"]

//const data3: string | number[] = ["1","2","3"]// invalid syntax
const data3: string[] | number[] = ["1","2","3"]//* either all nums or strs

const data4: (string | number | boolean)[] = ["1","2","3", 4, false]//* both types


let seatAllotment: "aisle" | "middle" | "window"


seatAllotment = "aisle"
seatAllotment = "crew"// Error
//Type '"crew"' is not assignable to type '"aisle" | "middle" | "window"'





