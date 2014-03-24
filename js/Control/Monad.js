(function (_ps) {
    "use strict";
    _ps.Control_Monad = (function () {
        var module = {};
        var when = function (__dict_Monad_0) {
            return function (_1) {
                return function (_2) {
                    if (_1) {
                        return _2;
                    };
                    if (!_1) {
                        return _ps.Prelude["return"](__dict_Monad_0)({});
                    };
                    throw "Failed pattern match";
                };
            };
        };
        var replicateM = function (__dict_Monad_1) {
            return function (_1) {
                return function (_2) {
                    if (_1 === 0) {
                        return _ps.Prelude["return"](__dict_Monad_1)([  ]);
                    };
                    return _ps.Prelude[">>="](__dict_Monad_1)(_2)(function (a) {
                        return _ps.Prelude[">>="](__dict_Monad_1)(replicateM(__dict_Monad_1)(_1 - 1)(_2))(function (as) {
                            return _ps.Prelude["return"](__dict_Monad_1)(_ps.Data_Array[":"](a)(as));
                        });
                    });
                    throw "Failed pattern match";
                };
            };
        };
        var join = function (__dict_Monad_2) {
            return function (mm) {
                return _ps.Prelude[">>="](__dict_Monad_2)(mm)(function (m) {
                    return m;
                });
            };
        };
        var foldM = function (__dict_Monad_3) {
            return function (_1) {
                return function (_2) {
                    return function (_3) {
                        if (_3.length === 0) {
                            return _ps.Prelude["return"](__dict_Monad_3)(_2);
                        };
                        if (_3.length > 0) {
                            var _8 = _3.slice(1);
                            return _ps.Prelude[">>="](__dict_Monad_3)(_1(_2)(_3[0]))(function (a$prime) {
                                return foldM(__dict_Monad_3)(_1)(a$prime)(_8);
                            });
                        };
                        throw "Failed pattern match";
                    };
                };
            };
        };
        var $greater$eq$greater = function (__dict_Monad_4) {
            return function (f) {
                return function (g) {
                    return function (a) {
                        return _ps.Prelude[">>="](__dict_Monad_4)(f(a))(function (b) {
                            return g(b);
                        });
                    };
                };
            };
        };
        var $less$eq$less = function (__dict_Monad_5) {
            return _ps.Prelude.flip($greater$eq$greater(__dict_Monad_5));
        };
        module.when = when;
        module.foldM = foldM;
        module.join = join;
        module["<=<"] = $less$eq$less;
        module[">=>"] = $greater$eq$greater;
        module.replicateM = replicateM;
        return module;
    })();
})((typeof module !== "undefined" && module.exports) ? module.exports : (typeof window !== "undefined") ? window.PS = window.PS || {} : (function () {
    throw "PureScript doesn't know how to export modules in the current environment";
})());