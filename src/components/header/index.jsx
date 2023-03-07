import React from 'react';
import PropTypes from 'prop-types';

export default function Header({ hasNav }) {
  return (
    <div className="font-light h-[88px] text-white flex justify-center bg-deepBlue">
      <div className="h-full xl:w-[63vw] lg:[70vw] md:[80vw] flex box-border">
        <img src="./assets/McK_Logo.png" className="h-[70px] self-end pl-0 lg:pr-[180px] sm:pr-[90px] pt-0 pb-[5px]" />
        {hasNav && (
          <div className="grid grid-cols-3 gap-10 items-end">
            <button className="text-[white] hover:text-cyan hover:border-b-[5px] hover:border-b-cyan hover:border-solid pt-0 pb-[15px] hover:pb-2.5 px-[5px]">
              Engagements
            </button>
            <button className="text-[white] hover:text-cyan hover:border-b-[5px] hover:border-b-cyan hover:border-solid pt-0 pb-[15px] hover:pb-2.5 px-[5px]">
              People
            </button>
            <button className="text-[white] hover:text-cyan hover:border-b-[5px] hover:border-b-cyan hover:border-solid pt-0 pb-[15px] hover:pb-2.5 px-[5px]">
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
};
