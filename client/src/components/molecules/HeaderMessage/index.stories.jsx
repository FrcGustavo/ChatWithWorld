import React from 'react';
import { storiesOf } from '@storybook/react';

import HeaderMessage from '.';

storiesOf('molecules / Messages')
  .add('HeaderMessage', () => (
    <HeaderMessage
      img="https://res.cloudinary.com/dwapbqqbo/image/upload/v1592516678/frcgustavo_wl1wgk.jpg"
      name="Francisco Gustavo"
    />
  ));