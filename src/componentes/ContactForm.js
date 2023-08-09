import React, { useState } from 'react';
import '../App.css';


const ContactForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = { id: Date.now(), name, email, phone };
    onAdd(newContact);
    setName('');
    setEmail('');
    setPhone('');
  };


  return (
    <form  onSubmit={handleSubmit}>
      <input className='formulario'
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input className='formulario'
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input className='formulario'
        type="tel"
        placeholder="Telefone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button className='boton' type="submit">Adicionar</button>
    </form>
  );
};

export default ContactForm;
