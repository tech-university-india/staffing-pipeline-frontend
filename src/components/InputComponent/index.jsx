import React from 'react';
import './InputComponent.css';
import propTypes from 'prop-types';
export default function InputComponent(props) {
  return (
    <div>
      <input type="text" className="text-input" placeholder={props.placeholder} />
    </div>
  );
}
InputComponent.propTypes = {
  placeholder: propTypes.string,
};
