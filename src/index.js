import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './Auth';
import { BrowserRouter } from 'react-router-dom';





ReactDOM.render(
<AuthProvider>
    <BrowserRouter><App /></BrowserRouter>
</AuthProvider>
,
  document.getElementById('root')
);

