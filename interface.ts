interface User {
    readonly dbId: number
    email: string
    userId: number
    googleId?: string
    startTrial(): string
}

const hitesh: User = { email: "h", userId: 2, dbId: 22,
startTrial: () => {
    return "hola"
}

}

//interfaces and types are very similiar the best way to handle them is using types for data, and interfaces for behavior, keep in mind that interface is mutable, type isnt