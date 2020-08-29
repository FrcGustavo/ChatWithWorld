import React from 'react';
import PropTypes from 'prop-types';

import { CSSCard } from './styles';

const CardMessage = ({ children }) => (
  <CSSCard>{children}</CSSCard>
);

CardMessage.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CardMessage;
