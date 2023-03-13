import React from 'react';
import Image from '../Image';
import './CaseStudyCard.css';
import { BsArrowRight } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function CaseStudyCard({ imageUrl, altText, identityNumber, name, author, boxLink }) {
  return (
    <div className="shadow-lg flex flex-col w-64 case-study-card-style" data-testid="image-card">
      <Image imageUrl={imageUrl} altText={altText} />
      <div className="px-3 py-1">
        <div className="text-xs mb-1">{identityNumber}</div>
        <div className="font-bold text-xl mb-1">{name}</div>
        <div className="font-medium text-xs mb-1 text-gray-500">by {author}</div>
      </div>
      <Link to={boxLink} className="link-button self-end text-xs mb-2 font-medium cursor-pointer" target="_blank">
        Read More
        <BsArrowRight className="inline-block mx-2 text-blue-800" />
      </Link>
    </div>
  );
}

CaseStudyCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  identityNumber: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  boxLink: PropTypes.string.isRequired,
};
