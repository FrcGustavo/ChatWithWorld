import React from "react";
import {
  FaPhoneAlt,
  FaUserAlt,
  FaFacebookMessenger,
  FaUsers,
} from "react-icons/fa";

import MenuItem from '../../molecules/MenuItem';

const Menu = () => (
  <div>
    <MenuItem 
      label="Calls"
      icon={<FaPhoneAlt />}
      badge="16" 
    />
    <MenuItem 
      label="Contacts"
      icon={<FaUserAlt />}
    />
    <MenuItem 
      label="Messages"
      icon={<FaFacebookMessenger />}
      badge="1" 
      active
    />
    <MenuItem 
      label="New Group"
      icon={<FaUsers />}
    /> 
  </div>
);

export default Menu;
