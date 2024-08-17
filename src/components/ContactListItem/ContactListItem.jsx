import { HiUser } from "react-icons/hi";
import { BsTelephoneFill } from "react-icons/bs";
import css from "./ContactListItem.module.css";

export const ContactListItem = ({ contact, onRemoveItem }) => {
  return (
    <li className={css.contact}>
      <div className={css.contactInfo}>
        <p>
          <HiUser className={css.iconUser} size="16" /> {contact.name}
        </p>
        <p>
          <BsTelephoneFill className={css.iconTel} size="16" /> {contact.number}
        </p>
      </div>
      <button className={css.button} onClick={() => onRemoveItem(contact.id)}>
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;
