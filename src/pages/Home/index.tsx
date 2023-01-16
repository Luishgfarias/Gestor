import React, { useEffect, useRef, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useAuth } from '../../context/AuthProvider/useAuth';
import './style.scss';
import Side from '../../components/Menu';
import { Menu } from 'primereact/menu';
import Table from '../../components/Table';
import { currency } from '../../services/api';
import axios from 'axios';
import { PanelMenu } from 'primereact/panelmenu';
import FileUpload from '../../components/Filepload';


function Home() {
    const [real, setReal] = useState<any>()
    const [display, setDisplay] = useState('none')
    const menu = useRef<any>(null);
    const auth = useAuth()
    useEffect(() => {
        const req = async () => {

            await axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo`)
                .then(
                    async (res) => {
                        const json = res.data['Global Quote']
                        console.log(json['10. change percent']);
                        await setReal(json['01. symbol'] + ' ' + json["05. price"] + ' ' + json['10. change percent'].substr(0, 5) + '%')


                    }
                )
                .catch(
                    err => console.log(err)

                )
        }
        req()
    }, [display])

    const items = [{
        label: 'Options',
        items: [
            {
                label: 'logOut',
                command: () => {
                    auth.logout()
                    //toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
                }
            },
        ]
    }];

    return (
        <div className="bodyHome">
            <Side setDisplay={(on: any) => setDisplay(on)} />
            <div className="Home">
                <aside className={display}>
                    <nav>
                        <div className="item">
                            <p>Menu1</p>
                        </div>
                        <div className="item">
                            <p>Menu2</p>
                        </div>
                        <div className="item">
                            <p>Menu3</p>
                        </div>
                    </nav>
                    <span onClick={() => setDisplay('none')}>X</span>
                </aside>
                <aside className='aside'>
                    <nav>
                        <div className="item">
                            <p>Menu1</p>
                        </div>
                        <div className="item">
                            <p>Menu2</p>
                        </div>
                        <div className="item">
                            <p>Menu3</p>
                        </div>
                    </nav>
                </aside>
                <div className="banner">
                    <div className="content">
                        {
                            real
                        }
                    </div>
                    <div className="content">
                        {
                            real
                        }
                    </div>
                    <div className="content">
                        {
                            real
                        }
                    </div>
                    <div className="content">
                        {
                            real
                        }
                    </div>
                    <div className="content">
                        {
                            real
                        }
                    </div>
                    <div className="content">
                        {
                            real
                        }
                    </div>
                    <div className="content">
                        {
                            real
                        }
                    </div>
                    <div className="content">
                        {
                            real
                        }
                    </div>
                    <div className="content">
                        {
                            real
                        }
                    </div>
                    <div className="content">
                        {
                            real
                        }
                    </div>
                    <div className="content">
                        {
                            real
                        }
                    </div>
                    <div className="content">
                        {
                            real
                        }
                    </div>
                    <div className="content">
                        {
                            real
                        }
                    </div>
                    <div className="content">
                        {
                            real
                        }
                    </div>
                    <div className="content">
                        {
                            real
                        }
                    </div>
                    <div className="content">
                        {
                            real
                        }
                    </div>
                    <div className="content">
                        {
                            real
                        }
                    </div>
                    <div className="content">
                        {
                            real
                        }
                    </div>
                    <div className="content">
                        {
                            real
                        }
                    </div>
                    <div className="content">
                        {
                            real
                        }
                    </div>
                </div>
                <div className="tabela">
                    <FileUpload />
                    <Table />
                </div>
            </div>
        </div>
    );
}

export default Home;
