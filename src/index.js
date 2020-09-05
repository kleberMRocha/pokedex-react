import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './pages/home/App';
import Pokemon from './pages/pokemon';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/pokemon/:name" component={Pokemon} exact />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


