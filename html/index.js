(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window.onload = function() {
  require("Main").main();
};

},{"Main":17}],2:[function(require,module,exports){
"use strict";
var Prelude = require("Prelude");
var $less$times = function (__dict_Apply_0) {
    return function (a) {
        return function (b) {
            return Prelude["<*>"](__dict_Apply_0)(Prelude["<$>"](__dict_Apply_0["__superclasses"]["Prelude.Functor_0"]({}))(Prelude["const"])(a))(b);
        };
    };
};
var $times$greater = function (__dict_Apply_1) {
    return function (a) {
        return function (b) {
            return Prelude["<*>"](__dict_Apply_1)(Prelude["<$>"](__dict_Apply_1["__superclasses"]["Prelude.Functor_0"]({}))(Prelude["const"](Prelude.id(Prelude.categoryArr({}))))(a))(b);
        };
    };
};
var lift5 = function (__dict_Apply_2) {
    return function (f) {
        return function (a) {
            return function (b) {
                return function (c) {
                    return function (d) {
                        return function (e) {
                            return Prelude["<*>"](__dict_Apply_2)(Prelude["<*>"](__dict_Apply_2)(Prelude["<*>"](__dict_Apply_2)(Prelude["<*>"](__dict_Apply_2)(Prelude["<$>"](__dict_Apply_2["__superclasses"]["Prelude.Functor_0"]({}))(f)(a))(b))(c))(d))(e);
                        };
                    };
                };
            };
        };
    };
};
var lift4 = function (__dict_Apply_3) {
    return function (f) {
        return function (a) {
            return function (b) {
                return function (c) {
                    return function (d) {
                        return Prelude["<*>"](__dict_Apply_3)(Prelude["<*>"](__dict_Apply_3)(Prelude["<*>"](__dict_Apply_3)(Prelude["<$>"](__dict_Apply_3["__superclasses"]["Prelude.Functor_0"]({}))(f)(a))(b))(c))(d);
                    };
                };
            };
        };
    };
};
var lift3 = function (__dict_Apply_4) {
    return function (f) {
        return function (a) {
            return function (b) {
                return function (c) {
                    return Prelude["<*>"](__dict_Apply_4)(Prelude["<*>"](__dict_Apply_4)(Prelude["<$>"](__dict_Apply_4["__superclasses"]["Prelude.Functor_0"]({}))(f)(a))(b))(c);
                };
            };
        };
    };
};
var lift2 = function (__dict_Apply_5) {
    return function (f) {
        return function (a) {
            return function (b) {
                return Prelude["<*>"](__dict_Apply_5)(Prelude["<$>"](__dict_Apply_5["__superclasses"]["Prelude.Functor_0"]({}))(f)(a))(b);
            };
        };
    };
};
var forever = function (__dict_Apply_6) {
    return function (a) {
        return $times$greater(__dict_Apply_6)(a)(forever(__dict_Apply_6)(a));
    };
};
module.exports = {
    forever: forever, 
    lift5: lift5, 
    lift4: lift4, 
    lift3: lift3, 
    lift2: lift2, 
    "*>": $times$greater, 
    "<*": $less$times
};
},{"Prelude":20}],3:[function(require,module,exports){
"use strict";
function newRef(val) {  return function () {    return { value: val };  };};
function readRef(ref) {  return function() {    return ref.value;  };};
function modifyRef(ref) {  return function(f) {    return function() {      ref.value = f(ref.value);      return {};    };  };};
function writeRef(ref) {  return function(val) {    return function() {      ref.value = val;      return {};    };  };};
module.exports = {
    writeRef: writeRef, 
    modifyRef: modifyRef, 
    readRef: readRef, 
    newRef: newRef
};
},{}],4:[function(require,module,exports){
"use strict";
var Prelude = require("Prelude");
function returnE(a) {  return function() {    return a;  };};
function bindE(a) {  return function(f) {    return function() {      return f(a())();    };  };};
function runPure(f) {  return f();};
function untilE(f) {  return function() {    while (!f()) { }    return {};  };};
function whileE(f) {  return function(a) {    return function() {      while (f()) {        a();      }      return {};    };  };};
function forE(lo) {  return function(hi) {    return function(f) {      return function() {        for (var i = lo; i < hi; i++) {          f(i)();        }      };    };  };};
function foreachE(as) {  return function(f) {    for (var i = 0; i < as.length; i++) {      f(as[i])();    }  };};
var applicativeEff = function (_) {
    return {
        "__superclasses": {
            "Prelude.Apply_0": function (_) {
                return applyEff({});
            }
        }, 
        pure: returnE
    };
};
var applyEff = function (_) {
    return {
        "__superclasses": {
            "Prelude.Functor_0": function (_) {
                return functorEff({});
            }
        }, 
        "<*>": Prelude.ap(monadEff({}))
    };
};
var functorEff = function (_) {
    return {
        "<$>": Prelude.liftA1(applicativeEff({}))
    };
};
var monadEff = function (_) {
    return {
        "__superclasses": {
            "Prelude.Applicative_0": function (_) {
                return applicativeEff({});
            }, 
            "Prelude.Bind_1": function (_) {
                return bindEff({});
            }
        }
    };
};
var bindEff = function (_) {
    return {
        "__superclasses": {
            "Prelude.Apply_0": function (_) {
                return applyEff({});
            }
        }, 
        ">>=": bindE
    };
};
module.exports = {
    foreachE: foreachE, 
    forE: forE, 
    whileE: whileE, 
    untilE: untilE, 
    runPure: runPure, 
    bindE: bindE, 
    returnE: returnE, 
    functorEff: functorEff, 
    applyEff: applyEff, 
    applicativeEff: applicativeEff, 
    bindEff: bindEff, 
    monadEff: monadEff
};
},{"Prelude":20}],5:[function(require,module,exports){
"use strict";
var Prelude = require("Prelude");
var Data_Maybe = require("Data.Maybe");
var Prelude_Unsafe = require("Prelude.Unsafe");
function snoc(l) {  return function (e) {    var l1 = l.slice();    l1.push(e);     return l1;  };};
function length (xs) {  return xs.length;};
function findIndex (f) {  return function (arr) {    for (var i = 0, l = arr.length; i < l; i++) {      if (f(arr[i])) {        return i;      }    }    return -1;  };};
function findLastIndex (f) {  return function (arr) {    for (var i = arr.length - 1; i >= 0; i--) {      if (f(arr[i])) {        return i;      }    }    return -1;  };};
function append (l1) {  return function (l2) {    return l1.concat(l2);  };};
function concat (xss) {  var result = [];  for (var i = 0, l = xss.length; i < l; i++) {    result.push.apply(result, xss[i]);  }  return result;};
function reverse (l) {  return l.slice().reverse();};
function drop (n) {  return function (l) {    return l.slice(n);  };};
function slice (s) {  return function (e) {    return function (l) {      return l.slice(s, e);    };  };};
function insertAt (index) {  return function (a) {    return function (l) {      var l1 = l.slice();      l1.splice(index, 0, a);      return l1;    };   };};
function deleteAt (index) {  return function (n) {    return function (l) {      var l1 = l.slice();      l1.splice(index, n);      return l1;    };   };};
function updateAt (index) {  return function (a) {    return function (l) {      var i = ~~index;      if (i < 0 || i >= l.length) return l;      var l1 = l.slice();      l1[i] = a;      return l1;    };   };};
function concatMap (f) {  return function (arr) {    var result = [];    for (var i = 0, l = arr.length; i < l; i++) {      Array.prototype.push.apply(result, f(arr[i]));    }    return result;  };};
function map (f) {  return function (arr) {    var l = arr.length;    var result = new Array(l);    for (var i = 0; i < l; i++) {      result[i] = f(arr[i]);    }    return result;  };};
function filter (f) {  return function (arr) {    var n = 0;    var result = [];    for (var i = 0, l = arr.length; i < l; i++) {      if (f(arr[i])) {        result[n++] = arr[i];      }    }    return result;  };};
function range (start) {  return function (end) {    var i = ~~start, e = ~~end;    var step = i > e ? -1 : 1;    var result = [i], n = 1;    while (i !== e) {      i += step;      result[n++] = i;    }    return result;  };};
function zipWith (f) {  return function (xs) {    return function (ys) {      var l = xs.length < ys.length ? xs.length : ys.length;      var result = new Array(l);      for (var i = 0; i < l; i++) {        result[i] = f(xs[i])(ys[i]);      }      return result;    };  };};
function sortJS (f) {  return function (l) {    return l.slice().sort(function (x, y) {      return f(x)(y);    });  };};
var $bang$bang = function (xs) {
    return function (n) {
        var isInt = function (n) {
            return n !== ~~n;
        };
        return n < 0 || n >= length(xs) || isInt(n) ? Data_Maybe.Nothing : Data_Maybe.Just(xs[n]);
    };
};
var take = function (n) {
    return slice(0)(n);
};
var tail = function (_79) {
    if (_79.length > 0) {
        var _409 = _79.slice(1);
        return Data_Maybe.Just(_409);
    };
    return Data_Maybe.Nothing;
};
var span = (function () {
    var go = function (__copy__95) {
        return function (__copy__96) {
            return function (__copy__97) {
                var _95 = __copy__95;
                var _96 = __copy__96;
                var _97 = __copy__97;
                tco: while (true) {
                    var acc = _95;
                    if (_97.length > 0) {
                        var _414 = _97.slice(1);
                        if (_96(_97[0])) {
                            var __tco__95 = Prelude[":"](_97[0])(acc);
                            var __tco__96 = _96;
                            _95 = __tco__95;
                            _96 = __tco__96;
                            _97 = _414;
                            continue tco;
                        };
                    };
                    return {
                        init: reverse(_95), 
                        rest: _97
                    };
                };
            };
        };
    };
    return go([  ]);
})();
var sortBy = function (comp) {
    return function (xs) {
        var comp$prime = function (x) {
            return function (y) {
                return (function (_415) {
                    if (_415.ctor === "Prelude.GT") {
                        return 1;
                    };
                    if (_415.ctor === "Prelude.EQ") {
                        return 0;
                    };
                    if (_415.ctor === "Prelude.LT") {
                        return -1;
                    };
                    throw "Failed pattern match";
                })(comp(x)(y));
            };
        };
        return sortJS(comp$prime)(xs);
    };
};
var sort = function (__dict_Ord_0) {
    return function (xs) {
        return sortBy(Prelude.compare(__dict_Ord_0))(xs);
    };
};
var singleton = function (a) {
    return [ a ];
};
var semigroupArray = function (_) {
    return {
        "<>": append
    };
};
var $$null = function (_81) {
    if (_81.length === 0) {
        return true;
    };
    return false;
};
var nubBy = function (_88) {
    return function (_89) {
        if (_89.length === 0) {
            return [  ];
        };
        if (_89.length > 0) {
            var _420 = _89.slice(1);
            return Prelude[":"](_89[0])(nubBy(_88)(filter(function (y) {
                return !_88(_89[0])(y);
            })(_420)));
        };
        throw "Failed pattern match";
    };
};
var nub = function (__dict_Eq_1) {
    return nubBy(Prelude["=="](__dict_Eq_1));
};
var mapMaybe = function (f) {
    return concatMap(Prelude["<<<"](Prelude.semigroupoidArr({}))(Data_Maybe.maybe([  ])(singleton))(f));
};
var last = function (__copy__78) {
    var _78 = __copy__78;
    tco: while (true) {
        if (_78.length > 0) {
            var _423 = _78.slice(1);
            if (_423.length === 0) {
                return Data_Maybe.Just(_78[0]);
            };
        };
        if (_78.length > 0) {
            var _425 = _78.slice(1);
            _78 = _425;
            continue tco;
        };
        return Data_Maybe.Nothing;
    };
};
var intersectBy = function (_85) {
    return function (_86) {
        return function (_87) {
            if (_86.length === 0) {
                return [  ];
            };
            if (_87.length === 0) {
                return [  ];
            };
            var el = function (x) {
                return findIndex(_85(x))(_87) >= 0;
            };
            return filter(el)(_86);
        };
    };
};
var intersect = function (__dict_Eq_2) {
    return intersectBy(Prelude["=="](__dict_Eq_2));
};
var init = function (_80) {
    if (_80.length === 0) {
        return Data_Maybe.Nothing;
    };
    return Data_Maybe.Just(slice(0)(length(_80) - 1)(_80));
};
var head = function (_77) {
    if (_77.length > 0) {
        var _432 = _77.slice(1);
        return Data_Maybe.Just(_77[0]);
    };
    return Data_Maybe.Nothing;
};
var groupBy = (function () {
    var go = function (__copy__92) {
        return function (__copy__93) {
            return function (__copy__94) {
                var _92 = __copy__92;
                var _93 = __copy__93;
                var _94 = __copy__94;
                tco: while (true) {
                    var acc = _92;
                    if (_94.length === 0) {
                        return reverse(acc);
                    };
                    if (_94.length > 0) {
                        var _437 = _94.slice(1);
                        var sp = span(_93(_94[0]))(_437);
                        var __tco__92 = Prelude[":"](Prelude[":"](_94[0])(sp.init))(_92);
                        var __tco__93 = _93;
                        _92 = __tco__92;
                        _93 = __tco__93;
                        _94 = sp.rest;
                        continue tco;
                    };
                    throw "Failed pattern match";
                };
            };
        };
    };
    return go([  ]);
})();
var group = function (__dict_Eq_3) {
    return function (xs) {
        return groupBy(Prelude["=="](__dict_Eq_3))(xs);
    };
};
var group$prime = function (__dict_Ord_4) {
    return Prelude["<<<"](Prelude.semigroupoidArr({}))(group(__dict_Ord_4["__superclasses"]["Prelude.Eq_0"]({})))(sort(__dict_Ord_4));
};
var functorArray = function (_) {
    return {
        "<$>": map
    };
};
var elemLastIndex = function (__dict_Eq_5) {
    return function (x) {
        return findLastIndex(Prelude["=="](__dict_Eq_5)(x));
    };
};
var elemIndex = function (__dict_Eq_6) {
    return function (x) {
        return findIndex(Prelude["=="](__dict_Eq_6)(x));
    };
};
var deleteBy = function (_82) {
    return function (_83) {
        return function (_84) {
            if (_84.length === 0) {
                return [  ];
            };
            return (function (_441) {
                if (_441 < 0) {
                    return _84;
                };
                return deleteAt(_441)(1)(_84);
            })(findIndex(_82(_83))(_84));
        };
    };
};
var $$delete = function (__dict_Eq_7) {
    return deleteBy(Prelude["=="](__dict_Eq_7));
};
var $bslash$bslash = function (__dict_Eq_8) {
    return function (xs) {
        return function (ys) {
            var go = function (__copy__90) {
                return function (__copy__91) {
                    var _90 = __copy__90;
                    var _91 = __copy__91;
                    tco: while (true) {
                        var xs = _90;
                        if (_91.length === 0) {
                            return xs;
                        };
                        if (_90.length === 0) {
                            return [  ];
                        };
                        if (_91.length > 0) {
                            var _445 = _91.slice(1);
                            var __tco__90 = $$delete(__dict_Eq_8)(_91[0])(_90);
                            _90 = __tco__90;
                            _91 = _445;
                            continue tco;
                        };
                        throw "Failed pattern match";
                    };
                };
            };
            return go(xs)(ys);
        };
    };
};
var catMaybes = concatMap(Data_Maybe.maybe([  ])(singleton));
var applicativeArray = function (_) {
    return {
        "__superclasses": {
            "Prelude.Apply_0": function (_) {
                return applyArray({});
            }
        }, 
        pure: singleton
    };
};
var applyArray = function (_) {
    return {
        "__superclasses": {
            "Prelude.Functor_0": function (_) {
                return functorArray({});
            }
        }, 
        "<*>": Prelude.ap(monadArray({}))
    };
};
var monadArray = function (_) {
    return {
        "__superclasses": {
            "Prelude.Applicative_0": function (_) {
                return applicativeArray({});
            }, 
            "Prelude.Bind_1": function (_) {
                return bindArray({});
            }
        }
    };
};
var bindArray = function (_) {
    return {
        "__superclasses": {
            "Prelude.Apply_0": function (_) {
                return applyArray({});
            }
        }, 
        ">>=": Prelude.flip(concatMap)
    };
};
var alternativeArray = function (_) {
    return {
        empty: [  ], 
        "<|>": append
    };
};
module.exports = {
    span: span, 
    groupBy: groupBy, 
    "group'": group$prime, 
    group: group, 
    sortBy: sortBy, 
    sort: sort, 
    nubBy: nubBy, 
    nub: nub, 
    zipWith: zipWith, 
    range: range, 
    filter: filter, 
    concatMap: concatMap, 
    intersect: intersect, 
    intersectBy: intersectBy, 
    "\\\\": $bslash$bslash, 
    "delete": $$delete, 
    deleteBy: deleteBy, 
    updateAt: updateAt, 
    deleteAt: deleteAt, 
    insertAt: insertAt, 
    take: take, 
    drop: drop, 
    reverse: reverse, 
    concat: concat, 
    append: append, 
    elemLastIndex: elemLastIndex, 
    elemIndex: elemIndex, 
    findLastIndex: findLastIndex, 
    findIndex: findIndex, 
    length: length, 
    catMaybes: catMaybes, 
    mapMaybe: mapMaybe, 
    map: map, 
    "null": $$null, 
    init: init, 
    tail: tail, 
    last: last, 
    head: head, 
    singleton: singleton, 
    snoc: snoc, 
    "!!": $bang$bang, 
    functorArray: functorArray, 
    applyArray: applyArray, 
    applicativeArray: applicativeArray, 
    bindArray: bindArray, 
    monadArray: monadArray, 
    semigroupArray: semigroupArray, 
    alternativeArray: alternativeArray
};
},{"Data.Maybe":10,"Prelude":20,"Prelude.Unsafe":19}],6:[function(require,module,exports){
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
            show: function (_72) {
                if (_72.ctor === "Data.Either.Left") {
                    return "Left (" + Prelude.show(__dict_Show_0)(_72.values[0]) + ")";
                };
                if (_72.ctor === "Data.Either.Right") {
                    return "Right (" + Prelude.show(__dict_Show_1)(_72.values[0]) + ")";
                };
                throw "Failed pattern match";
            }
        };
    };
};
var functorEither = function (_) {
    return {
        "<$>": function (_68) {
            return function (_69) {
                if (_69.ctor === "Data.Either.Left") {
                    return Left(_69.values[0]);
                };
                if (_69.ctor === "Data.Either.Right") {
                    return Right(_68(_69.values[0]));
                };
                throw "Failed pattern match";
            };
        }
    };
};
var eqEither = function (__dict_Eq_4) {
    return function (__dict_Eq_5) {
        return {
            "==": function (_73) {
                return function (_74) {
                    if (_73.ctor === "Data.Either.Left") {
                        if (_74.ctor === "Data.Either.Left") {
                            return Prelude["=="](__dict_Eq_4)(_73.values[0])(_74.values[0]);
                        };
                    };
                    if (_73.ctor === "Data.Either.Right") {
                        if (_74.ctor === "Data.Either.Right") {
                            return Prelude["=="](__dict_Eq_5)(_73.values[0])(_74.values[0]);
                        };
                    };
                    return false;
                };
            }, 
            "/=": function (a) {
                return function (b) {
                    return !Prelude["=="](eqEither(__dict_Eq_4)(__dict_Eq_5))(a)(b);
                };
            }
        };
    };
};
var ordEither = function (__dict_Ord_2) {
    return function (__dict_Ord_3) {
        return {
            "__superclasses": {
                "Prelude.Eq_0": function (_) {
                    return eqEither(__dict_Ord_2["__superclasses"]["Prelude.Eq_0"]({}))(__dict_Ord_3["__superclasses"]["Prelude.Eq_0"]({}));
                }
            }, 
            compare: function (_75) {
                return function (_76) {
                    if (_75.ctor === "Data.Either.Left") {
                        if (_76.ctor === "Data.Either.Left") {
                            return Prelude.compare(__dict_Ord_2)(_75.values[0])(_76.values[0]);
                        };
                    };
                    if (_75.ctor === "Data.Either.Right") {
                        if (_76.ctor === "Data.Either.Right") {
                            return Prelude.compare(__dict_Ord_3)(_75.values[0])(_76.values[0]);
                        };
                    };
                    if (_75.ctor === "Data.Either.Left") {
                        return Prelude.LT;
                    };
                    if (_76.ctor === "Data.Either.Left") {
                        return Prelude.GT;
                    };
                    throw "Failed pattern match";
                };
            }
        };
    };
};
var either = function (_65) {
    return function (_66) {
        return function (_67) {
            if (_67.ctor === "Data.Either.Left") {
                return _65(_67.values[0]);
            };
            if (_67.ctor === "Data.Either.Right") {
                return _66(_67.values[0]);
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
        "<*>": function (_70) {
            return function (_71) {
                if (_70.ctor === "Data.Either.Left") {
                    return Left(_70.values[0]);
                };
                if (_70.ctor === "Data.Either.Right") {
                    return Prelude["<$>"](functorEither({}))(_70.values[0])(_71);
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
    eqEither: eqEither, 
    ordEither: ordEither
};
},{"Prelude":20}],7:[function(require,module,exports){
"use strict";
var Prelude = require("Prelude");
var Ref = function (value0) {
    return {
        ctor: "Data.Eq.Ref", 
        values: [ value0 ]
    };
};
var liftRef = function (_62) {
    return function (_63) {
        return function (_64) {
            return _62(_63.values[0])(_64.values[0]);
        };
    };
};
var eqRef = function (_) {
    return {
        "==": liftRef(Prelude.refEq), 
        "/=": liftRef(Prelude.refIneq)
    };
};
module.exports = {
    Ref: Ref, 
    liftRef: liftRef, 
    eqRef: eqRef
};
},{"Prelude":20}],8:[function(require,module,exports){
"use strict";
var Prelude = require("Prelude");
var Control_Apply = require("Control.Apply");
var Data_Monoid = require("Data.Monoid");
var Data_Monoid_First = require("Data.Monoid.First");
var Data_Maybe = require("Data.Maybe");
function foldrArray(f) {  return function(z) {    return function(xs) {      var acc = z;      for (var i = xs.length - 1; i >= 0; --i) {        acc = f(xs[i])(acc);      }      return acc;    }  }};
function foldlArray(f) {  return function(z) {    return function(xs) {      var acc = z;      for (var i = 0, len = xs.length; i < len; ++i) {        acc = f(acc)(xs[i]);      }      return acc;    }  }};
var foldr = function (dict) {
    return dict.foldr;
};
var traverse_ = function (__dict_Applicative_0) {
    return function (__dict_Foldable_1) {
        return function (f) {
            return foldr(__dict_Foldable_1)(Prelude["<<<"](Prelude.semigroupoidArr({}))(Control_Apply["*>"](__dict_Applicative_0["__superclasses"]["Prelude.Apply_0"]({})))(f))(Prelude.pure(__dict_Applicative_0)(Prelude.unit));
        };
    };
};
var for_ = function (__dict_Applicative_2) {
    return function (__dict_Foldable_3) {
        return Prelude.flip(traverse_(__dict_Applicative_2)(__dict_Foldable_3));
    };
};
var sequence_ = function (__dict_Applicative_4) {
    return function (__dict_Foldable_5) {
        return traverse_(__dict_Applicative_4)(__dict_Foldable_5)(Prelude.id(Prelude.categoryArr({})));
    };
};
var foldl = function (dict) {
    return dict.foldl;
};
var mconcat = function (__dict_Foldable_6) {
    return function (__dict_Monoid_7) {
        return foldl(__dict_Foldable_6)(Prelude["<>"](__dict_Monoid_7["__superclasses"]["Prelude.Semigroup_0"]({})))(Data_Monoid.mempty(__dict_Monoid_7));
    };
};
var or = function (__dict_Foldable_8) {
    return foldl(__dict_Foldable_8)(Prelude["||"](Prelude.boolLikeBoolean({})))(false);
};
var product = function (__dict_Foldable_9) {
    return foldl(__dict_Foldable_9)(Prelude["*"](Prelude.numNumber({})))(1);
};
var sum = function (__dict_Foldable_10) {
    return foldl(__dict_Foldable_10)(Prelude["+"](Prelude.numNumber({})))(0);
};
var foldableTuple = function (_) {
    return {
        foldr: function (_220) {
            return function (_221) {
                return function (_222) {
                    return _220(_222.values[1])(_221);
                };
            };
        }, 
        foldl: function (_223) {
            return function (_224) {
                return function (_225) {
                    return _223(_224)(_225.values[1]);
                };
            };
        }, 
        foldMap: function (__dict_Monoid_11) {
            return function (_226) {
                return function (_227) {
                    return _226(_227.values[1]);
                };
            };
        }
    };
};
var foldableRef = function (_) {
    return {
        foldr: function (_212) {
            return function (_213) {
                return function (_214) {
                    return _212(_214.values[0])(_213);
                };
            };
        }, 
        foldl: function (_215) {
            return function (_216) {
                return function (_217) {
                    return _215(_216)(_217.values[0]);
                };
            };
        }, 
        foldMap: function (__dict_Monoid_12) {
            return function (_218) {
                return function (_219) {
                    return _218(_219.values[0]);
                };
            };
        }
    };
};
var foldableMaybe = function (_) {
    return {
        foldr: function (_204) {
            return function (_205) {
                return function (_206) {
                    if (_206.ctor === "Data.Maybe.Nothing") {
                        return _205;
                    };
                    if (_206.ctor === "Data.Maybe.Just") {
                        return _204(_206.values[0])(_205);
                    };
                    throw "Failed pattern match";
                };
            };
        }, 
        foldl: function (_207) {
            return function (_208) {
                return function (_209) {
                    if (_209.ctor === "Data.Maybe.Nothing") {
                        return _208;
                    };
                    if (_209.ctor === "Data.Maybe.Just") {
                        return _207(_208)(_209.values[0]);
                    };
                    throw "Failed pattern match";
                };
            };
        }, 
        foldMap: function (__dict_Monoid_13) {
            return function (_210) {
                return function (_211) {
                    if (_211.ctor === "Data.Maybe.Nothing") {
                        return Data_Monoid.mempty(__dict_Monoid_13);
                    };
                    if (_211.ctor === "Data.Maybe.Just") {
                        return _210(_211.values[0]);
                    };
                    throw "Failed pattern match";
                };
            };
        }
    };
};
var foldableEither = function (_) {
    return {
        foldr: function (_196) {
            return function (_197) {
                return function (_198) {
                    if (_198.ctor === "Data.Either.Left") {
                        return _197;
                    };
                    if (_198.ctor === "Data.Either.Right") {
                        return _196(_198.values[0])(_197);
                    };
                    throw "Failed pattern match";
                };
            };
        }, 
        foldl: function (_199) {
            return function (_200) {
                return function (_201) {
                    if (_201.ctor === "Data.Either.Left") {
                        return _200;
                    };
                    if (_201.ctor === "Data.Either.Right") {
                        return _199(_200)(_201.values[0]);
                    };
                    throw "Failed pattern match";
                };
            };
        }, 
        foldMap: function (__dict_Monoid_14) {
            return function (_202) {
                return function (_203) {
                    if (_203.ctor === "Data.Either.Left") {
                        return Data_Monoid.mempty(__dict_Monoid_14);
                    };
                    if (_203.ctor === "Data.Either.Right") {
                        return _202(_203.values[0]);
                    };
                    throw "Failed pattern match";
                };
            };
        }
    };
};
var foldableArray = function (_) {
    return {
        foldr: function (f) {
            return function (z) {
                return function (xs) {
                    return foldrArray(f)(z)(xs);
                };
            };
        }, 
        foldl: function (f) {
            return function (z) {
                return function (xs) {
                    return foldlArray(f)(z)(xs);
                };
            };
        }, 
        foldMap: function (__dict_Monoid_15) {
            return function (f) {
                return function (xs) {
                    return foldr(foldableArray({}))(function (x) {
                        return function (acc) {
                            return Prelude["<>"](__dict_Monoid_15["__superclasses"]["Prelude.Semigroup_0"]({}))(f(x))(acc);
                        };
                    })(Data_Monoid.mempty(__dict_Monoid_15))(xs);
                };
            };
        }
    };
};
var foldMap = function (dict) {
    return dict.foldMap;
};
var lookup = function (__dict_Eq_16) {
    return function (__dict_Foldable_17) {
        return function (a) {
            return function (f) {
                return Data_Monoid_First.runFirst(foldMap(__dict_Foldable_17)(Data_Monoid_First.monoidFirst({}))(function (_195) {
                    return Data_Monoid_First.First(Prelude["=="](__dict_Eq_16)(a)(_195.values[0]) ? Data_Maybe.Just(_195.values[1]) : Data_Maybe.Nothing);
                })(f));
            };
        };
    };
};
var fold = function (__dict_Foldable_18) {
    return function (__dict_Monoid_19) {
        return foldMap(__dict_Foldable_18)(__dict_Monoid_19)(Prelude.id(Prelude.categoryArr({})));
    };
};
var find = function (__dict_Foldable_20) {
    return function (p) {
        return function (f) {
            return (function (_714) {
                if (_714.length > 0) {
                    var _716 = _714.slice(1);
                    return Data_Maybe.Just(_714[0]);
                };
                if (_714.length === 0) {
                    return Data_Maybe.Nothing;
                };
                throw "Failed pattern match";
            })(foldMap(__dict_Foldable_20)(Data_Monoid.monoidArray({}))(function (x) {
                return p(x) ? [ x ] : [  ];
            })(f));
        };
    };
};
var any = function (__dict_Foldable_21) {
    return function (p) {
        return Prelude["<<<"](Prelude.semigroupoidArr({}))(or(foldableArray({})))(foldMap(__dict_Foldable_21)(Data_Monoid.monoidArray({}))(function (x) {
            return [ p(x) ];
        }));
    };
};
var elem = function (__dict_Eq_22) {
    return function (__dict_Foldable_23) {
        return Prelude["<<<"](Prelude.semigroupoidArr({}))(any(__dict_Foldable_23))(Prelude["=="](__dict_Eq_22));
    };
};
var notElem = function (__dict_Eq_24) {
    return function (__dict_Foldable_25) {
        return function (x) {
            return Prelude["<<<"](Prelude.semigroupoidArr({}))(Prelude.not(Prelude.boolLikeBoolean({})))(elem(__dict_Eq_24)(__dict_Foldable_25)(x));
        };
    };
};
var and = function (__dict_Foldable_26) {
    return foldl(__dict_Foldable_26)(Prelude["&&"](Prelude.boolLikeBoolean({})))(true);
};
var all = function (__dict_Foldable_27) {
    return function (p) {
        return Prelude["<<<"](Prelude.semigroupoidArr({}))(and(foldableArray({})))(foldMap(__dict_Foldable_27)(Data_Monoid.monoidArray({}))(function (x) {
            return [ p(x) ];
        }));
    };
};
module.exports = {
    foldlArray: foldlArray, 
    foldrArray: foldrArray, 
    lookup: lookup, 
    find: find, 
    notElem: notElem, 
    elem: elem, 
    product: product, 
    sum: sum, 
    all: all, 
    any: any, 
    or: or, 
    and: and, 
    mconcat: mconcat, 
    "sequence_": sequence_, 
    "for_": for_, 
    "traverse_": traverse_, 
    fold: fold, 
    foldMap: foldMap, 
    foldl: foldl, 
    foldr: foldr, 
    foldableArray: foldableArray, 
    foldableEither: foldableEither, 
    foldableMaybe: foldableMaybe, 
    foldableRef: foldableRef, 
    foldableTuple: foldableTuple
};
},{"Control.Apply":2,"Data.Maybe":10,"Data.Monoid":12,"Data.Monoid.First":11,"Prelude":20}],9:[function(require,module,exports){
"use strict";
var Prelude = require("Prelude");
var Data_Array = require("Data.Array");
var Data_Tuple = require("Data.Tuple");
var Data_Maybe = require("Data.Maybe");
var Data_Foldable = require("Data.Foldable");
var Leaf = {
    ctor: "Data.Map.Leaf", 
    values: [  ]
};
var Two = function (value0) {
    return function (value1) {
        return function (value2) {
            return function (value3) {
                return {
                    ctor: "Data.Map.Two", 
                    values: [ value0, value1, value2, value3 ]
                };
            };
        };
    };
};
var Three = function (value0) {
    return function (value1) {
        return function (value2) {
            return function (value3) {
                return function (value4) {
                    return function (value5) {
                        return function (value6) {
                            return {
                                ctor: "Data.Map.Three", 
                                values: [ value0, value1, value2, value3, value4, value5, value6 ]
                            };
                        };
                    };
                };
            };
        };
    };
};
var TwoLeft = function (value0) {
    return function (value1) {
        return function (value2) {
            return {
                ctor: "Data.Map.TwoLeft", 
                values: [ value0, value1, value2 ]
            };
        };
    };
};
var TwoRight = function (value0) {
    return function (value1) {
        return function (value2) {
            return {
                ctor: "Data.Map.TwoRight", 
                values: [ value0, value1, value2 ]
            };
        };
    };
};
var ThreeLeft = function (value0) {
    return function (value1) {
        return function (value2) {
            return function (value3) {
                return function (value4) {
                    return function (value5) {
                        return {
                            ctor: "Data.Map.ThreeLeft", 
                            values: [ value0, value1, value2, value3, value4, value5 ]
                        };
                    };
                };
            };
        };
    };
};
var ThreeMiddle = function (value0) {
    return function (value1) {
        return function (value2) {
            return function (value3) {
                return function (value4) {
                    return function (value5) {
                        return {
                            ctor: "Data.Map.ThreeMiddle", 
                            values: [ value0, value1, value2, value3, value4, value5 ]
                        };
                    };
                };
            };
        };
    };
};
var ThreeRight = function (value0) {
    return function (value1) {
        return function (value2) {
            return function (value3) {
                return function (value4) {
                    return function (value5) {
                        return {
                            ctor: "Data.Map.ThreeRight", 
                            values: [ value0, value1, value2, value3, value4, value5 ]
                        };
                    };
                };
            };
        };
    };
};
var KickUp = function (value0) {
    return function (value1) {
        return function (value2) {
            return function (value3) {
                return {
                    ctor: "Data.Map.KickUp", 
                    values: [ value0, value1, value2, value3 ]
                };
            };
        };
    };
};
var values = function (_238) {
    if (_238.ctor === "Data.Map.Leaf") {
        return [  ];
    };
    if (_238.ctor === "Data.Map.Two") {
        return Prelude["++"](Data_Array.semigroupArray({}))(values(_238.values[0]))(Prelude["++"](Data_Array.semigroupArray({}))([ _238.values[2] ])(values(_238.values[3])));
    };
    if (_238.ctor === "Data.Map.Three") {
        return Prelude["++"](Data_Array.semigroupArray({}))(values(_238.values[0]))(Prelude["++"](Data_Array.semigroupArray({}))([ _238.values[2] ])(Prelude["++"](Data_Array.semigroupArray({}))(values(_238.values[3]))(Prelude["++"](Data_Array.semigroupArray({}))([ _238.values[5] ])(values(_238.values[6])))));
    };
    throw "Failed pattern match";
};
var toList = function (_236) {
    if (_236.ctor === "Data.Map.Leaf") {
        return [  ];
    };
    if (_236.ctor === "Data.Map.Two") {
        return Prelude["++"](Data_Array.semigroupArray({}))(toList(_236.values[0]))(Prelude["++"](Data_Array.semigroupArray({}))([ Data_Tuple.Tuple(_236.values[1])(_236.values[2]) ])(toList(_236.values[3])));
    };
    if (_236.ctor === "Data.Map.Three") {
        return Prelude["++"](Data_Array.semigroupArray({}))(toList(_236.values[0]))(Prelude["++"](Data_Array.semigroupArray({}))([ Data_Tuple.Tuple(_236.values[1])(_236.values[2]) ])(Prelude["++"](Data_Array.semigroupArray({}))(toList(_236.values[3]))(Prelude["++"](Data_Array.semigroupArray({}))([ Data_Tuple.Tuple(_236.values[4])(_236.values[5]) ])(toList(_236.values[6])))));
    };
    throw "Failed pattern match";
};
var singleton = function (k) {
    return function (v) {
        return Two(Leaf)(k)(v)(Leaf);
    };
};
var showTree = function (__dict_Show_0) {
    return function (__dict_Show_1) {
        return function (_230) {
            if (_230.ctor === "Data.Map.Leaf") {
                return "Leaf";
            };
            if (_230.ctor === "Data.Map.Two") {
                return "Two (" + showTree(__dict_Show_0)(__dict_Show_1)(_230.values[0]) + ") (" + Prelude.show(__dict_Show_0)(_230.values[1]) + ") (" + Prelude.show(__dict_Show_1)(_230.values[2]) + ") (" + showTree(__dict_Show_0)(__dict_Show_1)(_230.values[3]) + ")";
            };
            if (_230.ctor === "Data.Map.Three") {
                return "Three (" + showTree(__dict_Show_0)(__dict_Show_1)(_230.values[0]) + ") (" + Prelude.show(__dict_Show_0)(_230.values[1]) + ") (" + Prelude.show(__dict_Show_1)(_230.values[2]) + ") (" + showTree(__dict_Show_0)(__dict_Show_1)(_230.values[3]) + ") (" + Prelude.show(__dict_Show_0)(_230.values[4]) + ") (" + Prelude.show(__dict_Show_1)(_230.values[5]) + ") (" + showTree(__dict_Show_0)(__dict_Show_1)(_230.values[6]) + ")";
            };
            throw "Failed pattern match";
        };
    };
};
var showMap = function (__dict_Show_2) {
    return function (__dict_Show_3) {
        return {
            show: function (m) {
                return "fromList " + Prelude.show(Prelude.showArray(Data_Tuple.showTuple(__dict_Show_2)(__dict_Show_3)))(toList(m));
            }
        };
    };
};
var lookup = function (__copy___dict_Ord_4) {
    return function (__copy__232) {
        return function (__copy__233) {
            var __dict_Ord_4 = __copy___dict_Ord_4;
            var _232 = __copy__232;
            var _233 = __copy__233;
            tco: while (true) {
                var _ = _232;
                if (_233.ctor === "Data.Map.Leaf") {
                    return Data_Maybe.Nothing;
                };
                var k = _232;
                if (_233.ctor === "Data.Map.Two") {
                    if (Prelude["=="](__dict_Ord_4["__superclasses"]["Prelude.Eq_0"]({}))(k)(_233.values[1])) {
                        return Data_Maybe.Just(_233.values[2]);
                    };
                };
                var k = _232;
                if (_233.ctor === "Data.Map.Two") {
                    if (Prelude["<"](__dict_Ord_4)(k)(_233.values[1])) {
                        var __tco___dict_Ord_4 = __dict_Ord_4;
                        var __tco__233 = _233.values[0];
                        __dict_Ord_4 = __tco___dict_Ord_4;
                        _232 = k;
                        _233 = __tco__233;
                        continue tco;
                    };
                };
                var k = _232;
                if (_233.ctor === "Data.Map.Two") {
                    var _ = _233.values[0];
                    var _ = _233.values[1];
                    var __tco___dict_Ord_4 = __dict_Ord_4;
                    var __tco__233 = _233.values[3];
                    __dict_Ord_4 = __tco___dict_Ord_4;
                    _232 = k;
                    _233 = __tco__233;
                    continue tco;
                };
                var k = _232;
                if (_233.ctor === "Data.Map.Three") {
                    if (Prelude["=="](__dict_Ord_4["__superclasses"]["Prelude.Eq_0"]({}))(k)(_233.values[1])) {
                        return Data_Maybe.Just(_233.values[2]);
                    };
                };
                var k = _232;
                if (_233.ctor === "Data.Map.Three") {
                    if (Prelude["=="](__dict_Ord_4["__superclasses"]["Prelude.Eq_0"]({}))(k)(_233.values[4])) {
                        return Data_Maybe.Just(_233.values[5]);
                    };
                };
                var k = _232;
                if (_233.ctor === "Data.Map.Three") {
                    var _ = _233.values[2];
                    var _ = _233.values[3];
                    var _ = _233.values[4];
                    if (Prelude["<"](__dict_Ord_4)(k)(_233.values[1])) {
                        var __tco___dict_Ord_4 = __dict_Ord_4;
                        var __tco__233 = _233.values[0];
                        __dict_Ord_4 = __tco___dict_Ord_4;
                        _232 = k;
                        _233 = __tco__233;
                        continue tco;
                    };
                };
                var k = _232;
                if (_233.ctor === "Data.Map.Three") {
                    var _ = _233.values[0];
                    var _ = _233.values[2];
                    if (Prelude["<"](__dict_Ord_4)(_233.values[1])(k) && Prelude["<="](__dict_Ord_4)(k)(_233.values[4])) {
                        var __tco___dict_Ord_4 = __dict_Ord_4;
                        var __tco__233 = _233.values[3];
                        __dict_Ord_4 = __tco___dict_Ord_4;
                        _232 = k;
                        _233 = __tco__233;
                        continue tco;
                    };
                };
                if (_233.ctor === "Data.Map.Three") {
                    var _ = _233.values[0];
                    var _ = _233.values[1];
                    var _ = _233.values[2];
                    var _ = _233.values[3];
                    var _ = _233.values[4];
                    var __tco___dict_Ord_4 = __dict_Ord_4;
                    var __tco__232 = _232;
                    var __tco__233 = _233.values[6];
                    __dict_Ord_4 = __tco___dict_Ord_4;
                    _232 = __tco__232;
                    _233 = __tco__233;
                    continue tco;
                };
                throw "Failed pattern match";
            };
        };
    };
};
var member = function (__dict_Ord_5) {
    return function (k) {
        return function (m) {
            return Data_Maybe.isJust(lookup(__dict_Ord_5)(k)(m));
        };
    };
};
var keys = function (_237) {
    if (_237.ctor === "Data.Map.Leaf") {
        return [  ];
    };
    if (_237.ctor === "Data.Map.Two") {
        return Prelude["++"](Data_Array.semigroupArray({}))(keys(_237.values[0]))(Prelude["++"](Data_Array.semigroupArray({}))([ _237.values[1] ])(keys(_237.values[3])));
    };
    if (_237.ctor === "Data.Map.Three") {
        return Prelude["++"](Data_Array.semigroupArray({}))(keys(_237.values[0]))(Prelude["++"](Data_Array.semigroupArray({}))([ _237.values[1] ])(Prelude["++"](Data_Array.semigroupArray({}))(keys(_237.values[3]))(Prelude["++"](Data_Array.semigroupArray({}))([ _237.values[4] ])(keys(_237.values[6])))));
    };
    throw "Failed pattern match";
};
var isEmpty = function (_231) {
    if (_231.ctor === "Data.Map.Leaf") {
        return true;
    };
    return false;
};
var functorMap = function (_) {
    return {
        "<$>": function (_239) {
            return function (_240) {
                if (_240.ctor === "Data.Map.Leaf") {
                    return Leaf;
                };
                if (_240.ctor === "Data.Map.Two") {
                    return Two(Prelude["<$>"](functorMap({}))(_239)(_240.values[0]))(_240.values[1])(_239(_240.values[2]))(Prelude["<$>"](functorMap({}))(_239)(_240.values[3]));
                };
                if (_240.ctor === "Data.Map.Three") {
                    return Three(Prelude["<$>"](functorMap({}))(_239)(_240.values[0]))(_240.values[1])(_239(_240.values[2]))(Prelude["<$>"](functorMap({}))(_239)(_240.values[3]))(_240.values[4])(_239(_240.values[5]))(Prelude["<$>"](functorMap({}))(_239)(_240.values[6]));
                };
                throw "Failed pattern match";
            };
        }
    };
};
var map = Prelude["<$>"](functorMap({}));
var fromZipper = function (__copy___dict_Ord_6) {
    return function (__copy__234) {
        return function (__copy__235) {
            var __dict_Ord_6 = __copy___dict_Ord_6;
            var _234 = __copy__234;
            var _235 = __copy__235;
            tco: while (true) {
                if (_234.length === 0) {
                    return _235;
                };
                if (_234.length > 0) {
                    var _831 = _234.slice(1);
                    if ((_234[0]).ctor === "Data.Map.TwoLeft") {
                        var __tco___dict_Ord_6 = __dict_Ord_6;
                        var __tco__235 = Two(_235)((_234[0]).values[0])((_234[0]).values[1])((_234[0]).values[2]);
                        __dict_Ord_6 = __tco___dict_Ord_6;
                        _234 = _831;
                        _235 = __tco__235;
                        continue tco;
                    };
                };
                if (_234.length > 0) {
                    var _836 = _234.slice(1);
                    if ((_234[0]).ctor === "Data.Map.TwoRight") {
                        var __tco___dict_Ord_6 = __dict_Ord_6;
                        var __tco__235 = Two((_234[0]).values[0])((_234[0]).values[1])((_234[0]).values[2])(_235);
                        __dict_Ord_6 = __tco___dict_Ord_6;
                        _234 = _836;
                        _235 = __tco__235;
                        continue tco;
                    };
                };
                if (_234.length > 0) {
                    var _841 = _234.slice(1);
                    if ((_234[0]).ctor === "Data.Map.ThreeLeft") {
                        var __tco___dict_Ord_6 = __dict_Ord_6;
                        var __tco__235 = Three(_235)((_234[0]).values[0])((_234[0]).values[1])((_234[0]).values[2])((_234[0]).values[3])((_234[0]).values[4])((_234[0]).values[5]);
                        __dict_Ord_6 = __tco___dict_Ord_6;
                        _234 = _841;
                        _235 = __tco__235;
                        continue tco;
                    };
                };
                if (_234.length > 0) {
                    var _849 = _234.slice(1);
                    if ((_234[0]).ctor === "Data.Map.ThreeMiddle") {
                        var __tco___dict_Ord_6 = __dict_Ord_6;
                        var __tco__235 = Three((_234[0]).values[0])((_234[0]).values[1])((_234[0]).values[2])(_235)((_234[0]).values[3])((_234[0]).values[4])((_234[0]).values[5]);
                        __dict_Ord_6 = __tco___dict_Ord_6;
                        _234 = _849;
                        _235 = __tco__235;
                        continue tco;
                    };
                };
                if (_234.length > 0) {
                    var _857 = _234.slice(1);
                    if ((_234[0]).ctor === "Data.Map.ThreeRight") {
                        var __tco___dict_Ord_6 = __dict_Ord_6;
                        var __tco__235 = Three((_234[0]).values[0])((_234[0]).values[1])((_234[0]).values[2])((_234[0]).values[3])((_234[0]).values[4])((_234[0]).values[5])(_235);
                        __dict_Ord_6 = __tco___dict_Ord_6;
                        _234 = _857;
                        _235 = __tco__235;
                        continue tco;
                    };
                };
                throw "Failed pattern match";
            };
        };
    };
};
var insert = function (__dict_Ord_7) {
    var up = function (__copy___dict_Ord_8) {
        return function (__copy__246) {
            return function (__copy__247) {
                var __dict_Ord_8 = __copy___dict_Ord_8;
                var _246 = __copy__246;
                var _247 = __copy__247;
                tco: while (true) {
                    if (_246.length === 0) {
                        return Two(_247.values[0])(_247.values[1])(_247.values[2])(_247.values[3]);
                    };
                    if (_246.length > 0) {
                        var _875 = _246.slice(1);
                        if ((_246[0]).ctor === "Data.Map.TwoLeft") {
                            return fromZipper(__dict_Ord_8)(_875)(Three(_247.values[0])(_247.values[1])(_247.values[2])(_247.values[3])((_246[0]).values[0])((_246[0]).values[1])((_246[0]).values[2]));
                        };
                    };
                    if (_246.length > 0) {
                        var _884 = _246.slice(1);
                        if ((_246[0]).ctor === "Data.Map.TwoRight") {
                            return fromZipper(__dict_Ord_8)(_884)(Three((_246[0]).values[0])((_246[0]).values[1])((_246[0]).values[2])(_247.values[0])(_247.values[1])(_247.values[2])(_247.values[3]));
                        };
                    };
                    if (_246.length > 0) {
                        var _893 = _246.slice(1);
                        if ((_246[0]).ctor === "Data.Map.ThreeLeft") {
                            var __tco___dict_Ord_8 = __dict_Ord_8;
                            var __tco__247 = KickUp(Two(_247.values[0])(_247.values[1])(_247.values[2])(_247.values[3]))((_246[0]).values[0])((_246[0]).values[1])(Two((_246[0]).values[2])((_246[0]).values[3])((_246[0]).values[4])((_246[0]).values[5]));
                            __dict_Ord_8 = __tco___dict_Ord_8;
                            _246 = _893;
                            _247 = __tco__247;
                            continue tco;
                        };
                    };
                    if (_246.length > 0) {
                        var _905 = _246.slice(1);
                        if ((_246[0]).ctor === "Data.Map.ThreeMiddle") {
                            var __tco___dict_Ord_8 = __dict_Ord_8;
                            var __tco__247 = KickUp(Two((_246[0]).values[0])((_246[0]).values[1])((_246[0]).values[2])(_247.values[0]))(_247.values[1])(_247.values[2])(Two(_247.values[3])((_246[0]).values[3])((_246[0]).values[4])((_246[0]).values[5]));
                            __dict_Ord_8 = __tco___dict_Ord_8;
                            _246 = _905;
                            _247 = __tco__247;
                            continue tco;
                        };
                    };
                    if (_246.length > 0) {
                        var _917 = _246.slice(1);
                        if ((_246[0]).ctor === "Data.Map.ThreeRight") {
                            var __tco___dict_Ord_8 = __dict_Ord_8;
                            var __tco__247 = KickUp(Two((_246[0]).values[0])((_246[0]).values[1])((_246[0]).values[2])((_246[0]).values[3]))((_246[0]).values[4])((_246[0]).values[5])(Two(_247.values[0])(_247.values[1])(_247.values[2])(_247.values[3]));
                            __dict_Ord_8 = __tco___dict_Ord_8;
                            _246 = _917;
                            _247 = __tco__247;
                            continue tco;
                        };
                    };
                    throw "Failed pattern match";
                };
            };
        };
    };
    var down = function (__copy___dict_Ord_9) {
        return function (__copy__242) {
            return function (__copy__243) {
                return function (__copy__244) {
                    return function (__copy__245) {
                        var __dict_Ord_9 = __copy___dict_Ord_9;
                        var _242 = __copy__242;
                        var _243 = __copy__243;
                        var _244 = __copy__244;
                        var _245 = __copy__245;
                        tco: while (true) {
                            var ctx = _242;
                            var k = _243;
                            var v = _244;
                            if (_245.ctor === "Data.Map.Leaf") {
                                return up(__dict_Ord_9)(ctx)(KickUp(Leaf)(k)(v)(Leaf));
                            };
                            var ctx = _242;
                            var k = _243;
                            var v = _244;
                            if (_245.ctor === "Data.Map.Two") {
                                if (Prelude["=="](__dict_Ord_9["__superclasses"]["Prelude.Eq_0"]({}))(k)(_245.values[1])) {
                                    return fromZipper(__dict_Ord_9)(ctx)(Two(_245.values[0])(k)(v)(_245.values[3]));
                                };
                            };
                            var ctx = _242;
                            var k = _243;
                            var v = _244;
                            if (_245.ctor === "Data.Map.Two") {
                                if (Prelude["<"](__dict_Ord_9)(k)(_245.values[1])) {
                                    var __tco___dict_Ord_9 = __dict_Ord_9;
                                    var __tco__242 = Prelude[":"](TwoLeft(_245.values[1])(_245.values[2])(_245.values[3]))(ctx);
                                    var __tco__245 = _245.values[0];
                                    __dict_Ord_9 = __tco___dict_Ord_9;
                                    _242 = __tco__242;
                                    _243 = k;
                                    _244 = v;
                                    _245 = __tco__245;
                                    continue tco;
                                };
                            };
                            var ctx = _242;
                            var k = _243;
                            var v = _244;
                            if (_245.ctor === "Data.Map.Two") {
                                var __tco___dict_Ord_9 = __dict_Ord_9;
                                var __tco__242 = Prelude[":"](TwoRight(_245.values[0])(_245.values[1])(_245.values[2]))(ctx);
                                var __tco__245 = _245.values[3];
                                __dict_Ord_9 = __tco___dict_Ord_9;
                                _242 = __tco__242;
                                _243 = k;
                                _244 = v;
                                _245 = __tco__245;
                                continue tco;
                            };
                            var ctx = _242;
                            var k = _243;
                            var v = _244;
                            if (_245.ctor === "Data.Map.Three") {
                                if (Prelude["=="](__dict_Ord_9["__superclasses"]["Prelude.Eq_0"]({}))(k)(_245.values[1])) {
                                    return fromZipper(__dict_Ord_9)(ctx)(Three(_245.values[0])(k)(v)(_245.values[3])(_245.values[4])(_245.values[5])(_245.values[6]));
                                };
                            };
                            var ctx = _242;
                            var k = _243;
                            var v = _244;
                            if (_245.ctor === "Data.Map.Three") {
                                if (Prelude["=="](__dict_Ord_9["__superclasses"]["Prelude.Eq_0"]({}))(k)(_245.values[4])) {
                                    return fromZipper(__dict_Ord_9)(ctx)(Three(_245.values[0])(_245.values[1])(_245.values[2])(_245.values[3])(k)(v)(_245.values[6]));
                                };
                            };
                            var ctx = _242;
                            var k = _243;
                            var v = _244;
                            if (_245.ctor === "Data.Map.Three") {
                                if (Prelude["<"](__dict_Ord_9)(k)(_245.values[1])) {
                                    var __tco___dict_Ord_9 = __dict_Ord_9;
                                    var __tco__242 = Prelude[":"](ThreeLeft(_245.values[1])(_245.values[2])(_245.values[3])(_245.values[4])(_245.values[5])(_245.values[6]))(ctx);
                                    var __tco__245 = _245.values[0];
                                    __dict_Ord_9 = __tco___dict_Ord_9;
                                    _242 = __tco__242;
                                    _243 = k;
                                    _244 = v;
                                    _245 = __tco__245;
                                    continue tco;
                                };
                            };
                            var ctx = _242;
                            var k = _243;
                            var v = _244;
                            if (_245.ctor === "Data.Map.Three") {
                                if (Prelude["<"](__dict_Ord_9)(_245.values[1])(k) && Prelude["<="](__dict_Ord_9)(k)(_245.values[4])) {
                                    var __tco___dict_Ord_9 = __dict_Ord_9;
                                    var __tco__242 = Prelude[":"](ThreeMiddle(_245.values[0])(_245.values[1])(_245.values[2])(_245.values[4])(_245.values[5])(_245.values[6]))(ctx);
                                    var __tco__245 = _245.values[3];
                                    __dict_Ord_9 = __tco___dict_Ord_9;
                                    _242 = __tco__242;
                                    _243 = k;
                                    _244 = v;
                                    _245 = __tco__245;
                                    continue tco;
                                };
                            };
                            if (_245.ctor === "Data.Map.Three") {
                                var __tco___dict_Ord_9 = __dict_Ord_9;
                                var __tco__242 = Prelude[":"](ThreeRight(_245.values[0])(_245.values[1])(_245.values[2])(_245.values[3])(_245.values[4])(_245.values[5]))(_242);
                                var __tco__243 = _243;
                                var __tco__244 = _244;
                                var __tco__245 = _245.values[6];
                                __dict_Ord_9 = __tco___dict_Ord_9;
                                _242 = __tco__242;
                                _243 = __tco__243;
                                _244 = __tco__244;
                                _245 = __tco__245;
                                continue tco;
                            };
                            throw "Failed pattern match";
                        };
                    };
                };
            };
        };
    };
    return down(__dict_Ord_7)([  ]);
};
var union = function (__dict_Ord_10) {
    return function (m1) {
        return function (m2) {
            return Data_Foldable.foldl(Data_Foldable.foldableArray({}))(function (m) {
                return function (_229) {
                    return insert(__dict_Ord_10)(_229.values[0])(_229.values[1])(m);
                };
            })(m2)(toList(m1));
        };
    };
};
var eqMap = function (__dict_Eq_11) {
    return function (__dict_Eq_12) {
        return {
            "==": function (m1) {
                return function (m2) {
                    return Prelude["=="](Prelude.eqArray(Data_Tuple.eqTuple(__dict_Eq_11)(__dict_Eq_12)))(toList(m1))(toList(m2));
                };
            }, 
            "/=": function (m1) {
                return function (m2) {
                    return !Prelude["=="](eqMap(__dict_Eq_11)(__dict_Eq_12))(m1)(m2);
                };
            }
        };
    };
};
var empty = Leaf;
var fromList = function (__dict_Ord_13) {
    return Data_Foldable.foldl(Data_Foldable.foldableArray({}))(function (m) {
        return function (_228) {
            return insert(__dict_Ord_13)(_228.values[0])(_228.values[1])(m);
        };
    })(empty);
};
var unions = function (__dict_Ord_14) {
    return Data_Foldable.foldl(Data_Foldable.foldableArray({}))(union(__dict_Ord_14))(empty);
};
var $$delete = function (__dict_Ord_15) {
    var up = function (__copy___dict_Ord_16) {
        return function (__copy__251) {
            return function (__copy__252) {
                var __dict_Ord_16 = __copy___dict_Ord_16;
                var _251 = __copy__251;
                var _252 = __copy__252;
                tco: while (true) {
                    if (_251.length === 0) {
                        return _252;
                    };
                    if (_251.length > 0) {
                        var _984 = _251.slice(1);
                        if ((_251[0]).ctor === "Data.Map.TwoLeft") {
                            if (((_251[0]).values[2]).ctor === "Data.Map.Leaf") {
                                if (_252.ctor === "Data.Map.Leaf") {
                                    return fromZipper(__dict_Ord_16)(_984)(Two(Leaf)((_251[0]).values[0])((_251[0]).values[1])(Leaf));
                                };
                            };
                        };
                    };
                    if (_251.length > 0) {
                        var _989 = _251.slice(1);
                        if ((_251[0]).ctor === "Data.Map.TwoRight") {
                            if (((_251[0]).values[0]).ctor === "Data.Map.Leaf") {
                                if (_252.ctor === "Data.Map.Leaf") {
                                    return fromZipper(__dict_Ord_16)(_989)(Two(Leaf)((_251[0]).values[1])((_251[0]).values[2])(Leaf));
                                };
                            };
                        };
                    };
                    if (_251.length > 0) {
                        var _994 = _251.slice(1);
                        if ((_251[0]).ctor === "Data.Map.TwoLeft") {
                            if (((_251[0]).values[2]).ctor === "Data.Map.Two") {
                                var __tco___dict_Ord_16 = __dict_Ord_16;
                                var __tco__252 = Three(_252)((_251[0]).values[0])((_251[0]).values[1])(((_251[0]).values[2]).values[0])(((_251[0]).values[2]).values[1])(((_251[0]).values[2]).values[2])(((_251[0]).values[2]).values[3]);
                                __dict_Ord_16 = __tco___dict_Ord_16;
                                _251 = _994;
                                _252 = __tco__252;
                                continue tco;
                            };
                        };
                    };
                    if (_251.length > 0) {
                        var _1003 = _251.slice(1);
                        if ((_251[0]).ctor === "Data.Map.TwoRight") {
                            if (((_251[0]).values[0]).ctor === "Data.Map.Two") {
                                var __tco___dict_Ord_16 = __dict_Ord_16;
                                var __tco__252 = Three(((_251[0]).values[0]).values[0])(((_251[0]).values[0]).values[1])(((_251[0]).values[0]).values[2])(((_251[0]).values[0]).values[3])((_251[0]).values[1])((_251[0]).values[2])(_252);
                                __dict_Ord_16 = __tco___dict_Ord_16;
                                _251 = _1003;
                                _252 = __tco__252;
                                continue tco;
                            };
                        };
                    };
                    if (_251.length > 0) {
                        var _1012 = _251.slice(1);
                        if ((_251[0]).ctor === "Data.Map.TwoLeft") {
                            if (((_251[0]).values[2]).ctor === "Data.Map.Three") {
                                return fromZipper(__dict_Ord_16)(_1012)(Two(Two(_252)((_251[0]).values[0])((_251[0]).values[1])(((_251[0]).values[2]).values[0]))(((_251[0]).values[2]).values[1])(((_251[0]).values[2]).values[2])(Two(((_251[0]).values[2]).values[3])(((_251[0]).values[2]).values[4])(((_251[0]).values[2]).values[5])(((_251[0]).values[2]).values[6])));
                            };
                        };
                    };
                    if (_251.length > 0) {
                        var _1024 = _251.slice(1);
                        if ((_251[0]).ctor === "Data.Map.TwoRight") {
                            if (((_251[0]).values[0]).ctor === "Data.Map.Three") {
                                return fromZipper(__dict_Ord_16)(_1024)(Two(Two(((_251[0]).values[0]).values[0])(((_251[0]).values[0]).values[1])(((_251[0]).values[0]).values[2])(((_251[0]).values[0]).values[3]))(((_251[0]).values[0]).values[4])(((_251[0]).values[0]).values[5])(Two(((_251[0]).values[0]).values[6])((_251[0]).values[1])((_251[0]).values[2])(_252)));
                            };
                        };
                    };
                    if (_251.length > 0) {
                        var _1036 = _251.slice(1);
                        if ((_251[0]).ctor === "Data.Map.ThreeLeft") {
                            if (((_251[0]).values[2]).ctor === "Data.Map.Leaf") {
                                if (((_251[0]).values[5]).ctor === "Data.Map.Leaf") {
                                    if (_252.ctor === "Data.Map.Leaf") {
                                        return fromZipper(__dict_Ord_16)(_1036)(Three(Leaf)((_251[0]).values[0])((_251[0]).values[1])(Leaf)((_251[0]).values[3])((_251[0]).values[4])(Leaf));
                                    };
                                };
                            };
                        };
                    };
                    if (_251.length > 0) {
                        var _1044 = _251.slice(1);
                        if ((_251[0]).ctor === "Data.Map.ThreeMiddle") {
                            if (((_251[0]).values[0]).ctor === "Data.Map.Leaf") {
                                if (((_251[0]).values[5]).ctor === "Data.Map.Leaf") {
                                    if (_252.ctor === "Data.Map.Leaf") {
                                        return fromZipper(__dict_Ord_16)(_1044)(Three(Leaf)((_251[0]).values[1])((_251[0]).values[2])(Leaf)((_251[0]).values[3])((_251[0]).values[4])(Leaf));
                                    };
                                };
                            };
                        };
                    };
                    if (_251.length > 0) {
                        var _1052 = _251.slice(1);
                        if ((_251[0]).ctor === "Data.Map.ThreeRight") {
                            if (((_251[0]).values[0]).ctor === "Data.Map.Leaf") {
                                if (((_251[0]).values[3]).ctor === "Data.Map.Leaf") {
                                    if (_252.ctor === "Data.Map.Leaf") {
                                        return fromZipper(__dict_Ord_16)(_1052)(Three(Leaf)((_251[0]).values[1])((_251[0]).values[2])(Leaf)((_251[0]).values[4])((_251[0]).values[5])(Leaf));
                                    };
                                };
                            };
                        };
                    };
                    if (_251.length > 0) {
                        var _1060 = _251.slice(1);
                        if ((_251[0]).ctor === "Data.Map.ThreeLeft") {
                            if (((_251[0]).values[2]).ctor === "Data.Map.Two") {
                                return fromZipper(__dict_Ord_16)(_1060)(Two(Three(_252)((_251[0]).values[0])((_251[0]).values[1])(((_251[0]).values[2]).values[0])(((_251[0]).values[2]).values[1])(((_251[0]).values[2]).values[2])(((_251[0]).values[2]).values[3]))((_251[0]).values[3])((_251[0]).values[4])((_251[0]).values[5]));
                            };
                        };
                    };
                    if (_251.length > 0) {
                        var _1072 = _251.slice(1);
                        if ((_251[0]).ctor === "Data.Map.ThreeMiddle") {
                            if (((_251[0]).values[0]).ctor === "Data.Map.Two") {
                                return fromZipper(__dict_Ord_16)(_1072)(Two(Three(((_251[0]).values[0]).values[0])(((_251[0]).values[0]).values[1])(((_251[0]).values[0]).values[2])(((_251[0]).values[0]).values[3])((_251[0]).values[1])((_251[0]).values[2])(_252))((_251[0]).values[3])((_251[0]).values[4])((_251[0]).values[5]));
                            };
                        };
                    };
                    if (_251.length > 0) {
                        var _1084 = _251.slice(1);
                        if ((_251[0]).ctor === "Data.Map.ThreeMiddle") {
                            if (((_251[0]).values[5]).ctor === "Data.Map.Two") {
                                return fromZipper(__dict_Ord_16)(_1084)(Two((_251[0]).values[0])((_251[0]).values[1])((_251[0]).values[2])(Three(_252)((_251[0]).values[3])((_251[0]).values[4])(((_251[0]).values[5]).values[0])(((_251[0]).values[5]).values[1])(((_251[0]).values[5]).values[2])(((_251[0]).values[5]).values[3])));
                            };
                        };
                    };
                    if (_251.length > 0) {
                        var _1096 = _251.slice(1);
                        if ((_251[0]).ctor === "Data.Map.ThreeRight") {
                            if (((_251[0]).values[3]).ctor === "Data.Map.Two") {
                                return fromZipper(__dict_Ord_16)(_1096)(Two((_251[0]).values[0])((_251[0]).values[1])((_251[0]).values[2])(Three(((_251[0]).values[3]).values[0])(((_251[0]).values[3]).values[1])(((_251[0]).values[3]).values[2])(((_251[0]).values[3]).values[3])((_251[0]).values[4])((_251[0]).values[5])(_252)));
                            };
                        };
                    };
                    if (_251.length > 0) {
                        var _1108 = _251.slice(1);
                        if ((_251[0]).ctor === "Data.Map.ThreeLeft") {
                            if (((_251[0]).values[2]).ctor === "Data.Map.Three") {
                                return fromZipper(__dict_Ord_16)(_1108)(Three(Two(_252)((_251[0]).values[0])((_251[0]).values[1])(((_251[0]).values[2]).values[0]))(((_251[0]).values[2]).values[1])(((_251[0]).values[2]).values[2])(Two(((_251[0]).values[2]).values[3])(((_251[0]).values[2]).values[4])(((_251[0]).values[2]).values[5])(((_251[0]).values[2]).values[6]))((_251[0]).values[3])((_251[0]).values[4])((_251[0]).values[5]));
                            };
                        };
                    };
                    if (_251.length > 0) {
                        var _1123 = _251.slice(1);
                        if ((_251[0]).ctor === "Data.Map.ThreeMiddle") {
                            if (((_251[0]).values[0]).ctor === "Data.Map.Three") {
                                return fromZipper(__dict_Ord_16)(_1123)(Three(Two(((_251[0]).values[0]).values[0])(((_251[0]).values[0]).values[1])(((_251[0]).values[0]).values[2])(((_251[0]).values[0]).values[3]))(((_251[0]).values[0]).values[4])(((_251[0]).values[0]).values[5])(Two(((_251[0]).values[0]).values[6])((_251[0]).values[1])((_251[0]).values[2])(_252))((_251[0]).values[3])((_251[0]).values[4])((_251[0]).values[5]));
                            };
                        };
                    };
                    if (_251.length > 0) {
                        var _1138 = _251.slice(1);
                        if ((_251[0]).ctor === "Data.Map.ThreeMiddle") {
                            if (((_251[0]).values[5]).ctor === "Data.Map.Three") {
                                return fromZipper(__dict_Ord_16)(_1138)(Three((_251[0]).values[0])((_251[0]).values[1])((_251[0]).values[2])(Two(_252)((_251[0]).values[3])((_251[0]).values[4])(((_251[0]).values[5]).values[0]))(((_251[0]).values[5]).values[1])(((_251[0]).values[5]).values[2])(Two(((_251[0]).values[5]).values[3])(((_251[0]).values[5]).values[4])(((_251[0]).values[5]).values[5])(((_251[0]).values[5]).values[6])));
                            };
                        };
                    };
                    if (_251.length > 0) {
                        var _1153 = _251.slice(1);
                        if ((_251[0]).ctor === "Data.Map.ThreeRight") {
                            if (((_251[0]).values[3]).ctor === "Data.Map.Three") {
                                return fromZipper(__dict_Ord_16)(_1153)(Three((_251[0]).values[0])((_251[0]).values[1])((_251[0]).values[2])(Two(((_251[0]).values[3]).values[0])(((_251[0]).values[3]).values[1])(((_251[0]).values[3]).values[2])(((_251[0]).values[3]).values[3]))(((_251[0]).values[3]).values[4])(((_251[0]).values[3]).values[5])(Two(((_251[0]).values[3]).values[6])((_251[0]).values[4])((_251[0]).values[5])(_252)));
                            };
                        };
                    };
                    throw "Failed pattern match";
                };
            };
        };
    };
    var removeMaxNode = function (__copy___dict_Ord_17) {
        return function (__copy__254) {
            return function (__copy__255) {
                var __dict_Ord_17 = __copy___dict_Ord_17;
                var _254 = __copy__254;
                var _255 = __copy__255;
                tco: while (true) {
                    var ctx = _254;
                    if (_255.ctor === "Data.Map.Two") {
                        if ((_255.values[0]).ctor === "Data.Map.Leaf") {
                            if ((_255.values[3]).ctor === "Data.Map.Leaf") {
                                return up(__dict_Ord_17)(ctx)(Leaf);
                            };
                        };
                    };
                    var ctx = _254;
                    if (_255.ctor === "Data.Map.Two") {
                        var __tco___dict_Ord_17 = __dict_Ord_17;
                        var __tco__254 = Prelude[":"](TwoRight(_255.values[0])(_255.values[1])(_255.values[2]))(ctx);
                        var __tco__255 = _255.values[3];
                        __dict_Ord_17 = __tco___dict_Ord_17;
                        _254 = __tco__254;
                        _255 = __tco__255;
                        continue tco;
                    };
                    var ctx = _254;
                    if (_255.ctor === "Data.Map.Three") {
                        if ((_255.values[0]).ctor === "Data.Map.Leaf") {
                            if ((_255.values[3]).ctor === "Data.Map.Leaf") {
                                if ((_255.values[6]).ctor === "Data.Map.Leaf") {
                                    return up(__dict_Ord_17)(Prelude[":"](TwoRight(Leaf)(_255.values[1])(_255.values[2]))(ctx))(Leaf);
                                };
                            };
                        };
                    };
                    if (_255.ctor === "Data.Map.Three") {
                        var __tco___dict_Ord_17 = __dict_Ord_17;
                        var __tco__254 = Prelude[":"](ThreeRight(_255.values[0])(_255.values[1])(_255.values[2])(_255.values[3])(_255.values[4])(_255.values[5]))(_254);
                        var __tco__255 = _255.values[6];
                        __dict_Ord_17 = __tco___dict_Ord_17;
                        _254 = __tco__254;
                        _255 = __tco__255;
                        continue tco;
                    };
                    throw "Failed pattern match";
                };
            };
        };
    };
    var maxNode = function (__copy___dict_Ord_18) {
        return function (__copy__253) {
            var __dict_Ord_18 = __copy___dict_Ord_18;
            var _253 = __copy__253;
            tco: while (true) {
                if (_253.ctor === "Data.Map.Two") {
                    if ((_253.values[3]).ctor === "Data.Map.Leaf") {
                        return {
                            key: _253.values[1], 
                            value: _253.values[2]
                        };
                    };
                };
                if (_253.ctor === "Data.Map.Two") {
                    var _ = _253.values[0];
                    var _ = _253.values[1];
                    var __tco___dict_Ord_18 = __dict_Ord_18;
                    var __tco__253 = _253.values[3];
                    __dict_Ord_18 = __tco___dict_Ord_18;
                    _253 = __tco__253;
                    continue tco;
                };
                if (_253.ctor === "Data.Map.Three") {
                    if ((_253.values[6]).ctor === "Data.Map.Leaf") {
                        return {
                            key: _253.values[4], 
                            value: _253.values[5]
                        };
                    };
                };
                if (_253.ctor === "Data.Map.Three") {
                    var _ = _253.values[0];
                    var _ = _253.values[1];
                    var _ = _253.values[2];
                    var _ = _253.values[3];
                    var _ = _253.values[4];
                    var __tco___dict_Ord_18 = __dict_Ord_18;
                    var __tco__253 = _253.values[6];
                    __dict_Ord_18 = __tco___dict_Ord_18;
                    _253 = __tco__253;
                    continue tco;
                };
                throw "Failed pattern match";
            };
        };
    };
    var down = function (__copy___dict_Ord_19) {
        return function (__copy__248) {
            return function (__copy__249) {
                return function (__copy__250) {
                    var __dict_Ord_19 = __copy___dict_Ord_19;
                    var _248 = __copy__248;
                    var _249 = __copy__249;
                    var _250 = __copy__250;
                    tco: while (true) {
                        var ctx = _248;
                        if (_250.ctor === "Data.Map.Leaf") {
                            return fromZipper(__dict_Ord_19)(ctx)(Leaf);
                        };
                        var ctx = _248;
                        var k = _249;
                        if (_250.ctor === "Data.Map.Two") {
                            if ((_250.values[0]).ctor === "Data.Map.Leaf") {
                                if ((_250.values[3]).ctor === "Data.Map.Leaf") {
                                    if (Prelude["=="](__dict_Ord_19["__superclasses"]["Prelude.Eq_0"]({}))(k)(_250.values[1])) {
                                        return up(__dict_Ord_19)(ctx)(Leaf);
                                    };
                                };
                            };
                        };
                        var ctx = _248;
                        var k = _249;
                        if (_250.ctor === "Data.Map.Two") {
                            if (Prelude["=="](__dict_Ord_19["__superclasses"]["Prelude.Eq_0"]({}))(k)(_250.values[1])) {
                                var max = maxNode(__dict_Ord_19)(_250.values[0]);
                                return removeMaxNode(__dict_Ord_19)(Prelude[":"](TwoLeft(max.key)(max.value)(_250.values[3]))(ctx))(_250.values[0]);
                            };
                        };
                        var ctx = _248;
                        var k = _249;
                        if (_250.ctor === "Data.Map.Two") {
                            if (Prelude["<"](__dict_Ord_19)(k)(_250.values[1])) {
                                var __tco___dict_Ord_19 = __dict_Ord_19;
                                var __tco__248 = Prelude[":"](TwoLeft(_250.values[1])(_250.values[2])(_250.values[3]))(ctx);
                                var __tco__250 = _250.values[0];
                                __dict_Ord_19 = __tco___dict_Ord_19;
                                _248 = __tco__248;
                                _249 = k;
                                _250 = __tco__250;
                                continue tco;
                            };
                        };
                        var ctx = _248;
                        var k = _249;
                        if (_250.ctor === "Data.Map.Two") {
                            var __tco___dict_Ord_19 = __dict_Ord_19;
                            var __tco__248 = Prelude[":"](TwoRight(_250.values[0])(_250.values[1])(_250.values[2]))(ctx);
                            var __tco__250 = _250.values[3];
                            __dict_Ord_19 = __tco___dict_Ord_19;
                            _248 = __tco__248;
                            _249 = k;
                            _250 = __tco__250;
                            continue tco;
                        };
                        var ctx = _248;
                        var k = _249;
                        if (_250.ctor === "Data.Map.Three") {
                            if ((_250.values[0]).ctor === "Data.Map.Leaf") {
                                if ((_250.values[3]).ctor === "Data.Map.Leaf") {
                                    if ((_250.values[6]).ctor === "Data.Map.Leaf") {
                                        if (Prelude["=="](__dict_Ord_19["__superclasses"]["Prelude.Eq_0"]({}))(k)(_250.values[1])) {
                                            return fromZipper(__dict_Ord_19)(ctx)(Two(Leaf)(_250.values[4])(_250.values[5])(Leaf));
                                        };
                                    };
                                };
                            };
                        };
                        var ctx = _248;
                        var k = _249;
                        if (_250.ctor === "Data.Map.Three") {
                            if ((_250.values[0]).ctor === "Data.Map.Leaf") {
                                if ((_250.values[3]).ctor === "Data.Map.Leaf") {
                                    if ((_250.values[6]).ctor === "Data.Map.Leaf") {
                                        if (Prelude["=="](__dict_Ord_19["__superclasses"]["Prelude.Eq_0"]({}))(k)(_250.values[4])) {
                                            return fromZipper(__dict_Ord_19)(ctx)(Two(Leaf)(_250.values[1])(_250.values[2])(Leaf));
                                        };
                                    };
                                };
                            };
                        };
                        var ctx = _248;
                        var k = _249;
                        if (_250.ctor === "Data.Map.Three") {
                            if (Prelude["=="](__dict_Ord_19["__superclasses"]["Prelude.Eq_0"]({}))(k)(_250.values[1])) {
                                var max = maxNode(__dict_Ord_19)(_250.values[0]);
                                return removeMaxNode(__dict_Ord_19)(Prelude[":"](ThreeLeft(max.key)(max.value)(_250.values[3])(_250.values[4])(_250.values[5])(_250.values[6]))(ctx))(_250.values[0]);
                            };
                        };
                        var ctx = _248;
                        var k = _249;
                        if (_250.ctor === "Data.Map.Three") {
                            if (Prelude["=="](__dict_Ord_19["__superclasses"]["Prelude.Eq_0"]({}))(k)(_250.values[4])) {
                                var max = maxNode(__dict_Ord_19)(_250.values[3]);
                                return removeMaxNode(__dict_Ord_19)(Prelude[":"](ThreeMiddle(_250.values[0])(_250.values[1])(_250.values[2])(max.key)(max.value)(_250.values[6]))(ctx))(_250.values[3]);
                            };
                        };
                        var ctx = _248;
                        var k = _249;
                        if (_250.ctor === "Data.Map.Three") {
                            if (Prelude["<"](__dict_Ord_19)(k)(_250.values[1])) {
                                var __tco___dict_Ord_19 = __dict_Ord_19;
                                var __tco__248 = Prelude[":"](ThreeLeft(_250.values[1])(_250.values[2])(_250.values[3])(_250.values[4])(_250.values[5])(_250.values[6]))(ctx);
                                var __tco__250 = _250.values[0];
                                __dict_Ord_19 = __tco___dict_Ord_19;
                                _248 = __tco__248;
                                _249 = k;
                                _250 = __tco__250;
                                continue tco;
                            };
                        };
                        var ctx = _248;
                        var k = _249;
                        if (_250.ctor === "Data.Map.Three") {
                            if (Prelude["<"](__dict_Ord_19)(_250.values[1])(k) && Prelude["<"](__dict_Ord_19)(k)(_250.values[4])) {
                                var __tco___dict_Ord_19 = __dict_Ord_19;
                                var __tco__248 = Prelude[":"](ThreeMiddle(_250.values[0])(_250.values[1])(_250.values[2])(_250.values[4])(_250.values[5])(_250.values[6]))(ctx);
                                var __tco__250 = _250.values[3];
                                __dict_Ord_19 = __tco___dict_Ord_19;
                                _248 = __tco__248;
                                _249 = k;
                                _250 = __tco__250;
                                continue tco;
                            };
                        };
                        if (_250.ctor === "Data.Map.Three") {
                            var __tco___dict_Ord_19 = __dict_Ord_19;
                            var __tco__248 = Prelude[":"](ThreeRight(_250.values[0])(_250.values[1])(_250.values[2])(_250.values[3])(_250.values[4])(_250.values[5]))(_248);
                            var __tco__249 = _249;
                            var __tco__250 = _250.values[6];
                            __dict_Ord_19 = __tco___dict_Ord_19;
                            _248 = __tco__248;
                            _249 = __tco__249;
                            _250 = __tco__250;
                            continue tco;
                        };
                        throw "Failed pattern match";
                    };
                };
            };
        };
    };
    return down(__dict_Ord_15)([  ]);
};
var checkValid = function (tree) {
    var allHeights = function (_241) {
        if (_241.ctor === "Data.Map.Leaf") {
            return [ 0 ];
        };
        if (_241.ctor === "Data.Map.Two") {
            return Data_Array.map(function (n) {
                return n + 1;
            })(Prelude["++"](Data_Array.semigroupArray({}))(allHeights(_241.values[0]))(allHeights(_241.values[3])));
        };
        if (_241.ctor === "Data.Map.Three") {
            return Data_Array.map(function (n) {
                return n + 1;
            })(Prelude["++"](Data_Array.semigroupArray({}))(allHeights(_241.values[0]))(Prelude["++"](Data_Array.semigroupArray({}))(allHeights(_241.values[3]))(allHeights(_241.values[6]))));
        };
        throw "Failed pattern match";
    };
    return Data_Array.length(Data_Array.nub(Prelude.eqNumber({}))(allHeights(tree))) === 1;
};
var alter = function (__dict_Ord_20) {
    return function (f) {
        return function (k) {
            return function (m) {
                return (function (_1294) {
                    if (_1294.ctor === "Data.Maybe.Nothing") {
                        return $$delete(__dict_Ord_20)(k)(m);
                    };
                    if (_1294.ctor === "Data.Maybe.Just") {
                        return insert(__dict_Ord_20)(k)(_1294.values[0])(m);
                    };
                    throw "Failed pattern match";
                })(f(lookup(__dict_Ord_20)(k)(m)));
            };
        };
    };
};
var update = function (__dict_Ord_21) {
    return function (f) {
        return function (k) {
            return function (m) {
                return alter(__dict_Ord_21)(Data_Maybe.maybe(Data_Maybe.Nothing)(f))(k)(m);
            };
        };
    };
};
module.exports = {
    map: map, 
    unions: unions, 
    union: union, 
    values: values, 
    keys: keys, 
    update: update, 
    alter: alter, 
    member: member, 
    "delete": $$delete, 
    fromList: fromList, 
    toList: toList, 
    lookup: lookup, 
    insert: insert, 
    checkValid: checkValid, 
    singleton: singleton, 
    isEmpty: isEmpty, 
    empty: empty, 
    showTree: showTree, 
    eqMap: eqMap, 
    showMap: showMap, 
    functorMap: functorMap
};
},{"Data.Array":5,"Data.Foldable":8,"Data.Maybe":10,"Data.Tuple":15,"Prelude":20}],10:[function(require,module,exports){
"use strict";
var Prelude = require("Prelude");
var Nothing = {
    ctor: "Data.Maybe.Nothing", 
    values: [  ]
};
var Just = function (value0) {
    return {
        ctor: "Data.Maybe.Just", 
        values: [ value0 ]
    };
};
var showMaybe = function (__dict_Show_0) {
    return {
        show: function (_56) {
            if (_56.ctor === "Data.Maybe.Just") {
                return "Just (" + Prelude.show(__dict_Show_0)(_56.values[0]) + ")";
            };
            if (_56.ctor === "Data.Maybe.Nothing") {
                return "Nothing";
            };
            throw "Failed pattern match";
        }
    };
};
var maybe = function (_45) {
    return function (_46) {
        return function (_47) {
            if (_47.ctor === "Data.Maybe.Nothing") {
                return _45;
            };
            if (_47.ctor === "Data.Maybe.Just") {
                return _46(_47.values[0]);
            };
            throw "Failed pattern match";
        };
    };
};
var isNothing = maybe(true)(Prelude["const"](false));
var isJust = maybe(false)(Prelude["const"](true));
var functorMaybe = function (_) {
    return {
        "<$>": function (_48) {
            return function (_49) {
                if (_49.ctor === "Data.Maybe.Just") {
                    return Just(_48(_49.values[0]));
                };
                return Nothing;
            };
        }
    };
};
var fromMaybe = function (a) {
    return maybe(a)(Prelude.id(Prelude.categoryArr({})));
};
var eqMaybe = function (__dict_Eq_2) {
    return {
        "==": function (_57) {
            return function (_58) {
                if (_57.ctor === "Data.Maybe.Nothing") {
                    if (_58.ctor === "Data.Maybe.Nothing") {
                        return true;
                    };
                };
                if (_57.ctor === "Data.Maybe.Just") {
                    if (_58.ctor === "Data.Maybe.Just") {
                        return Prelude["=="](__dict_Eq_2)(_57.values[0])(_58.values[0]);
                    };
                };
                return false;
            };
        }, 
        "/=": function (a) {
            return function (b) {
                return !Prelude["=="](eqMaybe(__dict_Eq_2))(a)(b);
            };
        }
    };
};
var ordMaybe = function (__dict_Ord_1) {
    return {
        "__superclasses": {
            "Prelude.Eq_0": function (_) {
                return eqMaybe(__dict_Ord_1["__superclasses"]["Prelude.Eq_0"]({}));
            }
        }, 
        compare: function (_59) {
            return function (_60) {
                if (_59.ctor === "Data.Maybe.Just") {
                    if (_60.ctor === "Data.Maybe.Just") {
                        return Prelude.compare(__dict_Ord_1)(_59.values[0])(_60.values[0]);
                    };
                };
                if (_59.ctor === "Data.Maybe.Nothing") {
                    if (_60.ctor === "Data.Maybe.Nothing") {
                        return Prelude.EQ;
                    };
                };
                if (_59.ctor === "Data.Maybe.Nothing") {
                    return Prelude.LT;
                };
                if (_60.ctor === "Data.Maybe.Nothing") {
                    return Prelude.GT;
                };
                throw "Failed pattern match";
            };
        }
    };
};
var applyMaybe = function (_) {
    return {
        "__superclasses": {
            "Prelude.Functor_0": function (_) {
                return functorMaybe({});
            }
        }, 
        "<*>": function (_50) {
            return function (_51) {
                if (_50.ctor === "Data.Maybe.Just") {
                    return Prelude["<$>"](functorMaybe({}))(_50.values[0])(_51);
                };
                if (_50.ctor === "Data.Maybe.Nothing") {
                    return Nothing;
                };
                throw "Failed pattern match";
            };
        }
    };
};
var bindMaybe = function (_) {
    return {
        "__superclasses": {
            "Prelude.Apply_0": function (_) {
                return applyMaybe({});
            }
        }, 
        ">>=": function (_54) {
            return function (_55) {
                if (_54.ctor === "Data.Maybe.Just") {
                    return _55(_54.values[0]);
                };
                if (_54.ctor === "Data.Maybe.Nothing") {
                    return Nothing;
                };
                throw "Failed pattern match";
            };
        }
    };
};
var applicativeMaybe = function (_) {
    return {
        "__superclasses": {
            "Prelude.Apply_0": function (_) {
                return applyMaybe({});
            }
        }, 
        pure: Just
    };
};
var monadMaybe = function (_) {
    return {
        "__superclasses": {
            "Prelude.Applicative_0": function (_) {
                return applicativeMaybe({});
            }, 
            "Prelude.Bind_1": function (_) {
                return bindMaybe({});
            }
        }
    };
};
var alternativeMaybe = function (_) {
    return {
        empty: Nothing, 
        "<|>": function (_52) {
            return function (_53) {
                if (_52.ctor === "Data.Maybe.Nothing") {
                    return _53;
                };
                return _52;
            };
        }
    };
};
module.exports = {
    Nothing: Nothing, 
    Just: Just, 
    isNothing: isNothing, 
    isJust: isJust, 
    fromMaybe: fromMaybe, 
    maybe: maybe, 
    functorMaybe: functorMaybe, 
    applyMaybe: applyMaybe, 
    applicativeMaybe: applicativeMaybe, 
    alternativeMaybe: alternativeMaybe, 
    bindMaybe: bindMaybe, 
    monadMaybe: monadMaybe, 
    showMaybe: showMaybe, 
    eqMaybe: eqMaybe, 
    ordMaybe: ordMaybe
};
},{"Prelude":20}],11:[function(require,module,exports){
"use strict";
var Prelude = require("Prelude");
var Data_Maybe = require("Data.Maybe");
var First = function (value0) {
    return {
        ctor: "Data.Monoid.First.First", 
        values: [ value0 ]
    };
};
var showFirst = function (__dict_Show_0) {
    return {
        show: function (_136) {
            return "First (" + Prelude.show(Data_Maybe.showMaybe(__dict_Show_0))(_136.values[0]) + ")";
        }
    };
};
var semigroupFirst = function (_) {
    return {
        "<>": function (_137) {
            return function (_138) {
                if ((_137.values[0]).ctor === "Data.Maybe.Just") {
                    return _137;
                };
                return _138;
            };
        }
    };
};
var runFirst = function (_129) {
    return _129.values[0];
};
var monoidFirst = function (_) {
    return {
        "__superclasses": {
            "Prelude.Semigroup_0": function (_) {
                return semigroupFirst({});
            }
        }, 
        mempty: First(Data_Maybe.Nothing)
    };
};
var eqFirst = function (__dict_Eq_2) {
    return {
        "==": function (_130) {
            return function (_131) {
                return Prelude["=="](Data_Maybe.eqMaybe(__dict_Eq_2))(_130.values[0])(_131.values[0]);
            };
        }, 
        "/=": function (_132) {
            return function (_133) {
                return Prelude["/="](Data_Maybe.eqMaybe(__dict_Eq_2))(_132.values[0])(_133.values[0]);
            };
        }
    };
};
var ordFirst = function (__dict_Ord_1) {
    return {
        "__superclasses": {
            "Prelude.Eq_0": function (_) {
                return eqFirst(__dict_Ord_1["__superclasses"]["Prelude.Eq_0"]({}));
            }
        }, 
        compare: function (_134) {
            return function (_135) {
                return Prelude.compare(Data_Maybe.ordMaybe(__dict_Ord_1))(_134.values[0])(_135.values[0]);
            };
        }
    };
};
module.exports = {
    First: First, 
    runFirst: runFirst, 
    eqFirst: eqFirst, 
    ordFirst: ordFirst, 
    showFirst: showFirst, 
    semigroupFirst: semigroupFirst, 
    monoidFirst: monoidFirst
};
},{"Data.Maybe":10,"Prelude":20}],12:[function(require,module,exports){
"use strict";
var Prelude = require("Prelude");
var Data_Array = require("Data.Array");
var monoidUnit = function (_) {
    return {
        "__superclasses": {
            "Prelude.Semigroup_0": function (_) {
                return Prelude.semigroupUnit({});
            }
        }, 
        mempty: Prelude.unit
    };
};
var monoidString = function (_) {
    return {
        "__superclasses": {
            "Prelude.Semigroup_0": function (_) {
                return Prelude.semigroupString({});
            }
        }, 
        mempty: ""
    };
};
var monoidArray = function (_) {
    return {
        "__superclasses": {
            "Prelude.Semigroup_0": function (_) {
                return Data_Array.semigroupArray({});
            }
        }, 
        mempty: [  ]
    };
};
var mempty = function (dict) {
    return dict.mempty;
};
module.exports = {
    mempty: mempty, 
    monoidString: monoidString, 
    monoidArray: monoidArray, 
    monoidUnit: monoidUnit
};
},{"Data.Array":5,"Prelude":20}],13:[function(require,module,exports){
"use strict";
function charAt(i) {  return function(s) {    return s.charAt(i);   };};
function charCodeAt(i) {  return function(s) {    return s.charCodeAt(i);   };};
function fromCharCode(n) {  return String.fromCharCode(n);};
function indexOf(x) {  return function(s) {    return s.indexOf(x);  }; };
function indexOf$prime(x) {  return function(startAt) {    return function(s) {      return s.indexOf(x, startAt);    };   }; };
function lastIndexOf(x) {  return function(s) {    return s.lastIndexOf(x);  };};
function lastIndexOf$prime(x) {  return function(startAt) {    return function(s) {      return s.lastIndexOf(x, startAt);    };   }; };
function length(s) {  return s.length;};
function localeCompare(s1) {  return function(s2) {    return s1.localeCompare(s2);  };};
function replace(s1) {  return function(s2) {    return function(s3) {      return s3.replace(s1, s2);    };  };};
function take(n) {  return function(s) {    return s.substr(0, n);  };};
function drop(n) {  return function(s) {    return s.substr(n);  };};
function split(sep) {  return function(s) {    return s.split(sep);  };};
function toLower(s) {  return s.toLowerCase();};
function toUpper(s) {  return s.toUpperCase();};
function trim(s) {  return s.trim();};
function joinWith (s) {  return function (xs) {    return xs.join(s);  };};
module.exports = {
    joinWith: joinWith, 
    trim: trim, 
    toUpper: toUpper, 
    toLower: toLower, 
    split: split, 
    drop: drop, 
    take: take, 
    replace: replace, 
    localeCompare: localeCompare, 
    length: length, 
    "lastIndexOf'": lastIndexOf$prime, 
    lastIndexOf: lastIndexOf, 
    "indexOf'": indexOf$prime, 
    indexOf: indexOf, 
    fromCharCode: fromCharCode, 
    charCodeAt: charCodeAt, 
    charAt: charAt
};
},{}],14:[function(require,module,exports){
"use strict";
var Prelude = require("Prelude");
var Data_Tuple = require("Data.Tuple");
var Data_Eq = require("Data.Eq");
var Data_Maybe = require("Data.Maybe");
var Data_Either = require("Data.Either");
var Data_Array = require("Data.Array");
var traverse = function (dict) {
    return dict.traverse;
};
var traversableTuple = function (_) {
    return {
        traverse: function (__dict_Applicative_0) {
            return function (_283) {
                return function (_284) {
                    return Prelude["<$>"]((__dict_Applicative_0["__superclasses"]["Prelude.Apply_0"]({}))["__superclasses"]["Prelude.Functor_0"]({}))(Data_Tuple.Tuple(_284.values[0]))(_283(_284.values[1]));
                };
            };
        }, 
        sequence: function (__dict_Applicative_1) {
            return function (_285) {
                return Prelude["<$>"]((__dict_Applicative_1["__superclasses"]["Prelude.Apply_0"]({}))["__superclasses"]["Prelude.Functor_0"]({}))(Data_Tuple.Tuple(_285.values[0]))(_285.values[1]);
            };
        }
    };
};
var traversableRef = function (_) {
    return {
        traverse: function (__dict_Applicative_2) {
            return function (_277) {
                return function (_278) {
                    return Prelude["<$>"]((__dict_Applicative_2["__superclasses"]["Prelude.Apply_0"]({}))["__superclasses"]["Prelude.Functor_0"]({}))(Data_Eq.Ref)(_277(_278.values[0]));
                };
            };
        }, 
        sequence: function (__dict_Applicative_3) {
            return function (_279) {
                return Prelude["<$>"]((__dict_Applicative_3["__superclasses"]["Prelude.Apply_0"]({}))["__superclasses"]["Prelude.Functor_0"]({}))(Data_Eq.Ref)(_279.values[0]);
            };
        }
    };
};
var traversableMaybe = function (_) {
    return {
        traverse: function (__dict_Applicative_4) {
            return function (_280) {
                return function (_281) {
                    if (_281.ctor === "Data.Maybe.Nothing") {
                        return Prelude.pure(__dict_Applicative_4)(Data_Maybe.Nothing);
                    };
                    if (_281.ctor === "Data.Maybe.Just") {
                        return Prelude["<$>"]((__dict_Applicative_4["__superclasses"]["Prelude.Apply_0"]({}))["__superclasses"]["Prelude.Functor_0"]({}))(Data_Maybe.Just)(_280(_281.values[0]));
                    };
                    throw "Failed pattern match";
                };
            };
        }, 
        sequence: function (__dict_Applicative_5) {
            return function (_282) {
                if (_282.ctor === "Data.Maybe.Nothing") {
                    return Prelude.pure(__dict_Applicative_5)(Data_Maybe.Nothing);
                };
                if (_282.ctor === "Data.Maybe.Just") {
                    return Prelude["<$>"]((__dict_Applicative_5["__superclasses"]["Prelude.Apply_0"]({}))["__superclasses"]["Prelude.Functor_0"]({}))(Data_Maybe.Just)(_282.values[0]);
                };
                throw "Failed pattern match";
            };
        }
    };
};
var traversableEither = function (_) {
    return {
        traverse: function (__dict_Applicative_6) {
            return function (_274) {
                return function (_275) {
                    if (_275.ctor === "Data.Either.Left") {
                        return Prelude.pure(__dict_Applicative_6)(Data_Either.Left(_275.values[0]));
                    };
                    if (_275.ctor === "Data.Either.Right") {
                        return Prelude["<$>"]((__dict_Applicative_6["__superclasses"]["Prelude.Apply_0"]({}))["__superclasses"]["Prelude.Functor_0"]({}))(Data_Either.Right)(_274(_275.values[0]));
                    };
                    throw "Failed pattern match";
                };
            };
        }, 
        sequence: function (__dict_Applicative_7) {
            return function (_276) {
                if (_276.ctor === "Data.Either.Left") {
                    return Prelude.pure(__dict_Applicative_7)(Data_Either.Left(_276.values[0]));
                };
                if (_276.ctor === "Data.Either.Right") {
                    return Prelude["<$>"]((__dict_Applicative_7["__superclasses"]["Prelude.Apply_0"]({}))["__superclasses"]["Prelude.Functor_0"]({}))(Data_Either.Right)(_276.values[0]);
                };
                throw "Failed pattern match";
            };
        }
    };
};
var sequence = function (dict) {
    return dict.sequence;
};
var traversableArray = function (_) {
    return {
        traverse: function (__dict_Applicative_8) {
            return function (_271) {
                return function (_272) {
                    if (_272.length === 0) {
                        return Prelude.pure(__dict_Applicative_8)([  ]);
                    };
                    if (_272.length > 0) {
                        var _1350 = _272.slice(1);
                        return Prelude["<*>"](__dict_Applicative_8["__superclasses"]["Prelude.Apply_0"]({}))(Prelude["<$>"]((__dict_Applicative_8["__superclasses"]["Prelude.Apply_0"]({}))["__superclasses"]["Prelude.Functor_0"]({}))(Prelude[":"])(_271(_272[0])))(traverse(traversableArray({}))(__dict_Applicative_8)(_271)(_1350));
                    };
                    throw "Failed pattern match";
                };
            };
        }, 
        sequence: function (__dict_Applicative_9) {
            return function (_273) {
                if (_273.length === 0) {
                    return Prelude.pure(__dict_Applicative_9)([  ]);
                };
                if (_273.length > 0) {
                    var _1353 = _273.slice(1);
                    return Prelude["<*>"](__dict_Applicative_9["__superclasses"]["Prelude.Apply_0"]({}))(Prelude["<$>"]((__dict_Applicative_9["__superclasses"]["Prelude.Apply_0"]({}))["__superclasses"]["Prelude.Functor_0"]({}))(Prelude[":"])(_273[0]))(sequence(traversableArray({}))(__dict_Applicative_9)(_1353));
                };
                throw "Failed pattern match";
            };
        }
    };
};
var zipWithA = function (__dict_Applicative_10) {
    return function (f) {
        return function (xs) {
            return function (ys) {
                return sequence(traversableArray({}))(__dict_Applicative_10)(Data_Array.zipWith(f)(xs)(ys));
            };
        };
    };
};
var $$for = function (__dict_Applicative_11) {
    return function (__dict_Traversable_12) {
        return function (x) {
            return function (f) {
                return traverse(__dict_Traversable_12)(__dict_Applicative_11)(f)(x);
            };
        };
    };
};
module.exports = {
    zipWithA: zipWithA, 
    "for": $$for, 
    sequence: sequence, 
    traverse: traverse, 
    traversableArray: traversableArray, 
    traversableEither: traversableEither, 
    traversableRef: traversableRef, 
    traversableMaybe: traversableMaybe, 
    traversableTuple: traversableTuple
};
},{"Data.Array":5,"Data.Either":6,"Data.Eq":7,"Data.Maybe":10,"Data.Tuple":15,"Prelude":20}],15:[function(require,module,exports){
"use strict";
var Data_Array = require("Data.Array");
var Prelude = require("Prelude");
var Data_Monoid = require("Data.Monoid");
var Tuple = function (value0) {
    return function (value1) {
        return {
            ctor: "Data.Tuple.Tuple", 
            values: [ value0, value1 ]
        };
    };
};
var zip = Data_Array.zipWith(Tuple);
var unzip = function (_173) {
    if (_173.length > 0) {
        var _596 = _173.slice(1);
        return (function (_592) {
            return Tuple(Prelude[":"]((_173[0]).values[0])(_592.values[0]))(Prelude[":"]((_173[0]).values[1])(_592.values[1]));
        })(unzip(_596));
    };
    if (_173.length === 0) {
        return Tuple([  ])([  ]);
    };
    throw "Failed pattern match";
};
var uncurry = function (_171) {
    return function (_172) {
        return _171(_172.values[0])(_172.values[1]);
    };
};
var swap = function (_174) {
    return Tuple(_174.values[1])(_174.values[0]);
};
var snd = function (_170) {
    return _170.values[1];
};
var showTuple = function (__dict_Show_0) {
    return function (__dict_Show_1) {
        return {
            show: function (_175) {
                return "Tuple (" + Prelude.show(__dict_Show_0)(_175.values[0]) + ") (" + Prelude.show(__dict_Show_1)(_175.values[1]) + ")";
            }
        };
    };
};
var functorTuple = function (_) {
    return {
        "<$>": function (_180) {
            return function (_181) {
                return Tuple(_181.values[0])(_180(_181.values[1]));
            };
        }
    };
};
var fst = function (_169) {
    return _169.values[0];
};
var eqTuple = function (__dict_Eq_5) {
    return function (__dict_Eq_6) {
        return {
            "==": function (_176) {
                return function (_177) {
                    return Prelude["=="](__dict_Eq_5)(_176.values[0])(_177.values[0]) && Prelude["=="](__dict_Eq_6)(_176.values[1])(_177.values[1]);
                };
            }, 
            "/=": function (t1) {
                return function (t2) {
                    return !Prelude["=="](eqTuple(__dict_Eq_5)(__dict_Eq_6))(t1)(t2);
                };
            }
        };
    };
};
var ordTuple = function (__dict_Ord_2) {
    return function (__dict_Ord_3) {
        return {
            "__superclasses": {
                "Prelude.Eq_0": function (_) {
                    return eqTuple(__dict_Ord_2["__superclasses"]["Prelude.Eq_0"]({}))(__dict_Ord_3["__superclasses"]["Prelude.Eq_0"]({}));
                }
            }, 
            compare: function (_178) {
                return function (_179) {
                    return (function (_627) {
                        if (_627.ctor === "Prelude.EQ") {
                            return Prelude.compare(__dict_Ord_3)(_178.values[1])(_179.values[1]);
                        };
                        return _627;
                    })(Prelude.compare(__dict_Ord_2)(_178.values[0])(_179.values[0]));
                };
            }
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
var applyTuple = function (__dict_Semigroup_8) {
    return {
        "__superclasses": {
            "Prelude.Functor_0": function (_) {
                return functorTuple({});
            }
        }, 
        "<*>": function (_182) {
            return function (_183) {
                return Tuple(Prelude["<>"](__dict_Semigroup_8)(_182.values[0])(_183.values[0]))(_182.values[1](_183.values[1]));
            };
        }
    };
};
var bindTuple = function (__dict_Semigroup_7) {
    return {
        "__superclasses": {
            "Prelude.Apply_0": function (_) {
                return applyTuple(__dict_Semigroup_7);
            }
        }, 
        ">>=": function (_184) {
            return function (_185) {
                return (function (_640) {
                    return Tuple(Prelude["<>"](__dict_Semigroup_7)(_184.values[0])(_640.values[0]))(_640.values[1]);
                })(_185(_184.values[1]));
            };
        }
    };
};
var applicativeTuple = function (__dict_Monoid_9) {
    return {
        "__superclasses": {
            "Prelude.Apply_0": function (_) {
                return applyTuple(__dict_Monoid_9["__superclasses"]["Prelude.Semigroup_0"]({}));
            }
        }, 
        pure: Tuple(Data_Monoid.mempty(__dict_Monoid_9))
    };
};
var monadTuple = function (__dict_Monoid_4) {
    return {
        "__superclasses": {
            "Prelude.Applicative_0": function (_) {
                return applicativeTuple(__dict_Monoid_4);
            }, 
            "Prelude.Bind_1": function (_) {
                return bindTuple(__dict_Monoid_4["__superclasses"]["Prelude.Semigroup_0"]({}));
            }
        }
    };
};
module.exports = {
    Tuple: Tuple, 
    swap: swap, 
    unzip: unzip, 
    zip: zip, 
    uncurry: uncurry, 
    curry: curry, 
    snd: snd, 
    fst: fst, 
    showTuple: showTuple, 
    eqTuple: eqTuple, 
    ordTuple: ordTuple, 
    functorTuple: functorTuple, 
    applyTuple: applyTuple, 
    applicativeTuple: applicativeTuple, 
    bindTuple: bindTuple, 
    monadTuple: monadTuple
};
},{"Data.Array":5,"Data.Monoid":12,"Prelude":20}],16:[function(require,module,exports){
"use strict";
var Prelude = require("Prelude");
var Control_Monad_Eff = require("Control.Monad.Eff");
function getContext2D(c) {  return function() {    return c.getContext('2d');  };};
function setLineWidth(width) {  return function(ctx) {    return function() {      ctx.lineWidth = width;      return ctx;    };  };};
function setFillStyle(style) {  return function(ctx) {    return function() {      ctx.fillStyle = style;      return ctx;    };  };};
function setStrokeStyle(style) {  return function(ctx) {    return function() {      ctx.strokeStyle = style;      return ctx;    };  };};
function setShadowColor(color) {  return function(ctx) {    return function() {      ctx.shadowColor = color;      return ctx;    };  };};
function setShadowBlur(blur) {  return function(ctx) {    return function() {      ctx.shadowBlur = blur;      return ctx;    };  };};
function setShadowOffsetX(offset) {  return function(ctx) {    return function() {      ctx.shadowOffsetX = offsetX;      return ctx;    };  };};
function setShadowOffsetY(offsetY) {  return function(ctx) {    return function() {      ctx.shadowOffsetY = offsetY;      return ctx;    };  };};
function beginPath(ctx) {  return function() {    ctx.beginPath();    return ctx;  };};
function stroke(ctx) {  return function() {    ctx.stroke();    return ctx;  };};
function fill(ctx) {  return function() {    ctx.fill();    return ctx;  };};
function clip(ctx) {  return function() {    ctx.clip();    return ctx;  };};
function lineTo(ctx) {  return function(x) {    return function(y) {      return function() {        ctx.lineTo(x, y);        return ctx;      };    };  };};
function moveTo(ctx) {  return function(x) {    return function(y) {      return function() {        ctx.moveTo(x, y);        return ctx;      };    };  };};
function arc(ctx) {  return function(a) {    return function() {      ctx.arc(a.cx, a.cy, a.r, a.start, a.end);      return ctx;    };  };};
function rect(ctx) {  return function(r) {    return function() {      ctx.rect(r.x, r.y, r.w, r.h);      return ctx;    };  };};
function fillRect(ctx) {  return function(r) {    return function() {      ctx.fillRect(r.x, r.y, r.w, r.h);      return ctx;    };  };};
function strokeRect(ctx) {  return function(r) {    return function() {      ctx.strokeRect(r.x, r.y, r.w, r.h);      return ctx;    };  };};
function clearRect(ctx) {  return function(r) {    return function() {      ctx.clearRect(r.x, r.y, r.w, r.h);      return ctx;    };  };};
function scale(t) {  return function(ctx) {    return function() {      ctx.scale(t.scaleX, t.scaleY);      return ctx;    };  };};
function rotate(angle) {  return function(ctx) {    return function() {      ctx.rotate(angle);      return ctx;    };  };};
function translate(t) {  return function(ctx) {    return function() {      ctx.translate(t.translateX, t.translateY);      return ctx;    };  };};
function transform(t) {  return function(ctx) {    return function() {      ctx.transform(t.m11, t.m12, t.m21, t.m22, t.m31, t.m32);      return ctx;    };  };};
function save(ctx) {  return function() {    ctx.save();    return ctx;  };};
function restore(ctx) {  return function() {    ctx.restore();    return ctx;  };};
var withContext = function (ctx) {
    return function (action) {
        return function __do() {
            save(ctx)();
            var _5 = action();
            restore(ctx)();
            return _5;
        };
    };
};
var strokePath = function (ctx) {
    return function (path) {
        return function __do() {
            beginPath(ctx)();
            var _3 = path();
            stroke(ctx)();
            return _3;
        };
    };
};
var fillPath = function (ctx) {
    return function (path) {
        return function __do() {
            beginPath(ctx)();
            var _4 = path();
            fill(ctx)();
            return _4;
        };
    };
};
module.exports = {
    withContext: withContext, 
    restore: restore, 
    save: save, 
    transform: transform, 
    translate: translate, 
    rotate: rotate, 
    scale: scale, 
    clearRect: clearRect, 
    strokeRect: strokeRect, 
    fillRect: fillRect, 
    rect: rect, 
    arc: arc, 
    fillPath: fillPath, 
    strokePath: strokePath, 
    moveTo: moveTo, 
    lineTo: lineTo, 
    clip: clip, 
    fill: fill, 
    stroke: stroke, 
    beginPath: beginPath, 
    setShadowOffsetY: setShadowOffsetY, 
    setShadowOffsetX: setShadowOffsetX, 
    setShadowBlur: setShadowBlur, 
    setShadowColor: setShadowColor, 
    setStrokeStyle: setStrokeStyle, 
    setFillStyle: setFillStyle, 
    setLineWidth: setLineWidth, 
    getContext2D: getContext2D
};
},{"Control.Monad.Eff":4,"Prelude":20}],17:[function(require,module,exports){
"use strict";
var Graphics_Canvas = require("Graphics.Canvas");
var Prelude = require("Prelude");
var Data_Array = require("Data.Array");
var Data_Tuple = require("Data.Tuple");
var Data_Map = require("Data.Map");
var Math = require("Math");
var Data_Maybe = require("Data.Maybe");
var Data_Monoid_First = require("Data.Monoid.First");
var Data_Foldable = require("Data.Foldable");
var Control_Monad_Eff = require("Control.Monad.Eff");
var Control_Monad_Eff_Ref = require("Control.Monad.Eff.Ref");
var Data_Traversable = require("Data.Traversable");
var Data_String = require("Data.String");
var MovingUp = {
    ctor: "Main.MovingUp", 
    values: [  ]
};
var MovingDown = {
    ctor: "Main.MovingDown", 
    values: [  ]
};
var NoKeyState = {
    ctor: "Main.NoKeyState", 
    values: [  ]
};
var InProgress = {
    ctor: "Main.InProgress", 
    values: [  ]
};
var GameOver = {
    ctor: "Main.GameOver", 
    values: [  ]
};
var MovingLeft = {
    ctor: "Main.MovingLeft", 
    values: [  ]
};
var MovingRight = {
    ctor: "Main.MovingRight", 
    values: [  ]
};
var White = {
    ctor: "Main.White", 
    values: [  ]
};
var Green = {
    ctor: "Main.Green", 
    values: [  ]
};
var Red = {
    ctor: "Main.Red", 
    values: [  ]
};
function getMillis() {  return new Date().getTime();};
function getElementById(id) {  return function() {    return document.getElementById(id);  };};
function setInterval(t) {  return function(action) {    return function() {      window.setInterval(function() {        action();      }, t);    };  };};
function onKeyDown(handler) {  return function() {    window.onkeydown = function(e) {      return handler(e.keyCode)();    };  };};
function onKeyUp(handler) {  return function() {    window.onkeyup = function(e) {      return handler(e.keyCode)();    };  };};
var square = function (ctx) {
    return Graphics_Canvas.fillRect(ctx)({
        x: -1, 
        y: -1, 
        w: 2, 
        h: 2
    });
};
var showBrick = function (_) {
    return {
        show: function (_19) {
            if (_19.ctor === "Main.White") {
                return "White";
            };
            if (_19.ctor === "Main.Green") {
                return "Green";
            };
            if (_19.ctor === "Main.Red") {
                return "Red";
            };
            throw "Failed pattern match";
        }
    };
};
var eqBrick = function (_) {
    return {
        "==": function (_20) {
            return function (_21) {
                if (_20.ctor === "Main.White") {
                    if (_21.ctor === "Main.White") {
                        return true;
                    };
                };
                if (_20.ctor === "Main.Green") {
                    if (_21.ctor === "Main.Green") {
                        return true;
                    };
                };
                if (_20.ctor === "Main.Red") {
                    if (_21.ctor === "Main.Red") {
                        return true;
                    };
                };
                return false;
            };
        }, 
        "/=": function (x) {
            return function (y) {
                return !Prelude["=="](eqBrick({}))(x)(y);
            };
        }
    };
};
var collide = function (_9) {
    return function (_10) {
        return function (_11) {
            return function (_12) {
                if (_12.ctor === "Main.White") {
                    if (_9.direction.ctor === "Main.MovingLeft") {
                        var _43 = {};
                        for (var _44 in _9) {
                            if (_9.hasOwnProperty(_44)) {
                                _43[_44] = _9[_44];
                            };
                        };
                        _43.direction = MovingRight;
                        return _43;
                    };
                    if (_9.direction.ctor === "Main.MovingRight") {
                        var _45 = {};
                        for (var _46 in _9) {
                            if (_9.hasOwnProperty(_46)) {
                                _45[_46] = _9[_46];
                            };
                        };
                        _45.direction = MovingLeft;
                        return _45;
                    };
                    throw "Failed pattern match";
                };
                if (_12.ctor === "Main.Red") {
                    var _49 = {};
                    for (var _50 in _9) {
                        if (_9.hasOwnProperty(_50)) {
                            _49[_50] = _9[_50];
                        };
                    };
                    _49.status = GameOver;
                    return _49;
                };
                if (_12.ctor === "Main.Green") {
                    var newStatus = Prelude["<<<"](Prelude.semigroupoidArr({}))(Data_Array["null"])(Prelude["<<<"](Prelude.semigroupoidArr({}))(Data_Array.filter(Prelude["=="](eqBrick({}))(Green)))(Data_Array.map(Data_Tuple.snd)))(Data_Map.toList(_9.maze)) ? GameOver : InProgress;
                    var newMaze = Data_Map["delete"](Data_Tuple.ordTuple(Prelude.ordNumber({}))(Prelude.ordNumber({})))(_10)(_9.maze);
                    return (function (_51) {
                        if (_51.ctor === "Main.MovingLeft") {
                            var _52 = {};
                            for (var _53 in _9) {
                                if (_9.hasOwnProperty(_53)) {
                                    _52[_53] = _9[_53];
                                };
                            };
                            _52.maze = newMaze;
                            _52.direction = MovingRight;
                            _52.status = newStatus;
                            return _52;
                        };
                        if (_51.ctor === "Main.MovingRight") {
                            var _54 = {};
                            for (var _55 in _9) {
                                if (_9.hasOwnProperty(_55)) {
                                    _54[_55] = _9[_55];
                                };
                            };
                            _54.maze = newMaze;
                            _54.direction = MovingLeft;
                            _54.status = newStatus;
                            return _54;
                        };
                        throw "Failed pattern match";
                    })(_9.direction);
                };
                throw "Failed pattern match";
            };
        };
    };
};
var circle = function (ctx) {
    return Graphics_Canvas.fillPath(ctx)(Graphics_Canvas.arc(ctx)({
        cx: 0.0, 
        cy: 0.0, 
        r: 1.0, 
        start: 0.0, 
        end: 2 * Math.pi
    }));
};
var checkCollision = function (_7) {
    return function (_8) {
        var nearestBrick = function (_30) {
            return function (_31) {
                return function (_32) {
                    if (_30.ctor === "Main.MovingLeft") {
                        return Data_Tuple.Tuple(Math.floor(_31))(Math.round(_32));
                    };
                    if (_30.ctor === "Main.MovingRight") {
                        return Data_Tuple.Tuple(Math.ceil(_31))(Math.round(_32));
                    };
                    throw "Failed pattern match";
                };
            };
        };
        var checkCollision$prime = function (_33) {
            return function (_34) {
                var dy = _34.values[1] - _8.values[1];
                var dx = _34.values[0] - _8.values[0];
                var dist = Math.sqrt(dx * dx + dy * dy);
                return dist >= 0.7 ? Data_Maybe.Nothing : Prelude["<$>"](Data_Maybe.functorMaybe({}))(Data_Tuple.Tuple(_34))(Data_Map.lookup(Data_Tuple.ordTuple(Prelude.ordNumber({}))(Prelude.ordNumber({})))(_34)(_33.maze));
            };
        };
        return (function (_65) {
            return Prelude["<<<"](Prelude.semigroupoidArr({}))(Data_Monoid_First.runFirst)(Data_Foldable.mconcat(Data_Foldable.foldableArray({}))(Data_Monoid_First.monoidFirst({})))(Data_Array.map(Data_Monoid_First.First)([ checkCollision$prime(_7)(Data_Tuple.Tuple(_65.values[0])(_65.values[1])), checkCollision$prime(_7)(Data_Tuple.Tuple(_65.values[0])(_65.values[1] - 1)), checkCollision$prime(_7)(Data_Tuple.Tuple(_65.values[0])(_65.values[1] + 1)) ]));
        })(nearestBrick(_7.direction)(_8.values[0])(_8.values[1]));
    };
};
var changeKeyState = function (stateRef) {
    return function (newState) {
        return function __do() {
            var _0 = Control_Monad_Eff_Ref.readRef(stateRef)();
            return (function (_71) {
                if (_71.ctor === "Main.InProgress") {
                    return Control_Monad_Eff_Ref.modifyRef(stateRef)(function (st) {
                        var _72 = {};
                        for (var _73 in st) {
                            if (st.hasOwnProperty(_73)) {
                                _72[_73] = st[_73];
                            };
                        };
                        _72.keyState = newState;
                        return _72;
                    });
                };
                return Prelude["return"](Control_Monad_Eff.monadEff({}))(Prelude.unit);
            })(_0.status)();
        };
    };
};
var handleKeyDown = function (_13) {
    return function (_14) {
        if (_14 === 38) {
            return function __do() {
                changeKeyState(_13)(MovingUp)();
                return false;
            };
        };
        if (_14 === 40) {
            return function __do() {
                changeKeyState(_13)(MovingDown)();
                return false;
            };
        };
        return Prelude["return"](Control_Monad_Eff.monadEff({}))(true);
    };
};
var handleKeyUp = function (_15) {
    return function (_16) {
        return function __do() {
            changeKeyState(_15)(NoKeyState)();
            return false;
        };
    };
};
var box = function (ctx) {
    return function (c1) {
        return function (c2) {
            return function __do() {
                Graphics_Canvas.setFillStyle(c1)(ctx)();
                square(ctx)();
                Graphics_Canvas.setFillStyle(c2)(ctx)();
                return Graphics_Canvas.withContext(ctx)(function __do() {
                    Graphics_Canvas.scale({
                        scaleX: 0.8, 
                        scaleY: 0.8
                    })(ctx)();
                    return square(ctx)();
                })();
            };
        };
    };
};
var brick = function (_17) {
    return function (_18) {
        if (_18.ctor === "Main.White") {
            return box(_17)("#c0c000")("#c08000");
        };
        if (_18.ctor === "Main.Red") {
            return box(_17)("#00ff00")("#008000");
        };
        if (_18.ctor === "Main.Green") {
            return box(_17)("#ff0000")("#0000ff");
        };
        throw "Failed pattern match";
    };
};
var maze = function (ctx) {
    return function (m) {
        return function __do() {
            Data_Traversable["for"](Control_Monad_Eff.applicativeEff({}))(Data_Traversable.traversableArray({}))(Data_Map.toList(m))(function (_6) {
                return Graphics_Canvas.withContext(ctx)(function __do() {
                    Graphics_Canvas.translate({
                        translateX: (_6.values[0]).values[0], 
                        translateY: (_6.values[0]).values[1]
                    })(ctx)();
                    Graphics_Canvas.scale({
                        scaleX: 0.4, 
                        scaleY: 0.4
                    })(ctx)();
                    return brick(ctx)(_6.values[1])();
                });
            })();
            return ctx;
        };
    };
};
var parseMaze = function (ls) {
    var charToBrick = function (_29) {
        if (_29 === "#") {
            return Data_Maybe.Just(White);
        };
        if (_29 === "R") {
            return Data_Maybe.Just(Red);
        };
        if (_29 === "G") {
            return Data_Maybe.Just(Green);
        };
        return Data_Maybe.Nothing;
    };
    var updateMaze = function (r) {
        return function (c) {
            return function (m) {
                return function (s) {
                    var brick = charToBrick(Data_String.charAt(c)(s));
                    return Data_Maybe.maybe(m)(function (b) {
                        return Data_Map.insert(Data_Tuple.ordTuple(Prelude.ordNumber({}))(Prelude.ordNumber({})))(Data_Tuple.Tuple(c)(r))(b)(m);
                    })(brick);
                };
            };
        };
    };
    var lineToMaze = function (__copy__25) {
        return function (__copy__26) {
            return function (__copy__27) {
                return function (__copy__28) {
                    var _25 = __copy__25;
                    var _26 = __copy__26;
                    var _27 = __copy__27;
                    var _28 = __copy__28;
                    tco: while (true) {
                        var c = _26;
                        var m = _27;
                        var s = _28;
                        if (c >= Data_String.length(s)) {
                            return m;
                        };
                        var __tco__25 = _25;
                        var __tco__26 = _26 + 1;
                        var __tco__27 = updateMaze(_25)(_26)(_27)(_28);
                        var __tco__28 = _28;
                        _25 = __tco__25;
                        _26 = __tco__26;
                        _27 = __tco__27;
                        _28 = __tco__28;
                        continue tco;
                    };
                };
            };
        };
    };
    var go = function (__copy__22) {
        return function (__copy__23) {
            return function (__copy__24) {
                var _22 = __copy__22;
                var _23 = __copy__23;
                var _24 = __copy__24;
                tco: while (true) {
                    var m = _23;
                    if (_24.length === 0) {
                        return m;
                    };
                    if (_24.length > 0) {
                        var _94 = _24.slice(1);
                        var __tco__22 = _22 + 1;
                        var __tco__23 = lineToMaze(_22)(0)(_23)(_24[0]);
                        _22 = __tco__22;
                        _23 = __tco__23;
                        _24 = _94;
                        continue tco;
                    };
                    throw "Failed pattern match";
                };
            };
        };
    };
    return go(0)(Data_Map.empty)(ls);
};
var defaultMaze = parseMaze([ "######################################################################", "#G                  #R         G#GG   RRR                            #", "#G       R#R        #          G#GG         #########                #", "#G        #         #          G#############RGG    #########        #", "#G        #                                                          #", "#G        #         #R         G#############       #########        #", "#G       R#R        #          G#GG         #########                #", "#G                  #          G#GG   RRR                            #", "#################################GG###################################", "#G                             G#GG                                 R#", "#G       R#R        #          G#RRRRRRRRRR                ###########", "#G        #G       G#                                            GGGG#", "#G        #        R#          G#RRRRRRRRRR                ###########", "#G       R#G       G#          G#                                GGGG#", "#R                             G#GGGGGG                          GGGG#", "###########################################RRRRRRRRRRRRRRRR###########" ]);
var defaultGameState = {
    lastTime: Data_Maybe.Nothing, 
    maze: defaultMaze, 
    posX: 4.0, 
    posY: 4.0, 
    speed: 10.0, 
    status: InProgress, 
    keyState: NoKeyState, 
    direction: MovingLeft
};
var ball = function (ctx) {
    return function (x) {
        return function (y) {
            return Graphics_Canvas.withContext(ctx)(function __do() {
                Graphics_Canvas.translate({
                    translateX: x, 
                    translateY: y
                })(ctx)();
                Graphics_Canvas.setFillStyle("#0080ff")(ctx)();
                Graphics_Canvas.scale({
                    scaleX: 0.3, 
                    scaleY: 0.3
                })(ctx)();
                return circle(ctx)();
            });
        };
    };
};
var applyKeyState = function (state) {
    return function (d) {
        if (state.keyState.ctor === "Main.MovingUp") {
            var nearestBrick = function (x) {
                return function (y) {
                    return Data_Tuple.Tuple(Math.round(x))(Math.floor(y));
                };
            };
            var location = nearestBrick(state.posX)(state.posY - d);
            var brick = Data_Map.lookup(Data_Tuple.ordTuple(Prelude.ordNumber({}))(Prelude.ordNumber({})))(location)(state.maze);
            return Prelude["=="](Data_Maybe.eqMaybe(eqBrick({})))(brick)(Data_Maybe.Just(White)) ? state.posY : state.posY - d;
        };
        if (state.keyState.ctor === "Main.MovingDown") {
            var nearestBrick = function (x) {
                return function (y) {
                    return Data_Tuple.Tuple(Math.round(x))(Math.ceil(y));
                };
            };
            var location = nearestBrick(state.posX)(state.posY + d);
            var brick = Data_Map.lookup(Data_Tuple.ordTuple(Prelude.ordNumber({}))(Prelude.ordNumber({})))(location)(state.maze);
            return Prelude["=="](Data_Maybe.eqMaybe(eqBrick({})))(brick)(Data_Maybe.Just(White)) ? state.posY : state.posY + d;
        };
        if (state.keyState.ctor === "Main.NoKeyState") {
            return state.posY;
        };
        throw "Failed pattern match";
    };
};
var moveBall = function (state) {
    return function (elapsed) {
        var d = elapsed * state.speed / 1000.0;
        var newY = applyKeyState(state)(d);
        return (function (_96) {
            if (_96.ctor === "Main.MovingLeft") {
                return Data_Tuple.Tuple(state.posX - d)(newY);
            };
            if (_96.ctor === "Main.MovingRight") {
                return Data_Tuple.Tuple(state.posX + d)(newY);
            };
            throw "Failed pattern match";
        })(state.direction);
    };
};
var updateGameState = function (state) {
    return function (elapsed) {
        return (function (_97) {
            return (function (_98) {
                if (_98.ctor === "Data.Maybe.Nothing") {
                    var _99 = {};
                    for (var _100 in state) {
                        if (state.hasOwnProperty(_100)) {
                            _99[_100] = state[_100];
                        };
                    };
                    _99.posX = _97.values[0];
                    _99.posY = _97.values[1];
                    return _99;
                };
                if (_98.ctor === "Data.Maybe.Just") {
                    return collide(state)((_98.values[0]).values[0])(Data_Tuple.Tuple(_97.values[0])(_97.values[1]))((_98.values[0]).values[1]);
                };
                throw "Failed pattern match";
            })(checkCollision(state)(_97));
        })(moveBall(state)(elapsed));
    };
};
var tick = function (state) {
    return function (elapsedTime) {
        if (state.status.ctor === "Main.GameOver") {
            return state;
        };
        if (state.status.ctor === "Main.InProgress") {
            return updateGameState(state)(elapsedTime);
        };
        throw "Failed pattern match";
    };
};
var render = function (ctx) {
    return function (stateRef) {
        return function __do() {
            var _2 = Control_Monad_Eff_Ref.readRef(stateRef)();
            var _1 = getMillis();
            return (function () {
                var elapsedTime = Data_Maybe.maybe(0)(Prelude.id(Prelude.categoryArr({})))(Prelude["<$>"](Data_Maybe.functorMaybe({}))(Prelude["-"](Prelude.numNumber({}))(_1))(_2.lastTime));
                var state$prime = tick(_2)(elapsedTime);
                var state$prime$prime = (function () {
                    var _109 = {};
                    for (var _110 in state$prime) {
                        if (state$prime.hasOwnProperty(_110)) {
                            _109[_110] = state$prime[_110];
                        };
                    };
                    _109.lastTime = Data_Maybe.Just(_1);
                    return _109;
                })();
                return function __do() {
                    Control_Monad_Eff_Ref.writeRef(stateRef)(state$prime$prime)();
                    Graphics_Canvas.setFillStyle("#000000")(ctx)();
                    Graphics_Canvas.clearRect(ctx)({
                        x: 0, 
                        y: 0, 
                        w: 640, 
                        h: 480
                    })();
                    Graphics_Canvas.withContext(ctx)(function __do() {
                        Graphics_Canvas.translate({
                            translateX: 320, 
                            translateY: 240
                        })(ctx)();
                        Graphics_Canvas.scale({
                            scaleX: 40, 
                            scaleY: 40
                        })(ctx)();
                        Graphics_Canvas.translate({
                            translateX: -state$prime$prime.posX, 
                            translateY: -state$prime$prime.posY
                        })(ctx)();
                        maze(ctx)(state$prime$prime.maze)();
                        return ball(ctx)(state$prime$prime.posX)(state$prime$prime.posY)();
                    })();
                    return Prelude.unit;
                };
            })()();
        };
    };
};
var main = function __do() {
    var _5 = Control_Monad_Eff_Ref.newRef(defaultGameState)();
    onKeyDown(handleKeyDown(_5))();
    onKeyUp(handleKeyUp(_5))();
    var _4 = getElementById("canvas")();
    var _3 = Graphics_Canvas.getContext2D(_4)();
    return setInterval(10)(render(_3)(_5))();
};
module.exports = {
    MovingUp: MovingUp, 
    MovingDown: MovingDown, 
    NoKeyState: NoKeyState, 
    MovingLeft: MovingLeft, 
    MovingRight: MovingRight, 
    InProgress: InProgress, 
    GameOver: GameOver, 
    White: White, 
    Green: Green, 
    Red: Red, 
    main: main, 
    onKeyUp: onKeyUp, 
    onKeyDown: onKeyDown, 
    setInterval: setInterval, 
    getElementById: getElementById, 
    render: render, 
    getMillis: getMillis, 
    ball: ball, 
    maze: maze, 
    brick: brick, 
    box: box, 
    circle: circle, 
    square: square, 
    handleKeyUp: handleKeyUp, 
    handleKeyDown: handleKeyDown, 
    changeKeyState: changeKeyState, 
    tick: tick, 
    updateGameState: updateGameState, 
    collide: collide, 
    moveBall: moveBall, 
    applyKeyState: applyKeyState, 
    checkCollision: checkCollision, 
    parseMaze: parseMaze, 
    defaultMaze: defaultMaze, 
    defaultGameState: defaultGameState, 
    showBrick: showBrick, 
    eqBrick: eqBrick
};
},{"Control.Monad.Eff":4,"Control.Monad.Eff.Ref":3,"Data.Array":5,"Data.Foldable":8,"Data.Map":9,"Data.Maybe":10,"Data.Monoid.First":11,"Data.String":13,"Data.Traversable":14,"Data.Tuple":15,"Graphics.Canvas":16,"Math":18,"Prelude":20}],18:[function(require,module,exports){
"use strict";
var abs = Math.abs;;
var acos = Math.acos;;
var asin = Math.asin;;
var atan = Math.atan;;
function atan2(y){  return function (x) {    return Math.atan2(y, x);  };};
var ceil = Math.ceil;;
var cos = Math.cos;;
var exp = Math.exp;;
var floor = Math.floor;;
var log = Math.log;;
function max(n1){  return function(n2) {    return Math.max(n1, n2);  }};
function min(n1){  return function(n2) {    return Math.min(n1, n2);  }};
function pow(n){  return function(p) {    return Math.pow(n, p);  }};
var round = Math.round;;
var sin = Math.sin;;
var sqrt = Math.sqrt;;
var tan = Math.tan;;
var e       = Math.E;;
var ln2     = Math.LN2;;
var ln10    = Math.LN10;;
var log2e   = Math.LOG2E;;
var log10e  = Math.LOG10E;;
var pi      = Math.PI;;
var sqrt1_2 = Math.SQRT1_2;;
var sqrt2   = Math.SQRT2;;
module.exports = {
    sqrt2: sqrt2, 
    "sqrt1_2": sqrt1_2, 
    pi: pi, 
    log10e: log10e, 
    log2e: log2e, 
    ln10: ln10, 
    ln2: ln2, 
    e: e, 
    tan: tan, 
    sqrt: sqrt, 
    sin: sin, 
    round: round, 
    pow: pow, 
    min: min, 
    max: max, 
    log: log, 
    floor: floor, 
    exp: exp, 
    cos: cos, 
    ceil: ceil, 
    atan2: atan2, 
    atan: atan, 
    asin: asin, 
    acos: acos, 
    abs: abs
};
},{}],19:[function(require,module,exports){
"use strict";
function unsafeIndex(xs) {  return function(n) {    return xs[n];  };};
module.exports = {
    unsafeIndex: unsafeIndex
};
},{}],20:[function(require,module,exports){
"use strict";
var Unit = function (value0) {
    return {
        ctor: "Prelude.Unit", 
        values: [ value0 ]
    };
};
var LT = {
    ctor: "Prelude.LT", 
    values: [  ]
};
var GT = {
    ctor: "Prelude.GT", 
    values: [  ]
};
var EQ = {
    ctor: "Prelude.EQ", 
    values: [  ]
};
function cons(e) {  return function (l) {    return [e].concat(l);  };};
function showStringImpl(s) {  return JSON.stringify(s);};
function showNumberImpl(n) {  return n.toString();};
function showArrayImpl (f) {  return function (xs) {    var ss = [];    for (var i = 0, l = xs.length; i < l; i++) {      ss[i] = f(xs[i]);    }    return '[' + ss.join(',') + ']';  };};
function numAdd(n1) {  return function(n2) {    return n1 + n2;  };};
function numSub(n1) {  return function(n2) {    return n1 - n2;  };};
function numMul(n1) {  return function(n2) {    return n1 * n2;  };};
function numDiv(n1) {  return function(n2) {    return n1 / n2;  };};
function numMod(n1) {  return function(n2) {    return n1 % n2;  };};
function numNegate(n) {  return -n;};
function refEq(r1) {  return function(r2) {    return r1 === r2;  };};
function refIneq(r1) {  return function(r2) {    return r1 !== r2;  };};
function eqArrayImpl(f) {  return function(xs) {    return function(ys) {      if (xs.length !== ys.length) return false;      for (var i = 0; i < xs.length; i++) {        if (!f(xs[i])(ys[i])) return false;      }      return true;    };  };};
function unsafeCompare(n1) {  return function(n2) {    return n1 < n2 ? LT : n1 > n2 ? GT : EQ;  };};
function numShl(n1) {  return function(n2) {    return n1 << n2;  };};
function numShr(n1) {  return function(n2) {    return n1 >> n2;  };};
function numZshr(n1) {  return function(n2) {    return n1 >>> n2;  };};
function numAnd(n1) {  return function(n2) {    return n1 & n2;  };};
function numOr(n1) {  return function(n2) {    return n1 | n2;  };};
function numXor(n1) {  return function(n2) {    return n1 ^ n2;  };};
function numComplement(n) {  return ~n;};
function boolAnd(b1) {  return function(b2) {    return b1 && b2;  };};
function boolOr(b1) {  return function(b2) {    return b1 || b2;  };};
function boolNot(b) {  return !b;};
function concatString(s1) {  return function(s2) {    return s1 + s2;  };};
var $bar$bar = function (dict) {
    return dict["||"];
};
var $bar = function (dict) {
    return dict["|"];
};
var $up = function (dict) {
    return dict["^"];
};
var $greater$greater$eq = function (dict) {
    return dict[">>="];
};
var $eq$eq = function (dict) {
    return dict["=="];
};
var $less$bar$greater = function (dict) {
    return dict["<|>"];
};
var $less$greater = function (dict) {
    return dict["<>"];
};
var $less$less$less = function (dict) {
    return dict["<<<"];
};
var $greater$greater$greater = function (__dict_Semigroupoid_0) {
    return function (f) {
        return function (g) {
            return $less$less$less(__dict_Semigroupoid_0)(g)(f);
        };
    };
};
var $less$times$greater = function (dict) {
    return dict["<*>"];
};
var $less$dollar$greater = function (dict) {
    return dict["<$>"];
};
var $colon = cons;
var $div$eq = function (dict) {
    return dict["/="];
};
var $div = function (dict) {
    return dict["/"];
};
var $minus = function (dict) {
    return dict["-"];
};
var $plus$plus = function (__dict_Semigroup_1) {
    return $less$greater(__dict_Semigroup_1);
};
var $plus = function (dict) {
    return dict["+"];
};
var $times = function (dict) {
    return dict["*"];
};
var $amp$amp = function (dict) {
    return dict["&&"];
};
var $amp = function (dict) {
    return dict["&"];
};
var $percent = function (dict) {
    return dict["%"];
};
var $dollar = function (f) {
    return function (x) {
        return f(x);
    };
};
var $hash = function (x) {
    return function (f) {
        return f(x);
    };
};
var zshr = function (dict) {
    return dict.zshr;
};
var unit = Unit({});
var shr = function (dict) {
    return dict.shr;
};
var showUnit = function (_) {
    return {
        show: function (_28) {
            return "Unit {}";
        }
    };
};
var showString = function (_) {
    return {
        show: showStringImpl
    };
};
var showOrdering = function (_) {
    return {
        show: function (_36) {
            if (_36.ctor === "Prelude.LT") {
                return "LT";
            };
            if (_36.ctor === "Prelude.GT") {
                return "GT";
            };
            if (_36.ctor === "Prelude.EQ") {
                return "EQ";
            };
            throw "Failed pattern match";
        }
    };
};
var showNumber = function (_) {
    return {
        show: showNumberImpl
    };
};
var showBoolean = function (_) {
    return {
        show: function (_29) {
            if (_29) {
                return "true";
            };
            if (!_29) {
                return "false";
            };
            throw "Failed pattern match";
        }
    };
};
var show = function (dict) {
    return dict.show;
};
var showArray = function (__dict_Show_2) {
    return {
        show: showArrayImpl(show(__dict_Show_2))
    };
};
var shl = function (dict) {
    return dict.shl;
};
var semigroupoidArr = function (_) {
    return {
        "<<<": function (f) {
            return function (g) {
                return function (x) {
                    return f(g(x));
                };
            };
        }
    };
};
var semigroupUnit = function (_) {
    return {
        "<>": function (_43) {
            return function (_44) {
                return Unit({});
            };
        }
    };
};
var semigroupString = function (_) {
    return {
        "<>": concatString
    };
};
var semigroupArr = function (__dict_Semigroup_3) {
    return {
        "<>": function (f) {
            return function (g) {
                return function (x) {
                    return $less$greater(__dict_Semigroup_3)(f(x))(g(x));
                };
            };
        }
    };
};
var pure = function (dict) {
    return dict.pure;
};
var $$return = function (__dict_Monad_4) {
    return pure(__dict_Monad_4["__superclasses"]["Prelude.Applicative_0"]({}));
};
var numNumber = function (_) {
    return {
        "+": numAdd, 
        "-": numSub, 
        "*": numMul, 
        "/": numDiv, 
        "%": numMod, 
        negate: numNegate
    };
};
var not = function (dict) {
    return dict.not;
};
var negate = function (dict) {
    return dict.negate;
};
var liftM1 = function (__dict_Monad_5) {
    return function (f) {
        return function (a) {
            return $greater$greater$eq(__dict_Monad_5["__superclasses"]["Prelude.Bind_1"]({}))(a)(function (_0) {
                return $$return(__dict_Monad_5)(f(_0));
            });
        };
    };
};
var liftA1 = function (__dict_Applicative_6) {
    return function (f) {
        return function (a) {
            return $less$times$greater(__dict_Applicative_6["__superclasses"]["Prelude.Apply_0"]({}))(pure(__dict_Applicative_6)(f))(a);
        };
    };
};
var id = function (dict) {
    return dict.id;
};
var functorArr = function (_) {
    return {
        "<$>": $less$less$less(semigroupoidArr({}))
    };
};
var flip = function (f) {
    return function (b) {
        return function (a) {
            return f(a)(b);
        };
    };
};
var eqUnit = function (_) {
    return {
        "==": function (_30) {
            return function (_31) {
                return true;
            };
        }, 
        "/=": function (_32) {
            return function (_33) {
                return false;
            };
        }
    };
};
var ordUnit = function (_) {
    return {
        "__superclasses": {
            "Prelude.Eq_0": function (_) {
                return eqUnit({});
            }
        }, 
        compare: function (_37) {
            return function (_38) {
                return EQ;
            };
        }
    };
};
var eqString = function (_) {
    return {
        "==": refEq, 
        "/=": refIneq
    };
};
var ordString = function (_) {
    return {
        "__superclasses": {
            "Prelude.Eq_0": function (_) {
                return eqString({});
            }
        }, 
        compare: unsafeCompare
    };
};
var eqNumber = function (_) {
    return {
        "==": refEq, 
        "/=": refIneq
    };
};
var ordNumber = function (_) {
    return {
        "__superclasses": {
            "Prelude.Eq_0": function (_) {
                return eqNumber({});
            }
        }, 
        compare: unsafeCompare
    };
};
var eqBoolean = function (_) {
    return {
        "==": refEq, 
        "/=": refIneq
    };
};
var ordBoolean = function (_) {
    return {
        "__superclasses": {
            "Prelude.Eq_0": function (_) {
                return eqBoolean({});
            }
        }, 
        compare: function (_39) {
            return function (_40) {
                if (!_39) {
                    if (!_40) {
                        return EQ;
                    };
                };
                if (!_39) {
                    if (_40) {
                        return LT;
                    };
                };
                if (_39) {
                    if (_40) {
                        return EQ;
                    };
                };
                if (_39) {
                    if (!_40) {
                        return GT;
                    };
                };
                throw "Failed pattern match";
            };
        }
    };
};
var empty = function (dict) {
    return dict.empty;
};
var $$const = function (_24) {
    return function (_25) {
        return _24;
    };
};
var $$void = function (__dict_Functor_8) {
    return function (fa) {
        return $less$dollar$greater(__dict_Functor_8)($$const(unit))(fa);
    };
};
var complement = function (dict) {
    return dict.complement;
};
var compare = function (dict) {
    return dict.compare;
};
var $less = function (__dict_Ord_10) {
    return function (a1) {
        return function (a2) {
            return (function (_328) {
                if (_328.ctor === "Prelude.LT") {
                    return true;
                };
                return false;
            })(compare(__dict_Ord_10)(a1)(a2));
        };
    };
};
var $less$eq = function (__dict_Ord_11) {
    return function (a1) {
        return function (a2) {
            return (function (_329) {
                if (_329.ctor === "Prelude.GT") {
                    return false;
                };
                return true;
            })(compare(__dict_Ord_11)(a1)(a2));
        };
    };
};
var $greater = function (__dict_Ord_12) {
    return function (a1) {
        return function (a2) {
            return (function (_330) {
                if (_330.ctor === "Prelude.GT") {
                    return true;
                };
                return false;
            })(compare(__dict_Ord_12)(a1)(a2));
        };
    };
};
var $greater$eq = function (__dict_Ord_13) {
    return function (a1) {
        return function (a2) {
            return (function (_331) {
                if (_331.ctor === "Prelude.LT") {
                    return false;
                };
                return true;
            })(compare(__dict_Ord_13)(a1)(a2));
        };
    };
};
var categoryArr = function (_) {
    return {
        "__superclasses": {
            "Prelude.Semigroupoid_0": function (_) {
                return semigroupoidArr({});
            }
        }, 
        id: function (x) {
            return x;
        }
    };
};
var boolLikeBoolean = function (_) {
    return {
        "&&": boolAnd, 
        "||": boolOr, 
        not: boolNot
    };
};
var eqArray = function (__dict_Eq_7) {
    return {
        "==": function (xs) {
            return function (ys) {
                return eqArrayImpl($eq$eq(__dict_Eq_7))(xs)(ys);
            };
        }, 
        "/=": function (xs) {
            return function (ys) {
                return not(boolLikeBoolean({}))($eq$eq(eqArray(__dict_Eq_7))(xs)(ys));
            };
        }
    };
};
var ordArray = function (__dict_Ord_9) {
    return {
        "__superclasses": {
            "Prelude.Eq_0": function (_) {
                return eqArray(__dict_Ord_9["__superclasses"]["Prelude.Eq_0"]({}));
            }
        }, 
        compare: function (_41) {
            return function (_42) {
                if (_41.length === 0) {
                    if (_42.length === 0) {
                        return EQ;
                    };
                };
                if (_41.length === 0) {
                    return LT;
                };
                if (_42.length === 0) {
                    return GT;
                };
                if (_41.length > 0) {
                    var _338 = _41.slice(1);
                    if (_42.length > 0) {
                        var _336 = _42.slice(1);
                        return (function (_334) {
                            if (_334.ctor === "Prelude.EQ") {
                                return compare(ordArray(__dict_Ord_9))(_338)(_336);
                            };
                            return _334;
                        })(compare(__dict_Ord_9)(_41[0])(_42[0]));
                    };
                };
                throw "Failed pattern match";
            };
        }
    };
};
var eqOrdering = function (_) {
    return {
        "==": function (_34) {
            return function (_35) {
                if (_34.ctor === "Prelude.LT") {
                    if (_35.ctor === "Prelude.LT") {
                        return true;
                    };
                };
                if (_34.ctor === "Prelude.GT") {
                    if (_35.ctor === "Prelude.GT") {
                        return true;
                    };
                };
                if (_34.ctor === "Prelude.EQ") {
                    if (_35.ctor === "Prelude.EQ") {
                        return true;
                    };
                };
                return false;
            };
        }, 
        "/=": function (x) {
            return function (y) {
                return not(boolLikeBoolean({}))($eq$eq(eqOrdering({}))(x)(y));
            };
        }
    };
};
var bitsNumber = function (_) {
    return {
        "&": numAnd, 
        "|": numOr, 
        "^": numXor, 
        shl: numShl, 
        shr: numShr, 
        zshr: numZshr, 
        complement: numComplement
    };
};
var asTypeOf = function (_26) {
    return function (_27) {
        return _26;
    };
};
var applyArr = function (_) {
    return {
        "__superclasses": {
            "Prelude.Functor_0": function (_) {
                return functorArr({});
            }
        }, 
        "<*>": function (f) {
            return function (g) {
                return function (x) {
                    return f(x)(g(x));
                };
            };
        }
    };
};
var bindArr = function (_) {
    return {
        "__superclasses": {
            "Prelude.Apply_0": function (_) {
                return applyArr({});
            }
        }, 
        ">>=": function (m) {
            return function (f) {
                return function (x) {
                    return f(m(x))(x);
                };
            };
        }
    };
};
var applicativeArr = function (_) {
    return {
        "__superclasses": {
            "Prelude.Apply_0": function (_) {
                return applyArr({});
            }
        }, 
        pure: $$const
    };
};
var monadArr = function (_) {
    return {
        "__superclasses": {
            "Prelude.Applicative_0": function (_) {
                return applicativeArr({});
            }, 
            "Prelude.Bind_1": function (_) {
                return bindArr({});
            }
        }
    };
};
var ap = function (__dict_Monad_14) {
    return function (f) {
        return function (a) {
            return $greater$greater$eq(__dict_Monad_14["__superclasses"]["Prelude.Bind_1"]({}))(f)(function (_2) {
                return $greater$greater$eq(__dict_Monad_14["__superclasses"]["Prelude.Bind_1"]({}))(a)(function (_1) {
                    return $$return(__dict_Monad_14)(_2(_1));
                });
            });
        };
    };
};
module.exports = {
    Unit: Unit, 
    LT: LT, 
    GT: GT, 
    EQ: EQ, 
    unit: unit, 
    "++": $plus$plus, 
    "<>": $less$greater, 
    not: not, 
    "||": $bar$bar, 
    "&&": $amp$amp, 
    complement: complement, 
    zshr: zshr, 
    shr: shr, 
    shl: shl, 
    "^": $up, 
    "|": $bar, 
    "&": $amp, 
    ">=": $greater$eq, 
    "<=": $less$eq, 
    ">": $greater, 
    "<": $less, 
    compare: compare, 
    refIneq: refIneq, 
    refEq: refEq, 
    "/=": $div$eq, 
    "==": $eq$eq, 
    negate: negate, 
    "%": $percent, 
    "/": $div, 
    "*": $times, 
    "-": $minus, 
    "+": $plus, 
    ap: ap, 
    liftM1: liftM1, 
    "return": $$return, 
    ">>=": $greater$greater$eq, 
    "<|>": $less$bar$greater, 
    empty: empty, 
    liftA1: liftA1, 
    pure: pure, 
    "<*>": $less$times$greater, 
    "void": $$void, 
    "<$>": $less$dollar$greater, 
    show: show, 
    cons: cons, 
    ":": $colon, 
    "#": $hash, 
    "$": $dollar, 
    id: id, 
    ">>>": $greater$greater$greater, 
    "<<<": $less$less$less, 
    asTypeOf: asTypeOf, 
    "const": $$const, 
    flip: flip, 
    semigroupoidArr: semigroupoidArr, 
    categoryArr: categoryArr, 
    showUnit: showUnit, 
    showString: showString, 
    showBoolean: showBoolean, 
    showNumber: showNumber, 
    showArray: showArray, 
    functorArr: functorArr, 
    applyArr: applyArr, 
    applicativeArr: applicativeArr, 
    bindArr: bindArr, 
    monadArr: monadArr, 
    numNumber: numNumber, 
    eqUnit: eqUnit, 
    eqString: eqString, 
    eqNumber: eqNumber, 
    eqBoolean: eqBoolean, 
    eqArray: eqArray, 
    eqOrdering: eqOrdering, 
    showOrdering: showOrdering, 
    ordUnit: ordUnit, 
    ordBoolean: ordBoolean, 
    ordNumber: ordNumber, 
    ordString: ordString, 
    ordArray: ordArray, 
    bitsNumber: bitsNumber, 
    boolLikeBoolean: boolLikeBoolean, 
    semigroupUnit: semigroupUnit, 
    semigroupString: semigroupString, 
    semigroupArr: semigroupArr
};
},{}]},{},[1]);