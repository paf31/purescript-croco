"use strict";
var Prelude = require("Prelude");
function mempty(dict) {
    return dict["mempty"];
};
var monoidString = function (_) {
    return {
        "__superclasses": {
            "Prelude.Semigroup_0": function (_) {
                return Prelude.semigroupString({});
            }
        }, 
        mempty: ""
    };
};
module.exports = {
    mempty: mempty, 
    monoidString: monoidString
};