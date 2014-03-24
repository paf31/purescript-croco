(function (_ps) {
    "use strict";
    _ps.Data_Tuple = (function () {
        var module = {};
        var Tuple = function (value0) {
            return function (value1) {
                return {
                    ctor: "Data.Tuple.Tuple", 
                    values: [ value0, value1 ]
                };
            };
        };
        var zip = _ps.Data_Array.zipWith(Tuple);
        var unzip = function (_1) {
            return (function (_2) {
                if (_2.length > 0) {
                    var _4 = _2.slice(1);
                    return (function (_1) {
                        return Tuple(_ps.Data_Array[":"]((_2[0]).values[0])(_1.values[0]))(_ps.Data_Array[":"]((_2[0]).values[1])(_1.values[1]));
                        throw "Failed pattern match";
                    })(unzip(_4));
                };
                if (_2.length === 0) {
                    return Tuple([  ])([  ]);
                };
                throw "Failed pattern match";
            })(_1);
        };
        var uncurry = function (_1) {
            return function (_2) {
                return _1(_2.values[0])(_2.values[1]);
                throw "Failed pattern match";
            };
        };
        var swap = function (_1) {
            return Tuple(_1.values[1])(_1.values[0]);
            throw "Failed pattern match";
        };
        var snd = function (_1) {
            return _1.values[1];
            throw "Failed pattern match";
        };
        var showTuple_show = function (__dict_Show_0) {
            return function (__dict_Show_1) {
                return function (_1) {
                    return "Tuple(" + _ps.Prelude.show(__dict_Show_0)(_1.values[0]) + ", " + _ps.Prelude.show(__dict_Show_1)(_1.values[1]) + ")";
                    throw "Failed pattern match";
                };
            };
        };
        var showTuple = function (_1) {
            return function (_2) {
                return {
                    show: showTuple_show(_1)(_2)
                };
            };
        };
        var ordTuple_compare = function (__dict_Ord_2) {
            return function (__dict_Ord_3) {
                return function (_1) {
                    return function (_2) {
                        return (function (_3, _4) {
                            return (function (_1) {
                                if (_1.ctor === "Prelude.EQ") {
                                    return _ps.Prelude.compare(__dict_Ord_3)(_3.values[1])(_4.values[1]);
                                };
                                return _1;
                                throw "Failed pattern match";
                            })(_ps.Prelude.compare(__dict_Ord_2)(_3.values[0])(_4.values[0]));
                            throw "Failed pattern match";
                        })(_1, _2);
                    };
                };
            };
        };
        var ordTuple = function (_1) {
            return function (_2) {
                return {
                    compare: ordTuple_compare(_1)(_2)
                };
            };
        };
        var functorTuple_$less$dollar$greater = function (_1) {
            return function (_2) {
                return Tuple(_2.values[0])(_1(_2.values[1]));
                throw "Failed pattern match";
            };
        };
        var functorTuple = function (_1) {
            return {
                $less$dollar$greater: functorTuple_$less$dollar$greater
            };
        };
        var fst = function (_1) {
            return _1.values[0];
            throw "Failed pattern match";
        };
        var eqTuple_$eq$eq = function (__dict_Eq_4) {
            return function (__dict_Eq_5) {
                return function (_1) {
                    return function (_2) {
                        return _ps.Prelude["=="](__dict_Eq_4)(_1.values[0])(_2.values[0]) && _ps.Prelude["=="](__dict_Eq_5)(_1.values[1])(_2.values[1]);
                        throw "Failed pattern match";
                    };
                };
            };
        };
        var eqTuple = function (_1) {
            return function (_2) {
                return {
                    $eq$eq: eqTuple_$eq$eq(_1)(_2), 
                    $div$eq: eqTuple_$div$eq(_1)(_2)
                };
            };
        };
        var eqTuple_$div$eq = function (__dict_Eq_6) {
            return function (__dict_Eq_7) {
                return function (t1) {
                    return function (t2) {
                        return !_ps.Prelude["=="](eqTuple(__dict_Eq_6)(__dict_Eq_7))(t1)(t2);
                    };
                };
            };
        };
        var curry = function (f) {
            return function (a) {
                return function (b) {
                    return f(Tuple(a)(b));
                };
            };
        };
        module.Tuple = Tuple;
        module.swap = swap;
        module.unzip = unzip;
        module.zip = zip;
        module.uncurry = uncurry;
        module.curry = curry;
        module.snd = snd;
        module.fst = fst;
        module.showTuple = showTuple;
        module.eqTuple = eqTuple;
        module.ordTuple = ordTuple;
        module.functorTuple = functorTuple;
        return module;
    })();
})((typeof module !== "undefined" && module.exports) ? module.exports : (typeof window !== "undefined") ? window.PS = window.PS || {} : (function () {
    throw "PureScript doesn't know how to export modules in the current environment";
})());