import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Friends from './components/Friends'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to='/login'>Login</Link>
          <br/>
          <Link to ='/friends'>My friends</Link>
        </nav>
        <Switch>
          <PrivateRoute exact path='/friends' component={Friends} />
          <Route path='login' component={Login} />
          <Route component = {Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;