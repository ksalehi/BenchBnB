const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const BenchStore = new Store(AppDispatcher);
const BenchConstants = require('../constants/bench_constants');

let _benches = {};

BenchStore.all = function() {
  return Object.keys(_benches).map( benchKey => {
    return _benches[benchKey];
  });
};

BenchStore.allAsObject = function() {
  return Object.assign({}, _benches);
};

function resetAllBenches(benches) {
  _benches = benches;
  BenchStore.__emitChange();
}

BenchStore.resetAllBenches = function(benches) {
  resetAllBenches(benches);
};

BenchStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
      resetAllBenches(payload.benches);
      break;
  }
};


module.exports = BenchStore;
