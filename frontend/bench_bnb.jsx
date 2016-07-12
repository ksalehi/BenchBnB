'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const reactRouter = require('react-router');
const Router = reactRouter.Router;
const Route = reactRouter.Route;
const IndexRoute = reactRouter.IndexRoute;
const hashHistory = reactRouter.hashHistory;
const BenchStore = require('./stores/bench_store.js');
const BenchApiUtil = require('./util/bench_api_util.js');
const BenchActions = require('./actions/bench_actions.js');
const Search = require('./components/search.jsx');
const BenchForm = require('./components/bench_form.jsx');
const SessionApiUtil = require('./util/session_api_util');
const SessionActions = require('./actions/session_actions');
const LoginForm = require('./components/login_form');
const BenchIndex = require('./components/bench_index.jsx');
const SignUpForm = require('./components/sign_up_form');

const App = React.createClass({
  render(){
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Search}/>
    <Route path="benches/new" component={BenchForm}/>
    <Route path="session/new" component={LoginForm}/>
    <Route path="users/new" component={SignUpForm}/>
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Router history={hashHistory}>{routes}</Router>,
    document.getElementById('content')
  );
});
