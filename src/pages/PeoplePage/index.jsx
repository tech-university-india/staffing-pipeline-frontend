import * as React from 'react';
import './PeoplePage.css';
import { Header } from '../../components';
import Footer from '../../components/Footer';

import makeRequest from '../../utils/makeRequest';
import { GET_USER_DATA_URL } from '../../constants/apiEndpoints';
import ImageCard from '../../components/ImageCard';
import Footer from '../../components/Footer';

const PeoplePage = () => {
  const [people, setPeople] = React.useState([]);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    makeRequest(GET_USER_DATA_URL, {})
      .then(data => {
        setPeople(data);
      })
      .catch(error => {
        setError(error);
      });
  }, []);
  if (error) {
    return (
      <div>
        <Header hasNav={true} />
        <h1>People Page</h1>
        <p>There was an error loading the people</p>
      </div>
    );
  }
  if (people) {
    const peopleCards = people.map(person => {
      return (
        <ImageCard
          key={person.fmno}
          imageUrl={person.image}
          altText="person"
          identityNumber={person.fmno}
          name={person.name}
          isEngagementCard={false}
          buttonText="Know more"
          designation={person.role}
          isUserCard={true}
          handleButtonClick={() => {}}
        />
      );
    });
    return (
      <div className="people-page">
        <div className="header">
          <Header hasNav={true} />
        </div>
        <div className="card-container">{peopleCards}</div>

        <div className="footer-in-people-page">
          <Footer />
        </div>
      </div>
    );
  } else {
    return <div>loading</div>;
  }
};

export default PeoplePage;
