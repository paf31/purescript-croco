(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window.onload = function() {
  require("Main").main();
};

},{"Main":17}],2:[function(require,module,exports){
"use strict";
var Prelude = require("Prelude");
var $less$times = function (__dict_Functor_0) {
    return function (__dict_Applicative_1) {
        return function (x) {
            return function (y) {
                return Prelude["<*>"](__dict_Applicative_1["__superclasses"]["Prelude.Apply_0"]({}))(Prelude["<$>"](__dict_Functor_0)(Prelude["const"])(x))(y);
            };
        };
    };
};
var $times$greater = function (__dict_Functor_2) {
    return function (__dict_Applicative_3) {
        return function (x) {
            return function (y) {
                return Prelude["<*>"](__dict_Applicative_3["__superclasses"]["Prelude.Apply_0"]({}))(Prelude["<$>"](__dict_Functor_2)(Prelude["const"](Prelude.id(Prelude.categoryArr({}))))(x))(y);
            };
        };
    };
};
var lift3 = function (__dict_Functor_4) {
    return function (__dict_Applicative_5) {
        return function (f) {
            return function (x) {
                return function (y) {
                    return function (z) {
                        return Prelude["<*>"](__dict_Applicative_5["__superclasses"]["Prelude.Apply_0"]({}))(Prelude["<*>"](__dict_Applicative_5["__superclasses"]["Prelude.Apply_0"]({}))(Prelude["<$>"](__dict_Functor_4)(f)(x))(y))(z);
                    };
                };
            };
        };
    };
};
var lift2 = function (__dict_Functor_6) {
    return function (__dict_Applicative_7) {
        return function (f) {
            return function (x) {
                return function (y) {
                    return Prelude["<*>"](__dict_Applicative_7["__superclasses"]["Prelude.Apply_0"]({}))(Prelude["<$>"](__dict_Functor_6)(f)(x))(y);
                };
            };
        };
    };
};
module.exports = {
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
        "__superclasses": {}, 
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
function elem(l) {  return function (e) {    return l.indexOf(e) !== -1;  };};
function elemIndex (l) {  return function (e) {    return l.indexOf(e);  };};
function elemLastIndex (l) {  return function (e) {    return l.lastIndexOf(e);  };};
function append (l1) {  return function (l2) {    return l1.concat(l2);  };};
function concat (xss) {  var result = [];  for (var i = 0, l = xss.length; i < l; i++) {    result.push.apply(result, xss[i]);  }  return result;};
function reverse (l) {  return l.slice().reverse();};
function drop (n) {  return function (l) {    return l.slice(n);  };};
function take (n) {  return function (l) {    return l.slice(0, n);  };};
function slice (s) {  return function (e) {    return function (l) {      return l.slice(s, e);    };  };};
function insertAt (index) {  return function (a) {    return function (l) {      var l1 = l.slice();      l1.splice(index, 0, a);      return l1;    };   };};
function deleteAt (index) {  return function (n) {    return function (l) {      var l1 = l.slice();      l1.splice(index, n);      return l1;    };   };};
function updateAt (index) {  return function (a) {    return function (l) {      var l1 = l.slice();      l1[index] = a;      return l1;    };   };};
function concatMap (f) {  return function (arr) {    var result = [];    for (var i = 0, l = arr.length; i < l; i++) {      Array.prototype.push.apply(result, f(arr[i]));    }    return result;  };};
function map (f) {  return function (arr) {    var l = arr.length;    var result = new Array(l);    for (var i = 0; i < l; i++) {      result[i] = f(arr[i]);    }    return result;  };};
function filter (f) {  return function (arr) {    var n = 0;    var result = [];    for (var i = 0, l = arr.length; i < l; i++) {      if (f(arr[i])) {        result[n++] = arr[i];      }    }    return result;  };};
function zipWith (f) {  return function (xs) {    return function (ys) {      var l = xs.length < ys.length ? xs.length : ys.length;      var result = new Array(l);      for (var i = 0; i < l; i++) {        result[i] = f(xs[i])(ys[i]);      }      return result;    };  };};
function sortJS (f) {  return function (l) {    return l.slice().sort(function (x, y) {      return f(x)(y);    });  };};
var $bang$bang = function (xs) {
    return function (n) {
        var isInt = function (n) {
            return n !== ~~n;
        };
        return (n < 0 || n >= length(xs) || isInt(n)) ? Data_Maybe.Nothing : Data_Maybe.Just(xs[n]);
    };
};
var tail = function (_1) {
    if (_1.length > 0) {
        var _4 = _1.slice(1);
        return Data_Maybe.Just(_4);
    };
    return Data_Maybe.Nothing;
};
var sort = function (__dict_Ord_0) {
    return function (xs) {
        var comp = function (x) {
            return function (y) {
                return (function (_1) {
                    if (_1.ctor === "Prelude.GT") {
                        return 1;
                    };
                    if (_1.ctor === "Prelude.EQ") {
                        return 0;
                    };
                    if (_1.ctor === "Prelude.LT") {
                        return -1;
                    };
                    throw "Failed pattern match";
                })(Prelude.compare(__dict_Ord_0)(x)(y));
            };
        };
        return sortJS(comp)(xs);
    };
};
var singleton = function (a) {
    return [ a ];
};
var semigroupArray = function (_) {
    return {
        "__superclasses": {}, 
        "<>": append
    };
};
var range = function (_1) {
    return function (_2) {
        if (_1 > _2) {
            return [  ];
        };
        return Prelude[":"](_1)(range(_1 + 1)(_2));
    };
};
var $$null = function (_1) {
    if (_1.length === 0) {
        return true;
    };
    return false;
};
var nubBy = function (_1) {
    return function (_2) {
        if (_2.length === 0) {
            return [  ];
        };
        if (_2.length > 0) {
            var _6 = _2.slice(1);
            return Prelude[":"](_2[0])(nubBy(_1)(filter(function (y) {
                return !_1(_2[0])(y);
            })(_6)));
        };
        throw "Failed pattern match";
    };
};
var nub = function (__dict_Eq_1) {
    return nubBy(Prelude["=="](__dict_Eq_1));
};
var monoidArray = function (_) {
    return {
        "__superclasses": {
            "Prelude.Semigroup_0": function (_) {
                return semigroupArray({});
            }
        }, 
        mempty: [  ]
    };
};
var last = function (__copy__1) {
    var _1 = __copy__1;
    tco: while (true) {
        if (_1.length > 0) {
            var _4 = _1.slice(1);
            if (_4.length === 0) {
                return Data_Maybe.Just(_1[0]);
            };
        };
        if (_1.length > 0) {
            var _6 = _1.slice(1);
            _1 = _6;
            continue tco;
        };
        return Data_Maybe.Nothing;
    };
};
var init = function (_1) {
    if (_1.length === 0) {
        return Data_Maybe.Nothing;
    };
    return Data_Maybe.Just(slice(0)(length(_1) - 1)(_1));
};
var head = function (_1) {
    if (_1.length > 0) {
        return Data_Maybe.Just(_1[0]);
    };
    return Data_Maybe.Nothing;
};
var functorArray = function (_) {
    return {
        "__superclasses": {}, 
        "<$>": map
    };
};
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
        "__superclasses": {}, 
        empty: [  ], 
        "<|>": append
    };
};
module.exports = {
    sort: sort, 
    nubBy: nubBy, 
    nub: nub, 
    zipWith: zipWith, 
    range: range, 
    filter: filter, 
    concatMap: concatMap, 
    updateAt: updateAt, 
    deleteAt: deleteAt, 
    insertAt: insertAt, 
    slice: slice, 
    take: take, 
    drop: drop, 
    reverse: reverse, 
    concat: concat, 
    append: append, 
    elemLastIndex: elemLastIndex, 
    elemIndex: elemIndex, 
    elem: elem, 
    length: length, 
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
    monoidArray: monoidArray, 
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
            "__superclasses": {}, 
            show: function (_1) {
                if (_1.ctor === "Data.Either.Left") {
                    return "Left " + Prelude.show(__dict_Show_0)(_1.values[0]);
                };
                if (_1.ctor === "Data.Either.Right") {
                    return "Right " + Prelude.show(__dict_Show_1)(_1.values[0]);
                };
                throw "Failed pattern match";
            }
        };
    };
};
var functorEither = function (_) {
    return {
        "__superclasses": {}, 
        "<$>": function (_1) {
            return function (_2) {
                if (_2.ctor === "Data.Either.Left") {
                    return Left(_2.values[0]);
                };
                if (_2.ctor === "Data.Either.Right") {
                    return Right(_1(_2.values[0]));
                };
                throw "Failed pattern match";
            };
        }
    };
};
var eqEither = function (__dict_Eq_2) {
    return function (__dict_Eq_3) {
        return {
            "__superclasses": {}, 
            "==": function (_1) {
                return function (_2) {
                    if (_1.ctor === "Data.Either.Left") {
                        if (_2.ctor === "Data.Either.Left") {
                            return Prelude["=="](__dict_Eq_2)(_1.values[0])(_2.values[0]);
                        };
                    };
                    if (_1.ctor === "Data.Either.Right") {
                        if (_2.ctor === "Data.Either.Right") {
                            return Prelude["=="](__dict_Eq_3)(_1.values[0])(_2.values[0]);
                        };
                    };
                    return false;
                };
            }, 
            "/=": function (a) {
                return function (b) {
                    return !Prelude["=="](eqEither(__dict_Eq_2)(__dict_Eq_3))(a)(b);
                };
            }
        };
    };
};
var either = function (_1) {
    return function (_2) {
        return function (_3) {
            if (_3.ctor === "Data.Either.Left") {
                return _1(_3.values[0]);
            };
            if (_3.ctor === "Data.Either.Right") {
                return _2(_3.values[0]);
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
        "<*>": function (_1) {
            return function (_2) {
                if (_1.ctor === "Data.Either.Left") {
                    return Left(_1.values[0]);
                };
                if (_1.ctor === "Data.Either.Right") {
                    return Prelude["<$>"](functorEither({}))(_1.values[0])(_2);
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
    eqEither: eqEither
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
var liftRef = function (_1) {
    return function (_2) {
        return function (_3) {
            return _1(_2.values[0])(_3.values[0]);
        };
    };
};
var eqRef = function (_) {
    return {
        "__superclasses": {}, 
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
var Control_Applicative = require("Control.Applicative");
var Data_Monoid = require("Data.Monoid");
var Data_Array = require("Data.Array");
var Data_Maybe = require("Data.Maybe");
function foldr(dict) {
    return dict["foldr"];
};
function foldl(dict) {
    return dict["foldl"];
};
function foldMap(dict) {
    return dict["foldMap"];
};
function foldrArray(f) {  return function(z) {    return function(xs) {      var acc = z;      for (var i = xs.length - 1; i >= 0; --i) {        acc = f(xs[i])(acc);      }      return acc;    }  }};
function foldlArray(f) {  return function(z) {    return function(xs) {      var acc = z;      for (var i = 0, len = xs.length; i < len; ++i) {        acc = f(acc)(xs[i]);      }      return acc;    }  }};
var traverse_ = function (__dict_Functor_0) {
    return function (__dict_Applicative_1) {
        return function (__dict_Foldable_2) {
            return function (f) {
                return foldr(__dict_Foldable_2)(Prelude["<<<"](Prelude.semigroupoidArr({}))(Control_Applicative["*>"](__dict_Functor_0)(__dict_Applicative_1))(f))(Prelude.pure(__dict_Applicative_1)({}));
            };
        };
    };
};
var sum = function (__dict_Foldable_3) {
    return foldl(__dict_Foldable_3)(Prelude["+"](Prelude.numNumber({})))(0);
};
var sequence_ = function (__dict_Functor_4) {
    return function (__dict_Applicative_5) {
        return function (__dict_Foldable_6) {
            return traverse_(__dict_Functor_4)(__dict_Applicative_5)(__dict_Foldable_6)(Prelude.id(Prelude.categoryArr({})));
        };
    };
};
var product = function (__dict_Foldable_7) {
    return foldl(__dict_Foldable_7)(Prelude["*"](Prelude.numNumber({})))(1);
};
var or = function (__dict_Foldable_8) {
    return foldl(__dict_Foldable_8)(Prelude["||"](Prelude.boolLikeBoolean({})))(false);
};
var mconcat = function (__dict_Foldable_9) {
    return function (__dict_Monoid_10) {
        return foldl(__dict_Foldable_9)(Prelude["<>"](__dict_Monoid_10["__superclasses"]["Prelude.Semigroup_0"]({})))(Data_Monoid.mempty(__dict_Monoid_10));
    };
};
var for_ = function (__dict_Functor_11) {
    return function (__dict_Applicative_12) {
        return function (__dict_Foldable_13) {
            return Prelude.flip(traverse_(__dict_Functor_11)(__dict_Applicative_12)(__dict_Foldable_13));
        };
    };
};
var foldableTuple = function (_) {
    return {
        "__superclasses": {}, 
        foldr: function (_1) {
            return function (_2) {
                return function (_3) {
                    return _1(_3.values[1])(_2);
                };
            };
        }, 
        foldl: function (_1) {
            return function (_2) {
                return function (_3) {
                    return _1(_2)(_3.values[1]);
                };
            };
        }, 
        foldMap: function (__dict_Monoid_14) {
            return function (_1) {
                return function (_2) {
                    return _1(_2.values[1]);
                };
            };
        }
    };
};
var foldableRef = function (_) {
    return {
        "__superclasses": {}, 
        foldr: function (_1) {
            return function (_2) {
                return function (_3) {
                    return _1(_3.values[0])(_2);
                };
            };
        }, 
        foldl: function (_1) {
            return function (_2) {
                return function (_3) {
                    return _1(_2)(_3.values[0]);
                };
            };
        }, 
        foldMap: function (__dict_Monoid_15) {
            return function (_1) {
                return function (_2) {
                    return _1(_2.values[0]);
                };
            };
        }
    };
};
var foldableMaybe = function (_) {
    return {
        "__superclasses": {}, 
        foldr: function (_1) {
            return function (_2) {
                return function (_3) {
                    if (_3.ctor === "Data.Maybe.Nothing") {
                        return _2;
                    };
                    if (_3.ctor === "Data.Maybe.Just") {
                        return _1(_3.values[0])(_2);
                    };
                    throw "Failed pattern match";
                };
            };
        }, 
        foldl: function (_1) {
            return function (_2) {
                return function (_3) {
                    if (_3.ctor === "Data.Maybe.Nothing") {
                        return _2;
                    };
                    if (_3.ctor === "Data.Maybe.Just") {
                        return _1(_2)(_3.values[0]);
                    };
                    throw "Failed pattern match";
                };
            };
        }, 
        foldMap: function (__dict_Monoid_16) {
            return function (_1) {
                return function (_2) {
                    if (_2.ctor === "Data.Maybe.Nothing") {
                        return Data_Monoid.mempty(__dict_Monoid_16);
                    };
                    if (_2.ctor === "Data.Maybe.Just") {
                        return _1(_2.values[0]);
                    };
                    throw "Failed pattern match";
                };
            };
        }
    };
};
var foldableEither = function (_) {
    return {
        "__superclasses": {}, 
        foldr: function (_1) {
            return function (_2) {
                return function (_3) {
                    if (_3.ctor === "Data.Either.Left") {
                        return _2;
                    };
                    if (_3.ctor === "Data.Either.Right") {
                        return _1(_3.values[0])(_2);
                    };
                    throw "Failed pattern match";
                };
            };
        }, 
        foldl: function (_1) {
            return function (_2) {
                return function (_3) {
                    if (_3.ctor === "Data.Either.Left") {
                        return _2;
                    };
                    if (_3.ctor === "Data.Either.Right") {
                        return _1(_2)(_3.values[0]);
                    };
                    throw "Failed pattern match";
                };
            };
        }, 
        foldMap: function (__dict_Monoid_17) {
            return function (_1) {
                return function (_2) {
                    if (_2.ctor === "Data.Either.Left") {
                        return Data_Monoid.mempty(__dict_Monoid_17);
                    };
                    if (_2.ctor === "Data.Either.Right") {
                        return _1(_2.values[0]);
                    };
                    throw "Failed pattern match";
                };
            };
        }
    };
};
var foldableArray = function (_) {
    return {
        "__superclasses": {}, 
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
        foldMap: function (__dict_Monoid_18) {
            return function (f) {
                return function (xs) {
                    return foldr(foldableArray({}))(function (x) {
                        return function (acc) {
                            return Prelude["<>"](__dict_Monoid_18["__superclasses"]["Prelude.Semigroup_0"]({}))(f(x))(acc);
                        };
                    })(Data_Monoid.mempty(__dict_Monoid_18))(xs);
                };
            };
        }
    };
};
var fold = function (__dict_Foldable_19) {
    return function (__dict_Monoid_20) {
        return foldMap(__dict_Foldable_19)(__dict_Monoid_20)(Prelude.id(Prelude.categoryArr({})));
    };
};
var find = function (__dict_Foldable_21) {
    return function (p) {
        return function (f) {
            return (function (_1) {
                if (_1.length > 0) {
                    return Data_Maybe.Just(_1[0]);
                };
                if (_1.length === 0) {
                    return Data_Maybe.Nothing;
                };
                throw "Failed pattern match";
            })(foldMap(__dict_Foldable_21)(Data_Array.monoidArray({}))(function (x) {
                return p(x) ? [ x ] : [  ];
            })(f));
        };
    };
};
var any = function (__dict_Foldable_22) {
    return function (p) {
        return Prelude["<<<"](Prelude.semigroupoidArr({}))(or(foldableArray({})))(foldMap(__dict_Foldable_22)(Data_Array.monoidArray({}))(function (x) {
            return [ p(x) ];
        }));
    };
};
var elem = function (__dict_Eq_23) {
    return function (__dict_Foldable_24) {
        return Prelude["<<<"](Prelude.semigroupoidArr({}))(any(__dict_Foldable_24))(Prelude["=="](__dict_Eq_23));
    };
};
var notElem = function (__dict_Eq_25) {
    return function (__dict_Foldable_26) {
        return function (x) {
            return Prelude["<<<"](Prelude.semigroupoidArr({}))(Prelude.not(Prelude.boolLikeBoolean({})))(elem(__dict_Eq_25)(__dict_Foldable_26)(x));
        };
    };
};
var and = function (__dict_Foldable_27) {
    return foldl(__dict_Foldable_27)(Prelude["&&"](Prelude.boolLikeBoolean({})))(true);
};
var all = function (__dict_Foldable_28) {
    return function (p) {
        return Prelude["<<<"](Prelude.semigroupoidArr({}))(and(foldableArray({})))(foldMap(__dict_Foldable_28)(Data_Array.monoidArray({}))(function (x) {
            return [ p(x) ];
        }));
    };
};
module.exports = {
    foldlArray: foldlArray, 
    foldrArray: foldrArray, 
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
},{"Control.Applicative":2,"Data.Array":5,"Data.Maybe":10,"Data.Monoid":12,"Prelude":20}],9:[function(require,module,exports){
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
        return Prelude["++"](Data_Array.semigroupArray({}))(toList((_1.values[0]).left))(Prelude["++"](Data_Array.semigroupArray({}))([ Data_Tuple.Tuple((_1.values[0]).key)((_1.values[0]).value) ])(toList((_1.values[0]).right)));
    };
    throw "Failed pattern match";
};
var showMap = function (__dict_Show_0) {
    return function (__dict_Show_1) {
        return {
            "__superclasses": {}, 
            show: function (m) {
                return "fromList " + Prelude.show(Prelude.showArray(Data_Tuple.showTuple(__dict_Show_0)(__dict_Show_1)))(toList(m));
            }
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
                        return Data_Maybe.Nothing;
                    };
                    var k = _1;
                    if (_2.ctor === "Data.Map.Branch") {
                        if (Prelude["=="](__dict_Eq_4)(k)((_2.values[0]).key)) {
                            return Data_Maybe.Just((_2.values[0]).value);
                        };
                    };
                    var k = _1;
                    if (_2.ctor === "Data.Map.Branch") {
                        if (Prelude["<"](__dict_Ord_5)(k)((_2.values[0]).key)) {
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
                    return Data_Tuple.Tuple((_1.values[0]).key)((_1.values[0]).value);
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
var eqMap = function (__dict_Eq_7) {
    return function (__dict_Eq_8) {
        return {
            "__superclasses": {}, 
            "==": function (m1) {
                return function (m2) {
                    return Prelude["=="](Prelude.eqArray(Data_Tuple.eqTuple(__dict_Eq_7)(__dict_Eq_8)))(toList(m1))(toList(m2));
                };
            }, 
            "/=": function (m1) {
                return function (m2) {
                    return !Prelude["=="](eqMap(__dict_Eq_7)(__dict_Eq_8))(m1)(m2);
                };
            }
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
var insert = function (__dict_Eq_9) {
    return function (__dict_Ord_10) {
        return function (_1) {
            return function (_2) {
                return function (_3) {
                    return (function (_4, _5, _6) {
                        if (_6.ctor === "Data.Map.Leaf") {
                            return singleton(_4)(_5);
                        };
                        if (_6.ctor === "Data.Map.Branch") {
                            if (Prelude["=="](__dict_Eq_9)(_4)((_6.values[0]).key)) {
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
                            if (Prelude["<"](__dict_Ord_10)(_4)((_6.values[0]).key)) {
                                return Branch((function () {
                                    var _1 = {};
                                    for (var _2 in _6.values[0]) {
                                        if ((_6.values[0]).hasOwnProperty(_2)) {
                                            _1[_2] = _6.values[0][_2];
                                        };
                                    };
                                    _1.left = insert(__dict_Eq_9)(__dict_Ord_10)(_4)(_5)((_6.values[0]).left);
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
                                _1.right = insert(__dict_Eq_9)(__dict_Ord_10)(_4)(_5)((_6.values[0]).right);
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
var fromList = function (__dict_Eq_11) {
    return function (__dict_Ord_12) {
        return Data_Foldable.foldl(Data_Foldable.foldableArray({}))(function (m) {
            return function (_1) {
                return insert(__dict_Eq_11)(__dict_Ord_12)(_1.values[0])(_1.values[1])(m);
            };
        })(empty);
    };
};
var union = function (__dict_Eq_13) {
    return function (__dict_Ord_14) {
        return function (m1) {
            return function (m2) {
                return Data_Foldable.foldl(Data_Foldable.foldableArray({}))(function (m) {
                    return function (_1) {
                        return insert(__dict_Eq_13)(__dict_Ord_14)(_1.values[0])(_1.values[1])(m);
                    };
                })(m2)(toList(m1));
            };
        };
    };
};
var $$delete = function (__dict_Eq_15) {
    return function (__dict_Ord_16) {
        return function (_1) {
            return function (_2) {
                return (function (_3, _4) {
                    if (_4.ctor === "Data.Map.Leaf") {
                        return Leaf;
                    };
                    if (_4.ctor === "Data.Map.Branch") {
                        if ((_4.values[0]).left.ctor === "Data.Map.Leaf") {
                            if (Prelude["=="](__dict_Eq_15)(_3)((_4.values[0]).key)) {
                                if ((_4.values[0]).left.ctor === "Data.Map.Leaf") {
                                    return (_4.values[0]).right;
                                };
                                if ((_4.values[0]).right.ctor === "Data.Map.Leaf") {
                                    return (_4.values[0]).left;
                                };
                                return glue(__dict_Eq_15)(__dict_Ord_16)((_4.values[0]).left)((_4.values[0]).right);
                            };
                        };
                    };
                    if (_4.ctor === "Data.Map.Branch") {
                        if (Prelude["<"](__dict_Ord_16)(_3)((_4.values[0]).key)) {
                            return Branch((function () {
                                var _1 = {};
                                for (var _2 in _4.values[0]) {
                                    if ((_4.values[0]).hasOwnProperty(_2)) {
                                        _1[_2] = _4.values[0][_2];
                                    };
                                };
                                _1.left = $$delete(__dict_Eq_15)(__dict_Ord_16)(_3)((_4.values[0]).left);
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
                            _1.right = $$delete(__dict_Eq_15)(__dict_Ord_16)(_3)((_4.values[0]).right);
                            return _1;
                        })());
                    };
                    throw "Failed pattern match";
                })(_1, _2);
            };
        };
    };
};
var glue = function (__dict_Eq_17) {
    return function (__dict_Ord_18) {
        return function (left) {
            return function (right) {
                return (function (_1) {
                    return Branch({
                        key: _1.values[0], 
                        value: _1.values[1], 
                        left: left, 
                        right: $$delete(__dict_Eq_17)(__dict_Ord_18)(_1.values[0])(right)
                    });
                })(findMinKey(__dict_Ord_18)(right));
            };
        };
    };
};
var alter = function (__dict_Eq_19) {
    return function (__dict_Ord_20) {
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
                            })(_4(Data_Maybe.Nothing));
                        };
                        if (_6.ctor === "Data.Map.Branch") {
                            if (Prelude["=="](__dict_Eq_19)(_5)((_6.values[0]).key)) {
                                return (function (_1) {
                                    if (_1.ctor === "Data.Maybe.Nothing") {
                                        return glue(__dict_Eq_19)(__dict_Ord_20)((_6.values[0]).left)((_6.values[0]).right);
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
                                })(_4(Data_Maybe.Just((_6.values[0]).value)));
                            };
                        };
                        if (_6.ctor === "Data.Map.Branch") {
                            if (Prelude["<"](__dict_Ord_20)(_5)((_6.values[0]).key)) {
                                return Branch((function () {
                                    var _1 = {};
                                    for (var _2 in _6.values[0]) {
                                        if ((_6.values[0]).hasOwnProperty(_2)) {
                                            _1[_2] = _6.values[0][_2];
                                        };
                                    };
                                    _1.left = alter(__dict_Eq_19)(__dict_Ord_20)(_4)(_5)((_6.values[0]).left);
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
                                _1.right = alter(__dict_Eq_19)(__dict_Ord_20)(_4)(_5)((_6.values[0]).right);
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
module.exports = {
    map: map, 
    union: union, 
    fromList: fromList, 
    toList: toList, 
    alter: alter, 
    "delete": $$delete, 
    lookup: lookup, 
    insert: insert, 
    singleton: singleton, 
    empty: empty, 
    eqMap: eqMap, 
    showMap: showMap
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
        "__superclasses": {}, 
        show: function (_1) {
            if (_1.ctor === "Data.Maybe.Just") {
                return "Just " + Prelude.show(__dict_Show_0)(_1.values[0]);
            };
            if (_1.ctor === "Data.Maybe.Nothing") {
                return "Nothing";
            };
            throw "Failed pattern match";
        }
    };
};
var maybe = function (_1) {
    return function (_2) {
        return function (_3) {
            if (_3.ctor === "Data.Maybe.Nothing") {
                return _1;
            };
            if (_3.ctor === "Data.Maybe.Just") {
                return _2(_3.values[0]);
            };
            throw "Failed pattern match";
        };
    };
};
var isNothing = maybe(true)(Prelude["const"](false));
var isJust = maybe(false)(Prelude["const"](true));
var functorMaybe = function (_) {
    return {
        "__superclasses": {}, 
        "<$>": function (_1) {
            return function (_2) {
                if (_2.ctor === "Data.Maybe.Just") {
                    return Just(_1(_2.values[0]));
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
        "__superclasses": {}, 
        "==": function (_1) {
            return function (_2) {
                if (_1.ctor === "Data.Maybe.Nothing") {
                    if (_2.ctor === "Data.Maybe.Nothing") {
                        return true;
                    };
                };
                if (_1.ctor === "Data.Maybe.Just") {
                    if (_2.ctor === "Data.Maybe.Just") {
                        return Prelude["=="](__dict_Eq_2)(_1.values[0])(_2.values[0]);
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
        compare: function (_1) {
            return function (_2) {
                if (_1.ctor === "Data.Maybe.Just") {
                    if (_2.ctor === "Data.Maybe.Just") {
                        return Prelude.compare(__dict_Ord_1)(_1.values[0])(_2.values[0]);
                    };
                };
                if (_1.ctor === "Data.Maybe.Nothing") {
                    if (_2.ctor === "Data.Maybe.Nothing") {
                        return Prelude.EQ;
                    };
                };
                if (_1.ctor === "Data.Maybe.Nothing") {
                    return Prelude.LT;
                };
                if (_2.ctor === "Data.Maybe.Nothing") {
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
        "<*>": function (_1) {
            return function (_2) {
                if (_1.ctor === "Data.Maybe.Just") {
                    return Prelude["<$>"](functorMaybe({}))(_1.values[0])(_2);
                };
                if (_1.ctor === "Data.Maybe.Nothing") {
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
        ">>=": function (_1) {
            return function (_2) {
                if (_1.ctor === "Data.Maybe.Just") {
                    return _2(_1.values[0]);
                };
                if (_1.ctor === "Data.Maybe.Nothing") {
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
        "__superclasses": {}, 
        empty: Nothing, 
        "<|>": function (_1) {
            return function (_2) {
                if (_1.ctor === "Data.Maybe.Nothing") {
                    return _2;
                };
                return _1;
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
        "__superclasses": {}, 
        show: function (_1) {
            return "First (" + Prelude.show(Data_Maybe.showMaybe(__dict_Show_0))(_1.values[0]) + ")";
        }
    };
};
var semigroupFirst = function (_) {
    return {
        "__superclasses": {}, 
        "<>": function (_1) {
            return function (_2) {
                if ((_1.values[0]).ctor === "Data.Maybe.Just") {
                    return _1;
                };
                return _2;
            };
        }
    };
};
var runFirst = function (_1) {
    return _1.values[0];
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
module.exports = {
    First: First, 
    runFirst: runFirst, 
    showFirst: showFirst, 
    semigroupFirst: semigroupFirst, 
    monoidFirst: monoidFirst
};
},{"Data.Maybe":10,"Prelude":20}],12:[function(require,module,exports){
"use strict";
var Prelude = require("Prelude");
function mempty(dict) {
    return dict["mempty"];
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
module.exports = {
    mempty: mempty, 
    monoidString: monoidString
};
},{"Prelude":20}],13:[function(require,module,exports){
"use strict";
function charAt(i) {  return function(s) {    return s.charAt(i);   };};
function fromCharCode(n) {  return String.fromCharCode(n);};
function indexOf(s1) {  return function(s2) {    return s1.indexOf(s2);  }; };
function lastIndexOf(s1) {  return function(s2) {    return s1.lastIndexOf(s2);  };};
function length(s) {  return s.length;};
function localeCompare(s1) {  return function(s2) {    return s1.localeCompare(s2);  };};
function replace(s1) {  return function(s2) {    return function(s3) {      return s3.replace(s1, s2);    };  };};
function slice(st) {  return function(e) {    return function(s) {      return s.slice(st, e);    };  };};
function split(sep) {  return function(s) {    return s.split(sep);  };};
function substr(n1) {  return function(n2) {    return function(s) {      return s.substr(n1, n2);    };  };};
function substring(n1) {  return function(n2) {    return function(s) {      return s.substring(n1, n2);    };  };};
function toLower(s) {  return s.toLowerCase();};
function toUpper(s) {  return s.toUpperCase();};
function trim(s) {  return s.trim();};
function joinWith (l) {  return function (s) {    return l.join(s);  };};
module.exports = {
    joinWith: joinWith, 
    trim: trim, 
    toUpper: toUpper, 
    toLower: toLower, 
    substring: substring, 
    substr: substr, 
    split: split, 
    slice: slice, 
    replace: replace, 
    localeCompare: localeCompare, 
    length: length, 
    lastIndexOf: lastIndexOf, 
    indexOf: indexOf, 
    fromCharCode: fromCharCode, 
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
function traverse(dict) {
    return dict["traverse"];
};
function sequence(dict) {
    return dict["sequence"];
};
var traversableTuple = function (_) {
    return {
        "__superclasses": {}, 
        traverse: function (__dict_Functor_2) {
            return function (__dict_Applicative_3) {
                return function (_1) {
                    return function (_2) {
                        return Prelude["<$>"](__dict_Functor_2)(Data_Tuple.Tuple(_2.values[0]))(_1(_2.values[1]));
                    };
                };
            };
        }, 
        sequence: function (__dict_Functor_4) {
            return function (__dict_Applicative_5) {
                return function (_1) {
                    return Prelude["<$>"](__dict_Functor_4)(Data_Tuple.Tuple(_1.values[0]))(_1.values[1]);
                };
            };
        }
    };
};
var traversableRef = function (_) {
    return {
        "__superclasses": {}, 
        traverse: function (__dict_Functor_6) {
            return function (__dict_Applicative_7) {
                return function (_1) {
                    return function (_2) {
                        return Prelude["<$>"](__dict_Functor_6)(Data_Eq.Ref)(_1(_2.values[0]));
                    };
                };
            };
        }, 
        sequence: function (__dict_Functor_8) {
            return function (__dict_Applicative_9) {
                return function (_1) {
                    return Prelude["<$>"](__dict_Functor_8)(Data_Eq.Ref)(_1.values[0]);
                };
            };
        }
    };
};
var traversableMaybe = function (_) {
    return {
        "__superclasses": {}, 
        traverse: function (__dict_Functor_10) {
            return function (__dict_Applicative_11) {
                return function (_1) {
                    return function (_2) {
                        if (_2.ctor === "Data.Maybe.Nothing") {
                            return Prelude.pure(__dict_Applicative_11)(Data_Maybe.Nothing);
                        };
                        if (_2.ctor === "Data.Maybe.Just") {
                            return Prelude["<$>"](__dict_Functor_10)(Data_Maybe.Just)(_1(_2.values[0]));
                        };
                        throw "Failed pattern match";
                    };
                };
            };
        }, 
        sequence: function (__dict_Functor_12) {
            return function (__dict_Applicative_13) {
                return function (_1) {
                    if (_1.ctor === "Data.Maybe.Nothing") {
                        return Prelude.pure(__dict_Applicative_13)(Data_Maybe.Nothing);
                    };
                    if (_1.ctor === "Data.Maybe.Just") {
                        return Prelude["<$>"](__dict_Functor_12)(Data_Maybe.Just)(_1.values[0]);
                    };
                    throw "Failed pattern match";
                };
            };
        }
    };
};
var traversableEither = function (_) {
    return {
        "__superclasses": {}, 
        traverse: function (__dict_Functor_14) {
            return function (__dict_Applicative_15) {
                return function (_1) {
                    return function (_2) {
                        if (_2.ctor === "Data.Either.Left") {
                            return Prelude.pure(__dict_Applicative_15)(Data_Either.Left(_2.values[0]));
                        };
                        if (_2.ctor === "Data.Either.Right") {
                            return Prelude["<$>"](__dict_Functor_14)(Data_Either.Right)(_1(_2.values[0]));
                        };
                        throw "Failed pattern match";
                    };
                };
            };
        }, 
        sequence: function (__dict_Functor_16) {
            return function (__dict_Applicative_17) {
                return function (_1) {
                    if (_1.ctor === "Data.Either.Left") {
                        return Prelude.pure(__dict_Applicative_17)(Data_Either.Left(_1.values[0]));
                    };
                    if (_1.ctor === "Data.Either.Right") {
                        return Prelude["<$>"](__dict_Functor_16)(Data_Either.Right)(_1.values[0]);
                    };
                    throw "Failed pattern match";
                };
            };
        }
    };
};
var traversableArray = function (_) {
    return {
        "__superclasses": {}, 
        traverse: function (__dict_Functor_18) {
            return function (__dict_Applicative_19) {
                return function (_1) {
                    return function (_2) {
                        if (_2.length === 0) {
                            return Prelude.pure(__dict_Applicative_19)([  ]);
                        };
                        if (_2.length > 0) {
                            var _6 = _2.slice(1);
                            return Prelude["<*>"](__dict_Applicative_19["__superclasses"]["Prelude.Apply_0"]({}))(Prelude["<$>"](__dict_Functor_18)(Prelude[":"])(_1(_2[0])))(traverse(traversableArray({}))(__dict_Functor_18)(__dict_Applicative_19)(_1)(_6));
                        };
                        throw "Failed pattern match";
                    };
                };
            };
        }, 
        sequence: function (__dict_Functor_20) {
            return function (__dict_Applicative_21) {
                return function (_1) {
                    if (_1.length === 0) {
                        return Prelude.pure(__dict_Applicative_21)([  ]);
                    };
                    if (_1.length > 0) {
                        var _4 = _1.slice(1);
                        return Prelude["<*>"](__dict_Applicative_21["__superclasses"]["Prelude.Apply_0"]({}))(Prelude["<$>"](__dict_Functor_20)(Prelude[":"])(_1[0]))(sequence(traversableArray({}))(__dict_Functor_20)(__dict_Applicative_21)(_4));
                    };
                    throw "Failed pattern match";
                };
            };
        }
    };
};
var zipWithA = function (__dict_Functor_0) {
    return function (__dict_Applicative_1) {
        return function (f) {
            return function (xs) {
                return function (ys) {
                    return sequence(traversableArray({}))(__dict_Functor_0)(__dict_Applicative_1)(Data_Array.zipWith(f)(xs)(ys));
                };
            };
        };
    };
};
var $$for = function (__dict_Functor_22) {
    return function (__dict_Applicative_23) {
        return function (__dict_Traversable_24) {
            return function (x) {
                return function (f) {
                    return traverse(__dict_Traversable_24)(__dict_Functor_22)(__dict_Applicative_23)(f)(x);
                };
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
var unzip = function (_1) {
    return (function (_2) {
        if (_2.length > 0) {
            var _4 = _2.slice(1);
            return (function (_1) {
                return Tuple(Prelude[":"]((_2[0]).values[0])(_1.values[0]))(Prelude[":"]((_2[0]).values[1])(_1.values[1]));
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
    };
};
var swap = function (_1) {
    return Tuple(_1.values[1])(_1.values[0]);
};
var snd = function (_1) {
    return _1.values[1];
};
var showTuple = function (__dict_Show_0) {
    return function (__dict_Show_1) {
        return {
            "__superclasses": {}, 
            show: function (_1) {
                return "Tuple(" + Prelude.show(__dict_Show_0)(_1.values[0]) + ", " + Prelude.show(__dict_Show_1)(_1.values[1]) + ")";
            }
        };
    };
};
var functorTuple = function (_) {
    return {
        "__superclasses": {}, 
        "<$>": function (_1) {
            return function (_2) {
                return Tuple(_2.values[0])(_1(_2.values[1]));
            };
        }
    };
};
var fst = function (_1) {
    return _1.values[0];
};
var eqTuple = function (__dict_Eq_5) {
    return function (__dict_Eq_6) {
        return {
            "__superclasses": {}, 
            "==": function (_1) {
                return function (_2) {
                    return Prelude["=="](__dict_Eq_5)(_1.values[0])(_2.values[0]) && Prelude["=="](__dict_Eq_6)(_1.values[1])(_2.values[1]);
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
            compare: function (_1) {
                return function (_2) {
                    return (function (_3, _4) {
                        return (function (_1) {
                            if (_1.ctor === "Prelude.EQ") {
                                return Prelude.compare(__dict_Ord_3)(_3.values[1])(_4.values[1]);
                            };
                            return _1;
                        })(Prelude.compare(__dict_Ord_2)(_3.values[0])(_4.values[0]));
                    })(_1, _2);
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
        "<*>": function (_1) {
            return function (_2) {
                return Tuple(Prelude["<>"](__dict_Semigroup_8)(_1.values[0])(_2.values[0]))(_1.values[1](_2.values[1]));
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
        ">>=": function (_1) {
            return function (_2) {
                return (function (_3, _4) {
                    return (function (_1) {
                        return Tuple(Prelude["<>"](__dict_Semigroup_7)(_3.values[0])(_1.values[0]))(_1.values[1]);
                    })(_4(_3.values[1]));
                })(_1, _2);
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
            var _1 = action();
            restore(ctx)();
            return _1;
        };
    };
};
var strokePath = function (ctx) {
    return function (path) {
        return function __do() {
            beginPath(ctx)();
            var _1 = path();
            stroke(ctx)();
            return _1;
        };
    };
};
var fillPath = function (ctx) {
    return function (path) {
        return function __do() {
            beginPath(ctx)();
            var _1 = path();
            fill(ctx)();
            return _1;
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
        "__superclasses": {}, 
        show: function (_1) {
            if (_1.ctor === "Main.White") {
                return "White";
            };
            if (_1.ctor === "Main.Green") {
                return "Green";
            };
            if (_1.ctor === "Main.Red") {
                return "Red";
            };
            throw "Failed pattern match";
        }
    };
};
var eqBrick = function (_) {
    return {
        "__superclasses": {}, 
        "==": function (_1) {
            return function (_2) {
                if (_1.ctor === "Main.White") {
                    if (_2.ctor === "Main.White") {
                        return true;
                    };
                };
                if (_1.ctor === "Main.Green") {
                    if (_2.ctor === "Main.Green") {
                        return true;
                    };
                };
                if (_1.ctor === "Main.Red") {
                    if (_2.ctor === "Main.Red") {
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
var collide = function (_1) {
    return function (_2) {
        return function (_3) {
            return function (_4) {
                return (function (_5, _6, _7, _8) {
                    if (_8.ctor === "Main.White") {
                        return (function (_1) {
                            if (_1.ctor === "Main.MovingLeft") {
                                var _1 = {};
                                for (var _2 in _5) {
                                    if (_5.hasOwnProperty(_2)) {
                                        _1[_2] = _5[_2];
                                    };
                                };
                                _1.direction = MovingRight;
                                return _1;
                            };
                            if (_1.ctor === "Main.MovingRight") {
                                var _1 = {};
                                for (var _2 in _5) {
                                    if (_5.hasOwnProperty(_2)) {
                                        _1[_2] = _5[_2];
                                    };
                                };
                                _1.direction = MovingLeft;
                                return _1;
                            };
                            throw "Failed pattern match";
                        })(_5.direction);
                    };
                    if (_8.ctor === "Main.Red") {
                        var _1 = {};
                        for (var _2 in _5) {
                            if (_5.hasOwnProperty(_2)) {
                                _1[_2] = _5[_2];
                            };
                        };
                        _1.status = GameOver;
                        return _1;
                    };
                    if (_8.ctor === "Main.Green") {
                        var newStatus = Prelude["<<<"](Prelude.semigroupoidArr({}))(Data_Array["null"])(Prelude["<<<"](Prelude.semigroupoidArr({}))(Data_Array.filter(Prelude["=="](eqBrick({}))(Green)))(Data_Array.map(Data_Tuple.snd)))(Data_Map.toList(_5.maze)) ? GameOver : InProgress;
                        var newMaze = Data_Map["delete"](Data_Tuple.eqTuple(Prelude.eqNumber({}))(Prelude.eqNumber({})))(Data_Tuple.ordTuple(Prelude.ordNumber({}))(Prelude.ordNumber({})))(_6)(_5.maze);
                        return (function (_1) {
                            if (_1.ctor === "Main.MovingLeft") {
                                var _1 = {};
                                for (var _2 in _5) {
                                    if (_5.hasOwnProperty(_2)) {
                                        _1[_2] = _5[_2];
                                    };
                                };
                                _1.maze = newMaze;
                                _1.direction = MovingRight;
                                _1.status = newStatus;
                                return _1;
                            };
                            if (_1.ctor === "Main.MovingRight") {
                                var _1 = {};
                                for (var _2 in _5) {
                                    if (_5.hasOwnProperty(_2)) {
                                        _1[_2] = _5[_2];
                                    };
                                };
                                _1.maze = newMaze;
                                _1.direction = MovingLeft;
                                _1.status = newStatus;
                                return _1;
                            };
                            throw "Failed pattern match";
                        })(_5.direction);
                    };
                    throw "Failed pattern match";
                })(_1, _2, _3, _4);
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
var checkCollision = function (_1) {
    return function (_2) {
        return (function (_4, _5) {
            var nearestBrick = function (_1) {
                return function (_2) {
                    return function (_3) {
                        if (_1.ctor === "Main.MovingLeft") {
                            return Data_Tuple.Tuple(Math.floor(_2))(Math.round(_3));
                        };
                        if (_1.ctor === "Main.MovingRight") {
                            return Data_Tuple.Tuple(Math.ceil(_2))(Math.round(_3));
                        };
                        throw "Failed pattern match";
                    };
                };
            };
            var checkCollision$prime = function (_1) {
                return function (_2) {
                    var dy = _2.values[1] - _5.values[1];
                    var dx = _2.values[0] - _5.values[0];
                    var dist = Math.sqrt(dx * dx + dy * dy);
                    return (dist >= 0.7) ? Data_Maybe.Nothing : Prelude["<$>"](Data_Maybe.functorMaybe({}))(Data_Tuple.Tuple(_2))(Data_Map.lookup(Data_Tuple.eqTuple(Prelude.eqNumber({}))(Prelude.eqNumber({})))(Data_Tuple.ordTuple(Prelude.ordNumber({}))(Prelude.ordNumber({})))(_2)(_1.maze));
                };
            };
            return (function (_1) {
                return Prelude["<<<"](Prelude.semigroupoidArr({}))(Data_Monoid_First.runFirst)(Data_Foldable.mconcat(Data_Foldable.foldableArray({}))(Data_Monoid_First.monoidFirst({})))(Data_Array.map(Data_Monoid_First.First)([ checkCollision$prime(_4)(Data_Tuple.Tuple(_1.values[0])(_1.values[1])), checkCollision$prime(_4)(Data_Tuple.Tuple(_1.values[0])(_1.values[1] - 1)), checkCollision$prime(_4)(Data_Tuple.Tuple(_1.values[0])(_1.values[1] + 1)) ]));
            })(nearestBrick(_4.direction)(_5.values[0])(_5.values[1]));
        })(_1, _2);
    };
};
var changeKeyState = function (stateRef) {
    return function (newState) {
        return function __do() {
            var _1 = Control_Monad_Eff_Ref.readRef(stateRef)();
            return (function (_2) {
                var state = _2;
                return (function (_1) {
                    if (_1.ctor === "Main.InProgress") {
                        return Control_Monad_Eff_Ref.modifyRef(stateRef)(function (st) {
                            var _1 = {};
                            for (var _2 in st) {
                                if (st.hasOwnProperty(_2)) {
                                    _1[_2] = st[_2];
                                };
                            };
                            _1.keyState = newState;
                            return _1;
                        });
                    };
                    return Prelude["return"](Control_Monad_Eff.monadEff({}))({});
                })(state.status);
            })(_1)();
        };
    };
};
var handleKeyDown = function (_1) {
    return function (_2) {
        if (_2 === 38) {
            return function __do() {
                changeKeyState(_1)(MovingUp)();
                return false;
            };
        };
        if (_2 === 40) {
            return function __do() {
                changeKeyState(_1)(MovingDown)();
                return false;
            };
        };
        return Prelude["return"](Control_Monad_Eff.monadEff({}))(true);
    };
};
var handleKeyUp = function (_1) {
    return function (_2) {
        return function __do() {
            changeKeyState(_1)(NoKeyState)();
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
var brick = function (_1) {
    return function (_2) {
        if (_2.ctor === "Main.White") {
            return box(_1)("#c0c000")("#c08000");
        };
        if (_2.ctor === "Main.Red") {
            return box(_1)("#00ff00")("#008000");
        };
        if (_2.ctor === "Main.Green") {
            return box(_1)("#ff0000")("#0000ff");
        };
        throw "Failed pattern match";
    };
};
var maze = function (ctx) {
    return function (m) {
        return function __do() {
            Data_Traversable["for"](Control_Monad_Eff.functorEff({}))(Control_Monad_Eff.applicativeEff({}))(Data_Traversable.traversableArray({}))(Data_Map.toList(m))(function (_1) {
                return Graphics_Canvas.withContext(ctx)(function __do() {
                    Graphics_Canvas.translate({
                        translateX: (_1.values[0]).values[0], 
                        translateY: (_1.values[0]).values[1]
                    })(ctx)();
                    Graphics_Canvas.scale({
                        scaleX: 0.4, 
                        scaleY: 0.4
                    })(ctx)();
                    return brick(ctx)(_1.values[1])();
                });
            })();
            return ctx;
        };
    };
};
var parseMaze = function (ls) {
    var charToBrick = function (_1) {
        if (_1 === "#") {
            return Data_Maybe.Just(White);
        };
        if (_1 === "R") {
            return Data_Maybe.Just(Red);
        };
        if (_1 === "G") {
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
                        return Data_Map.insert(Data_Tuple.eqTuple(Prelude.eqNumber({}))(Prelude.eqNumber({})))(Data_Tuple.ordTuple(Prelude.ordNumber({}))(Prelude.ordNumber({})))(Data_Tuple.Tuple(c)(r))(b)(m);
                    })(brick);
                };
            };
        };
    };
    var lineToMaze = function (__copy__1) {
        return function (__copy__2) {
            return function (__copy__3) {
                return function (__copy__4) {
                    var _1 = __copy__1;
                    var _2 = __copy__2;
                    var _3 = __copy__3;
                    var _4 = __copy__4;
                    tco: while (true) {
                        var c = _2;
                        var m = _3;
                        var s = _4;
                        if (c >= Data_String.length(s)) {
                            return m;
                        };
                        var __tco__1 = _1;
                        var __tco__2 = _2 + 1;
                        var __tco__3 = updateMaze(_1)(_2)(_3)(_4);
                        var __tco__4 = _4;
                        _1 = __tco__1;
                        _2 = __tco__2;
                        _3 = __tco__3;
                        _4 = __tco__4;
                        continue tco;
                    };
                };
            };
        };
    };
    var go = function (__copy__1) {
        return function (__copy__2) {
            return function (__copy__3) {
                var _1 = __copy__1;
                var _2 = __copy__2;
                var _3 = __copy__3;
                tco: while (true) {
                    var m = _2;
                    if (_3.length === 0) {
                        return m;
                    };
                    if (_3.length > 0) {
                        var _8 = _3.slice(1);
                        var __tco__1 = _1 + 1;
                        var __tco__2 = lineToMaze(_1)(0)(_2)(_3[0]);
                        _1 = __tco__1;
                        _2 = __tco__2;
                        _3 = _8;
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
            var brick = Data_Map.lookup(Data_Tuple.eqTuple(Prelude.eqNumber({}))(Prelude.eqNumber({})))(Data_Tuple.ordTuple(Prelude.ordNumber({}))(Prelude.ordNumber({})))(location)(state.maze);
            return Prelude["=="](Data_Maybe.eqMaybe(eqBrick({})))(brick)(Data_Maybe.Just(White)) ? state.posY : state.posY - d;
        };
        if (state.keyState.ctor === "Main.MovingDown") {
            var nearestBrick = function (x) {
                return function (y) {
                    return Data_Tuple.Tuple(Math.round(x))(Math.ceil(y));
                };
            };
            var location = nearestBrick(state.posX)(state.posY + d);
            var brick = Data_Map.lookup(Data_Tuple.eqTuple(Prelude.eqNumber({}))(Prelude.eqNumber({})))(Data_Tuple.ordTuple(Prelude.ordNumber({}))(Prelude.ordNumber({})))(location)(state.maze);
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
        return (function (_1) {
            if (_1.ctor === "Main.MovingLeft") {
                return Data_Tuple.Tuple(state.posX - d)(newY);
            };
            if (_1.ctor === "Main.MovingRight") {
                return Data_Tuple.Tuple(state.posX + d)(newY);
            };
            throw "Failed pattern match";
        })(state.direction);
    };
};
var updateGameState = function (state) {
    return function (elapsed) {
        return (function (_1) {
            var p = _1;
            var _2 = _1.values[0];
            var newX = _2;
            var _3 = _1.values[1];
            return (function (_1) {
                if (_1.ctor === "Data.Maybe.Nothing") {
                    var _1 = {};
                    for (var _2 in state) {
                        if (state.hasOwnProperty(_2)) {
                            _1[_2] = state[_2];
                        };
                    };
                    _1.posX = newX;
                    _1.posY = _3;
                    return _1;
                };
                if (_1.ctor === "Data.Maybe.Just") {
                    return collide(state)((_1.values[0]).values[0])(Data_Tuple.Tuple(newX)(_3))((_1.values[0]).values[1]);
                };
                throw "Failed pattern match";
            })(checkCollision(state)(p));
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
            var _1 = Control_Monad_Eff_Ref.readRef(stateRef)();
            return (function (_2) {
                var state = _2;
                return function __do() {
                    var _1 = getMillis();
                    return (function (_2) {
                        var time = _2;
                        return (function () {
                            var elapsedTime = Data_Maybe.maybe(0)(Prelude.id(Prelude.categoryArr({})))(Prelude["<$>"](Data_Maybe.functorMaybe({}))(Prelude["-"](Prelude.numNumber({}))(time))(state.lastTime));
                            return (function () {
                                var state$prime = tick(state)(elapsedTime);
                                return (function () {
                                    var state$prime$prime = (function () {
                                        var _1 = {};
                                        for (var _2 in state$prime) {
                                            if (state$prime.hasOwnProperty(_2)) {
                                                _1[_2] = state$prime[_2];
                                            };
                                        };
                                        _1.lastTime = Data_Maybe.Just(time);
                                        return _1;
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
                                        return {};
                                    };
                                })();
                            })();
                        })();
                    })(_1)();
                };
            })(_1)();
        };
    };
};
var main = function __do() {
    var _1 = Control_Monad_Eff_Ref.newRef(defaultGameState)();
    return (function (_2) {
        var stateRef = _2;
        return function __do() {
            onKeyDown(handleKeyDown(stateRef))();
            onKeyUp(handleKeyUp(stateRef))();
            var _1 = getElementById("canvas")();
            return (function (_2) {
                return function __do() {
                    var _1 = Graphics_Canvas.getContext2D(_2)();
                    return setInterval(10)(render(_1)(stateRef))();
                };
            })(_1)();
        };
    })(_1)();
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
function $less$less$less(dict) {
    return dict["<<<"];
};
function id(dict) {
    return dict["id"];
};
function cons(e) {  return function (l) {    return [e].concat(l);  };};
function show(dict) {
    return dict["show"];
};
function showStringImpl(s) {  return JSON.stringify(s);};
function showNumberImpl(n) {  return n.toString();};
function showArrayImpl (f) {  return function (xs) {    var ss = [];    for (var i = 0, l = xs.length; i < l; i++) {      ss[i] = f(xs[i]);    }    return '[' + ss.join(',') + ']';  };};
function $less$dollar$greater(dict) {
    return dict["<$>"];
};
function $less$times$greater(dict) {
    return dict["<*>"];
};
function pure(dict) {
    return dict["pure"];
};
function empty(dict) {
    return dict["empty"];
};
function $less$bar$greater(dict) {
    return dict["<|>"];
};
function $greater$greater$eq(dict) {
    return dict[">>="];
};
function $plus(dict) {
    return dict["+"];
};
function $minus(dict) {
    return dict["-"];
};
function $times(dict) {
    return dict["*"];
};
function $div(dict) {
    return dict["/"];
};
function $percent(dict) {
    return dict["%"];
};
function negate(dict) {
    return dict["negate"];
};
function numAdd(n1) {  return function(n2) {    return n1 + n2;  };};
function numSub(n1) {  return function(n2) {    return n1 - n2;  };};
function numMul(n1) {  return function(n2) {    return n1 * n2;  };};
function numDiv(n1) {  return function(n2) {    return n1 / n2;  };};
function numMod(n1) {  return function(n2) {    return n1 % n2;  };};
function numNegate(n) {  return -n;};
function $eq$eq(dict) {
    return dict["=="];
};
function $div$eq(dict) {
    return dict["/="];
};
function refEq(r1) {  return function(r2) {    return r1 === r2;  };};
function refIneq(r1) {  return function(r2) {    return r1 !== r2;  };};
function compare(dict) {
    return dict["compare"];
};
function numCompare(n1) {  return function(n2) {    return n1 < n2 ? LT : n1 > n2 ? GT : EQ;  };};
function $amp(dict) {
    return dict["&"];
};
function $bar(dict) {
    return dict["|"];
};
function $up(dict) {
    return dict["^"];
};
function shl(dict) {
    return dict["shl"];
};
function shr(dict) {
    return dict["shr"];
};
function zshr(dict) {
    return dict["zshr"];
};
function complement(dict) {
    return dict["complement"];
};
function numShl(n1) {  return function(n2) {    return n1 << n2;  };};
function numShr(n1) {  return function(n2) {    return n1 >> n2;  };};
function numZshr(n1) {  return function(n2) {    return n1 >>> n2;  };};
function numAnd(n1) {  return function(n2) {    return n1 & n2;  };};
function numOr(n1) {  return function(n2) {    return n1 | n2;  };};
function numXor(n1) {  return function(n2) {    return n1 ^ n2;  };};
function numComplement(n) {  return ~n;};
function $amp$amp(dict) {
    return dict["&&"];
};
function $bar$bar(dict) {
    return dict["||"];
};
function not(dict) {
    return dict["not"];
};
function boolAnd(b1) {  return function(b2) {    return b1 && b2;  };};
function boolOr(b1) {  return function(b2) {    return b1 || b2;  };};
function boolNot(b) {  return !b;};
function $less$greater(dict) {
    return dict["<>"];
};
function concatString(s1) {  return function(s2) {    return s1 + s2;  };};
var $greater$greater$greater = function (__dict_Semigroupoid_0) {
    return function (f) {
        return function (g) {
            return $less$less$less(__dict_Semigroupoid_0)(g)(f);
        };
    };
};
var $greater$eq = function (__dict_Ord_1) {
    return function (a1) {
        return function (a2) {
            return (function (_1) {
                if (_1.ctor === "Prelude.LT") {
                    return false;
                };
                return true;
            })(compare(__dict_Ord_1)(a1)(a2));
        };
    };
};
var $greater = function (__dict_Ord_2) {
    return function (a1) {
        return function (a2) {
            return (function (_1) {
                if (_1.ctor === "Prelude.GT") {
                    return true;
                };
                return false;
            })(compare(__dict_Ord_2)(a1)(a2));
        };
    };
};
var $less$eq = function (__dict_Ord_3) {
    return function (a1) {
        return function (a2) {
            return (function (_1) {
                if (_1.ctor === "Prelude.GT") {
                    return false;
                };
                return true;
            })(compare(__dict_Ord_3)(a1)(a2));
        };
    };
};
var $less = function (__dict_Ord_4) {
    return function (a1) {
        return function (a2) {
            return (function (_1) {
                if (_1.ctor === "Prelude.LT") {
                    return true;
                };
                return false;
            })(compare(__dict_Ord_4)(a1)(a2));
        };
    };
};
var $colon = cons;
var $plus$plus = function (__dict_Semigroup_5) {
    return $less$greater(__dict_Semigroup_5);
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
var showString = function (_) {
    return {
        "__superclasses": {}, 
        show: showStringImpl
    };
};
var showOrdering = function (_) {
    return {
        "__superclasses": {}, 
        show: function (_1) {
            if (_1.ctor === "Prelude.LT") {
                return "LT";
            };
            if (_1.ctor === "Prelude.GT") {
                return "GT";
            };
            if (_1.ctor === "Prelude.EQ") {
                return "EQ";
            };
            throw "Failed pattern match";
        }
    };
};
var showNumber = function (_) {
    return {
        "__superclasses": {}, 
        show: showNumberImpl
    };
};
var showBoolean = function (_) {
    return {
        "__superclasses": {}, 
        show: function (_1) {
            if (_1) {
                return "true";
            };
            if (!_1) {
                return "false";
            };
            throw "Failed pattern match";
        }
    };
};
var showArray = function (__dict_Show_6) {
    return {
        "__superclasses": {}, 
        show: showArrayImpl(show(__dict_Show_6))
    };
};
var semigroupoidArr = function (_) {
    return {
        "__superclasses": {}, 
        "<<<": function (f) {
            return function (g) {
                return function (x) {
                    return f(g(x));
                };
            };
        }
    };
};
var semigroupString = function (_) {
    return {
        "__superclasses": {}, 
        "<>": concatString
    };
};
var $$return = function (__dict_Monad_7) {
    return pure(__dict_Monad_7["__superclasses"]["Prelude.Applicative_0"]({}));
};
var numNumber = function (_) {
    return {
        "__superclasses": {}, 
        "+": numAdd, 
        "-": numSub, 
        "*": numMul, 
        "/": numDiv, 
        "%": numMod, 
        negate: numNegate
    };
};
var liftM1 = function (__dict_Monad_8) {
    return function (f) {
        return function (a) {
            return $greater$greater$eq(__dict_Monad_8["__superclasses"]["Prelude.Bind_1"]({}))(a)(function (_1) {
                return $$return(__dict_Monad_8)(f(_1));
            });
        };
    };
};
var liftA1 = function (__dict_Applicative_9) {
    return function (f) {
        return function (a) {
            return $less$times$greater(__dict_Applicative_9["__superclasses"]["Prelude.Apply_0"]({}))(pure(__dict_Applicative_9)(f))(a);
        };
    };
};
var flip = function (f) {
    return function (b) {
        return function (a) {
            return f(a)(b);
        };
    };
};
var eqString = function (_) {
    return {
        "__superclasses": {}, 
        "==": refEq, 
        "/=": refIneq
    };
};
var eqNumber = function (_) {
    return {
        "__superclasses": {}, 
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
        compare: numCompare
    };
};
var eqBoolean = function (_) {
    return {
        "__superclasses": {}, 
        "==": refEq, 
        "/=": refIneq
    };
};
var $$const = function (_1) {
    return function (_2) {
        return _1;
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
        "__superclasses": {}, 
        "&&": boolAnd, 
        "||": boolOr, 
        not: boolNot
    };
};
var eqArray = function (__dict_Eq_10) {
    return {
        "__superclasses": {}, 
        "==": function (_1) {
            return function (_2) {
                if (_1.length === 0) {
                    if (_2.length === 0) {
                        return true;
                    };
                };
                if (_1.length > 0) {
                    var _8 = _1.slice(1);
                    if (_2.length > 0) {
                        var _6 = _2.slice(1);
                        return $amp$amp(boolLikeBoolean({}))($eq$eq(__dict_Eq_10)(_1[0])(_2[0]))($eq$eq(eqArray(__dict_Eq_10))(_8)(_6));
                    };
                };
                return false;
            };
        }, 
        "/=": function (xs) {
            return function (ys) {
                return not(boolLikeBoolean({}))($eq$eq(eqArray(__dict_Eq_10))(xs)(ys));
            };
        }
    };
};
var eqOrdering = function (_) {
    return {
        "__superclasses": {}, 
        "==": function (_1) {
            return function (_2) {
                if (_1.ctor === "Prelude.LT") {
                    if (_2.ctor === "Prelude.LT") {
                        return true;
                    };
                };
                if (_1.ctor === "Prelude.GT") {
                    if (_2.ctor === "Prelude.GT") {
                        return true;
                    };
                };
                if (_1.ctor === "Prelude.EQ") {
                    if (_2.ctor === "Prelude.EQ") {
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
        "__superclasses": {}, 
        "&": numAnd, 
        "|": numOr, 
        "^": numXor, 
        shl: numShl, 
        shr: numShr, 
        zshr: numZshr, 
        complement: numComplement
    };
};
var asTypeOf = function (_1) {
    return function (_2) {
        return _1;
    };
};
var ap = function (__dict_Monad_11) {
    return function (f) {
        return function (a) {
            return $greater$greater$eq(__dict_Monad_11["__superclasses"]["Prelude.Bind_1"]({}))(f)(function (_1) {
                return (function (_2) {
                    return $greater$greater$eq(__dict_Monad_11["__superclasses"]["Prelude.Bind_1"]({}))(a)(function (_1) {
                        return $$return(__dict_Monad_11)(_2(_1));
                    });
                })(_1);
            });
        };
    };
};
module.exports = {
    LT: LT, 
    GT: GT, 
    EQ: EQ, 
    "++": $plus$plus, 
    concatString: concatString, 
    "<>": $less$greater, 
    boolNot: boolNot, 
    boolOr: boolOr, 
    boolAnd: boolAnd, 
    not: not, 
    "||": $bar$bar, 
    "&&": $amp$amp, 
    numComplement: numComplement, 
    numXor: numXor, 
    numOr: numOr, 
    numAnd: numAnd, 
    numZshr: numZshr, 
    numShr: numShr, 
    numShl: numShl, 
    complement: complement, 
    zshr: zshr, 
    shr: shr, 
    shl: shl, 
    "^": $up, 
    "|": $bar, 
    "&": $amp, 
    numCompare: numCompare, 
    ">=": $greater$eq, 
    "<=": $less$eq, 
    ">": $greater, 
    "<": $less, 
    compare: compare, 
    refIneq: refIneq, 
    refEq: refEq, 
    "/=": $div$eq, 
    "==": $eq$eq, 
    numNegate: numNegate, 
    numMod: numMod, 
    numDiv: numDiv, 
    numMul: numMul, 
    numSub: numSub, 
    numAdd: numAdd, 
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
    "<$>": $less$dollar$greater, 
    showArrayImpl: showArrayImpl, 
    showNumberImpl: showNumberImpl, 
    showStringImpl: showStringImpl, 
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
    showString: showString, 
    showBoolean: showBoolean, 
    showNumber: showNumber, 
    showArray: showArray, 
    numNumber: numNumber, 
    eqString: eqString, 
    eqNumber: eqNumber, 
    eqBoolean: eqBoolean, 
    eqArray: eqArray, 
    eqOrdering: eqOrdering, 
    showOrdering: showOrdering, 
    ordNumber: ordNumber, 
    bitsNumber: bitsNumber, 
    boolLikeBoolean: boolLikeBoolean, 
    semigroupString: semigroupString
};
},{}]},{},[1]);