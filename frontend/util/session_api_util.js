const SessionApiUtil = {
  signUp(userData, callback) {
    $.ajax({
      method: 'POST',
      url: 'api/users',
      data: { user: userData },
      dataType: 'JSON',
      success(data) {
        callback(data);
      },
      error(data) {
        console.log('error');
        console.log(data);
      }
    });
  },
  logIn(userData, callback) {
    $.ajax({
      method: 'POST',
      url: 'api/session',
      data: { user: userData },
      dataType: 'JSON',
      success(data) {
        callback(data);
      },
      error(data) {
        console.log('error');
        console.log(data);
      }
    });
  },
  logOut(callback) {
    $.ajax({
      method: 'DELETE',
      url: 'api/session',
      dataType: 'JSON',
      success(data) {
        callback(data);
      },
      error(data) {
        console.log('error');
        console.log(data);
      }
    });
  }
};

module.exports = SessionApiUtil;
