import React, { useState } from 'react';
import './style.scss';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useAuth } from '../../context/AuthProvider/useAuth';


function Login() {
    const auth = useAuth()
    //const navigate = useNavigate()
    const [type, setType] = useState('password');
    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    async function login(user: any) {

        try {

            await auth.authenticate(user.username, user.password)
            //await auth.authenticate(user.username, user.password)
            //navigate('/Private')

        } catch (error) {
            alert("Algo deu errado... verifique os dados e tente novamente.")
        }
    }

    return (
        <div className="Login">
            <div className="content">
                <p>Login</p>
                <div className='inputs'>
                    <input type="text" value={user.username} placeholder='usuário'onChange={(e) => {
                        setUser({
                            ...user,
                            username: e.target.value
                        })
                    }} />
                    <input type={type} value={user.password} placeholder='senha' onChange={(e) => {
                        setUser({
                            ...user,
                            password: e.target.value
                        })
                    }} />
                </div>
                <Button label="Entrar" aria-label="Submit" onClick={() => {
                    login(user)
                }} />
            </div>
        </div>
    );
}

export default Login;
