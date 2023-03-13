import * as React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {
  const { errorCode } = useParams();
  const { state } = useLocation();
  return (
    <div className="error-container">
      <p className="error-text">Something went wrong!</p>
      {errorCode && (
        <div>
          <p className="errorText">{`Error code: ${errorCode}`}</p>
          <p className="error-text">{state.message}</p>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
