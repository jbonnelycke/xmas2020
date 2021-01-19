import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import home from './components/pages/home/home';
import cool from './components/pages/cool/cool';
import anime from './components/pages/anime/anime';
import onlyfans from './components/pages/onlyfans/onlyfans';
import friends from './components/pages/friends/friends';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/cool" component={cool} />
          <Route path="/anime" component={anime} />
          <Route path="/friends" component={friends} />
          <Route path="/onlyfans" component={onlyfans} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
