import React from 'react';
import { useAuth } from '../../context/AuthProvider/useAuth';
import './style.scss'

function Protect({ children }: {children: JSX.Element}){
    const auth = useAuth()

    if(!auth.username){
        
        return <h1 className='unAuth'>Não Autorizado</h1>
    }
    return children
}

export default Protect