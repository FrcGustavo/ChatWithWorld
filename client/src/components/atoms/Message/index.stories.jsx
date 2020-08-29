import React from 'react';
import { storiesOf } from '@storybook/react';

import Message from '.';

storiesOf('atoms / Messages', module)
  .add('Recipient', () => (
    <Message>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt nesciunt repellendus laudantium neque nam, id cumque! Alias, expedita maxime nihil adipisci numquam nisi error facilis omnis itaque, doloremque dolores?
    </Message>
  )).add('Sender', () => (
    <Message sender={true}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt nesciunt repellendus laudantium neque nam, id cumque! Alias, expedita maxime nihil adipisci numquam nisi error facilis omnis itaque, doloremque dolores?
    </Message>
  ));