import ContactForm from 'components/ContactForm';
import ContactsList from 'components/Contacts';
import Filter from 'components/Filter';
import { useState, useEffect } from 'react';
import { Notify } from 'notiflix';
import { Container } from './App.styled';
//
function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('Contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');
  useEffect(() => {
    window.localStorage.setItem('Contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = data => {
    if (
      contacts.some(
        ({ name }) => name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      return Notify.failure(`${data.name} is already in contacts`);
    }
    setContacts([...contacts, data]);
  };

  const filterNamesAdd = data => {
    setFilter(data);
  };

  const filterByName = () => {
    const normalized = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalized)
    );
  };

  const onDeleteContacts = id => {
    setContacts([...contacts].filter(contact => contact.id !== id));
  };
  const data = filterByName();
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm submit={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filterNamesAdd} />
      <ContactsList data={data} onDeleteContacts={onDeleteContacts} />
    </Container>
  );
}

export default App;
