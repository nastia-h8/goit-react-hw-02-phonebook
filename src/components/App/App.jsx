import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';

import { GlobalStyle } from 'components/GlobalStyle';
import { Layout } from 'components/Layout';
import { MainTitle, Title } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };

  handleFormSubmit = newContact => {
    const isInContactList = this.checkContacts(newContact);

    if (isInContactList) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, { id: nanoid(), ...newContact }],
      }));
    }
  };

  checkContacts = newContact => {
    return this.state.contacts.some(
      contact =>
        contact.name.toLowerCase() === newContact.name.trim().toLowerCase()
    );
  };

  changeNameFilter = name => {
    this.setState({ filter: name });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContacts = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const visibleContacts = this.getFilteredContacts();
    return (
      <Layout>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm onFormSubmit={this.handleFormSubmit} />

        <Title>Contacts</Title>
        <ContactFilter onFilterNameChange={this.changeNameFilter} />
        <ContactList
          contacts={visibleContacts}
          onContactsDelete={this.deleteContacts}
        />

        <GlobalStyle />
      </Layout>
    );
  }
}
