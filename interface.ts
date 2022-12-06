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