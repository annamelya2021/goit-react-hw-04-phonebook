import { useState } from 'react';
import shortid from 'shortid';
import { Input, Form, Button, Label } from './ContactForm.styled';
import PropTypes from 'prop-types';

function ContactForm({ submit }) {
  const [form, setForm] = useState({ name: '', number: '' });
  const onHandleImputChange = e => {
    const { name, value } = e.currentTarget;
    setForm(prevName => ({ ...prevName, [name]: value }));
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    submit({ id: shortid.generate(), ...form });
    setForm({ name: '', number: '' });
  };
  return (
    <Form onSubmit={onHandleSubmit}>
      <Label>
        Name:
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={form.name}
          onChange={onHandleImputChange}
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
          value={form.number}
          onChange={onHandleImputChange}
        />
      </Label>

      <Button type="submit">Add contact</Button>
    </Form>
  );
}

ContactForm.propTypes = { submit: PropTypes.func.isRequired };
export default ContactForm;
