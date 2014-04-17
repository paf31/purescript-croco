"use strict";
var Prelude = require("Prelude");
var Data_Maybe = require("Data.Maybe");
var Math = require("Math");
var Control_Monad_Eff = require("Control.Monad.Eff");
var Control_Monad_ST = require("Control.Monad.ST");
var Data_Map = require("Data.Map");
var Data_Traversable = require("Data.Traversable");
var Control_Monad = require("Control.Monad");
var Data_Foldable = require("Data.Foldable");
var Data_Array = require("Data.Array");
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
                        if (Prelude["=="](__dict_Eq_0)(v)(_2[0])) {
                            return {
                                path: _8, 
                                component: Prelude[":"](_2[0])(_3)
                            };
                        };
                    };
                    if (_2.length > 0) {
                        var _10 = _2.slice(1);
                        var __tco___dict_Eq_0 = __dict_Eq_0;
                        var __tco__1 = _1;
                        var __tco__3 = Prelude[":"](_2[0])(_3);
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
            return Data_Maybe.Just(_1);
        };
        if (_2.ctor === "Data.Maybe.Just") {
            return Data_Maybe.Just(Math.min(_1)(_2.values[0]));
        };
        throw "Failed pattern match";
    };
};
var scc = function (__dict_Eq_1) {
    return function (__dict_Ord_2) {
        return function (_5) {
            return (function (_6) {
                return Control_Monad_Eff.runPure(function __do() {
                    var _4 = {
                        value: 0
                    };
                    return (function (_5) {
                        var index = _5;
                        return function __do() {
                            var _4 = {
                                value: [  ]
                            };
                            return (function (_5) {
                                var path = _5;
                                return function __do() {
                                    var _4 = {
                                        value: Data_Map.empty
                                    };
                                    return (function (_5) {
                                        var indexMap = _5;
                                        return function __do() {
                                            var _4 = {
                                                value: Data_Map.empty
                                            };
                                            return (function (_5) {
                                                var lowlinkMap = _5;
                                                return function __do() {
                                                    var _4 = {
                                                        value: [  ]
                                                    };
                                                    return (function (_5) {
                                                        var components = _5;
                                                        return (function () {
                                                            var lowlinkOf = function (v) {
                                                                return function __do() {
                                                                    return Data_Map.lookup(__dict_Eq_1)(__dict_Ord_2)(v)(lowlinkMap.value);
                                                                };
                                                            };
                                                            var indexOf = function (v) {
                                                                return function __do() {
                                                                    return Data_Map.lookup(__dict_Eq_1)(__dict_Ord_2)(v)(indexMap.value);
                                                                };
                                                            };
                                                            var strongConnect = function (v) {
                                                                return function __do() {
                                                                    var _3 = index.value;
                                                                    return (function (_4) {
                                                                        var i = _4;
                                                                        return function __do() {
                                                                            indexMap.value = Data_Map.insert(__dict_Eq_1)(__dict_Ord_2)(v)(i)(indexMap.value);
                                                                            lowlinkMap.value = Data_Map.insert(__dict_Eq_1)(__dict_Ord_2)(v)(i)(lowlinkMap.value);
                                                                            index.value = i + 1;
                                                                            path.value = Prelude[":"](v)(path.value);
                                                                            Data_Traversable["for"](Control_Monad_Eff.functorEff({}))(Control_Monad_Eff.applicativeEff({}))(Data_Traversable.traversableArray({}))(_6.values[1])(function (_3) {
                                                                                return (function (_4) {
                                                                                    return Control_Monad.when(Control_Monad_Eff.monadEff({}))(Prelude["=="](__dict_Eq_1)(v)(_4.values[0]))(function __do() {
                                                                                        var _2 = indexOf(_4.values[1])();
                                                                                        return (function (_3) {
                                                                                            var wIndex = _3;
                                                                                            return function __do() {
                                                                                                return (function (_3) {
                                                                                                    if (wIndex.ctor === "Data.Maybe.Nothing") {
                                                                                                        return function __do() {
                                                                                                            strongConnect(_4.values[1])();
                                                                                                            var _1 = lowlinkOf(_4.values[1])();
                                                                                                            return Data_Foldable["for_"](Control_Monad_Eff.functorEff({}))(Control_Monad_Eff.applicativeEff({}))(Data_Foldable.foldableMaybe({}))(_1)(function (lowlink) {
                                                                                                                return Control_Monad_ST.modifySTRef(lowlinkMap)(Data_Map.alter(__dict_Eq_1)(__dict_Ord_2)(maybeMin(lowlink))(v));
                                                                                                            })();
                                                                                                        };
                                                                                                    };
                                                                                                    return Control_Monad.when(Control_Monad_Eff.monadEff({}))(Data_Foldable.elem(__dict_Eq_1)(Data_Foldable.foldableArray({}))(_4.values[1])(_3))(function __do() {
                                                                                                        var _1 = indexOf(_4.values[1])();
                                                                                                        return Data_Foldable["for_"](Control_Monad_Eff.functorEff({}))(Control_Monad_Eff.applicativeEff({}))(Data_Foldable.foldableMaybe({}))(_1)(function (index) {
                                                                                                            return Control_Monad_ST.modifySTRef(lowlinkMap)(Data_Map.alter(__dict_Eq_1)(__dict_Ord_2)(maybeMin(index))(v));
                                                                                                        })();
                                                                                                    });
                                                                                                })(path.value)();
                                                                                            };
                                                                                        })(_2)();
                                                                                    });
                                                                                })(_3);
                                                                            })();
                                                                            var _2 = indexOf(v)();
                                                                            return (function (_3) {
                                                                                return function __do() {
                                                                                    var _2 = lowlinkOf(v)();
                                                                                    return Control_Monad.when(Control_Monad_Eff.monadEff({}))(Prelude["=="](Data_Maybe.eqMaybe(Prelude.eqNumber({})))(_3)(_2))(function __do() {
                                                                                        var _1 = path.value;
                                                                                        return (function () {
                                                                                            var newPath = popUntil(__dict_Eq_1)(v)(_1)([  ]);
                                                                                            return function __do() {
                                                                                                components.value = Prelude.flip(Prelude["++"](Data_Array.semigroupArray({})))([ newPath.component ])(components.value);
                                                                                                path.value = newPath.path;
                                                                                                return {};
                                                                                            };
                                                                                        })()();
                                                                                    })();
                                                                                };
                                                                            })(_2)();
                                                                        };
                                                                    })(_3)();
                                                                };
                                                            };
                                                            var go = function (_2) {
                                                                if (_2.length === 0) {
                                                                    return Control_Monad_ST.readSTRef(components);
                                                                };
                                                                if (_2.length > 0) {
                                                                    var _5 = _2.slice(1);
                                                                    return function __do() {
                                                                        var _1 = indexOf(_2[0])();
                                                                        Control_Monad.when(Control_Monad_Eff.monadEff({}))(Data_Maybe.isNothing(_1))(strongConnect(_2[0]))();
                                                                        return go(_5)();
                                                                    };
                                                                };
                                                                throw "Failed pattern match";
                                                            };
                                                            return go(_6.values[0]);
                                                        })();
                                                    })(_4)();
                                                };
                                            })(_4)();
                                        };
                                    })(_4)();
                                };
                            })(_4)();
                        };
                    })(_4)();
                });
            })(_5);
        };
    };
};
var topSort = function (__dict_Eq_3) {
    return function (__dict_Ord_4) {
        return Prelude["<<<"](Prelude.semigroupoidArr({}))(Data_Array.reverse)(Prelude["<<<"](Prelude.semigroupoidArr({}))(Data_Array.concatMap(Prelude.id(Prelude.categoryArr({}))))(scc(__dict_Eq_3)(__dict_Ord_4)));
    };
};
module.exports = {
    Graph: Graph, 
    Edge: Edge, 
    topSort: topSort, 
    scc: scc
};