const React = require('react');
const ReactDOM = require('react-dom');
const BenchStore = require('../stores/bench_store.js');

const BenchMap = React.createClass({
  getInitialState(){
    return { benches: BenchStore.all() };
  },
  componentDidMount(){
    BenchStore.addListener(this.createMarkers);
    const mapDOMNode = ReactDOM.findDOMNode(this.refs.map);
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435}, // this is SF
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
  },
  createMarkers(){
    console.log('all the benches');
    console.log(this.state.benches);
    this.state.benches.forEach(bench => {
      let coords = {lat: bench.lat, lng: bench.lng};

      let marker = new google.maps.Marker({
        position: coords,
        map: this.map,
        title: bench.description
      });
    });
  },
  render(){
    return (
      <div className='map' ref='map'></div>
    );
  }
});

module.exports = BenchMap;
