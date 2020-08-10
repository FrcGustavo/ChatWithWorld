import React from 'react';

import Profile from '../../molecules/Profile';
import Menu from '../../organisms/Menu';
import Settings from '../../molecules/Settings';
import Footer from '../../molecules/Footer';

import { Div } from './styles';

const Navbar = () => (
  <Div>
    <Profile />
    <Menu />
    <Settings />
    <Footer />
  </Div>
);

export default Navbar;
