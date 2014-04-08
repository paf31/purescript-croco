(function (_ps) {
    "use strict";
    _ps.Data_Traversable = (function () {
        var module = {};
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
                                return _ps.Prelude["<$>"](__dict_Functor_2)(_ps.Data_Tuple.Tuple(_2.values[0]))(_1(_2.values[1]));
                            };
                        };
                    };
                }, 
                sequence: function (__dict_Functor_4) {
                    return function (__dict_Applicative_5) {
                        return function (_1) {
                            return _ps.Prelude["<$>"](__dict_Functor_4)(_ps.Data_Tuple.Tuple(_1.values[0]))(_1.values[1]);
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
                                return _ps.Prelude["<$>"](__dict_Functor_6)(_ps.Data_Eq.Ref)(_1(_2.values[0]));
                            };
                        };
                    };
                }, 
                sequence: function (__dict_Functor_8) {
                    return function (__dict_Applicative_9) {
                        return function (_1) {
                            return _ps.Prelude["<$>"](__dict_Functor_8)(_ps.Data_Eq.Ref)(_1.values[0]);
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
                                    return _ps.Prelude.pure(__dict_Applicative_11)(_ps.Data_Maybe.Nothing);
                                };
                                if (_2.ctor === "Data.Maybe.Just") {
                                    return _ps.Prelude["<$>"](__dict_Functor_10)(_ps.Data_Maybe.Just)(_1(_2.values[0]));
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
                                return _ps.Prelude.pure(__dict_Applicative_13)(_ps.Data_Maybe.Nothing);
                            };
                            if (_1.ctor === "Data.Maybe.Just") {
                                return _ps.Prelude["<$>"](__dict_Functor_12)(_ps.Data_Maybe.Just)(_1.values[0]);
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
                                    return _ps.Prelude.pure(__dict_Applicative_15)(_ps.Data_Either.Left(_2.values[0]));
                                };
                                if (_2.ctor === "Data.Either.Right") {
                                    return _ps.Prelude["<$>"](__dict_Functor_14)(_ps.Data_Either.Right)(_1(_2.values[0]));
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
                                return _ps.Prelude.pure(__dict_Applicative_17)(_ps.Data_Either.Left(_1.values[0]));
                            };
                            if (_1.ctor === "Data.Either.Right") {
                                return _ps.Prelude["<$>"](__dict_Functor_16)(_ps.Data_Either.Right)(_1.values[0]);
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
                                    return _ps.Prelude.pure(__dict_Applicative_19)([  ]);
                                };
                                if (_2.length > 0) {
                                    var _6 = _2.slice(1);
                                    return _ps.Prelude["<*>"](__dict_Applicative_19["__superclasses"]["Prelude.Apply_0"]({}))(_ps.Prelude["<$>"](__dict_Functor_18)(_ps.Data_Array[":"])(_1(_2[0])))(traverse(traversableArray({}))(__dict_Functor_18)(__dict_Applicative_19)(_1)(_6));
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
                                return _ps.Prelude.pure(__dict_Applicative_21)([  ]);
                            };
                            if (_1.length > 0) {
                                var _4 = _1.slice(1);
                                return _ps.Prelude["<*>"](__dict_Applicative_21["__superclasses"]["Prelude.Apply_0"]({}))(_ps.Prelude["<$>"](__dict_Functor_20)(_ps.Data_Array[":"])(_1[0]))(sequence(traversableArray({}))(__dict_Functor_20)(__dict_Applicative_21)(_4));
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
                            return sequence(traversableArray({}))(__dict_Functor_0)(__dict_Applicative_1)(_ps.Data_Array.zipWith(f)(xs)(ys));
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