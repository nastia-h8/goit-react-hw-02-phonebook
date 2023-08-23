import PropTypes from 'prop-types';

export function ContactList({ contacts, onContactsDelete }) {
  return contacts.length > 0 ? (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <span>{name}: </span>
          <span>{number}</span>
          <button
            type="button"
            onClick={() => {
              onContactsDelete(id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  ) : (
    <p>No contacts found</p>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onContactsDelete: PropTypes.func.isRequired,
};
