import React from 'react';
import Nav from './Components/Nav';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import WellcomePage from './Components/WellcomePage';
import OrderMain from './Components/OrderMain';
import { Route, Switch } from 'react-router-dom';
import './App.css';



function App() {
  return (
    <React.Fragment>
      <Nav />
      <Switch>
        <Route path='/' exact>
          <WellcomePage />
        </Route>
        <Route path='/login' >
          <Login />
        </Route>
        <Route path='/sign' >
          <SignUp />
        </Route>
        <Route path='/order-main'>
          <OrderMain />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
