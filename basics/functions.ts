//functions

function addTwo(num: number){
    return num + 2
}

function getUpper(val: string){
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean){

}

let login = (name: string, email: string, isPaid = false) => {

}


addTwo(2)
getUpper("hola")
signUpUser("maicol", "maykol.com",  true)
login("yo", "yo@yo.com")



//how to write better functions

//arrow functions

const getVal = (s:string):string => {
    return ""
}


const heros = ["cap america", "hulk", "spiderman"]


heros.map((hero):string => {
    return `your hero is ${hero}`
})


//how to type errors error

function consoleError (errmsg: string):void{
    console.log(errmsg)
}

//how to make error most robust

function handleError (errmsg: string): never {
    throw new Error(errmsg);
}


export{}