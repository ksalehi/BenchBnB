const AppDispatcher = require('../dispatcher/dispatcher');
const ErrorConstants = require('../constants/bench_constants');

const ErrorActions = {
  setErrors(form, errors){
    AppDispatcher.dispatch({
      actionType: ErrorConstants.SET_ERRORS,
      form: form,
      errors: errors
    });
  },
  clearErrors(){
    AppDispatcher.dispatch({
      actionType: ErrorConstants.CLEAR_ERRORS
    });
  }
};

module.exports = ErrorActions;
