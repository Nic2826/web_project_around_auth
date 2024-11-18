import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import InfoTooltip from './InfoTooltip';
import Test from './Test';

export default function Register({ isOpen, onClose, onUpdateUser, props }) {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const currentUser = useContext(CurrentUserContext);

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

  function handleSubmit(e) {
    // Evita que el navegador navegue hacia la dirección del formulario
    e.preventDefault();

    // Pasa los valores de los componentes gestionados al controlador externo
    onUpdateUser({
      email,
      password,
    });
  }

  return (    
   <Test
      headerTitle="Iniciar Sesión"
      authTitle="Regístrate"
      onSubmit={handleSubmit}
      onUpdateUser={onUpdateUser}
      buttonText="Regístrate"
      authFooter="¿Ya eres miembro? Inicia sesión aquí"
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