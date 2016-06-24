const React = require('react');

const BenchMap = React.createClass({
  render(){
    return (
      <div className='map' ref='map'></div>
    );
  }
});

module.exports = BenchMap;
