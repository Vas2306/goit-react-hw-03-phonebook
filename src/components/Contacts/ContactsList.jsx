import PropTypes from 'prop-types';
import css from '../Contacts/ContactList.module.css';

const ContactsList = ({ contacts, removeContact }) => {
  return (
    <div>
      <ul className={css.list}>
        {contacts.map(contact => (
          <li className={css.item} key={contact.id}>
            <p>{contact.name}</p>
            <p>{contact.number}</p>
            <button
              type="button"
              className={css.btn}
              onClick={() => removeContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default ContactsList;
