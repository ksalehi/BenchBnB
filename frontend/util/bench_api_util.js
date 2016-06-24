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
  }
};

module.exports = BenchApiUtil;
