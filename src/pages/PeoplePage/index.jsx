import * as React from 'react';
import './PeoplePage.css';
import { Header } from '../../components';
import Footer from '../../components/Footer';

import makeRequest from '../../utils/makeRequest';
import { GET_USER_DATA_URL } from '../../constants/apiEndpoints';
import CardContainer from '../../components/CardContainer';
import UserCard from '../../components/UserCard';
import { useNavigate } from 'react-router-dom';

const PeoplePage = () => {
  const [people, setPeople] = React.useState([]);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();
  React.useEffect(() => {
    makeRequest(GET_USER_DATA_URL, {}, navigate)
      .then(data => {
        setPeople(data);
      })
      .catch(error => {
        console.log(error);
        setError(error);
      });
  }, []);
  if (error) {
    return (
      <div>
        <Header hasNav={true} />
        <h1>People Page</h1>
        <p>{error.message}</p>
        <Footer />
      </div>
    );
  }
  if (people) {
    const peopleCards = people.map(person => {
      return (
        <UserCard
          key={person.fmno}
          imageUrl={person.image}
          altText="person"
          identityNumber={person.fmno}
          name={person.name}
          designation={person.role}
          location="Bangalore Office"
          handleButtonClick={() => {}}
        />
      );
    });
    return (
      <div className="people-page">
        <div className="header-in-people">
          <Header hasNav={true} />
        </div>
        <div className="container-in-people">
          <CardContainer>{peopleCards}</CardContainer>
        </div>
      </div>
    );
  } else {
    return <div>loading</div>;
  }
};

export default PeoplePage;
