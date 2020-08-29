import React from 'react';
import { FaHome } from 'react-icons/fa';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import NavItem from './';

storiesOf('atoms / Buttons', module)
  .addDecorator(StoryRouter())
  .add('NavItem', () => (
    <NavItem 
      to="#"
      badge="16"
      icon={<FaHome />}
      label="Chats"
    />
  ))
  .add('NavItem Active', () => (
    <NavItem 
      to="#"
      badge="1"
      icon={<FaHome />}
      label="Chats"
      active={true}
    />
  ))
  .add('NavItem Whitout Badge', () => (
    <NavItem 
      to="#"
      icon={<FaHome />}
      label="Chats"
      active={true}
    />
  ));