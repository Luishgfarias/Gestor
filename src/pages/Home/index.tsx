import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useAuth } from '../../context/AuthProvider/useAuth';
import './style.scss';


function Home() {
    
const auth = useAuth()

    return (
        <div className="Home">
           <h1>home</h1>
           <Button onClick={() => auth.logout()}>Logout</Button>
        </div>
    );
}

export default Home;
