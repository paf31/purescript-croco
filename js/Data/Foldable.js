(function (_ps) {
    "use strict";
    _ps.Data_Foldable = (function () {
        var module = {};
        function foldr(dict) {
            return dict.foldr;
        };
        function foldl(dict) {
            return dict.foldl;
        };
        function foldMap(dict) {
            return dict.foldMap;
        };
        var traverse_ = function (__dict_Applicative_0) {
            return function (__dict_Foldable_1) {
                return function (f) {
                    return foldr(__dict_Foldable_1)(_ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(_ps.Control_Applicative["*>"](__dict_Applicative_0))(f))(_ps.Prelude.pure(__dict_Applicative_0)({}));
                };
            };
        };
        var sum = function (__dict_Foldable_2) {
            return foldl(__dict_Foldable_2)(_ps.Prelude["+"](_ps.Prelude.numNumber({})))(0);
        };
        var sequence_ = function (__dict_Applicative_3) {
            return function (__dict_Foldable_4) {
                return traverse_(__dict_Applicative_3)(__dict_Foldable_4)(_ps.Prelude.id(_ps.Prelude.categoryArr({})));
            };
        };
        var product = function (__dict_Foldable_5) {
            return foldl(__dict_Foldable_5)(_ps.Prelude["*"](_ps.Prelude.numNumber({})))(1);
        };
        var or = function (__dict_Foldable_6) {
            return foldl(__dict_Foldable_6)(_ps.Prelude["||"](_ps.Prelude.boolLikeBoolean({})))(false);
        };
        var mconcat = function (__dict_Foldable_7) {
            return function (__dict_Monoid_8) {
                return foldl(__dict_Foldable_7)(_ps.Data_Monoid["<>"](__dict_Monoid_8))(_ps.Data_Monoid.mempty(__dict_Monoid_8));
            };
        };
        var for_ = function (__dict_Applicative_9) {
            return function (__dict_Foldable_10) {
                return _ps.Prelude.flip(traverse_(__dict_Applicative_9)(__dict_Foldable_10));
            };
        };
        var foldableTuple_foldr = function (_1) {
            return function (_2) {
                return function (_3) {
                    return _1(_3.values[1])(_2);
                    throw "Failed pattern match";
                };
            };
        };
        var foldableTuple_foldl = function (_1) {
            return function (_2) {
                return function (_3) {
                    return _1(_2)(_3.values[1]);
                    throw "Failed pattern match";
                };
            };
        };
        var foldableTuple_foldMap = function (__dict_Monoid_11) {
            return function (_1) {
                return function (_2) {
                    return _1(_2.values[1]);
                    throw "Failed pattern match";
                };
            };
        };
        var foldableTuple = function (_1) {
            return {
                foldr: foldableTuple_foldr, 
                foldl: foldableTuple_foldl, 
                foldMap: function (__dict_Monoid_12) {
                    return foldableTuple_foldMap(__dict_Monoid_12);
                }
            };
        };
        var foldableRef_foldr = function (_1) {
            return function (_2) {
                return function (_3) {
                    return _1(_3.values[0])(_2);
                    throw "Failed pattern match";
                };
            };
        };
        var foldableRef_foldl = function (_1) {
            return function (_2) {
                return function (_3) {
                    return _1(_2)(_3.values[0]);
                    throw "Failed pattern match";
                };
            };
        };
        var foldableRef_foldMap = function (__dict_Monoid_13) {
            return function (_1) {
                return function (_2) {
                    return _1(_2.values[0]);
                    throw "Failed pattern match";
                };
            };
        };
        var foldableRef = function (_1) {
            return {
                foldr: foldableRef_foldr, 
                foldl: foldableRef_foldl, 
                foldMap: function (__dict_Monoid_14) {
                    return foldableRef_foldMap(__dict_Monoid_14);
                }
            };
        };
        var foldableMaybe_foldr = function (_1) {
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
        };
        var foldableMaybe_foldl = function (_1) {
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
        };
        var foldableMaybe_foldMap = function (__dict_Monoid_15) {
            return function (_1) {
                return function (_2) {
                    if (_2.ctor === "Data.Maybe.Nothing") {
                        return _ps.Data_Monoid.mempty(__dict_Monoid_15);
                    };
                    if (_2.ctor === "Data.Maybe.Just") {
                        return _1(_2.values[0]);
                    };
                    throw "Failed pattern match";
                };
            };
        };
        var foldableMaybe = function (_1) {
            return {
                foldr: foldableMaybe_foldr, 
                foldl: foldableMaybe_foldl, 
                foldMap: function (__dict_Monoid_16) {
                    return foldableMaybe_foldMap(__dict_Monoid_16);
                }
            };
        };
        var foldableEither_foldr = function (_1) {
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
        };
        var foldableEither_foldl = function (_1) {
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
        };
        var foldableEither_foldMap = function (__dict_Monoid_17) {
            return function (_1) {
                return function (_2) {
                    if (_2.ctor === "Data.Either.Left") {
                        return _ps.Data_Monoid.mempty(__dict_Monoid_17);
                    };
                    if (_2.ctor === "Data.Either.Right") {
                        return _1(_2.values[0]);
                    };
                    throw "Failed pattern match";
                };
            };
        };
        var foldableEither = function (_1) {
            return {
                foldr: foldableEither_foldr, 
                foldl: foldableEither_foldl, 
                foldMap: function (__dict_Monoid_18) {
                    return foldableEither_foldMap(__dict_Monoid_18);
                }
            };
        };
        var foldableArray = function (_1) {
            return {
                foldr: foldableArray_foldr, 
                foldl: foldableArray_foldl, 
                foldMap: function (__dict_Monoid_20) {
                    return foldableArray_foldMap(__dict_Monoid_20);
                }
            };
        };
        var foldableArray_foldr = function (_1) {
            return function (_2) {
                return function (_3) {
                    if (_3.length === 0) {
                        return _2;
                    };
                    if (_3.length > 0) {
                        var _8 = _3.slice(1);
                        return _1(_3[0])(foldr(foldableArray({}))(_1)(_2)(_8));
                    };
                    throw "Failed pattern match";
                };
            };
        };
        var foldableArray_foldl = function (_1) {
            return function (_2) {
                return function (_3) {
                    if (_3.length === 0) {
                        return _2;
                    };
                    if (_3.length > 0) {
                        var _8 = _3.slice(1);
                        return foldl(foldableArray({}))(_1)(_1(_2)(_3[0]))(_8);
                    };
                    throw "Failed pattern match";
                };
            };
        };
        var foldableArray_foldMap = function (__dict_Monoid_19) {
            return function (_1) {
                return function (_2) {
                    if (_2.length === 0) {
                        return _ps.Data_Monoid.mempty(__dict_Monoid_19);
                    };
                    if (_2.length > 0) {
                        var _6 = _2.slice(1);
                        return _ps.Data_Monoid["<>"](__dict_Monoid_19)(_1(_2[0]))(foldMap(foldableArray({}))(__dict_Monoid_19)(_1)(_6));
                    };
                    throw "Failed pattern match";
                };
            };
        };
        var fold = function (__dict_Foldable_21) {
            return function (__dict_Monoid_22) {
                return foldMap(__dict_Foldable_21)(__dict_Monoid_22)(_ps.Prelude.id(_ps.Prelude.categoryArr({})));
            };
        };
        var find = function (__dict_Foldable_23) {
            return function (p) {
                return function (f) {
                    return (function (_1) {
                        if (_1.length > 0) {
                            return _ps.Data_Maybe.Just(_1[0]);
                        };
                        if (_1.length === 0) {
                            return _ps.Data_Maybe.Nothing;
                        };
                        throw "Failed pattern match";
                    })(foldMap(__dict_Foldable_23)(_ps.Data_Monoid.monoidArray({}))(function (x) {
                        return p(x) ? [ x ] : [  ];
                    })(f));
                };
            };
        };
        var any = function (__dict_Foldable_24) {
            return function (p) {
                return _ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(or(foldableArray({})))(foldMap(__dict_Foldable_24)(_ps.Data_Monoid.monoidArray({}))(function (x) {
                    return [ p(x) ];
                }));
            };
        };
        var elem = function (__dict_Eq_25) {
            return function (__dict_Foldable_26) {
                return _ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(any(__dict_Foldable_26))(_ps.Prelude["=="](__dict_Eq_25));
            };
        };
        var notElem = function (__dict_Eq_27) {
            return function (__dict_Foldable_28) {
                return function (x) {
                    return _ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(_ps.Prelude.not(_ps.Prelude.boolLikeBoolean({})))(elem(__dict_Eq_27)(__dict_Foldable_28)(x));
                };
            };
        };
        var and = function (__dict_Foldable_29) {
            return foldl(__dict_Foldable_29)(_ps.Prelude["&&"](_ps.Prelude.boolLikeBoolean({})))(true);
        };
        var all = function (__dict_Foldable_30) {
            return function (p) {
                return _ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(and(foldableArray({})))(foldMap(__dict_Foldable_30)(_ps.Data_Monoid.monoidArray({}))(function (x) {
                    return [ p(x) ];
                }));
            };
        };
        module.find = find;
        module.notElem = notElem;
        module.elem = elem;
        module.product = product;
        module.sum = sum;
        module.all = all;
        module.any = any;
        module.or = or;
        module.and = and;
        module.mconcat = mconcat;
        module.sequence_ = sequence_;
        module.for_ = for_;
        module.traverse_ = traverse_;
        module.fold = fold;
        module.foldMap = foldMap;
        module.foldl = foldl;
        module.foldr = foldr;
        module.foldableArray = foldableArray;
        module.foldableEither = foldableEither;
        module.foldableMaybe = foldableMaybe;
        module.foldableRef = foldableRef;
        module.foldableTuple = foldableTuple;
        return module;
    })();
})((typeof module !== "undefined" && module.exports) ? module.exports : (typeof window !== "undefined") ? window.PS = window.PS || {} : (function () {
    throw "PureScript doesn't know how to export modules in the current environment";
})());