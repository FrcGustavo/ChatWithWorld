import React from 'react';
import PropTypes from 'prop-types';

import { CSSImg } from './styles';

const Avatar = ({ large, src, alt }) => (
  <CSSImg src={src} alt={alt} large={large} />
);

Avatar.defaultTypes = {
  large: false,
};

Avatar.propTypes = {
  large: PropTypes.bool,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Avatar;
