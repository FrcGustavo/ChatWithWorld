import React from 'react'
import PropTypes from 'prop-types';

import { Span } from './styles';

const Badge = ({ children, active }) => (
  <Span active={active}>{children}</Span>
);

Badge.propTypes = {
  children: PropTypes.element.isRequired,
  active: PropTypes.bool.isRequired,
};

export default Badge
