import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Chats from '../../../organisms/Chats';
import Messages from '../../../organisms/Messages';

const Chat = () => (
  <Router>
    <Chats />
    <Route exact path="/app/chat">
      HOME  
    </Route>
    <Route exact path="/app/chat/:id" component={Messages} />
  </Router>
);

export default Chat;