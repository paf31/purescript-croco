(function (_ps) {
    "use strict";
    _ps.Prelude = (function () {
        var module = {};
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
        function id(dict) {
            return dict["id"];
        };
        function $less$less$less(dict) {
            return dict["<<<"];
        };
        function show(dict) {
            return dict["show"];
        };
        function showNumberImpl(n) {  return n.toString();};
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
        function numCompare(n1) {  return function(n2) {    return n1 < n2 ? module.LT : n1 > n2 ? module.GT : module.EQ;  };};
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
        function $bang$bang(xs) {  return function(n) {    return xs[n];  };};
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
        var $greater$greater$greater = function (__dict_Category_0) {
            return function (f) {
                return function (g) {
                    return $less$less$less(__dict_Category_0)(g)(f);
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
                show: function (s) {
                    return s;
                }
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
        var semigroupString = function (_) {
            return {
                "__superclasses": {}, 
                "<>": concatString
            };
        };
        var $$return = function (__dict_Monad_6) {
            return pure(__dict_Monad_6["__superclasses"]["Prelude.Applicative_0"]({}));
        };
        var on = function (f) {
            return function (g) {
                return function (x) {
                    return function (y) {
                        return f(g(x))(g(y));
                    };
                };
            };
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
        var liftM1 = function (__dict_Monad_7) {
            return function (f) {
                return function (a) {
                    return $greater$greater$eq(__dict_Monad_7["__superclasses"]["Prelude.Bind_1"]({}))(a)(function (_1) {
                        return $$return(__dict_Monad_7)(f(_1));
                    });
                };
            };
        };
        var liftA1 = function (__dict_Applicative_8) {
            return function (f) {
                return function (a) {
                    return $less$times$greater(__dict_Applicative_8["__superclasses"]["Prelude.Apply_0"]({}))(pure(__dict_Applicative_8)(f))(a);
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
                "__superclasses": {}, 
                id: function (x) {
                    return x;
                }, 
                "<<<": function (f) {
                    return function (g) {
                        return function (x) {
                            return f(g(x));
                        };
                    };
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
        var eqArray = function (__dict_Eq_9) {
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
                                return $amp$amp(boolLikeBoolean({}))($eq$eq(__dict_Eq_9)(_1[0])(_2[0]))($eq$eq(eqArray(__dict_Eq_9))(_8)(_6));
                            };
                        };
                        return false;
                    };
                }, 
                "/=": function (xs) {
                    return function (ys) {
                        return not(boolLikeBoolean({}))($eq$eq(eqArray(__dict_Eq_9))(xs)(ys));
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
        var ap = function (__dict_Monad_10) {
            return function (f) {
                return function (a) {
                    return $greater$greater$eq(__dict_Monad_10["__superclasses"]["Prelude.Bind_1"]({}))(f)(function (_2) {
                        return $greater$greater$eq(__dict_Monad_10["__superclasses"]["Prelude.Bind_1"]({}))(a)(function (_1) {
                            return $$return(__dict_Monad_10)(_2(_1));
                        });
                    });
                };
            };
        };
        module.LT = LT;
        module.GT = GT;
        module.EQ = EQ;
        module["++"] = $plus$plus;
        module.concatString = concatString;
        module["<>"] = $less$greater;
        module.boolNot = boolNot;
        module.boolOr = boolOr;
        module.boolAnd = boolAnd;
        module.not = not;
        module["||"] = $bar$bar;
        module["&&"] = $amp$amp;
        module["!!"] = $bang$bang;
        module.numComplement = numComplement;
        module.numXor = numXor;
        module.numOr = numOr;
        module.numAnd = numAnd;
        module.numZshr = numZshr;
        module.numShr = numShr;
        module.numShl = numShl;
        module.complement = complement;
        module.zshr = zshr;
        module.shr = shr;
        module.shl = shl;
        module["^"] = $up;
        module["|"] = $bar;
        module["&"] = $amp;
        module.numCompare = numCompare;
        module[">="] = $greater$eq;
        module["<="] = $less$eq;
        module[">"] = $greater;
        module["<"] = $less;
        module.compare = compare;
        module.refIneq = refIneq;
        module.refEq = refEq;
        module["/="] = $div$eq;
        module["=="] = $eq$eq;
        module.numNegate = numNegate;
        module.numMod = numMod;
        module.numDiv = numDiv;
        module.numMul = numMul;
        module.numSub = numSub;
        module.numAdd = numAdd;
        module.negate = negate;
        module["%"] = $percent;
        module["/"] = $div;
        module["*"] = $times;
        module["-"] = $minus;
        module["+"] = $plus;
        module.ap = ap;
        module.liftM1 = liftM1;
        module["return"] = $$return;
        module[">>="] = $greater$greater$eq;
        module["<|>"] = $less$bar$greater;
        module.empty = empty;
        module.liftA1 = liftA1;
        module.pure = pure;
        module["<*>"] = $less$times$greater;
        module["<$>"] = $less$dollar$greater;
        module.showNumberImpl = showNumberImpl;
        module.show = show;
        module["#"] = $hash;
        module["$"] = $dollar;
        module[">>>"] = $greater$greater$greater;
        module["<<<"] = $less$less$less;
        module.id = id;
        module.asTypeOf = asTypeOf;
        module.on = on;
        module["const"] = $$const;
        module.flip = flip;
        module.categoryArr = categoryArr;
        module.showString = showString;
        module.showBoolean = showBoolean;
        module.showNumber = showNumber;
        module.numNumber = numNumber;
        module.eqString = eqString;
        module.eqNumber = eqNumber;
        module.eqBoolean = eqBoolean;
        module.eqArray = eqArray;
        module.eqOrdering = eqOrdering;
        module.showOrdering = showOrdering;
        module.ordNumber = ordNumber;
        module.bitsNumber = bitsNumber;
        module.boolLikeBoolean = boolLikeBoolean;
        module.semigroupString = semigroupString;
        return module;
    })();
})((typeof module !== "undefined" && module.exports) ? module.exports : (typeof window !== "undefined") ? window.PS = window.PS || {} : (function () {
    throw "PureScript doesn't know how to export modules in the current environment";
})());