const React = require('react');
const BenchMap = require('./bench_map.jsx');
const BenchIndex = require('./bench_index.jsx');

const Search = React.createClass({
  render(){
    return (
      <div >
        <BenchMap />
        <BenchIndex />
      </div>
    );
  }
});

module.exports = Search;
