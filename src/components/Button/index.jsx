import React from 'react';
import './button.css';
import PropTypes from 'prop-types';

export default function Button({ buttonText, handleClick }) {
  return (
    <button onClick={handleClick} className="button" data-testid="button">
      {buttonText}
    </button>
  );
}

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
