import React from "react";
import {
  FaPhoneAlt,
  FaUserAlt,
  FaFacebookMessenger,
  FaUsers,
} from "react-icons/fa";

import NavItem from '../../atoms/NavItem';

const Nav = () => (
  <div>
    <NavItem
      to="/app/calls" 
      label="Calls"
      icon={<FaPhoneAlt />}
      badge="16" 
    />
    <NavItem
      to="/app/contacts" 
      label="Contacts"
      icon={<FaUserAlt />}
    />
    <NavItem
      to="/app/messages"
      label="Messages"
      icon={<FaFacebookMessenger />}
      badge="1" 
      active={true}
    />
    <NavItem
      to="/app/new-group" 
      label="New Group"
      icon={<FaUsers />}
    /> 
  </div>
);

export default Nav;
