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
        var showFirst = function (__dict_Show_0) {
            return {
                "__superclasses": {}, 
                show: function (_1) {
                    return "First (" + _ps.Prelude.show(_ps.Data_Maybe.showMaybe(__dict_Show_0))(_1.values[0]) + ")";
                }
            };
        };
        var semigroupFirst = function (_) {
            return {
                "__superclasses": {}, 
                "<>": function (_1) {
                    return function (_2) {
                        if ((_1.values[0]).ctor === "Data.Maybe.Just") {
                            return _1;
                        };
                        return _2;
                    };
                }
            };
        };
        var runFirst = function (_1) {
            return _1.values[0];
        };
        var monoidFirst = function (_) {
            return {
                "__superclasses": {
                    "Prelude.Semigroup_0": function (_) {
                        return semigroupFirst({});
                    }
                }, 
                mempty: First(_ps.Data_Maybe.Nothing)
            };
        };
        module.First = First;
        module.runFirst = runFirst;
        module.showFirst = showFirst;
        module.semigroupFirst = semigroupFirst;
        module.monoidFirst = monoidFirst;
        return module;
    })();
})((typeof module !== "undefined" && module.exports) ? module.exports : (typeof window !== "undefined") ? window.PS = window.PS || {} : (function () {
    throw "PureScript doesn't know how to export modules in the current environment";
})());