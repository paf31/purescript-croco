"use strict";
var Prelude = require("Prelude");
var Data_Tuple = require("Data.Tuple");
var Data_Eq = require("Data.Eq");
var Data_Maybe = require("Data.Maybe");
var Data_Either = require("Data.Either");
var Data_Array = require("Data.Array");
function traverse(dict) {
    return dict["traverse"];
};
function sequence(dict) {
    return dict["sequence"];
};
var traversableTuple = function (_) {
    return {
        "__superclasses": {}, 
        traverse: function (__dict_Functor_2) {
            return function (__dict_Applicative_3) {
                return function (_1) {
                    return function (_2) {
                        return Prelude["<$>"](__dict_Functor_2)(Data_Tuple.Tuple(_2.values[0]))(_1(_2.values[1]));
                    };
                };
            };
        }, 
        sequence: function (__dict_Functor_4) {
            return function (__dict_Applicative_5) {
                return function (_1) {
                    return Prelude["<$>"](__dict_Functor_4)(Data_Tuple.Tuple(_1.values[0]))(_1.values[1]);
                };
            };
        }
    };
};
var traversableRef = function (_) {
    return {
        "__superclasses": {}, 
        traverse: function (__dict_Functor_6) {
            return function (__dict_Applicative_7) {
                return function (_1) {
                    return function (_2) {
                        return Prelude["<$>"](__dict_Functor_6)(Data_Eq.Ref)(_1(_2.values[0]));
                    };
                };
            };
        }, 
        sequence: function (__dict_Functor_8) {
            return function (__dict_Applicative_9) {
                return function (_1) {
                    return Prelude["<$>"](__dict_Functor_8)(Data_Eq.Ref)(_1.values[0]);
                };
            };
        }
    };
};
var traversableMaybe = function (_) {
    return {
        "__superclasses": {}, 
        traverse: function (__dict_Functor_10) {
            return function (__dict_Applicative_11) {
                return function (_1) {
                    return function (_2) {
                        if (_2.ctor === "Data.Maybe.Nothing") {
                            return Prelude.pure(__dict_Applicative_11)(Data_Maybe.Nothing);
                        };
                        if (_2.ctor === "Data.Maybe.Just") {
                            return Prelude["<$>"](__dict_Functor_10)(Data_Maybe.Just)(_1(_2.values[0]));
                        };
                        throw "Failed pattern match";
                    };
                };
            };
        }, 
        sequence: function (__dict_Functor_12) {
            return function (__dict_Applicative_13) {
                return function (_1) {
                    if (_1.ctor === "Data.Maybe.Nothing") {
                        return Prelude.pure(__dict_Applicative_13)(Data_Maybe.Nothing);
                    };
                    if (_1.ctor === "Data.Maybe.Just") {
                        return Prelude["<$>"](__dict_Functor_12)(Data_Maybe.Just)(_1.values[0]);
                    };
                    throw "Failed pattern match";
                };
            };
        }
    };
};
var traversableEither = function (_) {
    return {
        "__superclasses": {}, 
        traverse: function (__dict_Functor_14) {
            return function (__dict_Applicative_15) {
                return function (_1) {
                    return function (_2) {
                        if (_2.ctor === "Data.Either.Left") {
                            return Prelude.pure(__dict_Applicative_15)(Data_Either.Left(_2.values[0]));
                        };
                        if (_2.ctor === "Data.Either.Right") {
                            return Prelude["<$>"](__dict_Functor_14)(Data_Either.Right)(_1(_2.values[0]));
                        };
                        throw "Failed pattern match";
                    };
                };
            };
        }, 
        sequence: function (__dict_Functor_16) {
            return function (__dict_Applicative_17) {
                return function (_1) {
                    if (_1.ctor === "Data.Either.Left") {
                        return Prelude.pure(__dict_Applicative_17)(Data_Either.Left(_1.values[0]));
                    };
                    if (_1.ctor === "Data.Either.Right") {
                        return Prelude["<$>"](__dict_Functor_16)(Data_Either.Right)(_1.values[0]);
                    };
                    throw "Failed pattern match";
                };
            };
        }
    };
};
var traversableArray = function (_) {
    return {
        "__superclasses": {}, 
        traverse: function (__dict_Functor_18) {
            return function (__dict_Applicative_19) {
                return function (_1) {
                    return function (_2) {
                        if (_2.length === 0) {
                            return Prelude.pure(__dict_Applicative_19)([  ]);
                        };
                        if (_2.length > 0) {
                            var _6 = _2.slice(1);
                            return Prelude["<*>"](__dict_Applicative_19["__superclasses"]["Prelude.Apply_0"]({}))(Prelude["<$>"](__dict_Functor_18)(Prelude[":"])(_1(_2[0])))(traverse(traversableArray({}))(__dict_Functor_18)(__dict_Applicative_19)(_1)(_6));
                        };
                        throw "Failed pattern match";
                    };
                };
            };
        }, 
        sequence: function (__dict_Functor_20) {
            return function (__dict_Applicative_21) {
                return function (_1) {
                    if (_1.length === 0) {
                        return Prelude.pure(__dict_Applicative_21)([  ]);
                    };
                    if (_1.length > 0) {
                        var _4 = _1.slice(1);
                        return Prelude["<*>"](__dict_Applicative_21["__superclasses"]["Prelude.Apply_0"]({}))(Prelude["<$>"](__dict_Functor_20)(Prelude[":"])(_1[0]))(sequence(traversableArray({}))(__dict_Functor_20)(__dict_Applicative_21)(_4));
                    };
                    throw "Failed pattern match";
                };
            };
        }
    };
};
var zipWithA = function (__dict_Functor_0) {
    return function (__dict_Applicative_1) {
        return function (f) {
            return function (xs) {
                return function (ys) {
                    return sequence(traversableArray({}))(__dict_Functor_0)(__dict_Applicative_1)(Data_Array.zipWith(f)(xs)(ys));
                };
            };
        };
    };
};
var $$for = function (__dict_Functor_22) {
    return function (__dict_Applicative_23) {
        return function (__dict_Traversable_24) {
            return function (x) {
                return function (f) {
                    return traverse(__dict_Traversable_24)(__dict_Functor_22)(__dict_Applicative_23)(f)(x);
                };
            };
        };
    };
};
module.exports = {
    zipWithA: zipWithA, 
    "for": $$for, 
    sequence: sequence, 
    traverse: traverse, 
    traversableArray: traversableArray, 
    traversableEither: traversableEither, 
    traversableRef: traversableRef, 
    traversableMaybe: traversableMaybe, 
    traversableTuple: traversableTuple
};