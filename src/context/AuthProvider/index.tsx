import React, {createContext, useEffect, useState} from "react";
import { IAuthProvider, IContext, IUser } from "./types";
import { getLocalStorage, loginRequest, setLocalStorage } from "./util";

export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = ({ children }: IAuthProvider) => {

    const [user, setUser] = useState<IUser | null>()

    useEffect(() => {

        const user = getLocalStorage()

        if(user){
            setUser(user)
        }

    }, [])

    async function authenticate(username: string, password: string) {
        const res = await loginRequest(username, password)

        const payload = { token: res.access, username}

        setUser(payload)
        setLocalStorage(payload)
        window.location.href = '/home'
    }

    async function logout() {
        setUser(null)
        setLocalStorage(null)
        window.location.href = '/'
    }

    return(
        <AuthContext.Provider value={{...user, authenticate, logout}}>
            { children }
        </AuthContext.Provider>
    )
}