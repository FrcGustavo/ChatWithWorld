import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import Nav from '.';

storiesOf('molecules / Nav', module)
  .addDecorator(StoryRouter())
  .add('Nav', () => (
    <Nav />
  ));