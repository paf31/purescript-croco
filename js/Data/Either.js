(function (_ps) {
    "use strict";
    _ps.Data_Either = (function () {
        var module = {};
        var Left = function (value0) {
            return {
                ctor: "Data.Either.Left", 
                values: [ value0 ]
            };
        };
        var Right = function (value0) {
            return {
                ctor: "Data.Either.Right", 
                values: [ value0 ]
            };
        };
        var showEither_show = function (__dict_Show_0) {
            return function (__dict_Show_1) {
                return function (_1) {
                    if (_1.ctor === "Data.Either.Left") {
                        return "Left " + _ps.Prelude.show(__dict_Show_0)(_1.values[0]);
                    };
                    if (_1.ctor === "Data.Either.Right") {
                        return "Right " + _ps.Prelude.show(__dict_Show_1)(_1.values[0]);
                    };
                    throw "Failed pattern match";
                };
            };
        };
        var showEither = function (_1) {
            return function (_2) {
                return {
                    show: showEither_show(_1)(_2)
                };
            };
        };
        var monadEither_$$return = Right;
        var functorEither_$less$dollar$greater = function (_1) {
            return function (_2) {
                if (_2.ctor === "Data.Either.Left") {
                    return Left(_2.values[0]);
                };
                if (_2.ctor === "Data.Either.Right") {
                    return Right(_1(_2.values[0]));
                };
                throw "Failed pattern match";
            };
        };
        var functorEither = function (_1) {
            return {
                $less$dollar$greater: functorEither_$less$dollar$greater
            };
        };
        var eqEither_$eq$eq = function (__dict_Eq_2) {
            return function (__dict_Eq_3) {
                return function (_1) {
                    return function (_2) {
                        if (_1.ctor === "Data.Either.Left") {
                            if (_2.ctor === "Data.Either.Left") {
                                return _ps.Prelude["=="](__dict_Eq_2)(_1.values[0])(_2.values[0]);
                            };
                        };
                        if (_1.ctor === "Data.Either.Right") {
                            if (_2.ctor === "Data.Either.Right") {
                                return _ps.Prelude["=="](__dict_Eq_3)(_1.values[0])(_2.values[0]);
                            };
                        };
                        return false;
                        throw "Failed pattern match";
                    };
                };
            };
        };
        var eqEither = function (_1) {
            return function (_2) {
                return {
                    $eq$eq: eqEither_$eq$eq(_1)(_2), 
                    $div$eq: eqEither_$div$eq(_1)(_2)
                };
            };
        };
        var eqEither_$div$eq = function (__dict_Eq_4) {
            return function (__dict_Eq_5) {
                return function (a) {
                    return function (b) {
                        return !_ps.Prelude["=="](eqEither(__dict_Eq_4)(__dict_Eq_5))(a)(b);
                    };
                };
            };
        };
        var either = function (_1) {
            return function (_2) {
                return function (_3) {
                    if (_3.ctor === "Data.Either.Left") {
                        return _1(_3.values[0]);
                    };
                    if (_3.ctor === "Data.Either.Right") {
                        return _2(_3.values[0]);
                    };
                    throw "Failed pattern match";
                };
            };
        };
        var isLeft = either(_ps.Prelude["const"](true))(_ps.Prelude["const"](false));
        var isRight = either(_ps.Prelude["const"](false))(_ps.Prelude["const"](true));
        var monadEither_$greater$greater$eq = either(function (e) {
            return function (_) {
                return Left(e);
            };
        })(function (a) {
            return function (f) {
                return f(a);
            };
        });
        var monadEither = function (_1) {
            return {
                $$return: monadEither_$$return, 
                $greater$greater$eq: monadEither_$greater$greater$eq
            };
        };
        var applicativeEither_pure = Right;
        var applicativeEither_$less$times$greater = function (_1) {
            return function (_2) {
                if (_1.ctor === "Data.Either.Left") {
                    return Left(_1.values[0]);
                };
                if (_1.ctor === "Data.Either.Right") {
                    return _ps.Prelude["<$>"](functorEither({}))(_1.values[0])(_2);
                };
                throw "Failed pattern match";
            };
        };
        var applicativeEither = function (_1) {
            return {
                pure: applicativeEither_pure, 
                $less$times$greater: applicativeEither_$less$times$greater
            };
        };
        module.Left = Left;
        module.Right = Right;
        module.isRight = isRight;
        module.isLeft = isLeft;
        module.either = either;
        module.monadEither = monadEither;
        module.applicativeEither = applicativeEither;
        module.functorEither = functorEither;
        module.showEither = showEither;
        module.eqEither = eqEither;
        return module;
    })();
})((typeof module !== "undefined" && module.exports) ? module.exports : (typeof window !== "undefined") ? window.PS = window.PS || {} : (function () {
    throw "PureScript doesn't know how to export modules in the current environment";
})());