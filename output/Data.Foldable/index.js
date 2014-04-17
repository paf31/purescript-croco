"use strict";
var Prelude = require("Prelude");
var Control_Applicative = require("Control.Applicative");
var Data_Monoid = require("Data.Monoid");
var Data_Array = require("Data.Array");
var Data_Maybe = require("Data.Maybe");
function foldr(dict) {
    return dict["foldr"];
};
function foldl(dict) {
    return dict["foldl"];
};
function foldMap(dict) {
    return dict["foldMap"];
};
function foldrArray(f) {  return function(z) {    return function(xs) {      var acc = z;      for (var i = xs.length - 1; i >= 0; --i) {        acc = f(xs[i])(acc);      }      return acc;    }  }};
function foldlArray(f) {  return function(z) {    return function(xs) {      var acc = z;      for (var i = 0, len = xs.length; i < len; ++i) {        acc = f(acc)(xs[i]);      }      return acc;    }  }};
var traverse_ = function (__dict_Functor_0) {
    return function (__dict_Applicative_1) {
        return function (__dict_Foldable_2) {
            return function (f) {
                return foldr(__dict_Foldable_2)(Prelude["<<<"](Prelude.semigroupoidArr({}))(Control_Applicative["*>"](__dict_Functor_0)(__dict_Applicative_1))(f))(Prelude.pure(__dict_Applicative_1)({}));
            };
        };
    };
};
var sum = function (__dict_Foldable_3) {
    return foldl(__dict_Foldable_3)(Prelude["+"](Prelude.numNumber({})))(0);
};
var sequence_ = function (__dict_Functor_4) {
    return function (__dict_Applicative_5) {
        return function (__dict_Foldable_6) {
            return traverse_(__dict_Functor_4)(__dict_Applicative_5)(__dict_Foldable_6)(Prelude.id(Prelude.categoryArr({})));
        };
    };
};
var product = function (__dict_Foldable_7) {
    return foldl(__dict_Foldable_7)(Prelude["*"](Prelude.numNumber({})))(1);
};
var or = function (__dict_Foldable_8) {
    return foldl(__dict_Foldable_8)(Prelude["||"](Prelude.boolLikeBoolean({})))(false);
};
var mconcat = function (__dict_Foldable_9) {
    return function (__dict_Monoid_10) {
        return foldl(__dict_Foldable_9)(Prelude["<>"](__dict_Monoid_10["__superclasses"]["Prelude.Semigroup_0"]({})))(Data_Monoid.mempty(__dict_Monoid_10));
    };
};
var for_ = function (__dict_Functor_11) {
    return function (__dict_Applicative_12) {
        return function (__dict_Foldable_13) {
            return Prelude.flip(traverse_(__dict_Functor_11)(__dict_Applicative_12)(__dict_Foldable_13));
        };
    };
};
var foldableTuple = function (_) {
    return {
        "__superclasses": {}, 
        foldr: function (_1) {
            return function (_2) {
                return function (_3) {
                    return _1(_3.values[1])(_2);
                };
            };
        }, 
        foldl: function (_1) {
            return function (_2) {
                return function (_3) {
                    return _1(_2)(_3.values[1]);
                };
            };
        }, 
        foldMap: function (__dict_Monoid_14) {
            return function (_1) {
                return function (_2) {
                    return _1(_2.values[1]);
                };
            };
        }
    };
};
var foldableRef = function (_) {
    return {
        "__superclasses": {}, 
        foldr: function (_1) {
            return function (_2) {
                return function (_3) {
                    return _1(_3.values[0])(_2);
                };
            };
        }, 
        foldl: function (_1) {
            return function (_2) {
                return function (_3) {
                    return _1(_2)(_3.values[0]);
                };
            };
        }, 
        foldMap: function (__dict_Monoid_15) {
            return function (_1) {
                return function (_2) {
                    return _1(_2.values[0]);
                };
            };
        }
    };
};
var foldableMaybe = function (_) {
    return {
        "__superclasses": {}, 
        foldr: function (_1) {
            return function (_2) {
                return function (_3) {
                    if (_3.ctor === "Data.Maybe.Nothing") {
                        return _2;
                    };
                    if (_3.ctor === "Data.Maybe.Just") {
                        return _1(_3.values[0])(_2);
                    };
                    throw "Failed pattern match";
                };
            };
        }, 
        foldl: function (_1) {
            return function (_2) {
                return function (_3) {
                    if (_3.ctor === "Data.Maybe.Nothing") {
                        return _2;
                    };
                    if (_3.ctor === "Data.Maybe.Just") {
                        return _1(_2)(_3.values[0]);
                    };
                    throw "Failed pattern match";
                };
            };
        }, 
        foldMap: function (__dict_Monoid_16) {
            return function (_1) {
                return function (_2) {
                    if (_2.ctor === "Data.Maybe.Nothing") {
                        return Data_Monoid.mempty(__dict_Monoid_16);
                    };
                    if (_2.ctor === "Data.Maybe.Just") {
                        return _1(_2.values[0]);
                    };
                    throw "Failed pattern match";
                };
            };
        }
    };
};
var foldableEither = function (_) {
    return {
        "__superclasses": {}, 
        foldr: function (_1) {
            return function (_2) {
                return function (_3) {
                    if (_3.ctor === "Data.Either.Left") {
                        return _2;
                    };
                    if (_3.ctor === "Data.Either.Right") {
                        return _1(_3.values[0])(_2);
                    };
                    throw "Failed pattern match";
                };
            };
        }, 
        foldl: function (_1) {
            return function (_2) {
                return function (_3) {
                    if (_3.ctor === "Data.Either.Left") {
                        return _2;
                    };
                    if (_3.ctor === "Data.Either.Right") {
                        return _1(_2)(_3.values[0]);
                    };
                    throw "Failed pattern match";
                };
            };
        }, 
        foldMap: function (__dict_Monoid_17) {
            return function (_1) {
                return function (_2) {
                    if (_2.ctor === "Data.Either.Left") {
                        return Data_Monoid.mempty(__dict_Monoid_17);
                    };
                    if (_2.ctor === "Data.Either.Right") {
                        return _1(_2.values[0]);
                    };
                    throw "Failed pattern match";
                };
            };
        }
    };
};
var foldableArray = function (_) {
    return {
        "__superclasses": {}, 
        foldr: function (f) {
            return function (z) {
                return function (xs) {
                    return foldrArray(f)(z)(xs);
                };
            };
        }, 
        foldl: function (f) {
            return function (z) {
                return function (xs) {
                    return foldlArray(f)(z)(xs);
                };
            };
        }, 
        foldMap: function (__dict_Monoid_18) {
            return function (f) {
                return function (xs) {
                    return foldr(foldableArray({}))(function (x) {
                        return function (acc) {
                            return Prelude["<>"](__dict_Monoid_18["__superclasses"]["Prelude.Semigroup_0"]({}))(f(x))(acc);
                        };
                    })(Data_Monoid.mempty(__dict_Monoid_18))(xs);
                };
            };
        }
    };
};
var fold = function (__dict_Foldable_19) {
    return function (__dict_Monoid_20) {
        return foldMap(__dict_Foldable_19)(__dict_Monoid_20)(Prelude.id(Prelude.categoryArr({})));
    };
};
var find = function (__dict_Foldable_21) {
    return function (p) {
        return function (f) {
            return (function (_1) {
                if (_1.length > 0) {
                    return Data_Maybe.Just(_1[0]);
                };
                if (_1.length === 0) {
                    return Data_Maybe.Nothing;
                };
                throw "Failed pattern match";
            })(foldMap(__dict_Foldable_21)(Data_Array.monoidArray({}))(function (x) {
                return p(x) ? [ x ] : [  ];
            })(f));
        };
    };
};
var any = function (__dict_Foldable_22) {
    return function (p) {
        return Prelude["<<<"](Prelude.semigroupoidArr({}))(or(foldableArray({})))(foldMap(__dict_Foldable_22)(Data_Array.monoidArray({}))(function (x) {
            return [ p(x) ];
        }));
    };
};
var elem = function (__dict_Eq_23) {
    return function (__dict_Foldable_24) {
        return Prelude["<<<"](Prelude.semigroupoidArr({}))(any(__dict_Foldable_24))(Prelude["=="](__dict_Eq_23));
    };
};
var notElem = function (__dict_Eq_25) {
    return function (__dict_Foldable_26) {
        return function (x) {
            return Prelude["<<<"](Prelude.semigroupoidArr({}))(Prelude.not(Prelude.boolLikeBoolean({})))(elem(__dict_Eq_25)(__dict_Foldable_26)(x));
        };
    };
};
var and = function (__dict_Foldable_27) {
    return foldl(__dict_Foldable_27)(Prelude["&&"](Prelude.boolLikeBoolean({})))(true);
};
var all = function (__dict_Foldable_28) {
    return function (p) {
        return Prelude["<<<"](Prelude.semigroupoidArr({}))(and(foldableArray({})))(foldMap(__dict_Foldable_28)(Data_Array.monoidArray({}))(function (x) {
            return [ p(x) ];
        }));
    };
};
module.exports = {
    foldlArray: foldlArray, 
    foldrArray: foldrArray, 
    find: find, 
    notElem: notElem, 
    elem: elem, 
    product: product, 
    sum: sum, 
    all: all, 
    any: any, 
    or: or, 
    and: and, 
    mconcat: mconcat, 
    "sequence_": sequence_, 
    "for_": for_, 
    "traverse_": traverse_, 
    fold: fold, 
    foldMap: foldMap, 
    foldl: foldl, 
    foldr: foldr, 
    foldableArray: foldableArray, 
    foldableEither: foldableEither, 
    foldableMaybe: foldableMaybe, 
    foldableRef: foldableRef, 
    foldableTuple: foldableTuple
};