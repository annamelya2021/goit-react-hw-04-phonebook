import { Component } from 'react';
import shortid from 'shortid';
import { Input, Form, Button, Label } from './ContactForm.styled';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  static propTypes = { submit: PropTypes.func.isRequired };

  state = { id: '', name: '', number: '' };

  onHandleImputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
    this.setState({ id: shortid.generate() });
  };

  onHandleSubmit = e => {
    e.preventDefault();
    this.props.submit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ id: '', name: '', number: '' });
  };

  render() {
    return (
      <Form onSubmit={this.onHandleSubmit}>
        <Label>
          Name:
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.onHandleImputChange}
          />
        </Label>
        <Label>
          Number:
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.onHandleImputChange}
          />
        </Label>

        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

export default ContactForm;
