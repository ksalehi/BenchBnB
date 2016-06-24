const React = require('react');
const BenchStore = require('../stores/bench_store.js');
const BenchActions = require('../actions/bench_actions.js');

const BenchIndexItem = React.createClass({
  render(){
    console.log(this.props.bench);
    return (
      <li>
        {this.props.bench.description}
        {this.props.bench.lat}
        {this.props.bench.lng}
      </li>
    );
  }
});

module.exports = BenchIndexItem;
