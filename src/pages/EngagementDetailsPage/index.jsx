import * as React from 'react';
import './EngagementDetailsPage.css';
import { Header } from '../../components';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { GET_ENGAGEMENT_DATA_BY_ID_URL } from '../../constants/apiEndpoints';
import { default as makeRequest } from '../../utils/makeRequest/';

const EngagementDetailsPage = () => {
  const { projectId } = useParams();
  const [engagementDetails, setEngagementDetails] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    makeRequest(GET_ENGAGEMENT_DATA_BY_ID_URL(projectId), {}, navigate).then(response => {
      setEngagementDetails(response);
      console.log('response', engagementDetails);
    });
  }, [projectId, navigate]);

  return (
    <div>
      <Header hasNav={true} />
      <h1>Engagement Details Page</h1>
      <Footer />
    </div>
  );
};

export default EngagementDetailsPage;
