export type typeOfP = "standart" | "admin" | "premium"

export interface Person{
    username: string
    password: number
    type: typeOfP
}
