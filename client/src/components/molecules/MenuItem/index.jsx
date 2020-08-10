import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/Button';
import Badge from '../../atoms/Badge';

import { Div } from './styles';

const MenuItem = ({ icon, label, badge }) => {
  console.log(icon);
  return (
    <Button>
      <>
        <Div>
          {icon}
          <span>{label}</span>
        </Div>
        <Badge><>{badge}</></Badge>
      </>
    </Button>
  )
}

MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  badge: PropTypes.string.isRequired,
};

export default MenuItem

