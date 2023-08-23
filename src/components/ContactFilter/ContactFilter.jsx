import PropTypes from 'prop-types';

export function ContactFilter({ onFilterNameChange }) {
  return (
    <div>
      <label>
        Find contacts by name
        <input
          type="text"
          onChange={e => {
            onFilterNameChange(e.target.value);
          }}
        />
      </label>
    </div>
  );
}

ContactFilter.propTypes = {
  onFilterNameChange: PropTypes.func.isRequired,
};
