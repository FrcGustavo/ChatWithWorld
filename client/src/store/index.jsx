import React, { useReducer } from 'react';

export const UserContext = React.createContext({ user: false });

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducers, { user: false })

  return (
    <UserContext.Provider value={{ state, dispatch }}>
        {children}
    </UserContext.Provider> 
  )
}

export default UserProvider;

function userReducers(state, { type, payload }) {
  console.log(type, payload);
  switch (type) {
    case 'login':
      return { user: payload };
    default: {
      return state;
    }
  }
}