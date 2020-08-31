import React from 'react';
import { FaSearch } from 'react-icons/fa';

import { CSSInputSearch } from './styles';

const InputSearch = ({ handleChange = null }) => (
  <CSSInputSearch>
    <label htmlFor="">
      <FaSearch />
    </label>
    <input type="text" placeholder="Search" onChange={handleChange} />
  </CSSInputSearch>
);

export default InputSearch;
