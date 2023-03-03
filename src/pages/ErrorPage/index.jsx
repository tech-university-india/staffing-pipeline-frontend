import * as React from 'react';
import { useParams } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {
  const { errorCode } = useParams();
  return (
    <div className="error-container">
      <p className="error-text">Something went wrong!</p>
      {errorCode && <p className="errorText">{`Error code: ${errorCode}`}</p>}
    </div>
  );
};

export default ErrorPage;
