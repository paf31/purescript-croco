(function (_ps) {
    "use strict";
    _ps.Data_Foldable = (function () {
        var module = {};
        function foldr(dict) {
            return dict["foldr"];
        };
        function foldl(dict) {
            return dict["foldl"];
        };
        function foldMap(dict) {
            return dict["foldMap"];
        };
        var traverse_ = function (__dict_Functor_0) {
            return function (__dict_Applicative_1) {
                return function (__dict_Foldable_2) {
                    return function (f) {
                        return foldr(__dict_Foldable_2)(_ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(_ps.Control_Applicative["*>"](__dict_Functor_0)(__dict_Applicative_1))(f))(_ps.Prelude.pure(__dict_Applicative_1)({}));
                    };
                };
            };
        };
        var sum = function (__dict_Foldable_3) {
            return foldl(__dict_Foldable_3)(_ps.Prelude["+"](_ps.Prelude.numNumber({})))(0);
        };
        var sequence_ = function (__dict_Functor_4) {
            return function (__dict_Applicative_5) {
                return function (__dict_Foldable_6) {
                    return traverse_(__dict_Functor_4)(__dict_Applicative_5)(__dict_Foldable_6)(_ps.Prelude.id(_ps.Prelude.categoryArr({})));
                };
            };
        };
        var product = function (__dict_Foldable_7) {
            return foldl(__dict_Foldable_7)(_ps.Prelude["*"](_ps.Prelude.numNumber({})))(1);
        };
        var or = function (__dict_Foldable_8) {
            return foldl(__dict_Foldable_8)(_ps.Prelude["||"](_ps.Prelude.boolLikeBoolean({})))(false);
        };
        var mconcat = function (__dict_Foldable_9) {
            return function (__dict_Monoid_10) {
                return foldl(__dict_Foldable_9)(_ps.Prelude["<>"](__dict_Monoid_10["__superclasses"]["Prelude.Semigroup_0"]({})))(_ps.Data_Monoid.mempty(__dict_Monoid_10));
            };
        };
        var for_ = function (__dict_Functor_11) {
            return function (__dict_Applicative_12) {
                return function (__dict_Foldable_13) {
                    return _ps.Prelude.flip(traverse_(__dict_Functor_11)(__dict_Applicative_12)(__dict_Foldable_13));
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
                                return _ps.Data_Monoid.mempty(__dict_Monoid_16);
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
                                return _ps.Data_Monoid.mempty(__dict_Monoid_17);
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
                foldr: function (_1) {
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
                }, 
                foldl: function (_1) {
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
                }, 
                foldMap: function (__dict_Monoid_18) {
                    return function (_1) {
                        return function (_2) {
                            if (_2.length === 0) {
                                return _ps.Data_Monoid.mempty(__dict_Monoid_18);
                            };
                            if (_2.length > 0) {
                                var _6 = _2.slice(1);
                                return _ps.Prelude["<>"](__dict_Monoid_18["__superclasses"]["Prelude.Semigroup_0"]({}))(_1(_2[0]))(foldMap(foldableArray({}))(__dict_Monoid_18)(_1)(_6));
                            };
                            throw "Failed pattern match";
                        };
                    };
                }
            };
        };
        var fold = function (__dict_Foldable_19) {
            return function (__dict_Monoid_20) {
                return foldMap(__dict_Foldable_19)(__dict_Monoid_20)(_ps.Prelude.id(_ps.Prelude.categoryArr({})));
            };
        };
        var find = function (__dict_Foldable_21) {
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
                    })(foldMap(__dict_Foldable_21)(_ps.Data_Array.monoidArray({}))(function (x) {
                        return p(x) ? [ x ] : [  ];
                    })(f));
                };
            };
        };
        var any = function (__dict_Foldable_22) {
            return function (p) {
                return _ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(or(foldableArray({})))(foldMap(__dict_Foldable_22)(_ps.Data_Array.monoidArray({}))(function (x) {
                    return [ p(x) ];
                }));
            };
        };
        var elem = function (__dict_Eq_23) {
            return function (__dict_Foldable_24) {
                return _ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(any(__dict_Foldable_24))(_ps.Prelude["=="](__dict_Eq_23));
            };
        };
        var notElem = function (__dict_Eq_25) {
            return function (__dict_Foldable_26) {
                return function (x) {
                    return _ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(_ps.Prelude.not(_ps.Prelude.boolLikeBoolean({})))(elem(__dict_Eq_25)(__dict_Foldable_26)(x));
                };
            };
        };
        var and = function (__dict_Foldable_27) {
            return foldl(__dict_Foldable_27)(_ps.Prelude["&&"](_ps.Prelude.boolLikeBoolean({})))(true);
        };
        var all = function (__dict_Foldable_28) {
            return function (p) {
                return _ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(and(foldableArray({})))(foldMap(__dict_Foldable_28)(_ps.Data_Array.monoidArray({}))(function (x) {
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
        module["sequence_"] = sequence_;
        module["for_"] = for_;
        module["traverse_"] = traverse_;
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