import css from './Contact.module.css';

import { IoPersonSharp } from 'react-icons/io5';
import { IoCall } from 'react-icons/io5';

const Contact = ({ contact, onDelete }) => {
  return (
    <>
      <ul className={css.dataContactList}>
        <li>
          <IoPersonSharp /> {contact.name}
        </li>
        <li>
          <IoCall /> {contact.number}
        </li>
      </ul>
      <button type="button" onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </>
  );
};

export default Contact;
