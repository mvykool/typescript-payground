const User = {
    name: "maicol",
    email: "maicol@hl.com",
    isActive: false
}


function createUser({name: string, isPaid: boolean}){

}

createUser({name: "maicol", isPaid: true})


function createCourse():{name: string, isPaid: boolean}{
    return {name: "react", isPaid: false}
}


//create types

type User = {
    name: string;
    email: string;
    isActive: boolean
}

function createUserNow (user: User): User {

    return({name: "", email: "", isActive: true})
}

//readonly when you do not want a element to change

type UserReadonly = {
   readonly _id: string
   name: string
   email: string
   isActive: boolean

   //wjem we put a ?  means that its optional
   cradircard?: number
}

let myUser: UserReadonly = {
    _id: "nddisau",
    name: "h",
    email: "h@h.com",
    isActive: false

}


//mix types not a very good practice but is doable

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    date: string
}

type cardDetails = cardDate & cardNumber & {
    cvv: string
}


export{}