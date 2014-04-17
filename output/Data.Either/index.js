"use strict";
var Prelude = require("Prelude");
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
var showEither = function (__dict_Show_0) {
    return function (__dict_Show_1) {
        return {
            "__superclasses": {}, 
            show: function (_1) {
                if (_1.ctor === "Data.Either.Left") {
                    return "Left " + Prelude.show(__dict_Show_0)(_1.values[0]);
                };
                if (_1.ctor === "Data.Either.Right") {
                    return "Right " + Prelude.show(__dict_Show_1)(_1.values[0]);
                };
                throw "Failed pattern match";
            }
        };
    };
};
var functorEither = function (_) {
    return {
        "__superclasses": {}, 
        "<$>": function (_1) {
            return function (_2) {
                if (_2.ctor === "Data.Either.Left") {
                    return Left(_2.values[0]);
                };
                if (_2.ctor === "Data.Either.Right") {
                    return Right(_1(_2.values[0]));
                };
                throw "Failed pattern match";
            };
        }
    };
};
var eqEither = function (__dict_Eq_2) {
    return function (__dict_Eq_3) {
        return {
            "__superclasses": {}, 
            "==": function (_1) {
                return function (_2) {
                    if (_1.ctor === "Data.Either.Left") {
                        if (_2.ctor === "Data.Either.Left") {
                            return Prelude["=="](__dict_Eq_2)(_1.values[0])(_2.values[0]);
                        };
                    };
                    if (_1.ctor === "Data.Either.Right") {
                        if (_2.ctor === "Data.Either.Right") {
                            return Prelude["=="](__dict_Eq_3)(_1.values[0])(_2.values[0]);
                        };
                    };
                    return false;
                };
            }, 
            "/=": function (a) {
                return function (b) {
                    return !Prelude["=="](eqEither(__dict_Eq_2)(__dict_Eq_3))(a)(b);
                };
            }
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
var isLeft = either(Prelude["const"](true))(Prelude["const"](false));
var isRight = either(Prelude["const"](false))(Prelude["const"](true));
var applyEither = function (_) {
    return {
        "__superclasses": {
            "Prelude.Functor_0": function (_) {
                return functorEither({});
            }
        }, 
        "<*>": function (_1) {
            return function (_2) {
                if (_1.ctor === "Data.Either.Left") {
                    return Left(_1.values[0]);
                };
                if (_1.ctor === "Data.Either.Right") {
                    return Prelude["<$>"](functorEither({}))(_1.values[0])(_2);
                };
                throw "Failed pattern match";
            };
        }
    };
};
var bindEither = function (_) {
    return {
        "__superclasses": {
            "Prelude.Apply_0": function (_) {
                return applyEither({});
            }
        }, 
        ">>=": either(function (e) {
            return function (_) {
                return Left(e);
            };
        })(function (a) {
            return function (f) {
                return f(a);
            };
        })
    };
};
var applicativeEither = function (_) {
    return {
        "__superclasses": {
            "Prelude.Apply_0": function (_) {
                return applyEither({});
            }
        }, 
        pure: Right
    };
};
var monadEither = function (_) {
    return {
        "__superclasses": {
            "Prelude.Applicative_0": function (_) {
                return applicativeEither({});
            }, 
            "Prelude.Bind_1": function (_) {
                return bindEither({});
            }
        }
    };
};
module.exports = {
    Left: Left, 
    Right: Right, 
    isRight: isRight, 
    isLeft: isLeft, 
    either: either, 
    functorEither: functorEither, 
    applyEither: applyEither, 
    applicativeEither: applicativeEither, 
    bindEither: bindEither, 
    monadEither: monadEither, 
    showEither: showEither, 
    eqEither: eqEither
};