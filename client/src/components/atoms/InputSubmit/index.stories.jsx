import React from 'react';
import { storiesOf } from '@storybook/react';

import InputSubmit from '.';

storiesOf('atoms / Inputs', module)
  .add('InputSubmit', () => (
    <InputSubmit>Enviar</InputSubmit>
  ));
