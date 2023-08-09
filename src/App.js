import React, { useState } from 'react';
import ContactList from './componentes/ContactList';
import ContactForm from './componentes/ContactForm';

import './App.css';


const App = () => {
  const [contacts, setContacts] = useState([]);


  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };


  return (
    <div className='App'>
      <div className='contenedor-principal'>
      <h1>Agenda de Contactos</h1>
      <ContactForm onAdd={addContact} />
      <ContactList contacts={contacts} onDelete={deleteContact} />
    </div>
    </div>
  );

  
};

export default App;


