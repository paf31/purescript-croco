(function (_ps) {
    "use strict";
    _ps.Control_Monad_ST = (function () {
        var module = {};
        function newSTRef(val) {  return function () {    return { value: val };  };};
        function readSTRef(ref) {  return function() {    return ref.value;  };};
        function modifySTRef(ref) {  return function(f) {    return function() {      return ref.value = f(ref.value);    };  };};
        function writeSTRef(ref) {  return function(a) {    return function() {      return ref.value = a;    };  };};
        function newSTArray(len) {  return function(a) {    return function() {      var arr = [];      for (var i = 0; i < len; i++) {        arr[i] = a;      };      return arr;    };  };};
        function peekSTArray(arr) {  return function(i) {    return function() {      return arr[i];    };  };};
        function pokeSTArray(arr) {  return function(i) {    return function(a) {      return function() {        return arr[i] = a;      };    };  };};
        function runST(f) {  return f;};
        function runSTArray(f) {  return f;};
        module.runSTArray = runSTArray;
        module.runST = runST;
        module.pokeSTArray = pokeSTArray;
        module.peekSTArray = peekSTArray;
        module.newSTArray = newSTArray;
        module.writeSTRef = writeSTRef;
        module.modifySTRef = modifySTRef;
        module.readSTRef = readSTRef;
        module.newSTRef = newSTRef;
        return module;
    })();
})((typeof module !== "undefined" && module.exports) ? module.exports : (typeof window !== "undefined") ? window.PS = window.PS || {} : (function () {
    throw "PureScript doesn't know how to export modules in the current environment";
})());