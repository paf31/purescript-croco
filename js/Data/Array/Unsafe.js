(function (_ps) {
    "use strict";
    _ps.Data_Array_Unsafe = (function () {
        var module = {};
        var tail = function (_1) {
            if (_1.length > 0) {
                var _4 = _1.slice(1);
                return _4;
            };
            throw "Failed pattern match";
        };
        var head = function (_1) {
            if (_1.length > 0) {
                return _1[0];
            };
            throw "Failed pattern match";
        };
        module.tail = tail;
        module.head = head;
        return module;
    })();
})((typeof module !== "undefined" && module.exports) ? module.exports : (typeof window !== "undefined") ? window.PS = window.PS || {} : (function () {
    throw "PureScript doesn't know how to export modules in the current environment";
})());