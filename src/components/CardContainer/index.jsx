import * as React from 'react';
import './CardContainer.css';
import PropTypes from 'prop-types';
const CardContainer = props => {
  return <div className="card-container">{props.children}</div>;
};
export default CardContainer;

CardContainer.propTypes = {
  children: PropTypes.element.isRequired,
};
