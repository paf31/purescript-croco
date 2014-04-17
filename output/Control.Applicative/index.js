"use strict";
var Prelude = require("Prelude");
var $less$times = function (__dict_Functor_0) {
    return function (__dict_Applicative_1) {
        return function (x) {
            return function (y) {
                return Prelude["<*>"](__dict_Applicative_1["__superclasses"]["Prelude.Apply_0"]({}))(Prelude["<$>"](__dict_Functor_0)(Prelude["const"])(x))(y);
            };
        };
    };
};
var $times$greater = function (__dict_Functor_2) {
    return function (__dict_Applicative_3) {
        return function (x) {
            return function (y) {
                return Prelude["<*>"](__dict_Applicative_3["__superclasses"]["Prelude.Apply_0"]({}))(Prelude["<$>"](__dict_Functor_2)(Prelude["const"](Prelude.id(Prelude.categoryArr({}))))(x))(y);
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
                        return Prelude["<*>"](__dict_Applicative_5["__superclasses"]["Prelude.Apply_0"]({}))(Prelude["<*>"](__dict_Applicative_5["__superclasses"]["Prelude.Apply_0"]({}))(Prelude["<$>"](__dict_Functor_4)(f)(x))(y))(z);
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
                    return Prelude["<*>"](__dict_Applicative_7["__superclasses"]["Prelude.Apply_0"]({}))(Prelude["<$>"](__dict_Functor_6)(f)(x))(y);
                };
            };
        };
    };
};
module.exports = {
    lift3: lift3, 
    lift2: lift2, 
    "*>": $times$greater, 
    "<*": $less$times
};