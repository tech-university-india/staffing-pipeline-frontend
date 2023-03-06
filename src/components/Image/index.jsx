import React from 'react';
import './image.css';
import PropTypes from 'prop-types';

export default function Image({ imageUrl, altText }) {
  return <img src={imageUrl} alt={altText} className="image-component" />;
}

Image.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};
