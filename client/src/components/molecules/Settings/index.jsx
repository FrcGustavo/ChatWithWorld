import React from 'react';
import { FaRegSun, FaToggleOff, } from 'react-icons/fa';

import NavItem from '../../atoms/NavItem';

import { DarkModeButton } from './styles.js';

const Settings = () => {
  const customEvent = new CustomEvent('theme-dark', { bubbles: true });
  const handleClick = (e) => {
    e.target.dispatchEvent(customEvent);
  };

  return (
    <div>
      <NavItem label="Settings" icon={<FaRegSun />} />
      <DarkModeButton onClick={handleClick}>
        <span>Dark Mode</span>
        <FaToggleOff />
      </DarkModeButton>
    </div>
  );
};

export default Settings;
