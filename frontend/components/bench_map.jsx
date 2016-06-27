const React = require('react');
const ReactDOM = require('react-dom');
const BenchStore = require('../stores/bench_store.js');
const BenchActions = require('../actions/bench_actions.js');
const hashHistory = require('react-router').hashHistory;

const BenchMap = React.createClass({
  getInitialState(){
    return { benches: BenchStore.all() };
  },
  componentDidMount(){
    const mapDOMNode = ReactDOM.findDOMNode(this.refs.map);
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435}, // this is SF
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.registerListeners();
  },
  _onChange(){
    this.setState({ benches: BenchStore.all() });
  },
  registerListeners(){
    this.map.addListener('click', (me) => {
      let coords = {lat: me.latLng.lat(), lng: me.latLng.lng()};
      this.handleClick(coords);
    });
    this.map.addListener('idle', () => {
      BenchActions.fetchAllBenches(this._onChange)
    });
    BenchStore.addListener(this._onChange);
  },
  createMarkers(){
    this.state.benches[0].forEach(bench => {
      let coords = {lat: bench.lat, lng: bench.lng};

      let marker = new google.maps.Marker({
        position: coords,
        map: this.map,
        title: bench.description
      });
    });
  },
  handleClick(coords){
    hashHistory.push({
      pathname: "benches/new",
      query: coords
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
