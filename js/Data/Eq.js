(function (_ps) {
    "use strict";
    _ps.Data_Eq = (function () {
        var module = {};
        var Ref = function (value0) {
            return {
                ctor: "Data.Eq.Ref", 
                values: [ value0 ]
            };
        };
        var liftRef = function (_1) {
            return function (_2) {
                return function (_3) {
                    return _1(_2.values[0])(_3.values[0]);
                    throw "Failed pattern match";
                };
            };
        };
        var eqRef_$eq$eq = liftRef(_ps.Prelude.refEq);
        var eqRef_$div$eq = liftRef(_ps.Prelude.refIneq);
        var eqRef = function (_1) {
            return {
                $eq$eq: eqRef_$eq$eq, 
                $div$eq: eqRef_$div$eq
            };
        };
        module.Ref = Ref;
        module.liftRef = liftRef;
        module.eqRef = eqRef;
        return module;
    })();
})((typeof module !== "undefined" && module.exports) ? module.exports : (typeof window !== "undefined") ? window.PS = window.PS || {} : (function () {
    throw "PureScript doesn't know how to export modules in the current environment";
})());