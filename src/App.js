import logo from './logo.svg'; 
import React from 'react'; 
import { Amplify } from 'aws-amplify'; 
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'; 
import { createTodo, updateTodo, deleteTodo} from './graphql/mutations'; 
import { generateClient } from 'aws-amplify/api';
import { listTodos, getTodo } from './graphql/queries';

import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

async function storeTodo() {
  const API = generateClient();
  const todo = { name: 'Use AWS AppSync', description: 'Realtime and Offline' };
  await API.graphql({ query: createTodo, variables: { input: todo } });
  console.log('todo created');
}

async function fetchTodos() {
  const API = generateClient();
  const allTodos = await API.graphql({ query: listTodos });
  console.log(allTodos);
}

async function fetchTodo() {
  const API = generateClient();
  const todo = await API.graphql({ query: getTodo, variables: { id: '' } });
  console.log(todo);
}

async function updateTodos() {
  const API = generateClient();
  const todo = await API.graphql({ query: updateTodo, variables: { input: { id: '', name: 'updated', description: '' } } });
  console.log(todo);
}

async function deleteTodos() {
  const API = generateClient();
  const todo = await API.graphql({ query: deleteTodo, variables: { input: { id: '' } } });
  console.log(todo);
}

 const App = () => (
  <Authenticator>
    {({ user }) => (
         <main>
          <h1> Welcome {user.username}</h1>
          <button onClick={storeTodo}>Create Todo</button>
          <button onClick={fetchTodos}>Fetch Todos</button>
          <button onClick={fetchTodo}>Fetch Todo</button>
          <button onClick={updateTodos}>Update Todo</button>
          <button onClick={deleteTodos}>Delete Todo</button>

     </main>
    )}
  </Authenticator>
);


export default App;
