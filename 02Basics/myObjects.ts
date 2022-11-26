const User = {
    name: "shawn",
    email: "shawn@gmail.com",
    isAvtive: true
}


function createUser({name: string, isPaid: boolean}) {

}

const newUser = {name: "shawn", isPaid: false, email: "shawn@gmail.com"}

createUser(newUser)

function createCourse():{name:string, price:number}{
    return {name:"shawn", price: 15}
}



export {}
