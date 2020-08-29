import React from 'react';
import { storiesOf } from '@storybook/react';

import Badge from '.';

storiesOf('atoms / Badges', module)
  .add('Badge Active', () => (
    <Badge active>16</Badge>
  )).add('Badge', () => (
    <Badge>1</Badge>
  ));