import React from 'react';
import { storiesOf } from '@storybook/react';

import InputText from '.';

storiesOf('atoms / Inputs', module)
  .add('InputText', () => (
    <InputText
      type="text"
      name="email"
      label="Correo electronico"
    />
  ));