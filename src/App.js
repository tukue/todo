import logo from './logo.svg'; 
import React from 'react'; 
import { Amplify } from 'aws-amplify'; 
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'; 
import { createTodo } from './graphql/mutations'; 
import { generateClient } from 'aws-amplify/api';

import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

async function storeTodo() {
  const API = generateClient();
  const todo = { name: 'Use AWS AppSync', description: 'Realtime and Offline' };
  await API.graphql({ query: createTodo, variables: { input: todo } });
  console.log('todo created');
}
 const App = () => (
  <Authenticator>
    {({ user }) => (
         <main>
          <h1> Welcome {user.username}</h1>
          <button onClick={storeTodo}>Create Todo</button>
     </main>
    )}
  </Authenticator>
);


export default App;
