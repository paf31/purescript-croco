"use strict";
var Prelude = require("Prelude");
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
        };
    };
};
var eqRef = function (_) {
    return {
        "__superclasses": {}, 
        "==": liftRef(Prelude.refEq), 
        "/=": liftRef(Prelude.refIneq)
    };
};
module.exports = {
    Ref: Ref, 
    liftRef: liftRef, 
    eqRef: eqRef
};