'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
// const reactRouter = require('react-router');
// const Router = reactRouter.Router;
// const Route = reactRouter.Route;
// const hashHistory = reactRouter.hashHistory;
const BenchStore = require('./stores/bench_store.js');
const BenchApiUtil = require('./util/bench_api_util.js');
const BenchActions = require('./actions/bench_actions.js');
const Search = require('./components/search.jsx');

const BenchIndex = require('./components/bench_index.jsx');

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Search />,
    document.getElementById('content')
  );
});
