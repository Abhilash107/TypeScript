type Point = {
    x: number;
    y: number;
};

function printCoordinate(pt: Point){
    console.log(pt.x);
    console.log(pt.y);
}

//readonly makes sure that variable can't be over-write.
type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    credCardDetails?: number // weird syntax
}

let myUser: User = {
    _id: "123",
    name: "hh",
    email: "a@.dev",
    isActive: false,
}

myUser.name = "asd"
//myUser._id = "12"//Can't assign to '_id' because it is a read-only property

type cardNumber= {
    cardnumber : string
}

type cardDate = {
    cardDate: string
}

// combining all together
type cardDetails = cardNumber & cardDate & {
    cvv: number
}



export{}