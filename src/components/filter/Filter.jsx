import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export const Filter = ({ onChange, value }) => {
  let contactsListId = nanoid();

  return (
    <label htmlFor="">
      Find contacts by name
      <input type="text" onChange={onChange} value={value} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
};
