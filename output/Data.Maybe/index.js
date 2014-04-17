"use strict";
var Prelude = require("Prelude");
var Nothing = {
    ctor: "Data.Maybe.Nothing", 
    values: [  ]
};
var Just = function (value0) {
    return {
        ctor: "Data.Maybe.Just", 
        values: [ value0 ]
    };
};
var showMaybe = function (__dict_Show_0) {
    return {
        "__superclasses": {}, 
        show: function (_1) {
            if (_1.ctor === "Data.Maybe.Just") {
                return "Just " + Prelude.show(__dict_Show_0)(_1.values[0]);
            };
            if (_1.ctor === "Data.Maybe.Nothing") {
                return "Nothing";
            };
            throw "Failed pattern match";
        }
    };
};
var maybe = function (_1) {
    return function (_2) {
        return function (_3) {
            if (_3.ctor === "Data.Maybe.Nothing") {
                return _1;
            };
            if (_3.ctor === "Data.Maybe.Just") {
                return _2(_3.values[0]);
            };
            throw "Failed pattern match";
        };
    };
};
var isNothing = maybe(true)(Prelude["const"](false));
var isJust = maybe(false)(Prelude["const"](true));
var functorMaybe = function (_) {
    return {
        "__superclasses": {}, 
        "<$>": function (_1) {
            return function (_2) {
                if (_2.ctor === "Data.Maybe.Just") {
                    return Just(_1(_2.values[0]));
                };
                return Nothing;
            };
        }
    };
};
var fromMaybe = function (a) {
    return maybe(a)(Prelude.id(Prelude.categoryArr({})));
};
var eqMaybe = function (__dict_Eq_2) {
    return {
        "__superclasses": {}, 
        "==": function (_1) {
            return function (_2) {
                if (_1.ctor === "Data.Maybe.Nothing") {
                    if (_2.ctor === "Data.Maybe.Nothing") {
                        return true;
                    };
                };
                if (_1.ctor === "Data.Maybe.Just") {
                    if (_2.ctor === "Data.Maybe.Just") {
                        return Prelude["=="](__dict_Eq_2)(_1.values[0])(_2.values[0]);
                    };
                };
                return false;
            };
        }, 
        "/=": function (a) {
            return function (b) {
                return !Prelude["=="](eqMaybe(__dict_Eq_2))(a)(b);
            };
        }
    };
};
var ordMaybe = function (__dict_Ord_1) {
    return {
        "__superclasses": {
            "Prelude.Eq_0": function (_) {
                return eqMaybe(__dict_Ord_1["__superclasses"]["Prelude.Eq_0"]({}));
            }
        }, 
        compare: function (_1) {
            return function (_2) {
                if (_1.ctor === "Data.Maybe.Just") {
                    if (_2.ctor === "Data.Maybe.Just") {
                        return Prelude.compare(__dict_Ord_1)(_1.values[0])(_2.values[0]);
                    };
                };
                if (_1.ctor === "Data.Maybe.Nothing") {
                    if (_2.ctor === "Data.Maybe.Nothing") {
                        return Prelude.EQ;
                    };
                };
                if (_1.ctor === "Data.Maybe.Nothing") {
                    return Prelude.LT;
                };
                if (_2.ctor === "Data.Maybe.Nothing") {
                    return Prelude.GT;
                };
                throw "Failed pattern match";
            };
        }
    };
};
var applyMaybe = function (_) {
    return {
        "__superclasses": {
            "Prelude.Functor_0": function (_) {
                return functorMaybe({});
            }
        }, 
        "<*>": function (_1) {
            return function (_2) {
                if (_1.ctor === "Data.Maybe.Just") {
                    return Prelude["<$>"](functorMaybe({}))(_1.values[0])(_2);
                };
                if (_1.ctor === "Data.Maybe.Nothing") {
                    return Nothing;
                };
                throw "Failed pattern match";
            };
        }
    };
};
var bindMaybe = function (_) {
    return {
        "__superclasses": {
            "Prelude.Apply_0": function (_) {
                return applyMaybe({});
            }
        }, 
        ">>=": function (_1) {
            return function (_2) {
                if (_1.ctor === "Data.Maybe.Just") {
                    return _2(_1.values[0]);
                };
                if (_1.ctor === "Data.Maybe.Nothing") {
                    return Nothing;
                };
                throw "Failed pattern match";
            };
        }
    };
};
var applicativeMaybe = function (_) {
    return {
        "__superclasses": {
            "Prelude.Apply_0": function (_) {
                return applyMaybe({});
            }
        }, 
        pure: Just
    };
};
var monadMaybe = function (_) {
    return {
        "__superclasses": {
            "Prelude.Applicative_0": function (_) {
                return applicativeMaybe({});
            }, 
            "Prelude.Bind_1": function (_) {
                return bindMaybe({});
            }
        }
    };
};
var alternativeMaybe = function (_) {
    return {
        "__superclasses": {}, 
        empty: Nothing, 
        "<|>": function (_1) {
            return function (_2) {
                if (_1.ctor === "Data.Maybe.Nothing") {
                    return _2;
                };
                return _1;
            };
        }
    };
};
module.exports = {
    Nothing: Nothing, 
    Just: Just, 
    isNothing: isNothing, 
    isJust: isJust, 
    fromMaybe: fromMaybe, 
    maybe: maybe, 
    functorMaybe: functorMaybe, 
    applyMaybe: applyMaybe, 
    applicativeMaybe: applicativeMaybe, 
    alternativeMaybe: alternativeMaybe, 
    bindMaybe: bindMaybe, 
    monadMaybe: monadMaybe, 
    showMaybe: showMaybe, 
    eqMaybe: eqMaybe, 
    ordMaybe: ordMaybe
};