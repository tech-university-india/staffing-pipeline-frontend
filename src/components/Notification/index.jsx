import React from 'react';

import './notification.css';
import propTypes from 'prop-types';

export default function Notification({ message }) {
  const [show, setShow] = React.useState(true);
  if (show) {
    return (
      <div className={'notification-card'}>
        <div className="message">
          <p>{message}</p>
        </div>
        <div className="close-button" onClick={() => setShow(false)}>
          X
        </div>
      </div>
    );
  }
}
Notification.propTypes = {
  message: propTypes.string,
};
