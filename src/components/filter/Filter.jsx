import PropTypes from 'prop-types';
import { Label, Input } from './filter.styled';
export const Filter = ({ onChange, value }) => {
  return (
    <Label htmlFor="">
      Find contacts by name
      <input type="text" onChange={onChange} value={value} />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
};
