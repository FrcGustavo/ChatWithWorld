import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Button = ({ children }) => (
  <Container>
    {children}
  </Container>
);

Button.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Button;
