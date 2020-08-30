import config from '../config';

const login = ({ name, room }) => {
  return fetch(`${config.api}/login`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ name, room }),
  }).then(res => res.json());
};

export default login;