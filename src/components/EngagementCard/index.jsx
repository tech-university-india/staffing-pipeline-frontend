import React from 'react';
import Image from '../Image';
import './EngagementCard.css';
import { BsArrowRight } from 'react-icons/bs';
import PropTypes from 'prop-types';

export default function EngagementCard({
  imageUrl,
  altText,
  identityNumber,
  name,
  startDate,
  status,
  handleButtonClick,
}) {
  return (
    <div className="shadow-lg flex flex-col w-56 engagement-card-style" data-testid="image-card">
      <Image imageUrl={imageUrl} altText={altText} />
      <div className="px-3 py-2">
        <div className="text-xs mb-1">{identityNumber}</div>
        <div className="font-bold text-xl mb-1">{name}</div>
        <div className="font-semibold text-xs mb-1">Start Date: {startDate}</div>
        <div className="font-medium text-xs mb-1 text-gray-500">{status}</div>
      </div>
      <div className="link-button self-end text-xs mb-2 font-medium cursor-pointer" onClick={handleButtonClick}>
        Read More
        <BsArrowRight className="inline-block mx-2 text-blue-800" />
      </div>
    </div>
  );
}

EngagementCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  identityNumber: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
};
