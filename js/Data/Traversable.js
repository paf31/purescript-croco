(function (_ps) {
    "use strict";
    _ps.Data_Traversable = (function () {
        var module = {};
        function traverse(dict) {
            return dict.traverse;
        };
        function sequence(dict) {
            return dict.sequence;
        };
        var traversableTuple_traverse = function (__dict_Applicative_1) {
            return function (_1) {
                return function (_2) {
                    return _ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(__dict_Applicative_1))(_ps.Data_Tuple.Tuple(_2.values[0]))(_1(_2.values[1]));
                    throw "Failed pattern match";
                };
            };
        };
        var traversableTuple_sequence = function (__dict_Applicative_2) {
            return function (_1) {
                return _ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(__dict_Applicative_2))(_ps.Data_Tuple.Tuple(_1.values[0]))(_1.values[1]);
                throw "Failed pattern match";
            };
        };
        var traversableTuple = function (_1) {
            return {
                traverse: function (__dict_Applicative_3) {
                    return traversableTuple_traverse(__dict_Applicative_3);
                }, 
                sequence: function (__dict_Applicative_4) {
                    return traversableTuple_sequence(__dict_Applicative_4);
                }
            };
        };
        var traversableRef_traverse = function (__dict_Applicative_5) {
            return function (_1) {
                return function (_2) {
                    return _ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(__dict_Applicative_5))(_ps.Data_Eq.Ref)(_1(_2.values[0]));
                    throw "Failed pattern match";
                };
            };
        };
        var traversableRef_sequence = function (__dict_Applicative_6) {
            return function (_1) {
                return _ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(__dict_Applicative_6))(_ps.Data_Eq.Ref)(_1.values[0]);
                throw "Failed pattern match";
            };
        };
        var traversableRef = function (_1) {
            return {
                traverse: function (__dict_Applicative_7) {
                    return traversableRef_traverse(__dict_Applicative_7);
                }, 
                sequence: function (__dict_Applicative_8) {
                    return traversableRef_sequence(__dict_Applicative_8);
                }
            };
        };
        var traversableMaybe_traverse = function (__dict_Applicative_9) {
            return function (_1) {
                return function (_2) {
                    if (_2.ctor === "Data.Maybe.Nothing") {
                        return _ps.Prelude.pure(__dict_Applicative_9)(_ps.Data_Maybe.Nothing);
                    };
                    if (_2.ctor === "Data.Maybe.Just") {
                        return _ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(__dict_Applicative_9))(_ps.Data_Maybe.Just)(_1(_2.values[0]));
                    };
                    throw "Failed pattern match";
                };
            };
        };
        var traversableMaybe_sequence = function (__dict_Applicative_10) {
            return function (_1) {
                if (_1.ctor === "Data.Maybe.Nothing") {
                    return _ps.Prelude.pure(__dict_Applicative_10)(_ps.Data_Maybe.Nothing);
                };
                if (_1.ctor === "Data.Maybe.Just") {
                    return _ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(__dict_Applicative_10))(_ps.Data_Maybe.Just)(_1.values[0]);
                };
                throw "Failed pattern match";
            };
        };
        var traversableMaybe = function (_1) {
            return {
                traverse: function (__dict_Applicative_11) {
                    return traversableMaybe_traverse(__dict_Applicative_11);
                }, 
                sequence: function (__dict_Applicative_12) {
                    return traversableMaybe_sequence(__dict_Applicative_12);
                }
            };
        };
        var traversableEither_traverse = function (__dict_Applicative_13) {
            return function (_1) {
                return function (_2) {
                    if (_2.ctor === "Data.Either.Left") {
                        return _ps.Prelude.pure(__dict_Applicative_13)(_ps.Data_Either.Left(_2.values[0]));
                    };
                    if (_2.ctor === "Data.Either.Right") {
                        return _ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(__dict_Applicative_13))(_ps.Data_Either.Right)(_1(_2.values[0]));
                    };
                    throw "Failed pattern match";
                };
            };
        };
        var traversableEither_sequence = function (__dict_Applicative_14) {
            return function (_1) {
                if (_1.ctor === "Data.Either.Left") {
                    return _ps.Prelude.pure(__dict_Applicative_14)(_ps.Data_Either.Left(_1.values[0]));
                };
                if (_1.ctor === "Data.Either.Right") {
                    return _ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(__dict_Applicative_14))(_ps.Data_Either.Right)(_1.values[0]);
                };
                throw "Failed pattern match";
            };
        };
        var traversableEither = function (_1) {
            return {
                traverse: function (__dict_Applicative_15) {
                    return traversableEither_traverse(__dict_Applicative_15);
                }, 
                sequence: function (__dict_Applicative_16) {
                    return traversableEither_sequence(__dict_Applicative_16);
                }
            };
        };
        var traversableArray = function (_1) {
            return {
                traverse: function (__dict_Applicative_19) {
                    return traversableArray_traverse(__dict_Applicative_19);
                }, 
                sequence: function (__dict_Applicative_20) {
                    return traversableArray_sequence(__dict_Applicative_20);
                }
            };
        };
        var traversableArray_traverse = function (__dict_Applicative_17) {
            return function (_1) {
                return function (_2) {
                    if (_2.length === 0) {
                        return _ps.Prelude.pure(__dict_Applicative_17)([  ]);
                    };
                    if (_2.length > 0) {
                        var _6 = _2.slice(1);
                        return _ps.Prelude["<*>"](__dict_Applicative_17)(_ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(__dict_Applicative_17))(_ps.Data_Array[":"])(_1(_2[0])))(traverse(traversableArray({}))(__dict_Applicative_17)(_1)(_6));
                    };
                    throw "Failed pattern match";
                };
            };
        };
        var traversableArray_sequence = function (__dict_Applicative_18) {
            return function (_1) {
                if (_1.length === 0) {
                    return _ps.Prelude.pure(__dict_Applicative_18)([  ]);
                };
                if (_1.length > 0) {
                    var _4 = _1.slice(1);
                    return _ps.Prelude["<*>"](__dict_Applicative_18)(_ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(__dict_Applicative_18))(_ps.Data_Array[":"])(_1[0]))(sequence(traversableArray({}))(__dict_Applicative_18)(_4));
                };
                throw "Failed pattern match";
            };
        };
        var zipWithA = function (__dict_Applicative_0) {
            return function (f) {
                return function (xs) {
                    return function (ys) {
                        return sequence(traversableArray({}))(__dict_Applicative_0)(_ps.Data_Array.zipWith(f)(xs)(ys));
                    };
                };
            };
        };
        var $$for = function (__dict_Applicative_21) {
            return function (__dict_Traversable_22) {
                return function (x) {
                    return function (f) {
                        return traverse(__dict_Traversable_22)(__dict_Applicative_21)(f)(x);
                    };
                };
            };
        };
        module.zipWithA = zipWithA;
        module["for"] = $$for;
        module.sequence = sequence;
        module.traverse = traverse;
        module.traversableArray = traversableArray;
        module.traversableEither = traversableEither;
        module.traversableRef = traversableRef;
        module.traversableMaybe = traversableMaybe;
        module.traversableTuple = traversableTuple;
        return module;
    })();
})((typeof module !== "undefined" && module.exports) ? module.exports : (typeof window !== "undefined") ? window.PS = window.PS || {} : (function () {
    throw "PureScript doesn't know how to export modules in the current environment";
})());