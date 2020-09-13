import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './pages/home/App';
import Pokemon from './pages/pokemon';
import Favorites from './pages/favorites';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/pokemon/:name" component={Pokemon} exact />
      <Route path="/favorites" component={Favorites} exact />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


