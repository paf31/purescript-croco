(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window.onload = function() {
  require("Main").main();
};

},{"Main":14}],2:[function(require,module,exports){
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
},{"Prelude":17}],3:[function(require,module,exports){
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
function foreachE(as) {  return function(f) {    return function() {      for (var i = 0; i < as.length; i++) {        f(as[i])();      }    };  };};
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
},{"Prelude":17}],5:[function(require,module,exports){
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
var tail = function (_85) {
    if (_85.length > 0) {
        var _444 = _85.slice(1);
        return Data_Maybe.Just(_444);
    };
    return Data_Maybe.Nothing;
};
var span = (function () {
    var go = function (__copy__101) {
        return function (__copy__102) {
            return function (__copy__103) {
                var _101 = __copy__101;
                var _102 = __copy__102;
                var _103 = __copy__103;
                tco: while (true) {
                    var acc = _101;
                    if (_103.length > 0) {
                        var _449 = _103.slice(1);
                        if (_102(_103[0])) {
                            var __tco__101 = Prelude[":"](_103[0])(acc);
                            var __tco__102 = _102;
                            _101 = __tco__101;
                            _102 = __tco__102;
                            _103 = _449;
                            continue tco;
                        };
                    };
                    return {
                        init: reverse(_101), 
                        rest: _103
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
                return (function (_450) {
                    if (_450.ctor === "Prelude.GT") {
                        return 1;
                    };
                    if (_450.ctor === "Prelude.EQ") {
                        return 0;
                    };
                    if (_450.ctor === "Prelude.LT") {
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
var $$null = function (_87) {
    if (_87.length === 0) {
        return true;
    };
    return false;
};
var nubBy = function (_94) {
    return function (_95) {
        if (_95.length === 0) {
            return [  ];
        };
        if (_95.length > 0) {
            var _455 = _95.slice(1);
            return Prelude[":"](_95[0])(nubBy(_94)(filter(function (y) {
                return !_94(_95[0])(y);
            })(_455)));
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
var last = function (__copy__84) {
    var _84 = __copy__84;
    tco: while (true) {
        if (_84.length > 0) {
            var _458 = _84.slice(1);
            if (_458.length === 0) {
                return Data_Maybe.Just(_84[0]);
            };
        };
        if (_84.length > 0) {
            var _460 = _84.slice(1);
            _84 = _460;
            continue tco;
        };
        return Data_Maybe.Nothing;
    };
};
var intersectBy = function (_91) {
    return function (_92) {
        return function (_93) {
            if (_92.length === 0) {
                return [  ];
            };
            if (_93.length === 0) {
                return [  ];
            };
            var el = function (x) {
                return findIndex(_91(x))(_93) >= 0;
            };
            return filter(el)(_92);
        };
    };
};
var intersect = function (__dict_Eq_2) {
    return intersectBy(Prelude["=="](__dict_Eq_2));
};
var init = function (_86) {
    if (_86.length === 0) {
        return Data_Maybe.Nothing;
    };
    return Data_Maybe.Just(slice(0)(length(_86) - 1)(_86));
};
var head = function (_83) {
    if (_83.length > 0) {
        var _467 = _83.slice(1);
        return Data_Maybe.Just(_83[0]);
    };
    return Data_Maybe.Nothing;
};
var groupBy = (function () {
    var go = function (__copy__98) {
        return function (__copy__99) {
            return function (__copy__100) {
                var _98 = __copy__98;
                var _99 = __copy__99;
                var _100 = __copy__100;
                tco: while (true) {
                    var acc = _98;
                    if (_100.length === 0) {
                        return reverse(acc);
                    };
                    if (_100.length > 0) {
                        var _472 = _100.slice(1);
                        var sp = span(_99(_100[0]))(_472);
                        var __tco__98 = Prelude[":"](Prelude[":"](_100[0])(sp.init))(_98);
                        var __tco__99 = _99;
                        _98 = __tco__98;
                        _99 = __tco__99;
                        _100 = sp.rest;
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
var deleteBy = function (_88) {
    return function (_89) {
        return function (_90) {
            if (_90.length === 0) {
                return [  ];
            };
            return (function (_476) {
                if (_476 < 0) {
                    return _90;
                };
                return deleteAt(_476)(1)(_90);
            })(findIndex(_88(_89))(_90));
        };
    };
};
var $$delete = function (__dict_Eq_7) {
    return deleteBy(Prelude["=="](__dict_Eq_7));
};
var $bslash$bslash = function (__dict_Eq_8) {
    return function (xs) {
        return function (ys) {
            var go = function (__copy__96) {
                return function (__copy__97) {
                    var _96 = __copy__96;
                    var _97 = __copy__97;
                    tco: while (true) {
                        var xs = _96;
                        if (_97.length === 0) {
                            return xs;
                        };
                        if (_96.length === 0) {
                            return [  ];
                        };
                        if (_97.length > 0) {
                            var _480 = _97.slice(1);
                            var __tco__96 = $$delete(__dict_Eq_8)(_97[0])(_96);
                            _96 = __tco__96;
                            _97 = _480;
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
},{"Data.Maybe":8,"Prelude":17,"Prelude.Unsafe":16}],6:[function(require,module,exports){
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
        foldr: function (_226) {
            return function (_227) {
                return function (_228) {
                    return _226(_228.values[1])(_227);
                };
            };
        }, 
        foldl: function (_229) {
            return function (_230) {
                return function (_231) {
                    return _229(_230)(_231.values[1]);
                };
            };
        }, 
        foldMap: function (__dict_Monoid_11) {
            return function (_232) {
                return function (_233) {
                    return _232(_233.values[1]);
                };
            };
        }
    };
};
var foldableRef = function (_) {
    return {
        foldr: function (_218) {
            return function (_219) {
                return function (_220) {
                    return _218(_220.values[0])(_219);
                };
            };
        }, 
        foldl: function (_221) {
            return function (_222) {
                return function (_223) {
                    return _221(_222)(_223.values[0]);
                };
            };
        }, 
        foldMap: function (__dict_Monoid_12) {
            return function (_224) {
                return function (_225) {
                    return _224(_225.values[0]);
                };
            };
        }
    };
};
var foldableMaybe = function (_) {
    return {
        foldr: function (_210) {
            return function (_211) {
                return function (_212) {
                    if (_212.ctor === "Data.Maybe.Nothing") {
                        return _211;
                    };
                    if (_212.ctor === "Data.Maybe.Just") {
                        return _210(_212.values[0])(_211);
                    };
                    throw "Failed pattern match";
                };
            };
        }, 
        foldl: function (_213) {
            return function (_214) {
                return function (_215) {
                    if (_215.ctor === "Data.Maybe.Nothing") {
                        return _214;
                    };
                    if (_215.ctor === "Data.Maybe.Just") {
                        return _213(_214)(_215.values[0]);
                    };
                    throw "Failed pattern match";
                };
            };
        }, 
        foldMap: function (__dict_Monoid_13) {
            return function (_216) {
                return function (_217) {
                    if (_217.ctor === "Data.Maybe.Nothing") {
                        return Data_Monoid.mempty(__dict_Monoid_13);
                    };
                    if (_217.ctor === "Data.Maybe.Just") {
                        return _216(_217.values[0]);
                    };
                    throw "Failed pattern match";
                };
            };
        }
    };
};
var foldableEither = function (_) {
    return {
        foldr: function (_202) {
            return function (_203) {
                return function (_204) {
                    if (_204.ctor === "Data.Either.Left") {
                        return _203;
                    };
                    if (_204.ctor === "Data.Either.Right") {
                        return _202(_204.values[0])(_203);
                    };
                    throw "Failed pattern match";
                };
            };
        }, 
        foldl: function (_205) {
            return function (_206) {
                return function (_207) {
                    if (_207.ctor === "Data.Either.Left") {
                        return _206;
                    };
                    if (_207.ctor === "Data.Either.Right") {
                        return _205(_206)(_207.values[0]);
                    };
                    throw "Failed pattern match";
                };
            };
        }, 
        foldMap: function (__dict_Monoid_14) {
            return function (_208) {
                return function (_209) {
                    if (_209.ctor === "Data.Either.Left") {
                        return Data_Monoid.mempty(__dict_Monoid_14);
                    };
                    if (_209.ctor === "Data.Either.Right") {
                        return _208(_209.values[0]);
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
                return Data_Monoid_First.runFirst(foldMap(__dict_Foldable_17)(Data_Monoid_First.monoidFirst({}))(function (_201) {
                    return Data_Monoid_First.First(Prelude["=="](__dict_Eq_16)(a)(_201.values[0]) ? Data_Maybe.Just(_201.values[1]) : Data_Maybe.Nothing);
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
            return (function (_749) {
                if (_749.length > 0) {
                    var _751 = _749.slice(1);
                    return Data_Maybe.Just(_749[0]);
                };
                if (_749.length === 0) {
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
},{"Control.Apply":2,"Data.Maybe":8,"Data.Monoid":10,"Data.Monoid.First":9,"Prelude":17}],7:[function(require,module,exports){
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
var values = function (_244) {
    if (_244.ctor === "Data.Map.Leaf") {
        return [  ];
    };
    if (_244.ctor === "Data.Map.Two") {
        return Prelude["++"](Data_Array.semigroupArray({}))(values(_244.values[0]))(Prelude["++"](Data_Array.semigroupArray({}))([ _244.values[2] ])(values(_244.values[3])));
    };
    if (_244.ctor === "Data.Map.Three") {
        return Prelude["++"](Data_Array.semigroupArray({}))(values(_244.values[0]))(Prelude["++"](Data_Array.semigroupArray({}))([ _244.values[2] ])(Prelude["++"](Data_Array.semigroupArray({}))(values(_244.values[3]))(Prelude["++"](Data_Array.semigroupArray({}))([ _244.values[5] ])(values(_244.values[6])))));
    };
    throw "Failed pattern match";
};
var toList = function (_242) {
    if (_242.ctor === "Data.Map.Leaf") {
        return [  ];
    };
    if (_242.ctor === "Data.Map.Two") {
        return Prelude["++"](Data_Array.semigroupArray({}))(toList(_242.values[0]))(Prelude["++"](Data_Array.semigroupArray({}))([ Data_Tuple.Tuple(_242.values[1])(_242.values[2]) ])(toList(_242.values[3])));
    };
    if (_242.ctor === "Data.Map.Three") {
        return Prelude["++"](Data_Array.semigroupArray({}))(toList(_242.values[0]))(Prelude["++"](Data_Array.semigroupArray({}))([ Data_Tuple.Tuple(_242.values[1])(_242.values[2]) ])(Prelude["++"](Data_Array.semigroupArray({}))(toList(_242.values[3]))(Prelude["++"](Data_Array.semigroupArray({}))([ Data_Tuple.Tuple(_242.values[4])(_242.values[5]) ])(toList(_242.values[6])))));
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
        return function (_236) {
            if (_236.ctor === "Data.Map.Leaf") {
                return "Leaf";
            };
            if (_236.ctor === "Data.Map.Two") {
                return "Two (" + showTree(__dict_Show_0)(__dict_Show_1)(_236.values[0]) + ") (" + Prelude.show(__dict_Show_0)(_236.values[1]) + ") (" + Prelude.show(__dict_Show_1)(_236.values[2]) + ") (" + showTree(__dict_Show_0)(__dict_Show_1)(_236.values[3]) + ")";
            };
            if (_236.ctor === "Data.Map.Three") {
                return "Three (" + showTree(__dict_Show_0)(__dict_Show_1)(_236.values[0]) + ") (" + Prelude.show(__dict_Show_0)(_236.values[1]) + ") (" + Prelude.show(__dict_Show_1)(_236.values[2]) + ") (" + showTree(__dict_Show_0)(__dict_Show_1)(_236.values[3]) + ") (" + Prelude.show(__dict_Show_0)(_236.values[4]) + ") (" + Prelude.show(__dict_Show_1)(_236.values[5]) + ") (" + showTree(__dict_Show_0)(__dict_Show_1)(_236.values[6]) + ")";
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
    return function (__copy__238) {
        return function (__copy__239) {
            var __dict_Ord_4 = __copy___dict_Ord_4;
            var _238 = __copy__238;
            var _239 = __copy__239;
            tco: while (true) {
                var _ = _238;
                if (_239.ctor === "Data.Map.Leaf") {
                    return Data_Maybe.Nothing;
                };
                var k = _238;
                if (_239.ctor === "Data.Map.Two") {
                    if (Prelude["=="](__dict_Ord_4["__superclasses"]["Prelude.Eq_0"]({}))(k)(_239.values[1])) {
                        return Data_Maybe.Just(_239.values[2]);
                    };
                };
                var k = _238;
                if (_239.ctor === "Data.Map.Two") {
                    if (Prelude["<"](__dict_Ord_4)(k)(_239.values[1])) {
                        var __tco___dict_Ord_4 = __dict_Ord_4;
                        var __tco__239 = _239.values[0];
                        __dict_Ord_4 = __tco___dict_Ord_4;
                        _238 = k;
                        _239 = __tco__239;
                        continue tco;
                    };
                };
                var k = _238;
                if (_239.ctor === "Data.Map.Two") {
                    var _ = _239.values[0];
                    var _ = _239.values[1];
                    var __tco___dict_Ord_4 = __dict_Ord_4;
                    var __tco__239 = _239.values[3];
                    __dict_Ord_4 = __tco___dict_Ord_4;
                    _238 = k;
                    _239 = __tco__239;
                    continue tco;
                };
                var k = _238;
                if (_239.ctor === "Data.Map.Three") {
                    if (Prelude["=="](__dict_Ord_4["__superclasses"]["Prelude.Eq_0"]({}))(k)(_239.values[1])) {
                        return Data_Maybe.Just(_239.values[2]);
                    };
                };
                var k = _238;
                if (_239.ctor === "Data.Map.Three") {
                    if (Prelude["=="](__dict_Ord_4["__superclasses"]["Prelude.Eq_0"]({}))(k)(_239.values[4])) {
                        return Data_Maybe.Just(_239.values[5]);
                    };
                };
                var k = _238;
                if (_239.ctor === "Data.Map.Three") {
                    var _ = _239.values[2];
                    var _ = _239.values[3];
                    var _ = _239.values[4];
                    if (Prelude["<"](__dict_Ord_4)(k)(_239.values[1])) {
                        var __tco___dict_Ord_4 = __dict_Ord_4;
                        var __tco__239 = _239.values[0];
                        __dict_Ord_4 = __tco___dict_Ord_4;
                        _238 = k;
                        _239 = __tco__239;
                        continue tco;
                    };
                };
                var k = _238;
                if (_239.ctor === "Data.Map.Three") {
                    var _ = _239.values[0];
                    var _ = _239.values[2];
                    if (Prelude["<"](__dict_Ord_4)(_239.values[1])(k) && Prelude["<="](__dict_Ord_4)(k)(_239.values[4])) {
                        var __tco___dict_Ord_4 = __dict_Ord_4;
                        var __tco__239 = _239.values[3];
                        __dict_Ord_4 = __tco___dict_Ord_4;
                        _238 = k;
                        _239 = __tco__239;
                        continue tco;
                    };
                };
                if (_239.ctor === "Data.Map.Three") {
                    var _ = _239.values[0];
                    var _ = _239.values[1];
                    var _ = _239.values[2];
                    var _ = _239.values[3];
                    var _ = _239.values[4];
                    var __tco___dict_Ord_4 = __dict_Ord_4;
                    var __tco__238 = _238;
                    var __tco__239 = _239.values[6];
                    __dict_Ord_4 = __tco___dict_Ord_4;
                    _238 = __tco__238;
                    _239 = __tco__239;
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
var keys = function (_243) {
    if (_243.ctor === "Data.Map.Leaf") {
        return [  ];
    };
    if (_243.ctor === "Data.Map.Two") {
        return Prelude["++"](Data_Array.semigroupArray({}))(keys(_243.values[0]))(Prelude["++"](Data_Array.semigroupArray({}))([ _243.values[1] ])(keys(_243.values[3])));
    };
    if (_243.ctor === "Data.Map.Three") {
        return Prelude["++"](Data_Array.semigroupArray({}))(keys(_243.values[0]))(Prelude["++"](Data_Array.semigroupArray({}))([ _243.values[1] ])(Prelude["++"](Data_Array.semigroupArray({}))(keys(_243.values[3]))(Prelude["++"](Data_Array.semigroupArray({}))([ _243.values[4] ])(keys(_243.values[6])))));
    };
    throw "Failed pattern match";
};
var isEmpty = function (_237) {
    if (_237.ctor === "Data.Map.Leaf") {
        return true;
    };
    return false;
};
var functorMap = function (_) {
    return {
        "<$>": function (_245) {
            return function (_246) {
                if (_246.ctor === "Data.Map.Leaf") {
                    return Leaf;
                };
                if (_246.ctor === "Data.Map.Two") {
                    return Two(Prelude["<$>"](functorMap({}))(_245)(_246.values[0]))(_246.values[1])(_245(_246.values[2]))(Prelude["<$>"](functorMap({}))(_245)(_246.values[3]));
                };
                if (_246.ctor === "Data.Map.Three") {
                    return Three(Prelude["<$>"](functorMap({}))(_245)(_246.values[0]))(_246.values[1])(_245(_246.values[2]))(Prelude["<$>"](functorMap({}))(_245)(_246.values[3]))(_246.values[4])(_245(_246.values[5]))(Prelude["<$>"](functorMap({}))(_245)(_246.values[6]));
                };
                throw "Failed pattern match";
            };
        }
    };
};
var map = Prelude["<$>"](functorMap({}));
var fromZipper = function (__copy___dict_Ord_6) {
    return function (__copy__240) {
        return function (__copy__241) {
            var __dict_Ord_6 = __copy___dict_Ord_6;
            var _240 = __copy__240;
            var _241 = __copy__241;
            tco: while (true) {
                if (_240.length === 0) {
                    return _241;
                };
                if (_240.length > 0) {
                    var _866 = _240.slice(1);
                    if ((_240[0]).ctor === "Data.Map.TwoLeft") {
                        var __tco___dict_Ord_6 = __dict_Ord_6;
                        var __tco__241 = Two(_241)((_240[0]).values[0])((_240[0]).values[1])((_240[0]).values[2]);
                        __dict_Ord_6 = __tco___dict_Ord_6;
                        _240 = _866;
                        _241 = __tco__241;
                        continue tco;
                    };
                };
                if (_240.length > 0) {
                    var _871 = _240.slice(1);
                    if ((_240[0]).ctor === "Data.Map.TwoRight") {
                        var __tco___dict_Ord_6 = __dict_Ord_6;
                        var __tco__241 = Two((_240[0]).values[0])((_240[0]).values[1])((_240[0]).values[2])(_241);
                        __dict_Ord_6 = __tco___dict_Ord_6;
                        _240 = _871;
                        _241 = __tco__241;
                        continue tco;
                    };
                };
                if (_240.length > 0) {
                    var _876 = _240.slice(1);
                    if ((_240[0]).ctor === "Data.Map.ThreeLeft") {
                        var __tco___dict_Ord_6 = __dict_Ord_6;
                        var __tco__241 = Three(_241)((_240[0]).values[0])((_240[0]).values[1])((_240[0]).values[2])((_240[0]).values[3])((_240[0]).values[4])((_240[0]).values[5]);
                        __dict_Ord_6 = __tco___dict_Ord_6;
                        _240 = _876;
                        _241 = __tco__241;
                        continue tco;
                    };
                };
                if (_240.length > 0) {
                    var _884 = _240.slice(1);
                    if ((_240[0]).ctor === "Data.Map.ThreeMiddle") {
                        var __tco___dict_Ord_6 = __dict_Ord_6;
                        var __tco__241 = Three((_240[0]).values[0])((_240[0]).values[1])((_240[0]).values[2])(_241)((_240[0]).values[3])((_240[0]).values[4])((_240[0]).values[5]);
                        __dict_Ord_6 = __tco___dict_Ord_6;
                        _240 = _884;
                        _241 = __tco__241;
                        continue tco;
                    };
                };
                if (_240.length > 0) {
                    var _892 = _240.slice(1);
                    if ((_240[0]).ctor === "Data.Map.ThreeRight") {
                        var __tco___dict_Ord_6 = __dict_Ord_6;
                        var __tco__241 = Three((_240[0]).values[0])((_240[0]).values[1])((_240[0]).values[2])((_240[0]).values[3])((_240[0]).values[4])((_240[0]).values[5])(_241);
                        __dict_Ord_6 = __tco___dict_Ord_6;
                        _240 = _892;
                        _241 = __tco__241;
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
        return function (__copy__252) {
            return function (__copy__253) {
                var __dict_Ord_8 = __copy___dict_Ord_8;
                var _252 = __copy__252;
                var _253 = __copy__253;
                tco: while (true) {
                    if (_252.length === 0) {
                        return Two(_253.values[0])(_253.values[1])(_253.values[2])(_253.values[3]);
                    };
                    if (_252.length > 0) {
                        var _910 = _252.slice(1);
                        if ((_252[0]).ctor === "Data.Map.TwoLeft") {
                            return fromZipper(__dict_Ord_8)(_910)(Three(_253.values[0])(_253.values[1])(_253.values[2])(_253.values[3])((_252[0]).values[0])((_252[0]).values[1])((_252[0]).values[2]));
                        };
                    };
                    if (_252.length > 0) {
                        var _919 = _252.slice(1);
                        if ((_252[0]).ctor === "Data.Map.TwoRight") {
                            return fromZipper(__dict_Ord_8)(_919)(Three((_252[0]).values[0])((_252[0]).values[1])((_252[0]).values[2])(_253.values[0])(_253.values[1])(_253.values[2])(_253.values[3]));
                        };
                    };
                    if (_252.length > 0) {
                        var _928 = _252.slice(1);
                        if ((_252[0]).ctor === "Data.Map.ThreeLeft") {
                            var __tco___dict_Ord_8 = __dict_Ord_8;
                            var __tco__253 = KickUp(Two(_253.values[0])(_253.values[1])(_253.values[2])(_253.values[3]))((_252[0]).values[0])((_252[0]).values[1])(Two((_252[0]).values[2])((_252[0]).values[3])((_252[0]).values[4])((_252[0]).values[5]));
                            __dict_Ord_8 = __tco___dict_Ord_8;
                            _252 = _928;
                            _253 = __tco__253;
                            continue tco;
                        };
                    };
                    if (_252.length > 0) {
                        var _940 = _252.slice(1);
                        if ((_252[0]).ctor === "Data.Map.ThreeMiddle") {
                            var __tco___dict_Ord_8 = __dict_Ord_8;
                            var __tco__253 = KickUp(Two((_252[0]).values[0])((_252[0]).values[1])((_252[0]).values[2])(_253.values[0]))(_253.values[1])(_253.values[2])(Two(_253.values[3])((_252[0]).values[3])((_252[0]).values[4])((_252[0]).values[5]));
                            __dict_Ord_8 = __tco___dict_Ord_8;
                            _252 = _940;
                            _253 = __tco__253;
                            continue tco;
                        };
                    };
                    if (_252.length > 0) {
                        var _952 = _252.slice(1);
                        if ((_252[0]).ctor === "Data.Map.ThreeRight") {
                            var __tco___dict_Ord_8 = __dict_Ord_8;
                            var __tco__253 = KickUp(Two((_252[0]).values[0])((_252[0]).values[1])((_252[0]).values[2])((_252[0]).values[3]))((_252[0]).values[4])((_252[0]).values[5])(Two(_253.values[0])(_253.values[1])(_253.values[2])(_253.values[3]));
                            __dict_Ord_8 = __tco___dict_Ord_8;
                            _252 = _952;
                            _253 = __tco__253;
                            continue tco;
                        };
                    };
                    throw "Failed pattern match";
                };
            };
        };
    };
    var down = function (__copy___dict_Ord_9) {
        return function (__copy__248) {
            return function (__copy__249) {
                return function (__copy__250) {
                    return function (__copy__251) {
                        var __dict_Ord_9 = __copy___dict_Ord_9;
                        var _248 = __copy__248;
                        var _249 = __copy__249;
                        var _250 = __copy__250;
                        var _251 = __copy__251;
                        tco: while (true) {
                            var ctx = _248;
                            var k = _249;
                            var v = _250;
                            if (_251.ctor === "Data.Map.Leaf") {
                                return up(__dict_Ord_9)(ctx)(KickUp(Leaf)(k)(v)(Leaf));
                            };
                            var ctx = _248;
                            var k = _249;
                            var v = _250;
                            if (_251.ctor === "Data.Map.Two") {
                                if (Prelude["=="](__dict_Ord_9["__superclasses"]["Prelude.Eq_0"]({}))(k)(_251.values[1])) {
                                    return fromZipper(__dict_Ord_9)(ctx)(Two(_251.values[0])(k)(v)(_251.values[3]));
                                };
                            };
                            var ctx = _248;
                            var k = _249;
                            var v = _250;
                            if (_251.ctor === "Data.Map.Two") {
                                if (Prelude["<"](__dict_Ord_9)(k)(_251.values[1])) {
                                    var __tco___dict_Ord_9 = __dict_Ord_9;
                                    var __tco__248 = Prelude[":"](TwoLeft(_251.values[1])(_251.values[2])(_251.values[3]))(ctx);
                                    var __tco__251 = _251.values[0];
                                    __dict_Ord_9 = __tco___dict_Ord_9;
                                    _248 = __tco__248;
                                    _249 = k;
                                    _250 = v;
                                    _251 = __tco__251;
                                    continue tco;
                                };
                            };
                            var ctx = _248;
                            var k = _249;
                            var v = _250;
                            if (_251.ctor === "Data.Map.Two") {
                                var __tco___dict_Ord_9 = __dict_Ord_9;
                                var __tco__248 = Prelude[":"](TwoRight(_251.values[0])(_251.values[1])(_251.values[2]))(ctx);
                                var __tco__251 = _251.values[3];
                                __dict_Ord_9 = __tco___dict_Ord_9;
                                _248 = __tco__248;
                                _249 = k;
                                _250 = v;
                                _251 = __tco__251;
                                continue tco;
                            };
                            var ctx = _248;
                            var k = _249;
                            var v = _250;
                            if (_251.ctor === "Data.Map.Three") {
                                if (Prelude["=="](__dict_Ord_9["__superclasses"]["Prelude.Eq_0"]({}))(k)(_251.values[1])) {
                                    return fromZipper(__dict_Ord_9)(ctx)(Three(_251.values[0])(k)(v)(_251.values[3])(_251.values[4])(_251.values[5])(_251.values[6]));
                                };
                            };
                            var ctx = _248;
                            var k = _249;
                            var v = _250;
                            if (_251.ctor === "Data.Map.Three") {
                                if (Prelude["=="](__dict_Ord_9["__superclasses"]["Prelude.Eq_0"]({}))(k)(_251.values[4])) {
                                    return fromZipper(__dict_Ord_9)(ctx)(Three(_251.values[0])(_251.values[1])(_251.values[2])(_251.values[3])(k)(v)(_251.values[6]));
                                };
                            };
                            var ctx = _248;
                            var k = _249;
                            var v = _250;
                            if (_251.ctor === "Data.Map.Three") {
                                if (Prelude["<"](__dict_Ord_9)(k)(_251.values[1])) {
                                    var __tco___dict_Ord_9 = __dict_Ord_9;
                                    var __tco__248 = Prelude[":"](ThreeLeft(_251.values[1])(_251.values[2])(_251.values[3])(_251.values[4])(_251.values[5])(_251.values[6]))(ctx);
                                    var __tco__251 = _251.values[0];
                                    __dict_Ord_9 = __tco___dict_Ord_9;
                                    _248 = __tco__248;
                                    _249 = k;
                                    _250 = v;
                                    _251 = __tco__251;
                                    continue tco;
                                };
                            };
                            var ctx = _248;
                            var k = _249;
                            var v = _250;
                            if (_251.ctor === "Data.Map.Three") {
                                if (Prelude["<"](__dict_Ord_9)(_251.values[1])(k) && Prelude["<="](__dict_Ord_9)(k)(_251.values[4])) {
                                    var __tco___dict_Ord_9 = __dict_Ord_9;
                                    var __tco__248 = Prelude[":"](ThreeMiddle(_251.values[0])(_251.values[1])(_251.values[2])(_251.values[4])(_251.values[5])(_251.values[6]))(ctx);
                                    var __tco__251 = _251.values[3];
                                    __dict_Ord_9 = __tco___dict_Ord_9;
                                    _248 = __tco__248;
                                    _249 = k;
                                    _250 = v;
                                    _251 = __tco__251;
                                    continue tco;
                                };
                            };
                            if (_251.ctor === "Data.Map.Three") {
                                var __tco___dict_Ord_9 = __dict_Ord_9;
                                var __tco__248 = Prelude[":"](ThreeRight(_251.values[0])(_251.values[1])(_251.values[2])(_251.values[3])(_251.values[4])(_251.values[5]))(_248);
                                var __tco__249 = _249;
                                var __tco__250 = _250;
                                var __tco__251 = _251.values[6];
                                __dict_Ord_9 = __tco___dict_Ord_9;
                                _248 = __tco__248;
                                _249 = __tco__249;
                                _250 = __tco__250;
                                _251 = __tco__251;
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
                return function (_235) {
                    return insert(__dict_Ord_10)(_235.values[0])(_235.values[1])(m);
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
        return function (_234) {
            return insert(__dict_Ord_13)(_234.values[0])(_234.values[1])(m);
        };
    })(empty);
};
var unions = function (__dict_Ord_14) {
    return Data_Foldable.foldl(Data_Foldable.foldableArray({}))(union(__dict_Ord_14))(empty);
};
var $$delete = function (__dict_Ord_15) {
    var up = function (__copy___dict_Ord_16) {
        return function (__copy__257) {
            return function (__copy__258) {
                var __dict_Ord_16 = __copy___dict_Ord_16;
                var _257 = __copy__257;
                var _258 = __copy__258;
                tco: while (true) {
                    if (_257.length === 0) {
                        return _258;
                    };
                    if (_257.length > 0) {
                        var _1019 = _257.slice(1);
                        if ((_257[0]).ctor === "Data.Map.TwoLeft") {
                            if (((_257[0]).values[2]).ctor === "Data.Map.Leaf") {
                                if (_258.ctor === "Data.Map.Leaf") {
                                    return fromZipper(__dict_Ord_16)(_1019)(Two(Leaf)((_257[0]).values[0])((_257[0]).values[1])(Leaf));
                                };
                            };
                        };
                    };
                    if (_257.length > 0) {
                        var _1024 = _257.slice(1);
                        if ((_257[0]).ctor === "Data.Map.TwoRight") {
                            if (((_257[0]).values[0]).ctor === "Data.Map.Leaf") {
                                if (_258.ctor === "Data.Map.Leaf") {
                                    return fromZipper(__dict_Ord_16)(_1024)(Two(Leaf)((_257[0]).values[1])((_257[0]).values[2])(Leaf));
                                };
                            };
                        };
                    };
                    if (_257.length > 0) {
                        var _1029 = _257.slice(1);
                        if ((_257[0]).ctor === "Data.Map.TwoLeft") {
                            if (((_257[0]).values[2]).ctor === "Data.Map.Two") {
                                var __tco___dict_Ord_16 = __dict_Ord_16;
                                var __tco__258 = Three(_258)((_257[0]).values[0])((_257[0]).values[1])(((_257[0]).values[2]).values[0])(((_257[0]).values[2]).values[1])(((_257[0]).values[2]).values[2])(((_257[0]).values[2]).values[3]);
                                __dict_Ord_16 = __tco___dict_Ord_16;
                                _257 = _1029;
                                _258 = __tco__258;
                                continue tco;
                            };
                        };
                    };
                    if (_257.length > 0) {
                        var _1038 = _257.slice(1);
                        if ((_257[0]).ctor === "Data.Map.TwoRight") {
                            if (((_257[0]).values[0]).ctor === "Data.Map.Two") {
                                var __tco___dict_Ord_16 = __dict_Ord_16;
                                var __tco__258 = Three(((_257[0]).values[0]).values[0])(((_257[0]).values[0]).values[1])(((_257[0]).values[0]).values[2])(((_257[0]).values[0]).values[3])((_257[0]).values[1])((_257[0]).values[2])(_258);
                                __dict_Ord_16 = __tco___dict_Ord_16;
                                _257 = _1038;
                                _258 = __tco__258;
                                continue tco;
                            };
                        };
                    };
                    if (_257.length > 0) {
                        var _1047 = _257.slice(1);
                        if ((_257[0]).ctor === "Data.Map.TwoLeft") {
                            if (((_257[0]).values[2]).ctor === "Data.Map.Three") {
                                return fromZipper(__dict_Ord_16)(_1047)(Two(Two(_258)((_257[0]).values[0])((_257[0]).values[1])(((_257[0]).values[2]).values[0]))(((_257[0]).values[2]).values[1])(((_257[0]).values[2]).values[2])(Two(((_257[0]).values[2]).values[3])(((_257[0]).values[2]).values[4])(((_257[0]).values[2]).values[5])(((_257[0]).values[2]).values[6])));
                            };
                        };
                    };
                    if (_257.length > 0) {
                        var _1059 = _257.slice(1);
                        if ((_257[0]).ctor === "Data.Map.TwoRight") {
                            if (((_257[0]).values[0]).ctor === "Data.Map.Three") {
                                return fromZipper(__dict_Ord_16)(_1059)(Two(Two(((_257[0]).values[0]).values[0])(((_257[0]).values[0]).values[1])(((_257[0]).values[0]).values[2])(((_257[0]).values[0]).values[3]))(((_257[0]).values[0]).values[4])(((_257[0]).values[0]).values[5])(Two(((_257[0]).values[0]).values[6])((_257[0]).values[1])((_257[0]).values[2])(_258)));
                            };
                        };
                    };
                    if (_257.length > 0) {
                        var _1071 = _257.slice(1);
                        if ((_257[0]).ctor === "Data.Map.ThreeLeft") {
                            if (((_257[0]).values[2]).ctor === "Data.Map.Leaf") {
                                if (((_257[0]).values[5]).ctor === "Data.Map.Leaf") {
                                    if (_258.ctor === "Data.Map.Leaf") {
                                        return fromZipper(__dict_Ord_16)(_1071)(Three(Leaf)((_257[0]).values[0])((_257[0]).values[1])(Leaf)((_257[0]).values[3])((_257[0]).values[4])(Leaf));
                                    };
                                };
                            };
                        };
                    };
                    if (_257.length > 0) {
                        var _1079 = _257.slice(1);
                        if ((_257[0]).ctor === "Data.Map.ThreeMiddle") {
                            if (((_257[0]).values[0]).ctor === "Data.Map.Leaf") {
                                if (((_257[0]).values[5]).ctor === "Data.Map.Leaf") {
                                    if (_258.ctor === "Data.Map.Leaf") {
                                        return fromZipper(__dict_Ord_16)(_1079)(Three(Leaf)((_257[0]).values[1])((_257[0]).values[2])(Leaf)((_257[0]).values[3])((_257[0]).values[4])(Leaf));
                                    };
                                };
                            };
                        };
                    };
                    if (_257.length > 0) {
                        var _1087 = _257.slice(1);
                        if ((_257[0]).ctor === "Data.Map.ThreeRight") {
                            if (((_257[0]).values[0]).ctor === "Data.Map.Leaf") {
                                if (((_257[0]).values[3]).ctor === "Data.Map.Leaf") {
                                    if (_258.ctor === "Data.Map.Leaf") {
                                        return fromZipper(__dict_Ord_16)(_1087)(Three(Leaf)((_257[0]).values[1])((_257[0]).values[2])(Leaf)((_257[0]).values[4])((_257[0]).values[5])(Leaf));
                                    };
                                };
                            };
                        };
                    };
                    if (_257.length > 0) {
                        var _1095 = _257.slice(1);
                        if ((_257[0]).ctor === "Data.Map.ThreeLeft") {
                            if (((_257[0]).values[2]).ctor === "Data.Map.Two") {
                                return fromZipper(__dict_Ord_16)(_1095)(Two(Three(_258)((_257[0]).values[0])((_257[0]).values[1])(((_257[0]).values[2]).values[0])(((_257[0]).values[2]).values[1])(((_257[0]).values[2]).values[2])(((_257[0]).values[2]).values[3]))((_257[0]).values[3])((_257[0]).values[4])((_257[0]).values[5]));
                            };
                        };
                    };
                    if (_257.length > 0) {
                        var _1107 = _257.slice(1);
                        if ((_257[0]).ctor === "Data.Map.ThreeMiddle") {
                            if (((_257[0]).values[0]).ctor === "Data.Map.Two") {
                                return fromZipper(__dict_Ord_16)(_1107)(Two(Three(((_257[0]).values[0]).values[0])(((_257[0]).values[0]).values[1])(((_257[0]).values[0]).values[2])(((_257[0]).values[0]).values[3])((_257[0]).values[1])((_257[0]).values[2])(_258))((_257[0]).values[3])((_257[0]).values[4])((_257[0]).values[5]));
                            };
                        };
                    };
                    if (_257.length > 0) {
                        var _1119 = _257.slice(1);
                        if ((_257[0]).ctor === "Data.Map.ThreeMiddle") {
                            if (((_257[0]).values[5]).ctor === "Data.Map.Two") {
                                return fromZipper(__dict_Ord_16)(_1119)(Two((_257[0]).values[0])((_257[0]).values[1])((_257[0]).values[2])(Three(_258)((_257[0]).values[3])((_257[0]).values[4])(((_257[0]).values[5]).values[0])(((_257[0]).values[5]).values[1])(((_257[0]).values[5]).values[2])(((_257[0]).values[5]).values[3])));
                            };
                        };
                    };
                    if (_257.length > 0) {
                        var _1131 = _257.slice(1);
                        if ((_257[0]).ctor === "Data.Map.ThreeRight") {
                            if (((_257[0]).values[3]).ctor === "Data.Map.Two") {
                                return fromZipper(__dict_Ord_16)(_1131)(Two((_257[0]).values[0])((_257[0]).values[1])((_257[0]).values[2])(Three(((_257[0]).values[3]).values[0])(((_257[0]).values[3]).values[1])(((_257[0]).values[3]).values[2])(((_257[0]).values[3]).values[3])((_257[0]).values[4])((_257[0]).values[5])(_258)));
                            };
                        };
                    };
                    if (_257.length > 0) {
                        var _1143 = _257.slice(1);
                        if ((_257[0]).ctor === "Data.Map.ThreeLeft") {
                            if (((_257[0]).values[2]).ctor === "Data.Map.Three") {
                                return fromZipper(__dict_Ord_16)(_1143)(Three(Two(_258)((_257[0]).values[0])((_257[0]).values[1])(((_257[0]).values[2]).values[0]))(((_257[0]).values[2]).values[1])(((_257[0]).values[2]).values[2])(Two(((_257[0]).values[2]).values[3])(((_257[0]).values[2]).values[4])(((_257[0]).values[2]).values[5])(((_257[0]).values[2]).values[6]))((_257[0]).values[3])((_257[0]).values[4])((_257[0]).values[5]));
                            };
                        };
                    };
                    if (_257.length > 0) {
                        var _1158 = _257.slice(1);
                        if ((_257[0]).ctor === "Data.Map.ThreeMiddle") {
                            if (((_257[0]).values[0]).ctor === "Data.Map.Three") {
                                return fromZipper(__dict_Ord_16)(_1158)(Three(Two(((_257[0]).values[0]).values[0])(((_257[0]).values[0]).values[1])(((_257[0]).values[0]).values[2])(((_257[0]).values[0]).values[3]))(((_257[0]).values[0]).values[4])(((_257[0]).values[0]).values[5])(Two(((_257[0]).values[0]).values[6])((_257[0]).values[1])((_257[0]).values[2])(_258))((_257[0]).values[3])((_257[0]).values[4])((_257[0]).values[5]));
                            };
                        };
                    };
                    if (_257.length > 0) {
                        var _1173 = _257.slice(1);
                        if ((_257[0]).ctor === "Data.Map.ThreeMiddle") {
                            if (((_257[0]).values[5]).ctor === "Data.Map.Three") {
                                return fromZipper(__dict_Ord_16)(_1173)(Three((_257[0]).values[0])((_257[0]).values[1])((_257[0]).values[2])(Two(_258)((_257[0]).values[3])((_257[0]).values[4])(((_257[0]).values[5]).values[0]))(((_257[0]).values[5]).values[1])(((_257[0]).values[5]).values[2])(Two(((_257[0]).values[5]).values[3])(((_257[0]).values[5]).values[4])(((_257[0]).values[5]).values[5])(((_257[0]).values[5]).values[6])));
                            };
                        };
                    };
                    if (_257.length > 0) {
                        var _1188 = _257.slice(1);
                        if ((_257[0]).ctor === "Data.Map.ThreeRight") {
                            if (((_257[0]).values[3]).ctor === "Data.Map.Three") {
                                return fromZipper(__dict_Ord_16)(_1188)(Three((_257[0]).values[0])((_257[0]).values[1])((_257[0]).values[2])(Two(((_257[0]).values[3]).values[0])(((_257[0]).values[3]).values[1])(((_257[0]).values[3]).values[2])(((_257[0]).values[3]).values[3]))(((_257[0]).values[3]).values[4])(((_257[0]).values[3]).values[5])(Two(((_257[0]).values[3]).values[6])((_257[0]).values[4])((_257[0]).values[5])(_258)));
                            };
                        };
                    };
                    throw "Failed pattern match";
                };
            };
        };
    };
    var removeMaxNode = function (__copy___dict_Ord_17) {
        return function (__copy__260) {
            return function (__copy__261) {
                var __dict_Ord_17 = __copy___dict_Ord_17;
                var _260 = __copy__260;
                var _261 = __copy__261;
                tco: while (true) {
                    var ctx = _260;
                    if (_261.ctor === "Data.Map.Two") {
                        if ((_261.values[0]).ctor === "Data.Map.Leaf") {
                            if ((_261.values[3]).ctor === "Data.Map.Leaf") {
                                return up(__dict_Ord_17)(ctx)(Leaf);
                            };
                        };
                    };
                    var ctx = _260;
                    if (_261.ctor === "Data.Map.Two") {
                        var __tco___dict_Ord_17 = __dict_Ord_17;
                        var __tco__260 = Prelude[":"](TwoRight(_261.values[0])(_261.values[1])(_261.values[2]))(ctx);
                        var __tco__261 = _261.values[3];
                        __dict_Ord_17 = __tco___dict_Ord_17;
                        _260 = __tco__260;
                        _261 = __tco__261;
                        continue tco;
                    };
                    var ctx = _260;
                    if (_261.ctor === "Data.Map.Three") {
                        if ((_261.values[0]).ctor === "Data.Map.Leaf") {
                            if ((_261.values[3]).ctor === "Data.Map.Leaf") {
                                if ((_261.values[6]).ctor === "Data.Map.Leaf") {
                                    return up(__dict_Ord_17)(Prelude[":"](TwoRight(Leaf)(_261.values[1])(_261.values[2]))(ctx))(Leaf);
                                };
                            };
                        };
                    };
                    if (_261.ctor === "Data.Map.Three") {
                        var __tco___dict_Ord_17 = __dict_Ord_17;
                        var __tco__260 = Prelude[":"](ThreeRight(_261.values[0])(_261.values[1])(_261.values[2])(_261.values[3])(_261.values[4])(_261.values[5]))(_260);
                        var __tco__261 = _261.values[6];
                        __dict_Ord_17 = __tco___dict_Ord_17;
                        _260 = __tco__260;
                        _261 = __tco__261;
                        continue tco;
                    };
                    throw "Failed pattern match";
                };
            };
        };
    };
    var maxNode = function (__copy___dict_Ord_18) {
        return function (__copy__259) {
            var __dict_Ord_18 = __copy___dict_Ord_18;
            var _259 = __copy__259;
            tco: while (true) {
                if (_259.ctor === "Data.Map.Two") {
                    if ((_259.values[3]).ctor === "Data.Map.Leaf") {
                        return {
                            key: _259.values[1], 
                            value: _259.values[2]
                        };
                    };
                };
                if (_259.ctor === "Data.Map.Two") {
                    var _ = _259.values[0];
                    var _ = _259.values[1];
                    var __tco___dict_Ord_18 = __dict_Ord_18;
                    var __tco__259 = _259.values[3];
                    __dict_Ord_18 = __tco___dict_Ord_18;
                    _259 = __tco__259;
                    continue tco;
                };
                if (_259.ctor === "Data.Map.Three") {
                    if ((_259.values[6]).ctor === "Data.Map.Leaf") {
                        return {
                            key: _259.values[4], 
                            value: _259.values[5]
                        };
                    };
                };
                if (_259.ctor === "Data.Map.Three") {
                    var _ = _259.values[0];
                    var _ = _259.values[1];
                    var _ = _259.values[2];
                    var _ = _259.values[3];
                    var _ = _259.values[4];
                    var __tco___dict_Ord_18 = __dict_Ord_18;
                    var __tco__259 = _259.values[6];
                    __dict_Ord_18 = __tco___dict_Ord_18;
                    _259 = __tco__259;
                    continue tco;
                };
                throw "Failed pattern match";
            };
        };
    };
    var down = function (__copy___dict_Ord_19) {
        return function (__copy__254) {
            return function (__copy__255) {
                return function (__copy__256) {
                    var __dict_Ord_19 = __copy___dict_Ord_19;
                    var _254 = __copy__254;
                    var _255 = __copy__255;
                    var _256 = __copy__256;
                    tco: while (true) {
                        var ctx = _254;
                        if (_256.ctor === "Data.Map.Leaf") {
                            return fromZipper(__dict_Ord_19)(ctx)(Leaf);
                        };
                        var ctx = _254;
                        var k = _255;
                        if (_256.ctor === "Data.Map.Two") {
                            if ((_256.values[0]).ctor === "Data.Map.Leaf") {
                                if ((_256.values[3]).ctor === "Data.Map.Leaf") {
                                    if (Prelude["=="](__dict_Ord_19["__superclasses"]["Prelude.Eq_0"]({}))(k)(_256.values[1])) {
                                        return up(__dict_Ord_19)(ctx)(Leaf);
                                    };
                                };
                            };
                        };
                        var ctx = _254;
                        var k = _255;
                        if (_256.ctor === "Data.Map.Two") {
                            if (Prelude["=="](__dict_Ord_19["__superclasses"]["Prelude.Eq_0"]({}))(k)(_256.values[1])) {
                                var max = maxNode(__dict_Ord_19)(_256.values[0]);
                                return removeMaxNode(__dict_Ord_19)(Prelude[":"](TwoLeft(max.key)(max.value)(_256.values[3]))(ctx))(_256.values[0]);
                            };
                        };
                        var ctx = _254;
                        var k = _255;
                        if (_256.ctor === "Data.Map.Two") {
                            if (Prelude["<"](__dict_Ord_19)(k)(_256.values[1])) {
                                var __tco___dict_Ord_19 = __dict_Ord_19;
                                var __tco__254 = Prelude[":"](TwoLeft(_256.values[1])(_256.values[2])(_256.values[3]))(ctx);
                                var __tco__256 = _256.values[0];
                                __dict_Ord_19 = __tco___dict_Ord_19;
                                _254 = __tco__254;
                                _255 = k;
                                _256 = __tco__256;
                                continue tco;
                            };
                        };
                        var ctx = _254;
                        var k = _255;
                        if (_256.ctor === "Data.Map.Two") {
                            var __tco___dict_Ord_19 = __dict_Ord_19;
                            var __tco__254 = Prelude[":"](TwoRight(_256.values[0])(_256.values[1])(_256.values[2]))(ctx);
                            var __tco__256 = _256.values[3];
                            __dict_Ord_19 = __tco___dict_Ord_19;
                            _254 = __tco__254;
                            _255 = k;
                            _256 = __tco__256;
                            continue tco;
                        };
                        var ctx = _254;
                        var k = _255;
                        if (_256.ctor === "Data.Map.Three") {
                            if ((_256.values[0]).ctor === "Data.Map.Leaf") {
                                if ((_256.values[3]).ctor === "Data.Map.Leaf") {
                                    if ((_256.values[6]).ctor === "Data.Map.Leaf") {
                                        if (Prelude["=="](__dict_Ord_19["__superclasses"]["Prelude.Eq_0"]({}))(k)(_256.values[1])) {
                                            return fromZipper(__dict_Ord_19)(ctx)(Two(Leaf)(_256.values[4])(_256.values[5])(Leaf));
                                        };
                                    };
                                };
                            };
                        };
                        var ctx = _254;
                        var k = _255;
                        if (_256.ctor === "Data.Map.Three") {
                            if ((_256.values[0]).ctor === "Data.Map.Leaf") {
                                if ((_256.values[3]).ctor === "Data.Map.Leaf") {
                                    if ((_256.values[6]).ctor === "Data.Map.Leaf") {
                                        if (Prelude["=="](__dict_Ord_19["__superclasses"]["Prelude.Eq_0"]({}))(k)(_256.values[4])) {
                                            return fromZipper(__dict_Ord_19)(ctx)(Two(Leaf)(_256.values[1])(_256.values[2])(Leaf));
                                        };
                                    };
                                };
                            };
                        };
                        var ctx = _254;
                        var k = _255;
                        if (_256.ctor === "Data.Map.Three") {
                            if (Prelude["=="](__dict_Ord_19["__superclasses"]["Prelude.Eq_0"]({}))(k)(_256.values[1])) {
                                var max = maxNode(__dict_Ord_19)(_256.values[0]);
                                return removeMaxNode(__dict_Ord_19)(Prelude[":"](ThreeLeft(max.key)(max.value)(_256.values[3])(_256.values[4])(_256.values[5])(_256.values[6]))(ctx))(_256.values[0]);
                            };
                        };
                        var ctx = _254;
                        var k = _255;
                        if (_256.ctor === "Data.Map.Three") {
                            if (Prelude["=="](__dict_Ord_19["__superclasses"]["Prelude.Eq_0"]({}))(k)(_256.values[4])) {
                                var max = maxNode(__dict_Ord_19)(_256.values[3]);
                                return removeMaxNode(__dict_Ord_19)(Prelude[":"](ThreeMiddle(_256.values[0])(_256.values[1])(_256.values[2])(max.key)(max.value)(_256.values[6]))(ctx))(_256.values[3]);
                            };
                        };
                        var ctx = _254;
                        var k = _255;
                        if (_256.ctor === "Data.Map.Three") {
                            if (Prelude["<"](__dict_Ord_19)(k)(_256.values[1])) {
                                var __tco___dict_Ord_19 = __dict_Ord_19;
                                var __tco__254 = Prelude[":"](ThreeLeft(_256.values[1])(_256.values[2])(_256.values[3])(_256.values[4])(_256.values[5])(_256.values[6]))(ctx);
                                var __tco__256 = _256.values[0];
                                __dict_Ord_19 = __tco___dict_Ord_19;
                                _254 = __tco__254;
                                _255 = k;
                                _256 = __tco__256;
                                continue tco;
                            };
                        };
                        var ctx = _254;
                        var k = _255;
                        if (_256.ctor === "Data.Map.Three") {
                            if (Prelude["<"](__dict_Ord_19)(_256.values[1])(k) && Prelude["<"](__dict_Ord_19)(k)(_256.values[4])) {
                                var __tco___dict_Ord_19 = __dict_Ord_19;
                                var __tco__254 = Prelude[":"](ThreeMiddle(_256.values[0])(_256.values[1])(_256.values[2])(_256.values[4])(_256.values[5])(_256.values[6]))(ctx);
                                var __tco__256 = _256.values[3];
                                __dict_Ord_19 = __tco___dict_Ord_19;
                                _254 = __tco__254;
                                _255 = k;
                                _256 = __tco__256;
                                continue tco;
                            };
                        };
                        if (_256.ctor === "Data.Map.Three") {
                            var __tco___dict_Ord_19 = __dict_Ord_19;
                            var __tco__254 = Prelude[":"](ThreeRight(_256.values[0])(_256.values[1])(_256.values[2])(_256.values[3])(_256.values[4])(_256.values[5]))(_254);
                            var __tco__255 = _255;
                            var __tco__256 = _256.values[6];
                            __dict_Ord_19 = __tco___dict_Ord_19;
                            _254 = __tco__254;
                            _255 = __tco__255;
                            _256 = __tco__256;
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
    var allHeights = function (_247) {
        if (_247.ctor === "Data.Map.Leaf") {
            return [ 0 ];
        };
        if (_247.ctor === "Data.Map.Two") {
            return Data_Array.map(function (n) {
                return n + 1;
            })(Prelude["++"](Data_Array.semigroupArray({}))(allHeights(_247.values[0]))(allHeights(_247.values[3])));
        };
        if (_247.ctor === "Data.Map.Three") {
            return Data_Array.map(function (n) {
                return n + 1;
            })(Prelude["++"](Data_Array.semigroupArray({}))(allHeights(_247.values[0]))(Prelude["++"](Data_Array.semigroupArray({}))(allHeights(_247.values[3]))(allHeights(_247.values[6]))));
        };
        throw "Failed pattern match";
    };
    return Data_Array.length(Data_Array.nub(Prelude.eqNumber({}))(allHeights(tree))) === 1;
};
var alter = function (__dict_Ord_20) {
    return function (f) {
        return function (k) {
            return function (m) {
                return (function (_1329) {
                    if (_1329.ctor === "Data.Maybe.Nothing") {
                        return $$delete(__dict_Ord_20)(k)(m);
                    };
                    if (_1329.ctor === "Data.Maybe.Just") {
                        return insert(__dict_Ord_20)(k)(_1329.values[0])(m);
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
},{"Data.Array":5,"Data.Foldable":6,"Data.Maybe":8,"Data.Tuple":12,"Prelude":17}],8:[function(require,module,exports){
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
        show: function (_62) {
            if (_62.ctor === "Data.Maybe.Just") {
                return "Just (" + Prelude.show(__dict_Show_0)(_62.values[0]) + ")";
            };
            if (_62.ctor === "Data.Maybe.Nothing") {
                return "Nothing";
            };
            throw "Failed pattern match";
        }
    };
};
var maybe = function (_51) {
    return function (_52) {
        return function (_53) {
            if (_53.ctor === "Data.Maybe.Nothing") {
                return _51;
            };
            if (_53.ctor === "Data.Maybe.Just") {
                return _52(_53.values[0]);
            };
            throw "Failed pattern match";
        };
    };
};
var isNothing = maybe(true)(Prelude["const"](false));
var isJust = maybe(false)(Prelude["const"](true));
var functorMaybe = function (_) {
    return {
        "<$>": function (_54) {
            return function (_55) {
                if (_55.ctor === "Data.Maybe.Just") {
                    return Just(_54(_55.values[0]));
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
        "==": function (_63) {
            return function (_64) {
                if (_63.ctor === "Data.Maybe.Nothing") {
                    if (_64.ctor === "Data.Maybe.Nothing") {
                        return true;
                    };
                };
                if (_63.ctor === "Data.Maybe.Just") {
                    if (_64.ctor === "Data.Maybe.Just") {
                        return Prelude["=="](__dict_Eq_2)(_63.values[0])(_64.values[0]);
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
        compare: function (_65) {
            return function (_66) {
                if (_65.ctor === "Data.Maybe.Just") {
                    if (_66.ctor === "Data.Maybe.Just") {
                        return Prelude.compare(__dict_Ord_1)(_65.values[0])(_66.values[0]);
                    };
                };
                if (_65.ctor === "Data.Maybe.Nothing") {
                    if (_66.ctor === "Data.Maybe.Nothing") {
                        return Prelude.EQ;
                    };
                };
                if (_65.ctor === "Data.Maybe.Nothing") {
                    return Prelude.LT;
                };
                if (_66.ctor === "Data.Maybe.Nothing") {
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
        "<*>": function (_56) {
            return function (_57) {
                if (_56.ctor === "Data.Maybe.Just") {
                    return Prelude["<$>"](functorMaybe({}))(_56.values[0])(_57);
                };
                if (_56.ctor === "Data.Maybe.Nothing") {
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
        ">>=": function (_60) {
            return function (_61) {
                if (_60.ctor === "Data.Maybe.Just") {
                    return _61(_60.values[0]);
                };
                if (_60.ctor === "Data.Maybe.Nothing") {
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
        "<|>": function (_58) {
            return function (_59) {
                if (_58.ctor === "Data.Maybe.Nothing") {
                    return _59;
                };
                return _58;
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
},{"Prelude":17}],9:[function(require,module,exports){
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
        show: function (_142) {
            return "First (" + Prelude.show(Data_Maybe.showMaybe(__dict_Show_0))(_142.values[0]) + ")";
        }
    };
};
var semigroupFirst = function (_) {
    return {
        "<>": function (_143) {
            return function (_144) {
                if ((_143.values[0]).ctor === "Data.Maybe.Just") {
                    return _143;
                };
                return _144;
            };
        }
    };
};
var runFirst = function (_135) {
    return _135.values[0];
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
        "==": function (_136) {
            return function (_137) {
                return Prelude["=="](Data_Maybe.eqMaybe(__dict_Eq_2))(_136.values[0])(_137.values[0]);
            };
        }, 
        "/=": function (_138) {
            return function (_139) {
                return Prelude["/="](Data_Maybe.eqMaybe(__dict_Eq_2))(_138.values[0])(_139.values[0]);
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
        compare: function (_140) {
            return function (_141) {
                return Prelude.compare(Data_Maybe.ordMaybe(__dict_Ord_1))(_140.values[0])(_141.values[0]);
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
},{"Data.Maybe":8,"Prelude":17}],10:[function(require,module,exports){
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
},{"Data.Array":5,"Prelude":17}],11:[function(require,module,exports){
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
},{}],12:[function(require,module,exports){
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
var unzip = function (_179) {
    if (_179.length > 0) {
        var _631 = _179.slice(1);
        return (function (_627) {
            return Tuple(Prelude[":"]((_179[0]).values[0])(_627.values[0]))(Prelude[":"]((_179[0]).values[1])(_627.values[1]));
        })(unzip(_631));
    };
    if (_179.length === 0) {
        return Tuple([  ])([  ]);
    };
    throw "Failed pattern match";
};
var uncurry = function (_177) {
    return function (_178) {
        return _177(_178.values[0])(_178.values[1]);
    };
};
var swap = function (_180) {
    return Tuple(_180.values[1])(_180.values[0]);
};
var snd = function (_176) {
    return _176.values[1];
};
var showTuple = function (__dict_Show_0) {
    return function (__dict_Show_1) {
        return {
            show: function (_181) {
                return "Tuple (" + Prelude.show(__dict_Show_0)(_181.values[0]) + ") (" + Prelude.show(__dict_Show_1)(_181.values[1]) + ")";
            }
        };
    };
};
var functorTuple = function (_) {
    return {
        "<$>": function (_186) {
            return function (_187) {
                return Tuple(_187.values[0])(_186(_187.values[1]));
            };
        }
    };
};
var fst = function (_175) {
    return _175.values[0];
};
var eqTuple = function (__dict_Eq_5) {
    return function (__dict_Eq_6) {
        return {
            "==": function (_182) {
                return function (_183) {
                    return Prelude["=="](__dict_Eq_5)(_182.values[0])(_183.values[0]) && Prelude["=="](__dict_Eq_6)(_182.values[1])(_183.values[1]);
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
            compare: function (_184) {
                return function (_185) {
                    return (function (_662) {
                        if (_662.ctor === "Prelude.EQ") {
                            return Prelude.compare(__dict_Ord_3)(_184.values[1])(_185.values[1]);
                        };
                        return _662;
                    })(Prelude.compare(__dict_Ord_2)(_184.values[0])(_185.values[0]));
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
        "<*>": function (_188) {
            return function (_189) {
                return Tuple(Prelude["<>"](__dict_Semigroup_8)(_188.values[0])(_189.values[0]))(_188.values[1](_189.values[1]));
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
        ">>=": function (_190) {
            return function (_191) {
                return (function (_675) {
                    return Tuple(Prelude["<>"](__dict_Semigroup_7)(_190.values[0])(_675.values[0]))(_675.values[1]);
                })(_191(_190.values[1]));
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
},{"Data.Array":5,"Data.Monoid":10,"Prelude":17}],13:[function(require,module,exports){
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
},{"Control.Monad.Eff":4,"Prelude":17}],14:[function(require,module,exports){
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
function requestAnimationFrame(action) {  return function() {    window.requestAnimationFrame(action);  };};
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
        show: function (_322) {
            if (_322.ctor === "Main.White") {
                return "White";
            };
            if (_322.ctor === "Main.Green") {
                return "Green";
            };
            if (_322.ctor === "Main.Red") {
                return "Red";
            };
            throw "Failed pattern match";
        }
    };
};
var eqBrick = function (_) {
    return {
        "==": function (_323) {
            return function (_324) {
                if (_323.ctor === "Main.White") {
                    if (_324.ctor === "Main.White") {
                        return true;
                    };
                };
                if (_323.ctor === "Main.Green") {
                    if (_324.ctor === "Main.Green") {
                        return true;
                    };
                };
                if (_323.ctor === "Main.Red") {
                    if (_324.ctor === "Main.Red") {
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
var collide = function (_312) {
    return function (_313) {
        return function (_314) {
            return function (_315) {
                if (_315.ctor === "Main.White") {
                    if (_312.direction.ctor === "Main.MovingLeft") {
                        var _1453 = {};
                        for (var _1454 in _312) {
                            if (_312.hasOwnProperty(_1454)) {
                                _1453[_1454] = _312[_1454];
                            };
                        };
                        _1453.direction = MovingRight;
                        return _1453;
                    };
                    if (_312.direction.ctor === "Main.MovingRight") {
                        var _1455 = {};
                        for (var _1456 in _312) {
                            if (_312.hasOwnProperty(_1456)) {
                                _1455[_1456] = _312[_1456];
                            };
                        };
                        _1455.direction = MovingLeft;
                        return _1455;
                    };
                    throw "Failed pattern match";
                };
                if (_315.ctor === "Main.Red") {
                    var _1459 = {};
                    for (var _1460 in _312) {
                        if (_312.hasOwnProperty(_1460)) {
                            _1459[_1460] = _312[_1460];
                        };
                    };
                    _1459.status = GameOver;
                    return _1459;
                };
                if (_315.ctor === "Main.Green") {
                    var newStatus = Prelude["<<<"](Prelude.semigroupoidArr({}))(Data_Array["null"])(Prelude["<<<"](Prelude.semigroupoidArr({}))(Data_Array.filter(Prelude["=="](eqBrick({}))(Green)))(Data_Array.map(Data_Tuple.snd)))(Data_Map.toList(_312.maze)) ? GameOver : InProgress;
                    var newMaze = Data_Map["delete"](Data_Tuple.ordTuple(Prelude.ordNumber({}))(Prelude.ordNumber({})))(_313)(_312.maze);
                    return (function (_1461) {
                        if (_1461.ctor === "Main.MovingLeft") {
                            var _1462 = {};
                            for (var _1463 in _312) {
                                if (_312.hasOwnProperty(_1463)) {
                                    _1462[_1463] = _312[_1463];
                                };
                            };
                            _1462.maze = newMaze;
                            _1462.direction = MovingRight;
                            _1462.status = newStatus;
                            return _1462;
                        };
                        if (_1461.ctor === "Main.MovingRight") {
                            var _1464 = {};
                            for (var _1465 in _312) {
                                if (_312.hasOwnProperty(_1465)) {
                                    _1464[_1465] = _312[_1465];
                                };
                            };
                            _1464.maze = newMaze;
                            _1464.direction = MovingLeft;
                            _1464.status = newStatus;
                            return _1464;
                        };
                        throw "Failed pattern match";
                    })(_312.direction);
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
var checkCollision = function (_310) {
    return function (_311) {
        var nearestBrick = function (_333) {
            return function (_334) {
                return function (_335) {
                    if (_333.ctor === "Main.MovingLeft") {
                        return Data_Tuple.Tuple(Math.floor(_334))(Math.round(_335));
                    };
                    if (_333.ctor === "Main.MovingRight") {
                        return Data_Tuple.Tuple(Math.ceil(_334))(Math.round(_335));
                    };
                    throw "Failed pattern match";
                };
            };
        };
        var checkCollision$prime = function (_336) {
            return function (_337) {
                var dy = _337.values[1] - _311.values[1];
                var dx = _337.values[0] - _311.values[0];
                var dist = Math.sqrt(dx * dx + dy * dy);
                return dist >= 0.7 ? Data_Maybe.Nothing : Prelude["<$>"](Data_Maybe.functorMaybe({}))(Data_Tuple.Tuple(_337))(Data_Map.lookup(Data_Tuple.ordTuple(Prelude.ordNumber({}))(Prelude.ordNumber({})))(_337)(_336.maze));
            };
        };
        return (function (_1475) {
            return Prelude["<<<"](Prelude.semigroupoidArr({}))(Data_Monoid_First.runFirst)(Data_Foldable.mconcat(Data_Foldable.foldableArray({}))(Data_Monoid_First.monoidFirst({})))(Data_Array.map(Data_Monoid_First.First)([ checkCollision$prime(_310)(Data_Tuple.Tuple(_1475.values[0])(_1475.values[1])), checkCollision$prime(_310)(Data_Tuple.Tuple(_1475.values[0])(_1475.values[1] - 1)), checkCollision$prime(_310)(Data_Tuple.Tuple(_1475.values[0])(_1475.values[1] + 1)) ]));
        })(nearestBrick(_310.direction)(_311.values[0])(_311.values[1]));
    };
};
var changeKeyState = function (stateRef) {
    return function (newState) {
        return function __do() {
            var _24 = Control_Monad_Eff_Ref.readRef(stateRef)();
            return (function (_1481) {
                if (_1481.ctor === "Main.InProgress") {
                    return Control_Monad_Eff_Ref.modifyRef(stateRef)(function (st) {
                        var _1482 = {};
                        for (var _1483 in st) {
                            if (st.hasOwnProperty(_1483)) {
                                _1482[_1483] = st[_1483];
                            };
                        };
                        _1482.keyState = newState;
                        return _1482;
                    });
                };
                return Prelude["return"](Control_Monad_Eff.monadEff({}))(Prelude.unit);
            })(_24.status)();
        };
    };
};
var handleKeyDown = function (_316) {
    return function (_317) {
        if (_317 === 38) {
            return function __do() {
                changeKeyState(_316)(MovingUp)();
                return false;
            };
        };
        if (_317 === 40) {
            return function __do() {
                changeKeyState(_316)(MovingDown)();
                return false;
            };
        };
        return Prelude["return"](Control_Monad_Eff.monadEff({}))(true);
    };
};
var handleKeyUp = function (_318) {
    return function (_319) {
        return function __do() {
            changeKeyState(_318)(NoKeyState)();
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
var brick = function (_320) {
    return function (_321) {
        if (_321.ctor === "Main.White") {
            return box(_320)("#c0c000")("#c08000");
        };
        if (_321.ctor === "Main.Red") {
            return box(_320)("#00ff00")("#008000");
        };
        if (_321.ctor === "Main.Green") {
            return box(_320)("#ff0000")("#0000ff");
        };
        throw "Failed pattern match";
    };
};
var maze = function (ctx) {
    return function (m) {
        return function __do() {
            Control_Monad_Eff.foreachE(Data_Map.toList(m))(function (_309) {
                return Graphics_Canvas.withContext(ctx)(function __do() {
                    Graphics_Canvas.translate({
                        translateX: (_309.values[0]).values[0], 
                        translateY: (_309.values[0]).values[1]
                    })(ctx)();
                    Graphics_Canvas.scale({
                        scaleX: 0.4, 
                        scaleY: 0.4
                    })(ctx)();
                    brick(ctx)(_309.values[1])();
                    return Prelude.unit;
                });
            })();
            return ctx;
        };
    };
};
var parseMaze = function (ls) {
    var charToBrick = function (_332) {
        if (_332 === "#") {
            return Data_Maybe.Just(White);
        };
        if (_332 === "R") {
            return Data_Maybe.Just(Red);
        };
        if (_332 === "G") {
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
    var lineToMaze = function (__copy__328) {
        return function (__copy__329) {
            return function (__copy__330) {
                return function (__copy__331) {
                    var _328 = __copy__328;
                    var _329 = __copy__329;
                    var _330 = __copy__330;
                    var _331 = __copy__331;
                    tco: while (true) {
                        var c = _329;
                        var m = _330;
                        var s = _331;
                        if (c >= Data_String.length(s)) {
                            return m;
                        };
                        var __tco__328 = _328;
                        var __tco__329 = _329 + 1;
                        var __tco__330 = updateMaze(_328)(_329)(_330)(_331);
                        var __tco__331 = _331;
                        _328 = __tco__328;
                        _329 = __tco__329;
                        _330 = __tco__330;
                        _331 = __tco__331;
                        continue tco;
                    };
                };
            };
        };
    };
    var go = function (__copy__325) {
        return function (__copy__326) {
            return function (__copy__327) {
                var _325 = __copy__325;
                var _326 = __copy__326;
                var _327 = __copy__327;
                tco: while (true) {
                    var m = _326;
                    if (_327.length === 0) {
                        return m;
                    };
                    if (_327.length > 0) {
                        var _1504 = _327.slice(1);
                        var __tco__325 = _325 + 1;
                        var __tco__326 = lineToMaze(_325)(0)(_326)(_327[0]);
                        _325 = __tco__325;
                        _326 = __tco__326;
                        _327 = _1504;
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
            var newY = state.posY - d;
            var nearestBrick = function (x) {
                return function (y) {
                    return Data_Tuple.Tuple(Math.round(x))(Math.floor(y));
                };
            };
            var location = nearestBrick(state.posX)(newY);
            var brick = Data_Map.lookup(Data_Tuple.ordTuple(Prelude.ordNumber({}))(Prelude.ordNumber({})))(location)(state.maze);
            var clipped = Prelude["=="](Data_Maybe.eqMaybe(eqBrick({})))(brick)(Data_Maybe.Just(White)) ? Math.max(newY)(Math.floor(newY) + 0.7) : newY;
            return clipped;
        };
        if (state.keyState.ctor === "Main.MovingDown") {
            var newY = state.posY + d;
            var nearestBrick = function (x) {
                return function (y) {
                    return Data_Tuple.Tuple(Math.round(x))(Math.ceil(y));
                };
            };
            var location = nearestBrick(state.posX)(newY);
            var brick = Data_Map.lookup(Data_Tuple.ordTuple(Prelude.ordNumber({}))(Prelude.ordNumber({})))(location)(state.maze);
            var clipped = Prelude["=="](Data_Maybe.eqMaybe(eqBrick({})))(brick)(Data_Maybe.Just(White)) ? Math.min(newY)(Math.ceil(newY) - 0.7) : newY;
            return clipped;
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
        return (function (_1506) {
            if (_1506.ctor === "Main.MovingLeft") {
                return Data_Tuple.Tuple(state.posX - d)(newY);
            };
            if (_1506.ctor === "Main.MovingRight") {
                return Data_Tuple.Tuple(state.posX + d)(newY);
            };
            throw "Failed pattern match";
        })(state.direction);
    };
};
var updateGameState = function (state) {
    return function (elapsed) {
        return (function (_1507) {
            return (function (_1508) {
                if (_1508.ctor === "Data.Maybe.Nothing") {
                    var _1509 = {};
                    for (var _1510 in state) {
                        if (state.hasOwnProperty(_1510)) {
                            _1509[_1510] = state[_1510];
                        };
                    };
                    _1509.posX = _1507.values[0];
                    _1509.posY = _1507.values[1];
                    return _1509;
                };
                if (_1508.ctor === "Data.Maybe.Just") {
                    return collide(state)((_1508.values[0]).values[0])(Data_Tuple.Tuple(_1507.values[0])(_1507.values[1]))((_1508.values[0]).values[1]);
                };
                throw "Failed pattern match";
            })(checkCollision(state)(_1507));
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
            var _26 = Control_Monad_Eff_Ref.readRef(stateRef)();
            var _25 = getMillis();
            return (function () {
                var elapsedTime = Data_Maybe.maybe(0)(Prelude.id(Prelude.categoryArr({})))(Prelude["<$>"](Data_Maybe.functorMaybe({}))(Prelude["-"](Prelude.numNumber({}))(_25))(_26.lastTime));
                var state$prime = tick(_26)(elapsedTime);
                var state$prime$prime = (function () {
                    var _1519 = {};
                    for (var _1520 in state$prime) {
                        if (state$prime.hasOwnProperty(_1520)) {
                            _1519[_1520] = state$prime[_1520];
                        };
                    };
                    _1519.lastTime = Data_Maybe.Just(_25);
                    return _1519;
                })();
                return function __do() {
                    Control_Monad_Eff_Ref.writeRef(stateRef)(state$prime$prime)();
                    Graphics_Canvas.setFillStyle("#000000")(ctx)();
                    Graphics_Canvas.clearRect(ctx)({
                        x: 0, 
                        y: 0, 
                        w: 800, 
                        h: 600
                    })();
                    Graphics_Canvas.withContext(ctx)(function __do() {
                        Graphics_Canvas.translate({
                            translateX: 400, 
                            translateY: 300
                        })(ctx)();
                        Graphics_Canvas.scale({
                            scaleX: 50, 
                            scaleY: 50
                        })(ctx)();
                        Graphics_Canvas.translate({
                            translateX: -state$prime$prime.posX, 
                            translateY: -state$prime$prime.posY
                        })(ctx)();
                        maze(ctx)(state$prime$prime.maze)();
                        return ball(ctx)(state$prime$prime.posX)(state$prime$prime.posY)();
                    })();
                    return requestAnimationFrame(render(ctx)(stateRef))();
                };
            })()();
        };
    };
};
var main = function __do() {
    var _29 = Control_Monad_Eff_Ref.newRef(defaultGameState)();
    onKeyDown(handleKeyDown(_29))();
    onKeyUp(handleKeyUp(_29))();
    var _28 = getElementById("canvas")();
    var _27 = Graphics_Canvas.getContext2D(_28)();
    return render(_27)(_29)();
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
    requestAnimationFrame: requestAnimationFrame, 
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
},{"Control.Monad.Eff":4,"Control.Monad.Eff.Ref":3,"Data.Array":5,"Data.Foldable":6,"Data.Map":7,"Data.Maybe":8,"Data.Monoid.First":9,"Data.String":11,"Data.Tuple":12,"Graphics.Canvas":13,"Math":15,"Prelude":17}],15:[function(require,module,exports){
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
},{}],16:[function(require,module,exports){
"use strict";
function unsafeIndex(xs) {  return function(n) {    return xs[n];  };};
module.exports = {
    unsafeIndex: unsafeIndex
};
},{}],17:[function(require,module,exports){
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
        show: function (_34) {
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
        show: function (_42) {
            if (_42.ctor === "Prelude.LT") {
                return "LT";
            };
            if (_42.ctor === "Prelude.GT") {
                return "GT";
            };
            if (_42.ctor === "Prelude.EQ") {
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
        show: function (_35) {
            if (_35) {
                return "true";
            };
            if (!_35) {
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
        "<>": function (_49) {
            return function (_50) {
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
        "==": function (_36) {
            return function (_37) {
                return true;
            };
        }, 
        "/=": function (_38) {
            return function (_39) {
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
        compare: function (_43) {
            return function (_44) {
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
        compare: function (_45) {
            return function (_46) {
                if (!_45) {
                    if (!_46) {
                        return EQ;
                    };
                };
                if (!_45) {
                    if (_46) {
                        return LT;
                    };
                };
                if (_45) {
                    if (_46) {
                        return EQ;
                    };
                };
                if (_45) {
                    if (!_46) {
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
var $$const = function (_30) {
    return function (_31) {
        return _30;
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
            return (function (_363) {
                if (_363.ctor === "Prelude.LT") {
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
            return (function (_364) {
                if (_364.ctor === "Prelude.GT") {
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
            return (function (_365) {
                if (_365.ctor === "Prelude.GT") {
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
            return (function (_366) {
                if (_366.ctor === "Prelude.LT") {
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
        compare: function (_47) {
            return function (_48) {
                if (_47.length === 0) {
                    if (_48.length === 0) {
                        return EQ;
                    };
                };
                if (_47.length === 0) {
                    return LT;
                };
                if (_48.length === 0) {
                    return GT;
                };
                if (_47.length > 0) {
                    var _373 = _47.slice(1);
                    if (_48.length > 0) {
                        var _371 = _48.slice(1);
                        return (function (_369) {
                            if (_369.ctor === "Prelude.EQ") {
                                return compare(ordArray(__dict_Ord_9))(_373)(_371);
                            };
                            return _369;
                        })(compare(__dict_Ord_9)(_47[0])(_48[0]));
                    };
                };
                throw "Failed pattern match";
            };
        }
    };
};
var eqOrdering = function (_) {
    return {
        "==": function (_40) {
            return function (_41) {
                if (_40.ctor === "Prelude.LT") {
                    if (_41.ctor === "Prelude.LT") {
                        return true;
                    };
                };
                if (_40.ctor === "Prelude.GT") {
                    if (_41.ctor === "Prelude.GT") {
                        return true;
                    };
                };
                if (_40.ctor === "Prelude.EQ") {
                    if (_41.ctor === "Prelude.EQ") {
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
var asTypeOf = function (_32) {
    return function (_33) {
        return _32;
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