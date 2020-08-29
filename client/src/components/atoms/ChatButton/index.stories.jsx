import React from 'react';
import { storiesOf } from '@storybook/react';
import StorybookRouter from 'storybook-react-router';

import ChatButton from '.';

storiesOf('atoms / Buttons', module)
  .addDecorator(StorybookRouter())
  .add('ChatButton', () => (
    <ChatButton
      to="/"
      name="Francisco Gustavo"
      message="Lorem ipsum dolor"
    />
  ));
 