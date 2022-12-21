import axios from "axios"
import { Api } from "../../services/api"
import { IUser } from "./types"

export function setLocalStorage ( user: IUser | null ) {
    localStorage.setItem('user', JSON.stringify(user))
}

export function getLocalStorage () {
    const json = localStorage.getItem('user')

    if(!json){
        return null
    }

    const user = JSON.parse(json)

    return user ?? null
}

export async function loginRequest( username: string, password: string ){
    try {
        
        const req = await Api.post("api/token/", {username, password})
        console.log(req.data)
        return req.data

    } catch (error) {
        return null
    }
}
