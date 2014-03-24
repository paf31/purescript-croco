(function (_ps) {
    "use strict";
    _ps.Data_Map = (function () {
        var module = {};
        var Leaf = {
            ctor: "Data.Map.Leaf", 
            values: [  ]
        };
        var Branch = function (value0) {
            return {
                ctor: "Data.Map.Branch", 
                values: [ value0 ]
            };
        };
        var toList = function (_1) {
            if (_1.ctor === "Data.Map.Leaf") {
                return [  ];
            };
            if (_1.ctor === "Data.Map.Branch") {
                return _ps.Data_Array.concat(_ps.Data_Array.concat(toList((_1.values[0]).left))([ _ps.Data_Tuple.Tuple((_1.values[0]).key)((_1.values[0]).value) ]))(toList((_1.values[0]).right));
            };
            throw "Failed pattern match";
        };
        var showMap_show = function (__dict_Show_0) {
            return function (__dict_Show_1) {
                return function (m) {
                    return "fromList " + _ps.Prelude.show(_ps.Data_Array.showArray(_ps.Data_Tuple.showTuple(__dict_Show_0)(__dict_Show_1)))(toList(m));
                };
            };
        };
        var showMap = function (_1) {
            return function (_2) {
                return {
                    show: showMap_show(_1)(_2)
                };
            };
        };
        var map = function (__dict_Eq_2) {
            return function (__dict_Ord_3) {
                return function (_1) {
                    return function (_2) {
                        return (function (_3, _4) {
                            if (_4.ctor === "Data.Map.Leaf") {
                                return Leaf;
                            };
                            if (_4.ctor === "Data.Map.Branch") {
                                return Branch((function () {
                                    var _1 = {};
                                    for (var _2 in _4.values[0]) {
                                        if ((_4.values[0]).hasOwnProperty(_2)) {
                                            _1[_2] = _4.values[0][_2];
                                        };
                                    };
                                    _1.value = _3((_4.values[0]).value);
                                    _1.left = map(__dict_Eq_2)(__dict_Ord_3)(_3)((_4.values[0]).left);
                                    _1.right = map(__dict_Eq_2)(__dict_Ord_3)(_3)((_4.values[0]).right);
                                    return _1;
                                })());
                            };
                            throw "Failed pattern match";
                        })(_1, _2);
                    };
                };
            };
        };
        var lookup = function (__copy___dict_Eq_4) {
            return function (__copy___dict_Ord_5) {
                return function (__copy__1) {
                    return function (__copy__2) {
                        var __dict_Eq_4 = __copy___dict_Eq_4;
                        var __dict_Ord_5 = __copy___dict_Ord_5;
                        var _1 = __copy__1;
                        var _2 = __copy__2;
                        tco: while (true) {
                            var k = _1;
                            if (_2.ctor === "Data.Map.Leaf") {
                                return _ps.Data_Maybe.Nothing;
                            };
                            var k = _1;
                            if (_2.ctor === "Data.Map.Branch") {
                                if (_ps.Prelude["=="](__dict_Eq_4)(k)((_2.values[0]).key)) {
                                    return _ps.Data_Maybe.Just((_2.values[0]).value);
                                };
                            };
                            var k = _1;
                            if (_2.ctor === "Data.Map.Branch") {
                                if (_ps.Prelude["<"](__dict_Ord_5)(k)((_2.values[0]).key)) {
                                    var __tco___dict_Eq_4 = __dict_Eq_4;
                                    var __tco___dict_Ord_5 = __dict_Ord_5;
                                    var __tco__2 = (_2.values[0]).left;
                                    __dict_Eq_4 = __tco___dict_Eq_4;
                                    __dict_Ord_5 = __tco___dict_Ord_5;
                                    _1 = k;
                                    _2 = __tco__2;
                                    continue tco;
                                };
                            };
                            if (_2.ctor === "Data.Map.Branch") {
                                var __tco___dict_Eq_4 = __dict_Eq_4;
                                var __tco___dict_Ord_5 = __dict_Ord_5;
                                var __tco__1 = _1;
                                var __tco__2 = (_2.values[0]).right;
                                __dict_Eq_4 = __tco___dict_Eq_4;
                                __dict_Ord_5 = __tco___dict_Ord_5;
                                _1 = __tco__1;
                                _2 = __tco__2;
                                continue tco;
                            };
                            throw "Failed pattern match";
                        };
                    };
                };
            };
        };
        var findMinKey = function (__copy___dict_Ord_6) {
            return function (__copy__1) {
                var __dict_Ord_6 = __copy___dict_Ord_6;
                var _1 = __copy__1;
                tco: while (true) {
                    if (_1.ctor === "Data.Map.Branch") {
                        if ((_1.values[0]).left.ctor === "Data.Map.Leaf") {
                            return _ps.Data_Tuple.Tuple((_1.values[0]).key)((_1.values[0]).value);
                        };
                    };
                    if (_1.ctor === "Data.Map.Branch") {
                        var __tco___dict_Ord_6 = __dict_Ord_6;
                        var __tco__1 = (_1.values[0]).left;
                        __dict_Ord_6 = __tco___dict_Ord_6;
                        _1 = __tco__1;
                        continue tco;
                    };
                    throw "Failed pattern match";
                };
            };
        };
        var eqMap_$eq$eq = function (__dict_Eq_7) {
            return function (__dict_Eq_8) {
                return function (m1) {
                    return function (m2) {
                        return _ps.Prelude["=="](_ps.Prelude.eqArray(_ps.Data_Tuple.eqTuple(__dict_Eq_7)(__dict_Eq_8)))(toList(m1))(toList(m2));
                    };
                };
            };
        };
        var eqMap = function (_1) {
            return function (_2) {
                return {
                    $eq$eq: eqMap_$eq$eq(_1)(_2), 
                    $div$eq: eqMap_$div$eq(_1)(_2)
                };
            };
        };
        var eqMap_$div$eq = function (__dict_Eq_9) {
            return function (__dict_Eq_10) {
                return function (m1) {
                    return function (m2) {
                        return !_ps.Prelude["=="](eqMap(__dict_Eq_9)(__dict_Eq_10))(m1)(m2);
                    };
                };
            };
        };
        var empty = Leaf;
        var singleton = function (k) {
            return function (v) {
                return Branch({
                    key: k, 
                    value: v, 
                    left: empty, 
                    right: empty
                });
            };
        };
        var insert = function (__dict_Eq_11) {
            return function (__dict_Ord_12) {
                return function (_1) {
                    return function (_2) {
                        return function (_3) {
                            return (function (_4, _5, _6) {
                                if (_6.ctor === "Data.Map.Leaf") {
                                    return singleton(_4)(_5);
                                };
                                if (_6.ctor === "Data.Map.Branch") {
                                    if (_ps.Prelude["=="](__dict_Eq_11)(_4)((_6.values[0]).key)) {
                                        return Branch((function () {
                                            var _1 = {};
                                            for (var _2 in _6.values[0]) {
                                                if ((_6.values[0]).hasOwnProperty(_2)) {
                                                    _1[_2] = _6.values[0][_2];
                                                };
                                            };
                                            _1.key = _4;
                                            _1.value = _5;
                                            return _1;
                                        })());
                                    };
                                };
                                if (_6.ctor === "Data.Map.Branch") {
                                    if (_ps.Prelude["<"](__dict_Ord_12)(_4)((_6.values[0]).key)) {
                                        return Branch((function () {
                                            var _1 = {};
                                            for (var _2 in _6.values[0]) {
                                                if ((_6.values[0]).hasOwnProperty(_2)) {
                                                    _1[_2] = _6.values[0][_2];
                                                };
                                            };
                                            _1.left = insert(__dict_Eq_11)(__dict_Ord_12)(_4)(_5)((_6.values[0]).left);
                                            return _1;
                                        })());
                                    };
                                };
                                if (_6.ctor === "Data.Map.Branch") {
                                    return Branch((function () {
                                        var _1 = {};
                                        for (var _2 in _6.values[0]) {
                                            if ((_6.values[0]).hasOwnProperty(_2)) {
                                                _1[_2] = _6.values[0][_2];
                                            };
                                        };
                                        _1.right = insert(__dict_Eq_11)(__dict_Ord_12)(_4)(_5)((_6.values[0]).right);
                                        return _1;
                                    })());
                                };
                                throw "Failed pattern match";
                            })(_1, _2, _3);
                        };
                    };
                };
            };
        };
        var fromList = function (__dict_Eq_13) {
            return function (__dict_Ord_14) {
                return _ps.Data_Foldable.foldl(_ps.Data_Foldable.foldableArray({}))(function (m) {
                    return function (_1) {
                        return insert(__dict_Eq_13)(__dict_Ord_14)(_1.values[0])(_1.values[1])(m);
                        throw "Failed pattern match";
                    };
                })(empty);
            };
        };
        var union = function (__dict_Eq_15) {
            return function (__dict_Ord_16) {
                return function (m1) {
                    return function (m2) {
                        return _ps.Data_Foldable.foldl(_ps.Data_Foldable.foldableArray({}))(function (m) {
                            return function (_1) {
                                return insert(__dict_Eq_15)(__dict_Ord_16)(_1.values[0])(_1.values[1])(m);
                                throw "Failed pattern match";
                            };
                        })(m2)(toList(m1));
                    };
                };
            };
        };
        var $$delete = function (__dict_Eq_17) {
            return function (__dict_Ord_18) {
                return function (_1) {
                    return function (_2) {
                        return (function (_3, _4) {
                            if (_4.ctor === "Data.Map.Leaf") {
                                return Leaf;
                            };
                            if (_4.ctor === "Data.Map.Branch") {
                                if ((_4.values[0]).left.ctor === "Data.Map.Leaf") {
                                    if (_ps.Prelude["=="](__dict_Eq_17)(_3)((_4.values[0]).key)) {
                                        if ((_4.values[0]).left.ctor === "Data.Map.Leaf") {
                                            return (_4.values[0]).right;
                                        };
                                        if ((_4.values[0]).right.ctor === "Data.Map.Leaf") {
                                            return (_4.values[0]).left;
                                        };
                                        return glue(__dict_Eq_17)(__dict_Ord_18)((_4.values[0]).left)((_4.values[0]).right);
                                        throw "Failed pattern match";
                                    };
                                };
                            };
                            if (_4.ctor === "Data.Map.Branch") {
                                if (_ps.Prelude["<"](__dict_Ord_18)(_3)((_4.values[0]).key)) {
                                    return Branch((function () {
                                        var _1 = {};
                                        for (var _2 in _4.values[0]) {
                                            if ((_4.values[0]).hasOwnProperty(_2)) {
                                                _1[_2] = _4.values[0][_2];
                                            };
                                        };
                                        _1.left = $$delete(__dict_Eq_17)(__dict_Ord_18)(_3)((_4.values[0]).left);
                                        return _1;
                                    })());
                                };
                            };
                            if (_4.ctor === "Data.Map.Branch") {
                                return Branch((function () {
                                    var _1 = {};
                                    for (var _2 in _4.values[0]) {
                                        if ((_4.values[0]).hasOwnProperty(_2)) {
                                            _1[_2] = _4.values[0][_2];
                                        };
                                    };
                                    _1.right = $$delete(__dict_Eq_17)(__dict_Ord_18)(_3)((_4.values[0]).right);
                                    return _1;
                                })());
                            };
                            throw "Failed pattern match";
                        })(_1, _2);
                    };
                };
            };
        };
        var glue = function (__dict_Eq_19) {
            return function (__dict_Ord_20) {
                return function (left) {
                    return function (right) {
                        return (function (_1) {
                            return Branch({
                                key: _1.values[0], 
                                value: _1.values[1], 
                                left: left, 
                                right: $$delete(__dict_Eq_19)(__dict_Ord_20)(_1.values[0])(right)
                            });
                            throw "Failed pattern match";
                        })(findMinKey(__dict_Ord_20)(right));
                    };
                };
            };
        };
        var alter = function (__dict_Eq_21) {
            return function (__dict_Ord_22) {
                return function (_1) {
                    return function (_2) {
                        return function (_3) {
                            return (function (_4, _5, _6) {
                                if (_6.ctor === "Data.Map.Leaf") {
                                    return (function (_1) {
                                        if (_1.ctor === "Data.Maybe.Nothing") {
                                            return Leaf;
                                        };
                                        if (_1.ctor === "Data.Maybe.Just") {
                                            return singleton(_5)(_1.values[0]);
                                        };
                                        throw "Failed pattern match";
                                    })(_4(_ps.Data_Maybe.Nothing));
                                };
                                if (_6.ctor === "Data.Map.Branch") {
                                    if (_ps.Prelude["=="](__dict_Eq_21)(_5)((_6.values[0]).key)) {
                                        return (function (_1) {
                                            if (_1.ctor === "Data.Maybe.Nothing") {
                                                return glue(__dict_Eq_21)(__dict_Ord_22)((_6.values[0]).left)((_6.values[0]).right);
                                            };
                                            if (_1.ctor === "Data.Maybe.Just") {
                                                var _2 = _1.values[0];
                                                var v$prime = _2;
                                                return Branch((function () {
                                                    var _1 = {};
                                                    for (var _2 in _6.values[0]) {
                                                        if ((_6.values[0]).hasOwnProperty(_2)) {
                                                            _1[_2] = _6.values[0][_2];
                                                        };
                                                    };
                                                    _1.value = v$prime;
                                                    return _1;
                                                })());
                                            };
                                            throw "Failed pattern match";
                                        })(_4(_ps.Data_Maybe.Just((_6.values[0]).value)));
                                    };
                                };
                                if (_6.ctor === "Data.Map.Branch") {
                                    if (_ps.Prelude["<"](__dict_Ord_22)(_5)((_6.values[0]).key)) {
                                        return Branch((function () {
                                            var _1 = {};
                                            for (var _2 in _6.values[0]) {
                                                if ((_6.values[0]).hasOwnProperty(_2)) {
                                                    _1[_2] = _6.values[0][_2];
                                                };
                                            };
                                            _1.left = alter(__dict_Eq_21)(__dict_Ord_22)(_4)(_5)((_6.values[0]).left);
                                            return _1;
                                        })());
                                    };
                                };
                                if (_6.ctor === "Data.Map.Branch") {
                                    return Branch((function () {
                                        var _1 = {};
                                        for (var _2 in _6.values[0]) {
                                            if ((_6.values[0]).hasOwnProperty(_2)) {
                                                _1[_2] = _6.values[0][_2];
                                            };
                                        };
                                        _1.right = alter(__dict_Eq_21)(__dict_Ord_22)(_4)(_5)((_6.values[0]).right);
                                        return _1;
                                    })());
                                };
                                throw "Failed pattern match";
                            })(_1, _2, _3);
                        };
                    };
                };
            };
        };
        module.map = map;
        module.union = union;
        module.fromList = fromList;
        module.toList = toList;
        module.alter = alter;
        module["delete"] = $$delete;
        module.lookup = lookup;
        module.insert = insert;
        module.singleton = singleton;
        module.empty = empty;
        module.eqMap = eqMap;
        module.showMap = showMap;
        return module;
    })();
})((typeof module !== "undefined" && module.exports) ? module.exports : (typeof window !== "undefined") ? window.PS = window.PS || {} : (function () {
    throw "PureScript doesn't know how to export modules in the current environment";
})());