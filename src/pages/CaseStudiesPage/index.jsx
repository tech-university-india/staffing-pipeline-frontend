import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components';
import CardContainer from '../../components/CardContainer';
import CaseStudyCard from '../../components/CaseStudyCard';
import { GET_CASE_STUDIES_DATA_URL } from '../../constants/apiEndpoints';
import makeRequest from '../../utils/makeRequest';

const CaseStudiesPage = () => {
  const navigate = useNavigate();
  const [caseStudies, setCaseStudies] = useState([]);
  useEffect(() => {
    makeRequest(GET_CASE_STUDIES_DATA_URL, {}, navigate).then(response => {
      setCaseStudies(response);
    });
  }, []);
  return (
    <div>
      <Header hasNav={true} />
      <CardContainer>
        <div className="flex flex-wrap gap-3 mt-5">
          {caseStudies?.map(caseStudy => (
            <CaseStudyCard
              imageUrl={caseStudy.image}
              altText={caseStudy.name}
              identityNumber={caseStudy.id}
              key={caseStudy.id}
              name={caseStudy.name}
              author="John Doe"
              boxLink={caseStudy.boxLink}
            />
          ))}
        </div>
      </CardContainer>
    </div>
  );
};

export default CaseStudiesPage;
