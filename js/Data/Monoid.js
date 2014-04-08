(function (_ps) {
    "use strict";
    _ps.Data_Monoid = (function () {
        var module = {};
        function mempty(dict) {
            return dict["mempty"];
        };
        var monoidString = function (_) {
            return {
                "__superclasses": {
                    "Prelude.Semigroup_0": function (_) {
                        return _ps.Prelude.semigroupString({});
                    }
                }, 
                mempty: ""
            };
        };
        module.mempty = mempty;
        module.monoidString = monoidString;
        return module;
    })();
})((typeof module !== "undefined" && module.exports) ? module.exports : (typeof window !== "undefined") ? window.PS = window.PS || {} : (function () {
    throw "PureScript doesn't know how to export modules in the current environment";
})());