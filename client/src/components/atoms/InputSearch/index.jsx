import React from 'react';
import { FaSearch } from 'react-icons/fa';

import { Div } from './styles';

const InputSearch = () => (
  <Div>
    <div>
      <label htmlFor="">
        <FaSearch />
      </label>
      <input type="text" placeholder="Search"/>
    </div>
  </Div>
);

export default InputSearch;
