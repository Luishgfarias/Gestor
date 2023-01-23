import React, { useEffect, useRef, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useAuth } from '../../context/AuthProvider/useAuth';
import './style.scss';
import Menu from '../../components/Menu';
import Table from '../../components/Table';
import { currency } from '../../services/api';
import axios from 'axios';
import { PanelMenu } from 'primereact/panelmenu';
import FileUpload from '../../components/Filepload';


function Home() {
    const [real, setReal] = useState<any>()
    const [display, setDisplay] = useState('none')
    const [aside, setAside] = useState(true)
    const menu = useRef<any>(null);
    const auth = useAuth()
    useEffect(() => {
        const req = async () => {

            await axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=PETR4.SAO&apikey=RRVHTOJID6M79R4S`)
                .then(
                    async (res) => {
                        console.log(res.data);

                        const json = res.data['Global Quote']
                        console.log(json['10. change percent']);
                        await setReal(json['01. symbol'].replace('.SAO', '') + ' ' + 'R$' + json["05. price"].substr(0, 5) + ' ' + json['10. change percent'].substr(0, 5) + '%')


                    }
                )
                .catch(
                    err => console.log(err)

                )
        }
        req()
    }, [])

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
            <Menu display= {display} />
            <div className="Home">
                {/* <div className="banner">
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
                </div> */}
                <div className="tabela">
                    <FileUpload />
                    <Table />
                </div>
            </div>
        </div>
    );
}

export default Home;
