import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CaseStudiesPage from './pages/CaseStudiesPage';
import EngagementDetailsPage from './pages/EngagementDetailsPage';
import EngagementsPage from './pages/EngagementsPage';
import LoginPage from './pages/LoginPage';
import PeoplePage from './pages/PeoplePage';
import PeopleDetailsPage from './pages/PeopleDetailsPage';

import './App.css';
import { LOGIN_ROUTE } from './constants/Routes';

function App() {
  <BrowserRouter>
    <Routes>
      <Route path={LOGIN_ROUTE} element={<LoginPage />} />
    </Routes>
  </BrowserRouter>;
}

export default App;
