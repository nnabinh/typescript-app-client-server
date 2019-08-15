import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import EmployeeList from './components/EmployeeList';
import * as serviceWorker from './serviceWorker';
import store from './store';

const routing = (
  <Provider store={store}>
    <Router>
      <div>
      <Route exact path="/" component={Home} />
      <Route path="/employee-list" component={EmployeeList} />
      </div>
    </Router>
  </Provider>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
