const BenchApiUtil = {
  fetchAllBenches(callback) {
    $.ajax({
      method: 'get',
      url: 'api/benches',
      dataType: 'json',
      success: function(data) {
        callback(data);
      },
      error(data) {
        console.log('error');
        console.log(data);
      }
    });
  },
  createBench(benchData, callback){
    $.ajax({
      method: 'post',
      url: 'api/benches',
      dataType: 'json',
      data: {bench: benchData},
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

module.exports = BenchApiUtil;
