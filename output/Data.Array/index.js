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