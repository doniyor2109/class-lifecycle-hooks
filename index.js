const useEffect = require('react').useEffect;

module.exports = {
  useComponentDidMount: function(callback) {
  useEffect(callback, []);
  },
  useComponentDidUpdate: function(callback) {
    useEffect(callback);
  },
  useComponentWillUnmount: function (callback) {
    useEffect(function() {
      return callback;
    }, []);
  }
};