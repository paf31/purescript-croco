(function (_ps) {
    "use strict";
    _ps.Debug_Trace = (function () {
        var module = {};
        function trace(s) {  return function() {    console.log(s);    return {};  };};
        var print = function (__dict_Show_0) {
            return function (o) {
                return trace(_ps.Prelude.show(__dict_Show_0)(o));
            };
        };
        module.print = print;
        module.trace = trace;
        return module;
    })();
})((typeof module !== "undefined" && module.exports) ? module.exports : (typeof window !== "undefined") ? window.PS = window.PS || {} : (function () {
    throw "PureScript doesn't know how to export modules in the current environment";
})());