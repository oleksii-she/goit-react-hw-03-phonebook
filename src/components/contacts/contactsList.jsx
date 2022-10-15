import { nanoid } from 'nanoid';

export const ContactsList = ({ dataList }) => {
  let contactsListId = nanoid();

  return (
    <ul>
      {dataList.map(el => (
        <li key={el.id}>
          <p>
            {el.name}
            <span>{el.number}</span>
          </p>
        </li>
      ))}
    </ul>
  );
};
