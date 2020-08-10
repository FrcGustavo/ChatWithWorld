import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/Button';
import Badge from '../../atoms/Badge';

import { Div } from './styles';

const MenuItem = ({ icon, label, badge, active }) => {
  console.log('HO', active);
  return (
    <Button active={active}>
      <>
        <Div active={active}>
          {icon}
          <span>{label}</span>
        </Div>
        {
          badge ? <Badge active={active}><>{badge}</></Badge> : false
        }
      </>
    </Button>
  )
}

MenuItem.defaultProps = {
  badge: false,
  active: false,
};

MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  badge: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  active: PropTypes.bool,
};

export default MenuItem

