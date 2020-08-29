import React from 'react';
import { storiesOf } from '@storybook/react';
import StorybookRouter from 'storybook-react-router'

import Chats from '.';

storiesOf('organisms / Chats', module)
  .addDecorator(StorybookRouter())
  .add('Chats', () => (
    <Chats />
  ));