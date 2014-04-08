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
                return function (_10) {
                    return (function (_11) {
                        return _ps.Control_Monad_Eff.runPure(function __do() {
                            var _9 = {
                                value: 0
                            };
                            return (function (_10) {
                                var index = _10;
                                return function __do() {
                                    var _8 = {
                                        value: [  ]
                                    };
                                    return (function (_9) {
                                        return function __do() {
                                            var _7 = {
                                                value: _ps.Data_Map.empty
                                            };
                                            return (function (_8) {
                                                return function __do() {
                                                    var _6 = {
                                                        value: _ps.Data_Map.empty
                                                    };
                                                    return (function (_7) {
                                                        return function __do() {
                                                            var _5 = {
                                                                value: [  ]
                                                            };
                                                            return (function (_6) {
                                                                var lowlinkOf = function (v) {
                                                                    return function __do() {
                                                                        return _ps.Data_Map.lookup(__dict_Eq_1)(__dict_Ord_2)(v)(_7.value);
                                                                    };
                                                                };
                                                                var indexOf = function (v) {
                                                                    return function __do() {
                                                                        return _ps.Data_Map.lookup(__dict_Eq_1)(__dict_Ord_2)(v)(_8.value);
                                                                    };
                                                                };
                                                                var strongConnect = function (v) {
                                                                    return function __do() {
                                                                        var _4 = index.value;
                                                                        return (function (_5) {
                                                                            var i = _5;
                                                                            return function __do() {
                                                                                _8.value = _ps.Data_Map.insert(__dict_Eq_1)(__dict_Ord_2)(v)(i)(_8.value);
                                                                                _7.value = _ps.Data_Map.insert(__dict_Eq_1)(__dict_Ord_2)(v)(i)(_7.value);
                                                                                index.value = i + 1;
                                                                                _9.value = _ps.Data_Array[":"](v)(_9.value);
                                                                                _ps.Data_Traversable["for"](_ps.Control_Monad_Eff.functorEff({}))(_ps.Control_Monad_Eff.applicativeEff({}))(_ps.Data_Traversable.traversableArray({}))(_11.values[1])(function (_4) {
                                                                                    return (function (_5) {
                                                                                        return _ps.Control_Monad.when(_ps.Control_Monad_Eff.monadEff({}))(_ps.Prelude["=="](__dict_Eq_1)(v)(_5.values[0]))(function __do() {
                                                                                            var _3 = indexOf(_5.values[1])();
                                                                                            return (function (_4) {
                                                                                                return function __do() {
                                                                                                    return (function (_3) {
                                                                                                        if (_4.ctor === "Data.Maybe.Nothing") {
                                                                                                            return function __do() {
                                                                                                                strongConnect(_5.values[1])();
                                                                                                                var _1 = lowlinkOf(_5.values[1])();
                                                                                                                return _ps.Data_Foldable["for_"](_ps.Control_Monad_Eff.functorEff({}))(_ps.Control_Monad_Eff.applicativeEff({}))(_ps.Data_Foldable.foldableMaybe({}))(_1)(function (lowlink) {
                                                                                                                    return _ps.Control_Monad_ST.modifySTRef(_7)(_ps.Data_Map.alter(__dict_Eq_1)(__dict_Ord_2)(maybeMin(lowlink))(v));
                                                                                                                })();
                                                                                                            };
                                                                                                        };
                                                                                                        return _ps.Control_Monad.when(_ps.Control_Monad_Eff.monadEff({}))(_ps.Data_Foldable.elem(__dict_Eq_1)(_ps.Data_Foldable.foldableArray({}))(_5.values[1])(_3))(function __do() {
                                                                                                            var _1 = indexOf(_5.values[1])();
                                                                                                            return _ps.Data_Foldable["for_"](_ps.Control_Monad_Eff.functorEff({}))(_ps.Control_Monad_Eff.applicativeEff({}))(_ps.Data_Foldable.foldableMaybe({}))(_1)(function (index) {
                                                                                                                return _ps.Control_Monad_ST.modifySTRef(_7)(_ps.Data_Map.alter(__dict_Eq_1)(__dict_Ord_2)(maybeMin(index))(v));
                                                                                                            })();
                                                                                                        });
                                                                                                    })(_9.value)();
                                                                                                };
                                                                                            })(_3)();
                                                                                        });
                                                                                    })(_4);
                                                                                })();
                                                                                var _3 = indexOf(v)();
                                                                                var _2 = lowlinkOf(v)();
                                                                                return _ps.Control_Monad.when(_ps.Control_Monad_Eff.monadEff({}))(_ps.Prelude["=="](_ps.Data_Maybe.eqMaybe(_ps.Prelude.eqNumber({})))(_3)(_2))(function __do() {
                                                                                    var _1 = _9.value;
                                                                                    return (function () {
                                                                                        var newPath = popUntil(__dict_Eq_1)(v)(_1)([  ]);
                                                                                        return function __do() {
                                                                                            _6.value = _ps.Prelude.flip(_ps.Data_Array.concat)([ newPath.component ])(_6.value);
                                                                                            _9.value = newPath.path;
                                                                                            return {};
                                                                                        };
                                                                                    })()();
                                                                                })();
                                                                            };
                                                                        })(_4)();
                                                                    };
                                                                };
                                                                var go = function (_2) {
                                                                    if (_2.length === 0) {
                                                                        return _ps.Control_Monad_ST.readSTRef(_6);
                                                                    };
                                                                    if (_2.length > 0) {
                                                                        var _5 = _2.slice(1);
                                                                        return function __do() {
                                                                            var _1 = indexOf(_2[0])();
                                                                            _ps.Control_Monad.when(_ps.Control_Monad_Eff.monadEff({}))(_ps.Data_Maybe.isNothing(_1))(strongConnect(_2[0]))();
                                                                            return go(_5)();
                                                                        };
                                                                    };
                                                                    throw "Failed pattern match";
                                                                };
                                                                return go(_11.values[0]);
                                                            })(_5)();
                                                        };
                                                    })(_6)();
                                                };
                                            })(_7)();
                                        };
                                    })(_8)();
                                };
                            })(_9)();
                        });
                    })(_10);
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