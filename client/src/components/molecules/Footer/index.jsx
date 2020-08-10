import React from 'react';
import { FaSignal } from 'react-icons/fa';

import { Feet, StatusNet } from './styles.js';

const Footer = () => (
  <footer>
    <StatusNet>
      <span>Connection</span>
      <FaSignal />
    </StatusNet>
    <Feet>
      <span>Desktop</span>
      <span>Version 1.0</span>
    </Feet>
  </footer>
);

export default Footer;
