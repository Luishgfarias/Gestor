import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useAuth } from '../../context/AuthProvider/useAuth';
import './style.scss';
import Menu from '../../components/Menu';


function Home() {

    return (
        <div className="bodyHome">
            <Menu />
            <div className="Home">
                <h1>home</h1>
            </div>
        </div>
    );
}

export default Home;
