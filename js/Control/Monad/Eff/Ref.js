(function (_ps) {
    "use strict";
    _ps.Control_Monad_Eff_Ref = (function () {
        var module = {};
        function newRef(val) {  return function () {    return { value: val };  };};
        function readRef(ref) {  return function() {    return ref.value;  };};
        function modifyRef(ref) {  return function(f) {    return function() {      ref.value = f(ref.value);      return {};    };  };};
        function writeRef(ref) {  return function(val) {    return function() {      ref.value = val;      return {};    };  };};
        module.writeRef = writeRef;
        module.modifyRef = modifyRef;
        module.readRef = readRef;
        module.newRef = newRef;
        return module;
    })();
})((typeof module !== "undefined" && module.exports) ? module.exports : (typeof window !== "undefined") ? window.PS = window.PS || {} : (function () {
    throw "PureScript doesn't know how to export modules in the current environment";
})());