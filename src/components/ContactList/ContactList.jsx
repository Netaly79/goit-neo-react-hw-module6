import ContactListItem from "../ContactListItem/ContactListItem";
import css from "./ContactList.module.css";

export const ContactList = ({ contacts, onRemoveItem }) => {
  return (
    <ul className={css.contactBox}>
      {contacts.map((contact) => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          onRemoveItem={onRemoveItem}
        />
      ))}
    </ul>
  );
};

export default ContactList;
