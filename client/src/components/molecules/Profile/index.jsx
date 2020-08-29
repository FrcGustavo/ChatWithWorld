import React from 'react';

import Avatar from '../../atoms/Avatar';

import { CSSProfile, CSSStatus } from './styles';

const Profile = ({ img, name, status }) => (
  <CSSProfile>
    <Avatar src={img} large={true}/>
    <h1>
      <span>{name}</span>
      <CSSStatus status={status}/>
    </h1>
  </CSSProfile>
);

export default Profile;
