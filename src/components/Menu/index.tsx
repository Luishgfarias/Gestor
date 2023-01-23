import React, { useState } from 'react';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from 'primereact/sidebar';
import { Dialog } from 'primereact/dialog';
import { Api } from '../../services/api';
import { useAuth } from '../../context/AuthProvider/useAuth';
import { Button } from 'primereact/button';
import { AxiosResponse } from 'axios';
function Menu(props: any) {

  const auth = useAuth()
  const navigate = useNavigate()
  let req: AxiosResponse<any, any>
  const [visible, setVisible] = useState(false)
  const [menu, setMenu] = useState('menu')

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })
  async function register(form: object) {
    try {
      req = await Api.post('api/register/', form)
      console.log(req.data)
      if (req.status === 200) {
        alert('cadastrado com sucesso')
        setVisible(!visible)
      }
    } catch (error) {
      alert('Algo deu errado! Confira os dados ou tente novamente mais tarde')
    }
  }

  return (
    <><div className={menu}>
      <div className='group'>
        {menu === 'menu' ?
          <div className='item' onClick={() => {
            if (menu === 'menu') {
              setMenu('close')
            }
            else {
              setMenu('menu')
            }
          }}>
            <img src="next.svg" height={35} width={35} alt="" style={{ rotate: '180deg' }} />
            <h4>Diminuir</h4>
          </div>
          :
          <div className='item' onClick={() => {
            if (menu === 'menu') {
              setMenu('close')
            }
            else {
              setMenu('menu')
            }
          }}>
            <img src="next.svg" height={30} width={30} alt="" />
            <h4>Diminuir</h4>
          </div>
        }
        <div className="item">
          <img src="home.svg" alt="home" height={50} width={50} onClick={() => {
            navigate('/home');
          }} />
          <h4>Home</h4>
        </div>
        {/* <div className="item">
          <img src="customer.svg" alt="home" height={50} width={50} style={{ cursor: 'pointer' }} onClick={() => {
            setVisible(!visible)
          }} />
          <h4>Gerenciamento</h4>
        </div> */}
      </div>
      <div className="itemLog">
        <div className="content">
          <img src="placeholder.png" alt="home" height={40} width={40} onClick={() => {
            auth.logout();
          }} />
          <div>
            <h4>Alvo</h4>
            <p>Admin</p>
          </div>
        </div>
        <img className='img' src="logout.svg" alt="home" height={25} width={25} onClick={() => {
          auth.logout();
        }} />
      </div>
    </div>
      <Dialog visible={visible} onHide={() => {
        setVisible(!visible);
      }}>
        <div className="form">
          <div className='inputs'>
            <input type="text" placeholder='usuário' onChange={(e) => {
              setForm({
                ...form,
                username: e.target.value
              });
            }} />
            <input type="email" placeholder='Email' onChange={(e) => {
              setForm({
                ...form,
                email: e.target.value
              });
            }} />
            <input type='password' placeholder='senha' onChange={(e) => {
              setForm({
                ...form,
                password: e.target.value
              });
            }} />
          </div>
          <Button className='button' label="Entrar" aria-label="Submit" onClick={() => {
            if (form.email === '') {
              alert('Insira um email válido!');
            } else if (form.username === '') {
              alert('Insira um node de usuário válido!');
            } else if (form.password === '') {
              alert('Insira uma senha válida!');
            } else {
              register(form);
            }
          }} />
        </div>
      </Dialog></>
  );
}

export default Menu;
