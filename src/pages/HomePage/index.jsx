import React from 'react';
import './HomePage.css';
import Footer from '../../components/Footer';
import { Header } from '../../components';
import { Search } from '../../components';
const HomePage = () => {
  return (
    <div>
      <Header hasNav={true} />
      <Search />
      <Footer />
    </div>
  );
};

export default HomePage;
