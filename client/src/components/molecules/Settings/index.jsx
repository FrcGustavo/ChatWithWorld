import React from 'react';
import { FaRegSun, FaToggleOff, } from 'react-icons/fa';

import MenuItem from '../MenuItem';

import { DarkModeButton } from './styles.js';

const Settings = () => (
  <div>
    <MenuItem label="Settings" icon={<FaRegSun />} />
    <DarkModeButton>
      <span>Dark Mode</span>
      <FaToggleOff />
    </DarkModeButton>
  </div>
);

export default Settings;
