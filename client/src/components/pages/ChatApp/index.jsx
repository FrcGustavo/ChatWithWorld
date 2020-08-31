import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import { UserContext } from '../../../store';
import Navbar from '../../organisms/Navbar';
import Calls from './Calls';
import Contacts from './Contacts';
import Chat from './Chat';

import { Container } from './styles';

const ChatApp = () => {
  const { state } = useContext(UserContext);

  if (!state.user) {
    return <Redirect to="/" />
  }

  return (
    <Router>
      <Container>
        <Navbar user={state.user} />
          <Route exact path ="/app/calls" component={Calls} />
          <Route exact path ="/app/contacts" component={Contacts} />
          <Route path ="/app/chat/*" component={Chat} />
      </Container>
    </Router>
  );
}

export default ChatApp;