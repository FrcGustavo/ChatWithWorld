import React from 'react';
import { storiesOf } from '@storybook/react';

import CardMessage from '.';

storiesOf('atoms / Cards', module)
  .add('CardMessage', () => (
    <CardMessage />
  ));