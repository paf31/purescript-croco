(function (_ps) {
    "use strict";
    _ps.Data_Monoid_First = (function () {
        var module = {};
        var First = function (value0) {
            return {
                ctor: "Data.Monoid.First.First", 
                values: [ value0 ]
            };
        };
        var showFirst_show = function (__dict_Show_0) {
            return function (_1) {
                return "First (" + _ps.Prelude.show(_ps.Data_Maybe.showMaybe(__dict_Show_0))(_1.values[0]) + ")";
                throw "Failed pattern match";
            };
        };
        var showFirst = function (_1) {
            return {
                show: showFirst_show(_1)
            };
        };
        var runFirst = function (_1) {
            return _1.values[0];
            throw "Failed pattern match";
        };
        var monoidFirst_mempty = First(_ps.Data_Maybe.Nothing);
        var monoidFirst_$less$greater = function (_1) {
            return function (_2) {
                if ((_1.values[0]).ctor === "Data.Maybe.Just") {
                    return _1;
                };
                return _2;
                throw "Failed pattern match";
            };
        };
        var monoidFirst = function (_1) {
            return {
                mempty: monoidFirst_mempty, 
                $less$greater: monoidFirst_$less$greater
            };
        };
        module.First = First;
        module.runFirst = runFirst;
        module.showFirst = showFirst;
        module.monoidFirst = monoidFirst;
        return module;
    })();
})((typeof module !== "undefined" && module.exports) ? module.exports : (typeof window !== "undefined") ? window.PS = window.PS || {} : (function () {
    throw "PureScript doesn't know how to export modules in the current environment";
})());