import { ContactsItem } from './contactsItem';

export const ContactsList = ({ dataList, onDeleteContact }) => {
  return (
    <ul>
      {dataList.map(data => (
        <ContactsItem
          key={data.id}
          name={data.name}
          number={data.number}
          onClick={() => onDeleteContact(data.id)}
        />
      ))}
    </ul>
  );
};
