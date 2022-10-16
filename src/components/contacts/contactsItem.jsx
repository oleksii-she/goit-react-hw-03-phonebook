import PropTypes from 'prop-types';
import { Item } from './contacts.styled';

export const ContactsItem = ({ name, number, onClick }) => {
  return (
    <Item>
      {name}: <span>{number}</span> <button onClick={onClick}>Dellete</button>
    </Item>
  );
};

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
