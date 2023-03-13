import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CASE_STUDIES_ROUTE, PROJECTS_ROUTE, USERS_ROUTE } from '../../constants/routes';

export default function Header({ hasNav, navigate, defaultTab }) {
  const [activeTab, setActiveTab] = useState();

  const handleClick = route => {
    setActiveTab(route);
  };

  useEffect(() => {
    if (defaultTab) {
      setActiveTab(defaultTab);
    }
  }, [defaultTab]);

  useEffect(() => {
    if (navigate) {
      navigate(activeTab);
    }
  }, [activeTab, navigate]);

  return (
    <div className="font-light h-[88px] text-white flex justify-center bg-deepBlue">
      <div className="h-full xl:w-[63vw] lg:[70vw] md:[80vw] flex box-border">
        <img
          src="./assets/McK_Logo.png"
          className="h-[70px] w-[155px] aspect-auto self-end pl-0 lg:mr-[180px] sm:mr-[90px] pt-0 pb-[5px]"
        />
        {hasNav && (
          <div className="grid grid-cols-3 gap-10 items-end">
            <button
              className="text-[white] hover:text-cyan hover:border-b-[5px] hover:border-b-cyan hover:border-solid pt-0 pb-[15px] hover:pb-2.5 px-[5px]"
              onClick={() => handleClick(PROJECTS_ROUTE)}>
              Engagements
            </button>
            <button
              className="text-[white] hover:text-cyan hover:border-b-[5px] hover:border-b-cyan hover:border-solid pt-0 pb-[15px] hover:pb-2.5 px-[5px]"
              onClick={() => handleClick(USERS_ROUTE)}>
              People
            </button>
            <button
              className="text-[white] hover:text-cyan hover:border-b-[5px] hover:border-b-cyan hover:border-solid pt-0 pb-[15px] hover:pb-2.5 px-[5px]"
              onClick={() => handleClick(CASE_STUDIES_ROUTE)}>
              Case Studies
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

Header.propTypes = {
  hasNav: PropTypes.bool,
  navigate: PropTypes.func,
  defaultTab: PropTypes.string,
};
