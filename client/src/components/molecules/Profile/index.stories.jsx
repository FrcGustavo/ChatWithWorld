import React from 'react';
import { storiesOf } from '@storybook/react';

import Profile from '.';

storiesOf('molecules / Profile', module)
  .add('Profile', () => (
    <Profile
      img="https://res.cloudinary.com/dwapbqqbo/image/upload/v1592516678/frcgustavo_wl1wgk.jpg"
      name="Francisco Gustavo"
      status="active"
    />
  ));