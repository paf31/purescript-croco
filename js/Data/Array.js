(function (_ps) {
    "use strict";
    _ps.Data_Array = (function () {
        var module = {};
        function length(xs) {  return xs.length;};
        function indexOf(l) {  return function (e) {    return l.indexOf(e);  };};
        function lastIndexOf(l) {  return function (e) {    return l.lastIndexOf(e);  };};
        function concat(l1) {  return function (l2) {    return l1.concat(l2);  };};
        function joinS(l) {  return l.join();};
        function joinWith(l) {  return function (s) {    return l.join(s);  };};
        function push(l) {  return function (e) {    var l1 = l.slice();    l1.push(e);     return l1;  };};
        function reverse(l) {  var l1 = l.slice();  l1.reverse();   return l1;};
        function shift(l) {  var l1 = l.slice();  l1.shift();  return l1;};
        function slice(s) {  return function(e) {    return function (l) {      return l.slice(s, e);    };  };};
        function sort(l) {  var l1 = l.slice();  l1.sort();  return l1;};
        function insertAt(index) {  return function(a) {    return function(l) {      var l1 = l.slice();      l1.splice(index, 0, a);      return l1;    };   };};
        function deleteAt(index) {  return function(n) {    return function(l) {      var l1 = l.slice();      l1.splice(index, n);      return l1;    };   };};
        function updateAt(index) {  return function(a) {    return function(l) {      var l1 = l.slice();      l1[index] = a;      return l1;    };   };};
        var tail = function (_1) {
            if (_1.length > 0) {
                var _4 = _1.slice(1);
                return _ps.Data_Maybe.Just(_4);
            };
            return _ps.Data_Maybe.Nothing;
            throw "Failed pattern match";
        };
        var singleton = function (a) {
            return [ a ];
        };
        var monadArray_$$return = singleton;
        var isEmpty = function (_1) {
            if (_1.length === 0) {
                return true;
            };
            return false;
            throw "Failed pattern match";
        };
        var head = function (_1) {
            if (_1.length > 0) {
                return _ps.Data_Maybe.Just(_1[0]);
            };
            return _ps.Data_Maybe.Nothing;
            throw "Failed pattern match";
        };
        var eqArray = function (_1) {
            return {
                $eq$eq: eqArray_$eq$eq(_1), 
                $div$eq: eqArray_$div$eq(_1)
            };
        };
        var eqArray_$eq$eq = function (__dict_Eq_0) {
            return function (_1) {
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
                            return _ps.Prelude["=="](__dict_Eq_0)(_1[0])(_2[0]) && _ps.Prelude["=="](eqArray(__dict_Eq_0))(_8)(_6);
                        };
                    };
                    return false;
                    throw "Failed pattern match";
                };
            };
        };
        var eqArray_$div$eq = function (__dict_Eq_1) {
            return function (xs) {
                return function (ys) {
                    return !_ps.Prelude["=="](eqArray(__dict_Eq_1))(xs)(ys);
                };
            };
        };
        var drop = function (__copy__1) {
            return function (__copy__2) {
                var _1 = __copy__1;
                var _2 = __copy__2;
                tco: while (true) {
                    if (_1 === 0) {
                        return _2;
                    };
                    if (_2.length === 0) {
                        return [  ];
                    };
                    if (_2.length > 0) {
                        var _6 = _2.slice(1);
                        var __tco__1 = _1 - 1;
                        _1 = __tco__1;
                        _2 = _6;
                        continue tco;
                    };
                    throw "Failed pattern match";
                };
            };
        };
        var concatMap = function (_1) {
            return function (_2) {
                if (_2.length === 0) {
                    return [  ];
                };
                if (_2.length > 0) {
                    var _6 = _2.slice(1);
                    return concat(_1(_2[0]))(concatMap(_1)(_6));
                };
                throw "Failed pattern match";
            };
        };
        var monadArray_$greater$greater$eq = _ps.Prelude.flip(concatMap);
        var monadArray = function (_1) {
            return {
                $$return: monadArray_$$return, 
                $greater$greater$eq: monadArray_$greater$greater$eq
            };
        };
        var alternativeArray_empty = [  ];
        var alternativeArray_$less$bar$greater = concat;
        var alternativeArray = function (_1) {
            return {
                empty: alternativeArray_empty, 
                $less$bar$greater: alternativeArray_$less$bar$greater
            };
        };
        var $colon = function (a) {
            return concat([ a ]);
        };
        var filter = function (_1) {
            return function (_2) {
                if (_2.length === 0) {
                    return [  ];
                };
                if (_2.length > 0) {
                    var _6 = _2.slice(1);
                    if (_1(_2[0])) {
                        return $colon(_2[0])(filter(_1)(_6));
                    };
                };
                if (_2.length > 0) {
                    var _8 = _2.slice(1);
                    return filter(_1)(_8);
                };
                throw "Failed pattern match";
            };
        };
        var map = function (_1) {
            return function (_2) {
                if (_2.length === 0) {
                    return [  ];
                };
                if (_2.length > 0) {
                    var _6 = _2.slice(1);
                    return $colon(_1(_2[0]))(map(_1)(_6));
                };
                throw "Failed pattern match";
            };
        };
        var functorArray_$less$dollar$greater = map;
        var functorArray = function (_1) {
            return {
                $less$dollar$greater: functorArray_$less$dollar$greater
            };
        };
        var showArray_show = function (__dict_Show_2) {
            return function (xs) {
                return "[" + joinWith(map(_ps.Prelude.show(__dict_Show_2))(xs))(",") + "]";
            };
        };
        var showArray = function (_1) {
            return {
                show: showArray_show(_1)
            };
        };
        var nubBy = function (_1) {
            return function (_2) {
                if (_2.length === 0) {
                    return [  ];
                };
                if (_2.length > 0) {
                    var _6 = _2.slice(1);
                    return $colon(_2[0])(nubBy(_1)(filter(function (y) {
                        return !_1(_2[0])(y);
                    })(_6)));
                };
                throw "Failed pattern match";
            };
        };
        var nub = function (__dict_Eq_3) {
            return nubBy(_ps.Prelude["=="](__dict_Eq_3));
        };
        var range = function (_1) {
            return function (_2) {
                if (_1 > _2) {
                    return [  ];
                };
                return $colon(_1)(range(_1 + 1)(_2));
                throw "Failed pattern match";
            };
        };
        var take = function (_1) {
            return function (_2) {
                if (_1 === 0) {
                    return [  ];
                };
                if (_2.length === 0) {
                    return [  ];
                };
                if (_2.length > 0) {
                    var _6 = _2.slice(1);
                    return $colon(_2[0])(take(_1 - 1)(_6));
                };
                throw "Failed pattern match";
            };
        };
        var zipWith = function (_1) {
            return function (_2) {
                return function (_3) {
                    if (_2.length > 0) {
                        var _10 = _2.slice(1);
                        if (_3.length > 0) {
                            var _8 = _3.slice(1);
                            return $colon(_1(_2[0])(_3[0]))(zipWith(_1)(_10)(_8));
                        };
                    };
                    return [  ];
                    throw "Failed pattern match";
                };
            };
        };
        module.nubBy = nubBy;
        module.nub = nub;
        module.take = take;
        module.drop = drop;
        module.zipWith = zipWith;
        module.range = range;
        module.isEmpty = isEmpty;
        module.filter = filter;
        module.concatMap = concatMap;
        module.singleton = singleton;
        module[":"] = $colon;
        module.updateAt = updateAt;
        module.deleteAt = deleteAt;
        module.insertAt = insertAt;
        module.sort = sort;
        module.slice = slice;
        module.shift = shift;
        module.reverse = reverse;
        module.push = push;
        module.joinWith = joinWith;
        module.joinS = joinS;
        module.concat = concat;
        module.lastIndexOf = lastIndexOf;
        module.indexOf = indexOf;
        module.length = length;
        module.map = map;
        module.tail = tail;
        module.head = head;
        module.showArray = showArray;
        module.eqArray = eqArray;
        module.monadArray = monadArray;
        module.functorArray = functorArray;
        module.alternativeArray = alternativeArray;
        return module;
    })();
})((typeof module !== "undefined" && module.exports) ? module.exports : (typeof window !== "undefined") ? window.PS = window.PS || {} : (function () {
    throw "PureScript doesn't know how to export modules in the current environment";
})());