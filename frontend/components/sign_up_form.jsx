const React = require('react');
const SessionActions = require('../actions/session_actions.js');
const hashHistory = require('react-router').hashHistory;
const SessionStore  = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');

const SignUpForm = React.createClass({
  getInitialState(){
    return ({
      errors: {},
      username: "",
      password: ""
    });
  },
  componentDidMount: function() {
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
    this.errorListener = ErrorStore.addListener(this.handleErrors);
  },
  componentWillUnmount: function() {
    this.sessionListener.remove();
    this.errorListener.remove();
  },
  handleErrors(){
    this.setState({errors: ErrorStore.formErrors("signup")});
  },
  redirectIfLoggedIn() {
    if (SessionStore.isUserLoggedIn()) {
      hashHistory.push('/');
    }
  },
  renderErrors(){
    Object.keys(this.state.errors).map( errorId => {
      return (
        <li>{this.state.errors[errorId]}</li>
      );
    });
  },
  changeUsername(e){
    this.setState({username: e.target.value});
  },
  changePassword(e){
    this.setState({password: e.target.value});
  },
  handleSubmit(e){
    e.preventDefault();
    const signUpData = {
      username: this.state.username,
      password: this.state.password,
    };
    SessionActions.signUp(signUpData);
  },
  render() {
    return (
      <div>
        <ul>{this.renderErrors}</ul>
        <form onSubmit={this.handleSubmit}>
          <label id="username">Username: </label>
          <input type="text"
                 id="username"
                 value={this.state.description}
                 onChange={this.changeUsername}/>
          <label id="password">Password: </label>
          <input type="text"
                 id="password"
                 value={this.state.password}
                 onChange={this.changePassword}/>
          <input type="submit" value="Sign Up!"/>
        </form>
      </div>
    );
  }
});

module.exports = SignUpForm;
