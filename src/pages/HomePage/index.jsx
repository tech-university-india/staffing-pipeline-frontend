import React from 'react';
import './HomePage.css';
import { Header } from '../../components';
import Footer from '../../components/footer';
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
