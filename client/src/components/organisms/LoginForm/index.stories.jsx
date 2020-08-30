import React from 'react';
import { storiesOf } from '@storybook/react';

import LoginForm from '.';

storiesOf('organisms / Forms', module)
  .add('LoginForm', () => (
    <LoginForm />
  ));