import React, { useState } from 'react';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from 'primereact/sidebar';
import { Dialog } from 'primereact/dialog';
import { Api } from '../../services/api';
import { useAuth } from '../../context/AuthProvider/useAuth';
import { Button } from 'primereact/button';
import { AxiosResponse } from 'axios';
function Menu() {

  const auth = useAuth()
  const navigate = useNavigate()
  let req: AxiosResponse<any, any>
  const [display, setDisplay] = useState(false)
  const [visible, setVisible] = useState(false)

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })
  async function register(form: object) {
    try {
      req = await Api.post('api/register/', form)
      console.log(req.data)
    } catch (error) {
      alert('Algo deu errado! Confira os dados ou tente novamente mais tarde')
    }
  }

  return (
    <div className='menu'>
      <img src="home.svg" alt="home" height={40} width={40} onClick={() => {
        navigate('/home')
      }} />
      <img src="menu.svg" alt="home" height={40} width={40} onClick={() => {
        setDisplay(!display)
      }} />
      <Sidebar visible={display} onHide={() => setDisplay(!display)}>
        <div className='buttons'>
          <div className="button" onClick={() => auth.logout()}>logout</div>
          <div className="button" onClick={() => {
            setVisible(!visible)
            setDisplay(!display)
          }}>Cadastrar Usuário</div>
        </div>
      </Sidebar>
      <Dialog visible={visible} onHide={() => {
        setVisible(!visible)
        setDisplay(!display)
      }}>
        <div className="form">
          <div className='inputs'>
            <input type="text" placeholder='usuário' onChange={(e) => {
              setForm({
                ...form,
                username: e.target.value
              })
            }} />
            <input type="email" placeholder='Email' onChange={(e) => {
              setForm({
                ...form,
                email: e.target.value
              })
            }} />
            <input type='password' placeholder='senha' onChange={(e) => {
              setForm({
                ...form,
                password: e.target.value
              })
            }} />
          </div>
          <Button className='button' label="Entrar" aria-label="Submit" onClick={() => {
            if (form.email === '') {
              alert('Insira um email válido!')
            } else if (form.username === '') {
              alert('Insira um node de usuário válido!')
            } else if (form.password === '') {
              alert('Insira uma senha válida!')
            } else {
              register(form)
            }
          }} />
        </div>
      </Dialog>
    </div>
  );
}

export default Menu;
