import { nanoid } from 'nanoid';

export const Filter = ({ onChange, value }) => {
  let contactsListId = nanoid();

  return (
    <label htmlFor="">
      Find contacts by name
      <input type="text" onChange={onChange} value={value} />
    </label>
  );
};
