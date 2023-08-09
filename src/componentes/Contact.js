import React from 'react';

const Contact = ({ contact, onDelete }) => {
  const { id, name, email, phone } = contact;

  return (
    <div>
      <p>{name}</p>
      <p>Email: {email}</p>
      <p>Telefone: {phone}</p>
      <button className='boton-eliminar' onClick={() => onDelete(id)}>Eliminar</button>
    
    </div>
  );
};

export default Contact;
