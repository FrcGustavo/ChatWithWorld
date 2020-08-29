import React from 'react';
import PropTypes from 'prop-types';

import Badge from '../Badge'

import { CSSLink } from './styles';

const NavItem = ({ to, icon, badge, label, active }) => (
  <CSSLink to={to} active={active}>
    <div>
      {icon ? icon : null}
      <span>{label}</span>
    </div>
    {badge ? <Badge active={active}>{badge}</Badge> : null }
  </CSSLink>
);

NavItem.defaultProps = {
  icon: false,
  badge: false,
  active: false,
};

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.element,
  ]),
  badge: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  label: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

export default NavItem;
