import React from 'react';
import './InputComponent.css';
import propTypes from 'prop-types';
export default function InputComponent(props) {
  return (
    <div>
      <input type="text" className={props.className} placeholder={props.placeholder} />
    </div>
  );
}
InputComponent.propTypes = {
  placeholder: propTypes.string,
  className: propTypes.string.isRequired,
};
