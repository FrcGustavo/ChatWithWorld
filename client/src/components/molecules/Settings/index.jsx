import React from 'react';
import { FaRegSun, FaToggleOff, } from 'react-icons/fa';

import MenuItem from '../MenuItem';

import { DarkModeButton } from './styles.js';

const Settings = () => {
  const customEvent = new CustomEvent('theme-dark', { bubbles: true });
  const handleClick = (e) => {
    e.target.dispatchEvent(customEvent);
  };

  return (
    <div>
      <MenuItem label="Settings" icon={<FaRegSun />} />
      <DarkModeButton onClick={handleClick}>
        <span>Dark Mode</span>
        <FaToggleOff />
      </DarkModeButton>
    </div>
  );
};

export default Settings;
