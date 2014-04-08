(function (_ps) {
    "use strict";
    _ps.Control_Applicative = (function () {
        var module = {};
        var $less$times = function (__dict_Functor_0) {
            return function (__dict_Applicative_1) {
                return function (x) {
                    return function (y) {
                        return _ps.Prelude["<*>"](__dict_Applicative_1["__superclasses"]["Prelude.Apply_0"]({}))(_ps.Prelude["<$>"](__dict_Functor_0)(_ps.Prelude["const"])(x))(y);
                    };
                };
            };
        };
        var $times$greater = function (__dict_Functor_2) {
            return function (__dict_Applicative_3) {
                return function (x) {
                    return function (y) {
                        return _ps.Prelude["<*>"](__dict_Applicative_3["__superclasses"]["Prelude.Apply_0"]({}))(_ps.Prelude["<$>"](__dict_Functor_2)(_ps.Prelude["const"](_ps.Prelude.id(_ps.Prelude.categoryArr({}))))(x))(y);
                    };
                };
            };
        };
        var lift3 = function (__dict_Functor_4) {
            return function (__dict_Applicative_5) {
                return function (f) {
                    return function (x) {
                        return function (y) {
                            return function (z) {
                                return _ps.Prelude["<*>"](__dict_Applicative_5["__superclasses"]["Prelude.Apply_0"]({}))(_ps.Prelude["<*>"](__dict_Applicative_5["__superclasses"]["Prelude.Apply_0"]({}))(_ps.Prelude["<$>"](__dict_Functor_4)(f)(x))(y))(z);
                            };
                        };
                    };
                };
            };
        };
        var lift2 = function (__dict_Functor_6) {
            return function (__dict_Applicative_7) {
                return function (f) {
                    return function (x) {
                        return function (y) {
                            return _ps.Prelude["<*>"](__dict_Applicative_7["__superclasses"]["Prelude.Apply_0"]({}))(_ps.Prelude["<$>"](__dict_Functor_6)(f)(x))(y);
                        };
                    };
                };
            };
        };
        module.lift3 = lift3;
        module.lift2 = lift2;
        module["*>"] = $times$greater;
        module["<*"] = $less$times;
        return module;
    })();
})((typeof module !== "undefined" && module.exports) ? module.exports : (typeof window !== "undefined") ? window.PS = window.PS || {} : (function () {
    throw "PureScript doesn't know how to export modules in the current environment";
})());