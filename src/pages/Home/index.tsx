import React, { useEffect, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useAuth } from '../../context/AuthProvider/useAuth';
import './style.scss';
import Menu from '../../components/Menu';
import Table from '../../components/Table';
import { currency } from '../../services/api';
import axios from 'axios';


function Home() {
    const [real, setReal] = useState<any>()
    useEffect(() => {
        const req = async () => {

            await axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo`)
                .then(
                    async (res) => {
                        const json = res.data['Global Quote']
                        console.log(json);
                        await setReal(json['01. symbol'] + json["05. price"] + json['10. change percent'])


                    }
                )
                .catch(
                    err => console.log(err)

                )
        }
        req()
    }, [])


    return (
        <div className="bodyHome">
            <Menu />
            <div className="Home">
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
                <div className="buttons">
                    <Button className='button'> import</Button>
                    <Button className='button'> export</Button>
                </div>
                <Table />
            </div>
        </div>
    );
}

export default Home;
