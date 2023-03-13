import * as React from 'react';
import './PeoplePage.css';
import { Header } from '../../components';
import Footer from '../../components/Footer';

const PeoplePage = () => {
  return (
    <div>
      <Header hasNav={true} />
      <h1>People Page</h1>
      <Footer />
    </div>
  );
};

export default PeoplePage;
