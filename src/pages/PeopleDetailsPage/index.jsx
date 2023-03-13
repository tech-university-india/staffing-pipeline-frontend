import './PeopleDetailsPage.css';
import { Header } from '../../components';
import Footer from '../../components/Footer';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { GET_USER_DATA_BY_ID_URL } from '../../constants/apiEndpoints';
import { default as makeRequest } from '../../utils/makeRequest/';

const PeopleDetailsPage = () => {
  const { userId } = useParams();
  const [userDetails, setUserDetails] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    makeRequest(GET_USER_DATA_BY_ID_URL(userId), {}, navigate).then(response => {
      setUserDetails(response);
      console.log('response', userDetails);
    });
  }, [userId, navigate]);

  return (
    <div>
      <Header hasNav={true} />
      <h1>People Details Page</h1>
      <Footer />
    </div>
  );
};

export default PeopleDetailsPage;
