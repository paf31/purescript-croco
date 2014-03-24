(function (_ps) {
    "use strict";
    _ps.Data_Graph = (function () {
        var module = {};
        var Edge = function (value0) {
            return function (value1) {
                return {
                    ctor: "Data.Graph.Edge", 
                    values: [ value0, value1 ]
                };
            };
        };
        var Graph = function (value0) {
            return function (value1) {
                return {
                    ctor: "Data.Graph.Graph", 
                    values: [ value0, value1 ]
                };
            };
        };
        var popUntil = function (__copy___dict_Eq_0) {
            return function (__copy__1) {
                return function (__copy__2) {
                    return function (__copy__3) {
                        var __dict_Eq_0 = __copy___dict_Eq_0;
                        var _1 = __copy__1;
                        var _2 = __copy__2;
                        var _3 = __copy__3;
                        tco: while (true) {
                            if (_2.length === 0) {
                                return {
                                    path: [  ], 
                                    component: _3
                                };
                            };
                            var v = _1;
                            if (_2.length > 0) {
                                var _8 = _2.slice(1);
                                if (_ps.Prelude["=="](__dict_Eq_0)(v)(_2[0])) {
                                    return {
                                        path: _8, 
                                        component: _ps.Data_Array[":"](_2[0])(_3)
                                    };
                                };
                            };
                            if (_2.length > 0) {
                                var _10 = _2.slice(1);
                                var __tco___dict_Eq_0 = __dict_Eq_0;
                                var __tco__1 = _1;
                                var __tco__3 = _ps.Data_Array[":"](_2[0])(_3);
                                __dict_Eq_0 = __tco___dict_Eq_0;
                                _1 = __tco__1;
                                _2 = _10;
                                _3 = __tco__3;
                                continue tco;
                            };
                            throw "Failed pattern match";
                        };
                    };
                };
            };
        };
        var maybeMin = function (_1) {
            return function (_2) {
                if (_2.ctor === "Data.Maybe.Nothing") {
                    return _ps.Data_Maybe.Just(_1);
                };
                if (_2.ctor === "Data.Maybe.Just") {
                    return _ps.Data_Maybe.Just(_ps.Math.min(_1)(_2.values[0]));
                };
                throw "Failed pattern match";
            };
        };
        var scc = function (__dict_Eq_1) {
            return function (__dict_Ord_2) {
                return function (_2) {
                    return (function (_3) {
                        var _4 = _3.values[0];
                        var vs = _4;
                        return _ps.Control_Monad_Eff.runPure(function __do() {
                            var index = (function () {
                                return {
                                    value: 0
                                };
                            })();
                            var path = (function () {
                                return {
                                    value: [  ]
                                };
                            })();
                            var indexMap = (function () {
                                return {
                                    value: _ps.Data_Map.empty
                                };
                            })();
                            var lowlinkMap = (function () {
                                return {
                                    value: _ps.Data_Map.empty
                                };
                            })();
                            var components = (function () {
                                return {
                                    value: [  ]
                                };
                            })();
                            var lowlinkOf = function (v) {
                                return function __do() {
                                    return _ps.Data_Map.lookup(__dict_Eq_1)(__dict_Ord_2)(v)(lowlinkMap.value);
                                };
                            };
                            var indexOf = function (v) {
                                return function __do() {
                                    return _ps.Data_Map.lookup(__dict_Eq_1)(__dict_Ord_2)(v)(indexMap.value);
                                };
                            };
                            var strongConnect = function (v) {
                                return function __do() {
                                    var i = index.value;
                                    indexMap.value = _ps.Data_Map.insert(__dict_Eq_1)(__dict_Ord_2)(v)(i)(indexMap.value);
                                    lowlinkMap.value = _ps.Data_Map.insert(__dict_Eq_1)(__dict_Ord_2)(v)(i)(lowlinkMap.value);
                                    index.value = i + 1;
                                    path.value = _ps.Data_Array[":"](v)(path.value);
                                    _ps.Data_Traversable["for"](_ps.Prelude.applicativeFromMonad(_ps.Control_Monad_Eff.monadEff({})))(_ps.Data_Traversable.traversableArray({}))(_3.values[1])(function (_1) {
                                        return (function (_2) {
                                            return _ps.Control_Monad.when(_ps.Control_Monad_Eff.monadEff({}))(_ps.Prelude["=="](__dict_Eq_1)(v)(_2.values[0]))(function __do() {
                                                var wIndex = indexOf(_2.values[1])();
                                                return (function (_1) {
                                                    if (_1.ctor === "Data.Maybe.Nothing") {
                                                        return function __do() {
                                                            strongConnect(_2.values[1])();
                                                            var wLowlink = lowlinkOf(_2.values[1])();
                                                            return _ps.Data_Foldable.for_(_ps.Prelude.applicativeFromMonad(_ps.Control_Monad_Eff.monadEff({})))(_ps.Data_Foldable.foldableMaybe({}))(wLowlink)(function (lowlink) {
                                                                return _ps.Control_Monad_ST.modifySTRef(lowlinkMap)(_ps.Data_Map.alter(__dict_Eq_1)(__dict_Ord_2)(maybeMin(lowlink))(v));
                                                            })();
                                                        };
                                                    };
                                                    return _ps.Control_Monad.when(_ps.Control_Monad_Eff.monadEff({}))(_ps.Data_Foldable.elem(__dict_Eq_1)(_ps.Data_Foldable.foldableArray({}))(_2.values[1])(path.value))(function __do() {
                                                        var wIndex = indexOf(_2.values[1])();
                                                        return _ps.Data_Foldable.for_(_ps.Prelude.applicativeFromMonad(_ps.Control_Monad_Eff.monadEff({})))(_ps.Data_Foldable.foldableMaybe({}))(wIndex)(function (index) {
                                                            return _ps.Control_Monad_ST.modifySTRef(lowlinkMap)(_ps.Data_Map.alter(__dict_Eq_1)(__dict_Ord_2)(maybeMin(index))(v));
                                                        })();
                                                    });
                                                    throw "Failed pattern match";
                                                })(wIndex)();
                                            });
                                            throw "Failed pattern match";
                                        })(_1);
                                    })();
                                    var vIndex = indexOf(v)();
                                    var vLowlink = lowlinkOf(v)();
                                    return _ps.Control_Monad.when(_ps.Control_Monad_Eff.monadEff({}))(_ps.Prelude["=="](_ps.Data_Maybe.eqMaybe(_ps.Prelude.eqNumber({})))(vIndex)(vLowlink))(function __do() {
                                        return (function (_1) {
                                            return function __do() {
                                                components.value = _ps.Prelude.flip(_ps.Data_Array.concat)([ _1.component ])(components.value);
                                                path.value = _1.path;
                                                return {};
                                            };
                                            throw "Failed pattern match";
                                        })(popUntil(__dict_Eq_1)(v)(path.value)([  ]))();
                                    })();
                                };
                            };
                            var go = function (_1) {
                                if (_1.length === 0) {
                                    return _ps.Control_Monad_ST.readSTRef(components);
                                };
                                if (_1.length > 0) {
                                    var _4 = _1.slice(1);
                                    return function __do() {
                                        var currentIndex = indexOf(_1[0])();
                                        _ps.Control_Monad.when(_ps.Control_Monad_Eff.monadEff({}))(_ps.Data_Maybe.isNothing(currentIndex))(strongConnect(_1[0]))();
                                        return go(_4)();
                                    };
                                };
                                throw "Failed pattern match";
                            };
                            return go(vs)();
                        });
                        throw "Failed pattern match";
                    })(_2);
                };
            };
        };
        var topSort = function (__dict_Eq_3) {
            return function (__dict_Ord_4) {
                return _ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(_ps.Data_Array.reverse)(_ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(_ps.Data_Array.concatMap(_ps.Prelude.id(_ps.Prelude.categoryArr({}))))(scc(__dict_Eq_3)(__dict_Ord_4)));
            };
        };
        module.Graph = Graph;
        module.Edge = Edge;
        module.topSort = topSort;
        module.scc = scc;
        return module;
    })();
})((typeof module !== "undefined" && module.exports) ? module.exports : (typeof window !== "undefined") ? window.PS = window.PS || {} : (function () {
    throw "PureScript doesn't know how to export modules in the current environment";
})());