"use strict";
var Prelude = require("Prelude");
var Data_Maybe = require("Data.Maybe");
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
            return "First (" + Prelude.show(Data_Maybe.showMaybe(__dict_Show_0))(_1.values[0]) + ")";
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
        mempty: First(Data_Maybe.Nothing)
    };
};
module.exports = {
    First: First, 
    runFirst: runFirst, 
    showFirst: showFirst, 
    semigroupFirst: semigroupFirst, 
    monoidFirst: monoidFirst
};