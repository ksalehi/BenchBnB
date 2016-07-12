const SessionApiUtil = {
  signUp(userData, successCB, errorCB) {
    $.ajax({
      method: 'POST',
      url: 'api/users',
      data: { userData },
      dataType: 'JSON',
      success: successCB,
      error(response){
        errorCB("signup", response.responseText);
      }
    });
  },
  logIn(userData, successCB, errorCB) {
    $.ajax({
      method: 'POST',
      url: 'api/session',
      data: { userData },
      dataType: 'JSON',
      success: successCB,
      error(response){
        errorCB("login", response.responseText);
      }
    });
  },
  logOut(successCB, errorCB) {
    $.ajax({
      method: 'DELETE',
      url: 'api/session',
      dataType: 'JSON',
      success: successCB,
      error(response){
        errorCB("logout", response.responseText);
      }
    });
  }
};

module.exports = SessionApiUtil;
