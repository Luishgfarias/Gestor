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
                <img src="./placeholder.png" alt="user" style={{
                    zIndex: 100
                }}/>
                <p>Login</p>
                <div className='inputs'>
                    <div className="input">
                        <img src="user.svg" alt="" />
                        <input type="text" value={user.username} placeholder='usuário' onChange={(e) => {
                            setUser({
                                ...user,
                                username: e.target.value
                            })
                        }} />
                    </div>
                    <div className="input">
                        <img src="padlock.svg" alt="" />
                        <input type={type} value={user.password} placeholder='senha' onChange={(e) => {
                            setUser({
                                ...user,
                                password: e.target.value
                            })
                        }} />
                        {
                        type === 'password' ?
                        <img src="eye.svg" alt="" onClick={() => setType('text')} style={{
                            cursor: 'pointer'
                        }}/>
                        :
                        <img src="hidden.svg" alt="" onClick={() => setType('password')} style={{
                            cursor: 'pointer'
                        }}/>
                        }
                    </div>
                </div>
                <Button label="Entrar" aria-label="Submit" onClick={() => {
                    login(user)
                }} />
            </div>
        </div>
    );
}

export default Login;
