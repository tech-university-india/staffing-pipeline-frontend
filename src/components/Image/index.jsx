import React from 'react';
import './image.css';
import PropTypes from 'prop-types';

export default function Image({ imageUrl, altText, isACircle }) {
  return <img src={imageUrl} alt={altText} className={`${isACircle ? 'circle-image' : ''}`} />;
}

Image.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  isACircle: PropTypes.bool,
};
