(function (_ps) {
    "use strict";
    _ps.Control_Monad = (function () {
        var module = {};
        var $greater$eq$greater = function (__dict_Monad_0) {
            return function (f) {
                return function (g) {
                    return function (a) {
                        return _ps.Prelude[">>="](__dict_Monad_0["__superclasses"]["Prelude.Bind_1"]({}))(f(a))(function (_1) {
                            return g(_1);
                        });
                    };
                };
            };
        };
        var $less$eq$less = function (__dict_Monad_1) {
            return _ps.Prelude.flip($greater$eq$greater(__dict_Monad_1));
        };
        var when = function (__dict_Monad_2) {
            return function (_1) {
                return function (_2) {
                    if (_1) {
                        return _2;
                    };
                    if (!_1) {
                        return _ps.Prelude["return"](__dict_Monad_2)({});
                    };
                    throw "Failed pattern match";
                };
            };
        };
        var replicateM = function (__dict_Monad_3) {
            return function (_3) {
                return function (_4) {
                    if (_3 === 0) {
                        return _ps.Prelude["return"](__dict_Monad_3)([  ]);
                    };
                    return _ps.Prelude[">>="](__dict_Monad_3["__superclasses"]["Prelude.Bind_1"]({}))(_4)(function (_2) {
                        return _ps.Prelude[">>="](__dict_Monad_3["__superclasses"]["Prelude.Bind_1"]({}))(replicateM(__dict_Monad_3)(_3 - 1)(_4))(function (_1) {
                            return _ps.Prelude["return"](__dict_Monad_3)(_ps.Data_Array[":"](_2)(_1));
                        });
                    });
                };
            };
        };
        var join = function (__dict_Monad_4) {
            return function (mm) {
                return _ps.Prelude[">>="](__dict_Monad_4["__superclasses"]["Prelude.Bind_1"]({}))(mm)(function (_1) {
                    return _1;
                });
            };
        };
        var foldM = function (__dict_Monad_5) {
            return function (_1) {
                return function (_2) {
                    return function (_3) {
                        if (_3.length === 0) {
                            return _ps.Prelude["return"](__dict_Monad_5)(_2);
                        };
                        if (_3.length > 0) {
                            var _8 = _3.slice(1);
                            return _ps.Prelude[">>="](__dict_Monad_5["__superclasses"]["Prelude.Bind_1"]({}))(_1(_2)(_3[0]))(function (a$prime) {
                                return foldM(__dict_Monad_5)(_1)(a$prime)(_8);
                            });
                        };
                        throw "Failed pattern match";
                    };
                };
            };
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