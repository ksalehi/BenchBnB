const React = require('react');
const ReactDOM = require('react-dom');
const BenchStore = require('../stores/bench_store.js');
const BenchActions = require('../actions/bench_actions.js');

const BenchMap = React.createClass({
  getInitialState(){
    return { benches: BenchStore.all() };
  },
  componentDidMount(){
    BenchActions.fetchAllBenches();
    BenchStore.addListener(this._onChange);
    const mapDOMNode = ReactDOM.findDOMNode(this.refs.map);
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435}, // this is SF
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
  },
  _onChange(){
    this.setState({ benches: BenchStore.all() });
  },
  createMarkers(){
    console.log('all the benches');
    console.log(this.state.benches[0]);
    this.state.benches[0].forEach(bench => {
      let coords = {lat: bench.lat, lng: bench.lng};

      let marker = new google.maps.Marker({
        position: coords,
        map: this.map,
        title: bench.description
      });
    });
  },
  render(){
    if (this.state.benches.length > 0) {
      this.createMarkers();
    }
    return (
      <div className='map' ref='map'></div>
    );
  }
});

module.exports = BenchMap;
