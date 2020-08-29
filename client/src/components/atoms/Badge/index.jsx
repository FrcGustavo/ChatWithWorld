import React from 'react'
import PropTypes from 'prop-types';

import { Span } from './styles';

const Badge = ({ children, active }) => (
  <Span active={active} isCircle={children.length === 1} >{children}</Span>
);

Badge.propTypes = {
  children: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

export default Badge
