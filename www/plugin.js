const exec = require('cordova/exec');

const PLUGIN_NAME = 'MoverioPlugin';

const MoverioPlugin = {
  getSensorList: function getSensorList() {
    return new Promise(function (resolve, reject) {
      exec(resolve, reject, PLUGIN_NAME, 'getSensorList', []);
    });
  },
  echo: function(phrase, cb) {
    exec(cb, null, PLUGIN_NAME, 'echo', [phrase]);
  },
  getDate: function(cb) {
    exec(cb, null, PLUGIN_NAME, 'getDate', []);
  }
};

module.exports = MoverioPlugin;
