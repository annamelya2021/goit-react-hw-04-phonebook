import ContactForm from 'components/ContactForm';
import ContactsList from 'components/Contacts';
import Filter from 'components/Filter';
import { Component } from 'react';
import { Notify } from 'notiflix';
import { Container } from './App.styled';
//

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = data => {
    const { contacts } = this.state;

    if (
      contacts.some(
        ({ name }) => name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      Notify.failure(`${data.name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, data],
      }));
    }
  };

  filterNamesAdd = data => {
    this.setState({
      filter: data,
    });
  };

  filterByName = () => {
    const { contacts, filter } = this.state;
    const normalized = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalized)
    );
  };

  onDeleteContacts = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  render() {
    const data = this.filterByName();
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm submit={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={this.filterNamesAdd} />
        <ContactsList data={data} onDeleteContacts={this.onDeleteContacts} />
      </Container>
    );
  }
}

export default App;
