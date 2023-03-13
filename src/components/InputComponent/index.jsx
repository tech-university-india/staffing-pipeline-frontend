import React from 'react';

import './InputComponent.css';

import propTypes from 'prop-types';

export default function InputComponent({ placeholder }) {
  return (
    <div>
      <input type="text" className={'login-input'} placeholder={placeholder} />
    </div>
  );
}

InputComponent.propTypes = {
  placeholder: propTypes.string,
};
