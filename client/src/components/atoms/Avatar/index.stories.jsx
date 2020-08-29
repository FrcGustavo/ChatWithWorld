import React from 'react';
import { storiesOf } from '@storybook/react';

import Avatar from './';

storiesOf('atoms / Avatar', module)
  .add('Small', () => (
    <Avatar
      src="https://res.cloudinary.com/dwapbqqbo/image/upload/v1592516678/frcgustavo_wl1wgk.jpg" 
      alt="avatar"
    />
  ))
  .add('Large', () => (
    <Avatar
      large={true}
      src="https://res.cloudinary.com/dwapbqqbo/image/upload/v1592516678/frcgustavo_wl1wgk.jpg" 
      alt="avatar"
    />
  ));