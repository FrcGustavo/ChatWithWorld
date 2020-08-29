import React from 'react';
import { FaSearch } from 'react-icons/fa';

import { CSSInputSearch } from './styles';

const InputSearch = () => (
  <CSSInputSearch>
    <label htmlFor="">
      <FaSearch />
    </label>
    <input type="text" placeholder="Search"/>
  </CSSInputSearch>
);

export default InputSearch;
