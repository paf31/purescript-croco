(function (_ps) {
    "use strict";
    _ps.Data_Set = (function () {
        var module = {};
        var Leaf = {
            ctor: "Data.Set.Leaf", 
            values: [  ]
        };
        var Branch = function (value0) {
            return {
                ctor: "Data.Set.Branch", 
                values: [ value0 ]
            };
        };
        var toList = function (_1) {
            if (_1.ctor === "Data.Set.Leaf") {
                return [  ];
            };
            if (_1.ctor === "Data.Set.Branch") {
                return _ps.Data_Array.concat(_ps.Data_Array.concat(toList((_1.values[0]).left))([ (_1.values[0]).value ]))(toList((_1.values[0]).right));
            };
            throw "Failed pattern match";
        };
        var showSet_show = function (__dict_Show_0) {
            return function (s) {
                return "fromList " + _ps.Prelude.show(_ps.Data_Array.showArray(__dict_Show_0))(toList(s));
            };
        };
        var showSet = function (_1) {
            return {
                show: showSet_show(_1)
            };
        };
        var member = function (__copy___dict_Eq_1) {
            return function (__copy___dict_Ord_2) {
                return function (__copy__1) {
                    return function (__copy__2) {
                        var __dict_Eq_1 = __copy___dict_Eq_1;
                        var __dict_Ord_2 = __copy___dict_Ord_2;
                        var _1 = __copy__1;
                        var _2 = __copy__2;
                        tco: while (true) {
                            if (_2.ctor === "Data.Set.Leaf") {
                                return false;
                            };
                            var a = _1;
                            if (_2.ctor === "Data.Set.Branch") {
                                if (_ps.Prelude["=="](__dict_Eq_1)(a)((_2.values[0]).value)) {
                                    return true;
                                };
                            };
                            var a = _1;
                            if (_2.ctor === "Data.Set.Branch") {
                                if (_ps.Prelude["<"](__dict_Ord_2)(a)((_2.values[0]).value)) {
                                    var __tco___dict_Eq_1 = __dict_Eq_1;
                                    var __tco___dict_Ord_2 = __dict_Ord_2;
                                    var __tco__2 = (_2.values[0]).left;
                                    __dict_Eq_1 = __tco___dict_Eq_1;
                                    __dict_Ord_2 = __tco___dict_Ord_2;
                                    _1 = a;
                                    _2 = __tco__2;
                                    continue tco;
                                };
                            };
                            if (_2.ctor === "Data.Set.Branch") {
                                var __tco___dict_Eq_1 = __dict_Eq_1;
                                var __tco___dict_Ord_2 = __dict_Ord_2;
                                var __tco__1 = _1;
                                var __tco__2 = (_2.values[0]).right;
                                __dict_Eq_1 = __tco___dict_Eq_1;
                                __dict_Ord_2 = __tco___dict_Ord_2;
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
        var findMinValue = function (__copy___dict_Ord_3) {
            return function (__copy__1) {
                var __dict_Ord_3 = __copy___dict_Ord_3;
                var _1 = __copy__1;
                tco: while (true) {
                    if (_1.ctor === "Data.Set.Branch") {
                        if ((_1.values[0]).left.ctor === "Data.Set.Leaf") {
                            return (_1.values[0]).value;
                        };
                    };
                    if (_1.ctor === "Data.Set.Branch") {
                        var __tco___dict_Ord_3 = __dict_Ord_3;
                        var __tco__1 = (_1.values[0]).left;
                        __dict_Ord_3 = __tco___dict_Ord_3;
                        _1 = __tco__1;
                        continue tco;
                    };
                    throw "Failed pattern match";
                };
            };
        };
        var eqSet_$eq$eq = function (__dict_Eq_4) {
            return function (s1) {
                return function (s2) {
                    return _ps.Prelude["=="](_ps.Prelude.eqArray(__dict_Eq_4))(toList(s1))(toList(s2));
                };
            };
        };
        var eqSet = function (_1) {
            return {
                $eq$eq: eqSet_$eq$eq(_1), 
                $div$eq: eqSet_$div$eq(_1)
            };
        };
        var eqSet_$div$eq = function (__dict_Eq_5) {
            return function (s1) {
                return function (s2) {
                    return !_ps.Prelude["=="](eqSet(__dict_Eq_5))(s1)(s2);
                };
            };
        };
        var empty = Leaf;
        var singleton = function (a) {
            return Branch({
                value: a, 
                left: empty, 
                right: empty
            });
        };
        var insert = function (__dict_Eq_6) {
            return function (__dict_Ord_7) {
                return function (_1) {
                    return function (_2) {
                        return (function (_3, _4) {
                            if (_4.ctor === "Data.Set.Leaf") {
                                return singleton(_3);
                            };
                            if (_4.ctor === "Data.Set.Branch") {
                                if (_ps.Prelude["=="](__dict_Eq_6)(_3)((_4.values[0]).value)) {
                                    return Branch(_4.values[0]);
                                };
                            };
                            if (_4.ctor === "Data.Set.Branch") {
                                if (_ps.Prelude["<"](__dict_Ord_7)(_3)((_4.values[0]).value)) {
                                    return Branch((function () {
                                        var _1 = {};
                                        for (var _2 in _4.values[0]) {
                                            if ((_4.values[0]).hasOwnProperty(_2)) {
                                                _1[_2] = _4.values[0][_2];
                                            };
                                        };
                                        _1.left = insert(__dict_Eq_6)(__dict_Ord_7)(_3)((_4.values[0]).left);
                                        return _1;
                                    })());
                                };
                            };
                            if (_4.ctor === "Data.Set.Branch") {
                                return Branch((function () {
                                    var _1 = {};
                                    for (var _2 in _4.values[0]) {
                                        if ((_4.values[0]).hasOwnProperty(_2)) {
                                            _1[_2] = _4.values[0][_2];
                                        };
                                    };
                                    _1.right = insert(__dict_Eq_6)(__dict_Ord_7)(_3)((_4.values[0]).right);
                                    return _1;
                                })());
                            };
                            throw "Failed pattern match";
                        })(_1, _2);
                    };
                };
            };
        };
        var fromList = function (__dict_Eq_8) {
            return function (__dict_Ord_9) {
                return _ps.Data_Foldable.foldl(_ps.Data_Foldable.foldableArray({}))(function (s) {
                    return function (a) {
                        return insert(__dict_Eq_8)(__dict_Ord_9)(a)(s);
                    };
                })(empty);
            };
        };
        var union = function (__dict_Eq_10) {
            return function (__dict_Ord_11) {
                return function (s1) {
                    return function (s2) {
                        return _ps.Data_Foldable.foldl(_ps.Data_Foldable.foldableArray({}))(function (s) {
                            return function (a) {
                                return insert(__dict_Eq_10)(__dict_Ord_11)(a)(s);
                            };
                        })(s2)(toList(s1));
                    };
                };
            };
        };
        var $$delete = function (__dict_Eq_12) {
            return function (__dict_Ord_13) {
                return function (_1) {
                    return function (_2) {
                        return (function (_3, _4) {
                            if (_4.ctor === "Data.Set.Leaf") {
                                return Leaf;
                            };
                            var a = _3;
                            if (_4.ctor === "Data.Set.Branch") {
                                if ((_4.values[0]).left.ctor === "Data.Set.Leaf") {
                                    if (_ps.Prelude["=="](__dict_Eq_12)(a)((_4.values[0]).value)) {
                                        return (function (_1) {
                                            var _2 = _1.left;
                                            if (_2.ctor === "Data.Set.Leaf") {
                                                return (_4.values[0]).right;
                                            };
                                            var _3 = _1.right;
                                            if (_3.ctor === "Data.Set.Leaf") {
                                                return (_4.values[0]).left;
                                            };
                                            return (function () {
                                                var minValue = findMinValue(__dict_Ord_13)((_4.values[0]).right);
                                                return Branch((function () {
                                                    var _1 = {};
                                                    for (var _2 in _4.values[0]) {
                                                        if ((_4.values[0]).hasOwnProperty(_2)) {
                                                            _1[_2] = _4.values[0][_2];
                                                        };
                                                    };
                                                    _1.value = minValue;
                                                    _1.right = $$delete(__dict_Eq_12)(__dict_Ord_13)(minValue)((_4.values[0]).right);
                                                    return _1;
                                                })());
                                            })();
                                            throw "Failed pattern match";
                                        })(_4.values[0]);
                                    };
                                };
                            };
                            if (_4.ctor === "Data.Set.Branch") {
                                if (_ps.Prelude["<"](__dict_Ord_13)(_3)((_4.values[0]).value)) {
                                    return Branch((function () {
                                        var _1 = {};
                                        for (var _2 in _4.values[0]) {
                                            if ((_4.values[0]).hasOwnProperty(_2)) {
                                                _1[_2] = _4.values[0][_2];
                                            };
                                        };
                                        _1.left = $$delete(__dict_Eq_12)(__dict_Ord_13)(_3)((_4.values[0]).left);
                                        return _1;
                                    })());
                                };
                            };
                            if (_4.ctor === "Data.Set.Branch") {
                                return Branch((function () {
                                    var _1 = {};
                                    for (var _2 in _4.values[0]) {
                                        if ((_4.values[0]).hasOwnProperty(_2)) {
                                            _1[_2] = _4.values[0][_2];
                                        };
                                    };
                                    _1.right = $$delete(__dict_Eq_12)(__dict_Ord_13)(_3)((_4.values[0]).right);
                                    return _1;
                                })());
                            };
                            throw "Failed pattern match";
                        })(_1, _2);
                    };
                };
            };
        };
        module.union = union;
        module.fromList = fromList;
        module.toList = toList;
        module["delete"] = $$delete;
        module.member = member;
        module.insert = insert;
        module.singleton = singleton;
        module.empty = empty;
        module.eqSet = eqSet;
        module.showSet = showSet;
        return module;
    })();
})((typeof module !== "undefined" && module.exports) ? module.exports : (typeof window !== "undefined") ? window.PS = window.PS || {} : (function () {
    throw "PureScript doesn't know how to export modules in the current environment";
})());