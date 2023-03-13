import React from 'react';
import './HomePage.css';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header hasNav={true} navigate={navigate} />
      HomePage
      <Footer />
    </div>
  );
};

export default HomePage;
