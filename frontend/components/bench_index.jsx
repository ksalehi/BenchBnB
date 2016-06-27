const React = require('react');
const BenchStore = require('../stores/bench_store.js');
const BenchActions = require('../actions/bench_actions.js');
const BenchIndexItem = require('./bench_index_item.jsx');

const BenchIndex = React.createClass({
  getInitialState(){
    return { benches: BenchStore.all() };
  },
  componentDidMount(){
    BenchActions.fetchAllBenches();
    BenchStore.addListener(this._onChange);
  },
  _onChange(){
    this.setState({ benches: BenchStore.all() });
  },
  render(){
    let benches = this.state.benches;
    if (benches.length > 0) {
      return (
        <div>
          <ul>
            {
              benches[0].map( bench => {
                return (<BenchIndexItem bench={bench} key={bench.description} />);
              })
            }
          </ul>
        </div>
      );
    } else {
      return (
        <div>no benches</div>
      );
    }
  }
});

module.exports = BenchIndex;
