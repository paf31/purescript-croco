"use strict";
var Prelude = require("Prelude");
var $greater$eq$greater = function (__dict_Monad_0) {
    return function (f) {
        return function (g) {
            return function (a) {
                return Prelude[">>="](__dict_Monad_0["__superclasses"]["Prelude.Bind_1"]({}))(f(a))(function (_1) {
                    return g(_1);
                });
            };
        };
    };
};
var $less$eq$less = function (__dict_Monad_1) {
    return Prelude.flip($greater$eq$greater(__dict_Monad_1));
};
var when = function (__dict_Monad_2) {
    return function (_1) {
        return function (_2) {
            if (_1) {
                return _2;
            };
            if (!_1) {
                return Prelude["return"](__dict_Monad_2)({});
            };
            throw "Failed pattern match";
        };
    };
};
var replicateM = function (__dict_Monad_3) {
    return function (_2) {
        return function (_3) {
            return (function (_4, _5) {
                if (_4 === 0) {
                    return Prelude["return"](__dict_Monad_3)([  ]);
                };
                return Prelude[">>="](__dict_Monad_3["__superclasses"]["Prelude.Bind_1"]({}))(_5)(function (_1) {
                    return (function (_2) {
                        return Prelude[">>="](__dict_Monad_3["__superclasses"]["Prelude.Bind_1"]({}))(replicateM(__dict_Monad_3)(_4 - 1)(_5))(function (_1) {
                            return Prelude["return"](__dict_Monad_3)(Prelude[":"](_2)(_1));
                        });
                    })(_1);
                });
            })(_2, _3);
        };
    };
};
var join = function (__dict_Monad_4) {
    return function (mm) {
        return Prelude[">>="](__dict_Monad_4["__superclasses"]["Prelude.Bind_1"]({}))(mm)(function (_1) {
            return _1;
        });
    };
};
var foldM = function (__dict_Monad_5) {
    return function (_1) {
        return function (_2) {
            return function (_3) {
                if (_3.length === 0) {
                    return Prelude["return"](__dict_Monad_5)(_2);
                };
                if (_3.length > 0) {
                    var _8 = _3.slice(1);
                    return Prelude[">>="](__dict_Monad_5["__superclasses"]["Prelude.Bind_1"]({}))(_1(_2)(_3[0]))(function (a$prime) {
                        return foldM(__dict_Monad_5)(_1)(a$prime)(_8);
                    });
                };
                throw "Failed pattern match";
            };
        };
    };
};
module.exports = {
    when: when, 
    foldM: foldM, 
    join: join, 
    "<=<": $less$eq$less, 
    ">=>": $greater$eq$greater, 
    replicateM: replicateM
};