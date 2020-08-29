import React from 'react';
import { storiesOf } from '@storybook/react';

import NotMessages from '.';

storiesOf('molecules / Messages', module)
  .add('NotMessages', () => (
    <NotMessages />
  ));
