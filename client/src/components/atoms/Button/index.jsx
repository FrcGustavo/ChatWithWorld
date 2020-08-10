import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Button = ({ children, active }) => (
  <Container active={active}>
    {children}
  </Container>
);

Button.propTypes = {
  children: PropTypes.element.isRequired,
  active: PropTypes.bool.isRequired,
};

export default Button;
