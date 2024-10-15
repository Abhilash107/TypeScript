//const user: (string | number)[] = [1, "ab"]

let user: [string, number, boolean]
// in same format
user = ["ab", 23, true]


let rgb: [number, number, number] = [22, 44, 66]

// iIn case of types
type user = [number, string]

const newUser: user = [112, "as"]

newUser[1] = "abhi.dev"
//newUser.push(true)  Error
//In earlier versions of TypeScript, tuples were treated as arrays with fixed lengths but still allowed some operations that could modify them incorrectly, like push.







