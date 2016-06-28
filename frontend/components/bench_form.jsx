const React = require('react');
const BenchActions = require('../actions/bench_actions.js');
const hashHistory = require('react-router').hashHistory;

const BenchForm = React.createClass({
  getInitialState(){
    return ({
      description: "",
      num_seats: ""
    });
  },
  changeDescription(e){
    this.setState({description: e.target.value});
  },
  changeNumSeats(e){
    this.setState({num_seats: e.target.value});
  },
  handleSubmit(e){
    e.preventDefault();
    const benchData = {
      description: this.state.description,
      num_seats: this.state.num_seats,
      lat: this.props.location.query.lat,
      lng: this.props.location.query.lng
    };
    BenchActions.createBench(benchData);
    hashHistory.push('/');
  },
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label id="description">Description: </label>
        <input type="text"
               id="description"
               value={this.state.description}
               onChange={this.changeDescription}/>
        <label id="num_seats">Number of Seats: </label>
        <input type="text"
               id="num_seats"
               value={this.state.num_seats}
               onChange={this.changeNumSeats}/>
             <label id="lat">Latitude: </label>
        <input type="text"
               id="lat"
               value={this.props.location.query.lat}
               readOnly/>
             <label id="lng">Longitude: </label>
        <input type="text"
               id="lng"
               value={this.props.location.query.lat}
               readOnly/>
        <input type="submit" value="Create Bench!"/>
      </form>
    );
  }
});

module.exports = BenchForm;
