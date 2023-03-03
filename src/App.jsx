import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CaseStudiesPage from './pages/CaseStudiesPage';
import EngagementDetailsPage from './pages/EngagementDetailsPage';
import EngagementsPage from './pages/EngagementsPage';
import LoginPage from './pages/LoginPage';
import PeoplePage from './pages/PeoplePage';
import PeopleDetailsPage from './pages/PeopleDetailsPage';

import './App.css';
import {
  CASE_STUDIES_ROUTE,
  LOGIN_ROUTE,
  ENGAGEMENTS_ROUTE,
  ENGAGEMENT_DETAILS_ROUTE,
  ANY_OTHER_ROUTE,
} from './constants/Routes';

function App() {
  <BrowserRouter>
    <Routes>
      <Route path={LOGIN_ROUTE} element={<LoginPage />} />
      <Route path={CASE_STUDIES_ROUTE} element={<CaseStudiesPage />} />
      <Route path={ENGAGEMENTS_ROUTE} element={<EngagementsPage />} />
      <Route path={ENGAGEMENT_DETAILS_ROUTE} element={<EngagementDetailsPage />} />
      <Route path={PEOPLE_ROUTE} element={<PeoplePage />} />
      <Route path={PEOPLE_DETAILS_ROUTE} element={<PeopleDetailsPage />} />
      <Route path={ANY_OTHER_ROUTE} element={<Error />} />
    </Routes>
  </BrowserRouter>;
}

export default App;
