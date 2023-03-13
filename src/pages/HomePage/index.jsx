import React from 'react';
import './HomePage.css';
import Footer from '../../components/Footer';
import { Header } from '../../components';
const HomePage = () => {
  return (
    <div>
      <Header hasNav={true} />
      HomePage
      <Footer />
    </div>
  );
};

export default HomePage;
