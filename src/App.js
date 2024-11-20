import logo from './logo.svg'; 
import React from 'react'; 
import { Amplify } from 'aws-amplify'; 
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'; 

import awsconfig from './aws-exports';
Amplify.configure(awsconfig);


 const App = () => (
  <Authenticator>
    {({ user }) => (
         <main>
          <h1> Welcom {user.username}</h1>
     </main>
    )}
  </Authenticator>
);


export default App;
