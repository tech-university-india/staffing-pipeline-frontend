import React from 'react';
import Image from '../Image';
import './ImageCard.css';
import { BsArrowRight } from 'react-icons/bs';
import PropTypes from 'prop-types';

export default function ImageCard({
  imageUrl,
  altText,
  identityNumber,
  name,
  designation,
  location,
  startDate,
  daysToGo,
  buttonText,
  isUserCard,
  handleButtonClick,
}) {
  return (
    <div className="shadow-lg flex flex-col w-56 image-style" data-testid="image-card">
      <Image imageUrl={imageUrl} altText={altText} />
      <div className="px-3 py-2">
        <div className="text-xs mb-1">{isUserCard ? `FMNO: ${identityNumber}` : identityNumber}</div>
        <div className="font-bold text-xl mb-1">{name}</div>
        <div className="font-semibold text-xs mb-1">{isUserCard ? designation : `Start Date: ${startDate}`}</div>
        <div className="font-medium text-xs mb-1 text-gray-500">{isUserCard ? location : `${daysToGo} Days to go`}</div>
      </div>
      <div className="link-button self-end text-xs mb-2 font-medium cursor-pointer" onClick={handleButtonClick}>
        {buttonText}
        <BsArrowRight className="inline-block mx-2 text-blue-800" />
      </div>
    </div>
  );
}

ImageCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  identityNumber: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  designation: PropTypes.string,
  startDate: PropTypes.string,
  daysToGo: PropTypes.string,
  location: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  isUserCard: PropTypes.bool,
  isEngagementCard: PropTypes.bool,
  handleButtonClick: PropTypes.func.isRequired,
};
