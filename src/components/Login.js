import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useNavigate } from 'react-router-dom';
import InfoTooltip from './InfoTooltip';
import Test from './Test';
import {login} from '../utils/auth';


export default function Login({ onUpdateUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const currentUser = useContext(CurrentUserContext);
  const navigate = useNavigate();

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  useEffect(() => {
    if (currentUser.email !== undefined && currentUser.password !== undefined) {
      setEmail(currentUser.email);
      setPassword(currentUser.password);
    }
  }, [currentUser]);

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

 async function handleSubmit(e) {
    // Evita que el navegador navegue hacia la dirección del formulario
    e.preventDefault();
    navigate('/');

    const data = await login(email, password);
    console.log(data);
  }

  return (
    <Test
      headerTitle="Regístrate"
      authTitle="Inicia Sesión"
      onSubmit={handleSubmit}
      onUpdateUser={onUpdateUser}
      buttonText="Inicia sesión"
      authFooter="¿Aún no eres miembro? Regístrate aquí"
    >

      <input
        className="auth__label"
        type="email"
        placeholder="Correo Electrónico"
        name="email"
        value={email}
        onChange={handleChangeEmail}
        required
      />

      <div className="popup__line"></div>
      <span className="popup__input-error text-input-name-error"></span>

      <input
        className="auth__label"
        type="text"
        placeholder="Contraseña"
        name="contraseña"
        value={password}
        onChange={handleChangePassword}
        required
      />
      <div className="popup__line"></div>
      <span className="popup__input-error text-input-name-error"></span>

      <InfoTooltip />
    </Test>
  )
}
