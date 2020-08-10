import React from 'react'
import PropTypes from 'prop-types';

import { Span } from './styles';

const Badge = ({ children }) => {
  return (
    <Span>{children}</Span>
  )
}

Badge.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Badge
