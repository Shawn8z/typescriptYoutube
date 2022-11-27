const User = {
    name: "shawn",
    email: "shawn@gmail.com",
    isAvtive: true
}


// function createUser({name: string, isPaid: boolean}) {

// }

const newUser = {name: "shawn", isPaid: false, email: "shawn@gmail.com"}

// createUser(newUser)

function createCourse():{name:string, price:number}{
    return {name:"shawn", price: 15}
}


// type User = {
//     name: string,
//     email: string,
//     isActive: boolean
// }

// type Mystring = string

// function createUser(user: User): User{
//     return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true})


type User = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean,
    credcardDetails?: number
}


let myUser: User = {
    _id: "1234",
    name: "h",
    email: "h@h.com",
    isActive: false
}

myUser.email = "h@gmail.com"






export {}
