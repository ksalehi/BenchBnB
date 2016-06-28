const AppDispatcher = require('../dispatcher/dispatcher');
const SessionConstants = require('../constants/session_constants');
const SessionApiUtil = require('../util/session_api_util');

const SessionActions = {
  logIn(user) {
    SessionApiUtil.logIn(user, SessionActions.receiveCurrentUser);
  },
  logOut() {
    SessionApiUtil.logOut(SessionActions.removeCurrentUser);
  },
  signUp(user) {
    SessionApiUtil.signUp(user, SessionActions.receiveCurrentUser);
  },
  receiveCurrentUser(user){
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      currentUser: user
    });
  },
  removeCurrentUser(){
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGOUT
    });
  }
};

module.exports = SessionActions;
