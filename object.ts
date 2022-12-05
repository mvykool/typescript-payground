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


export{}