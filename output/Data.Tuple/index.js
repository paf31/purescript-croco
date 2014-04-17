"use strict";
var Data_Array = require("Data.Array");
var Prelude = require("Prelude");
var Data_Monoid = require("Data.Monoid");
var Tuple = function (value0) {
    return function (value1) {
        return {
            ctor: "Data.Tuple.Tuple", 
            values: [ value0, value1 ]
        };
    };
};
var zip = Data_Array.zipWith(Tuple);
var unzip = function (_1) {
    return (function (_2) {
        if (_2.length > 0) {
            var _4 = _2.slice(1);
            return (function (_1) {
                return Tuple(Prelude[":"]((_2[0]).values[0])(_1.values[0]))(Prelude[":"]((_2[0]).values[1])(_1.values[1]));
            })(unzip(_4));
        };
        if (_2.length === 0) {
            return Tuple([  ])([  ]);
        };
        throw "Failed pattern match";
    })(_1);
};
var uncurry = function (_1) {
    return function (_2) {
        return _1(_2.values[0])(_2.values[1]);
    };
};
var swap = function (_1) {
    return Tuple(_1.values[1])(_1.values[0]);
};
var snd = function (_1) {
    return _1.values[1];
};
var showTuple = function (__dict_Show_0) {
    return function (__dict_Show_1) {
        return {
            "__superclasses": {}, 
            show: function (_1) {
                return "Tuple(" + Prelude.show(__dict_Show_0)(_1.values[0]) + ", " + Prelude.show(__dict_Show_1)(_1.values[1]) + ")";
            }
        };
    };
};
var functorTuple = function (_) {
    return {
        "__superclasses": {}, 
        "<$>": function (_1) {
            return function (_2) {
                return Tuple(_2.values[0])(_1(_2.values[1]));
            };
        }
    };
};
var fst = function (_1) {
    return _1.values[0];
};
var eqTuple = function (__dict_Eq_5) {
    return function (__dict_Eq_6) {
        return {
            "__superclasses": {}, 
            "==": function (_1) {
                return function (_2) {
                    return Prelude["=="](__dict_Eq_5)(_1.values[0])(_2.values[0]) && Prelude["=="](__dict_Eq_6)(_1.values[1])(_2.values[1]);
                };
            }, 
            "/=": function (t1) {
                return function (t2) {
                    return !Prelude["=="](eqTuple(__dict_Eq_5)(__dict_Eq_6))(t1)(t2);
                };
            }
        };
    };
};
var ordTuple = function (__dict_Ord_2) {
    return function (__dict_Ord_3) {
        return {
            "__superclasses": {
                "Prelude.Eq_0": function (_) {
                    return eqTuple(__dict_Ord_2["__superclasses"]["Prelude.Eq_0"]({}))(__dict_Ord_3["__superclasses"]["Prelude.Eq_0"]({}));
                }
            }, 
            compare: function (_1) {
                return function (_2) {
                    return (function (_3, _4) {
                        return (function (_1) {
                            if (_1.ctor === "Prelude.EQ") {
                                return Prelude.compare(__dict_Ord_3)(_3.values[1])(_4.values[1]);
                            };
                            return _1;
                        })(Prelude.compare(__dict_Ord_2)(_3.values[0])(_4.values[0]));
                    })(_1, _2);
                };
            }
        };
    };
};
var curry = function (f) {
    return function (a) {
        return function (b) {
            return f(Tuple(a)(b));
        };
    };
};
var applyTuple = function (__dict_Semigroup_8) {
    return {
        "__superclasses": {
            "Prelude.Functor_0": function (_) {
                return functorTuple({});
            }
        }, 
        "<*>": function (_1) {
            return function (_2) {
                return Tuple(Prelude["<>"](__dict_Semigroup_8)(_1.values[0])(_2.values[0]))(_1.values[1](_2.values[1]));
            };
        }
    };
};
var bindTuple = function (__dict_Semigroup_7) {
    return {
        "__superclasses": {
            "Prelude.Apply_0": function (_) {
                return applyTuple(__dict_Semigroup_7);
            }
        }, 
        ">>=": function (_1) {
            return function (_2) {
                return (function (_3, _4) {
                    return (function (_1) {
                        return Tuple(Prelude["<>"](__dict_Semigroup_7)(_3.values[0])(_1.values[0]))(_1.values[1]);
                    })(_4(_3.values[1]));
                })(_1, _2);
            };
        }
    };
};
var applicativeTuple = function (__dict_Monoid_9) {
    return {
        "__superclasses": {
            "Prelude.Apply_0": function (_) {
                return applyTuple(__dict_Monoid_9["__superclasses"]["Prelude.Semigroup_0"]({}));
            }
        }, 
        pure: Tuple(Data_Monoid.mempty(__dict_Monoid_9))
    };
};
var monadTuple = function (__dict_Monoid_4) {
    return {
        "__superclasses": {
            "Prelude.Applicative_0": function (_) {
                return applicativeTuple(__dict_Monoid_4);
            }, 
            "Prelude.Bind_1": function (_) {
                return bindTuple(__dict_Monoid_4["__superclasses"]["Prelude.Semigroup_0"]({}));
            }
        }
    };
};
module.exports = {
    Tuple: Tuple, 
    swap: swap, 
    unzip: unzip, 
    zip: zip, 
    uncurry: uncurry, 
    curry: curry, 
    snd: snd, 
    fst: fst, 
    showTuple: showTuple, 
    eqTuple: eqTuple, 
    ordTuple: ordTuple, 
    functorTuple: functorTuple, 
    applyTuple: applyTuple, 
    applicativeTuple: applicativeTuple, 
    bindTuple: bindTuple, 
    monadTuple: monadTuple
};