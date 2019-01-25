const react = require('react');
const useEffect = react.useEffect;
const useRef = react.useRef;

module.exports = {
  useComponentDidMount: function(callback) {
    useEffect(callback, []);
  },
  useComponentDidUpdate: function(callback) {
    const ref = useRef(false);
    useEffect(function() {
      if (!ref.current) {
        ref.current = true;
      } else {
        callback();
      }
    });
  },
  useComponentWillUnmount: function (callback) {
    useEffect(function() {
      return callback;
    }, []);
  }
};
