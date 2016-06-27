const React = require('react');
const BenchStore = require('../stores/bench_store.js');
const BenchActions = require('../actions/bench_actions.js');

const BenchIndexItem = React.createClass({
  render(){
    return (
      <li>
        {this.props.bench.description}
      </li>
    );
  }
});

module.exports = BenchIndexItem;
