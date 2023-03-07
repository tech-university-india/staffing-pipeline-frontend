import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';
import PropTypes from 'prop-types';

export default function Dropdown({ dropdownName, dropdownData, selectOption }) {
  const [inputValue, setInputValue] = useState('');
  const [selected, setSelected] = useState('');
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <div className="w-44 font-normal">
      <div
        onClick={() => setToggleDropdown(!toggleDropdown)}
        className="bg-white w-full p-2 flex justify-between items-center border-solid border border-black cursor-pointer">
        {selected ? selected : `${dropdownName}`}
        <BiChevronDown size={20} />
      </div>
      <div className={`${!toggleDropdown ? 'hidden' : ''}`}>
        <ul className={'bg-white mt-2 overflow-y-auto max-h-60 border border-black-300'}>
          <div className="flex items-center sticky top-0 h-10 bg-white">
            <AiOutlineSearch size={18} className="w-10" />
            <input
              type="text"
              placeholder="search"
              value={inputValue}
              onChange={e => setInputValue(e.target.value.toLowerCase())}
              className="placeholder:text-gray-700 outline-none text-mg w-36 pr-2"
            />
          </div>

          {dropdownData.map(option => (
            <li
              key={option}
              className={`p-2 text-sm hover:bg-gray-300 cursor-pointer
            ${option.toLowerCase().startsWith(inputValue) ? 'block' : 'hidden'}`}
              onClick={() => {
                if (option.toLowerCase() !== selected.toLowerCase()) {
                  setSelected(option);
                  selectOption(option);
                }
                setToggleDropdown(false);
              }}>
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
Dropdown.propTypes = {
  dropdownName: PropTypes.string.isRequired,
  dropdownData: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectOption: PropTypes.func.isRequired,
};
