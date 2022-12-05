//unions

let score: number | string = 33


score = 44

score = "55"


type User = {
    name: string
    id: number

}

type Admin = {
    username: string
    id: number
    
}

let maicol: User | Admin ={
    name: "maicol", 
    id: 2
}

function getDbId(id: number | string){
    if(typeof id === "string"){
        id.toLocaleUpperCase()
    }
}

//to have 2 or more types in one array

const data: (number | string)[] = ["1", 2, "3"]


//tuples, put the types, the order cant be changed direct in the array

let rgb: [number, number, number] = [255, 255, 255]