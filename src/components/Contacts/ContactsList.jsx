import { List, Item, Button } from './ContactList.styled';
import PropTypes from 'prop-types';

const ContactsList = ({ data, onDeleteContacts }) => {
  return (
    <List>
      {data.map(({ name, id, number }) => (
        <Item key={id}>
          <span>{name}</span>: <span>{number}</span>
          <Button onClick={() => onDeleteContacts(id)}>Delete</Button>
        </Item>
      ))}
    </List>
  );
};

ContactsList.propTypes = {
  onDeleteContacts: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
export default ContactsList;
