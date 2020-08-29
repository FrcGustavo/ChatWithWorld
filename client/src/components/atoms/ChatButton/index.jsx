import React from 'react';
import PropTypes from 'prop-types';

import Badge from '../Badge';
import Avatar from '../Avatar';

import { CSSLink, Wrapper, Div } from './styles';

const ChatButton = ({ name, message, badge, active, to }) => (
  <CSSLink to={to} active={active}>
      <Wrapper>
        <Avatar 
          src="https://res.cloudinary.com/dwapbqqbo/image/upload/v1592516678/frcgustavo_wl1wgk.jpg" 
          alt={name}
        />
        <Div active={active}>
          <h3>{name}</h3>
          <p>{message}</p>
        </Div>
      </Wrapper>
      
      {badge ? <Badge active={active}><>{badge}</></Badge> : null}
  </CSSLink>
);

ChatButton.defaultProps = {
  badge: false,
  active: false,
};

ChatButton.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  badge: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  active: PropTypes.bool,
};

export default ChatButton;
