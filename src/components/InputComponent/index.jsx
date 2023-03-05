import React from 'react';
import './InputComponent.css';
import propTypes from 'prop-types';
export default function InputComponent({ className, placeholder }) {
  return (
    <div>
      <input type="text" className={className} placeholder={placeholder} />
    </div>
  );
}
InputComponent.propTypes = {
  placeholder: propTypes.string,
  className: propTypes.string.isRequired,
};
