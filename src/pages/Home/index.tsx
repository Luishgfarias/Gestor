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


function Home() {
    const [real, setReal] = useState<any>()
    const [display, setDisplay] = useState('aside')
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
            <div className="header">
                <div>
                    <Menu model={items} popup ref={menu} id="popup_menu" />
                    <Button onClick={(event) => menu.current.toggle(event)} className='popMenu'>
                        <img src="menu.svg" alt="" width={30} />
                    </Button>
                </div>
            </div>
            <div className="Home">
                <aside className={display}>
                    <nav>
                        <div className="item">
                            <p>logOut</p>
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
                    <div className="buttons">
                        <Button className='button'> import</Button>
                        <Button className='button'> export</Button>
                    </div>
                    <Table />
                </div>
            </div>
        </div>
    );
}

export default Home;
