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
            return dict.id;
        };
        function $less$less$less(dict) {
            return dict.$less$less$less;
        };
        function show(dict) {
            return dict.show;
        };
        function showNumberImpl(n) {  return n.toString();};
        function $less$dollar$greater(dict) {
            return dict.$less$dollar$greater;
        };
        function pure(dict) {
            return dict.pure;
        };
        function $less$times$greater(dict) {
            return dict.$less$times$greater;
        };
        function empty(dict) {
            return dict.empty;
        };
        function $less$bar$greater(dict) {
            return dict.$less$bar$greater;
        };
        function $$return(dict) {
            return dict.$$return;
        };
        function $greater$greater$eq(dict) {
            return dict.$greater$greater$eq;
        };
        function $plus(dict) {
            return dict.$plus;
        };
        function $minus(dict) {
            return dict.$minus;
        };
        function $times(dict) {
            return dict.$times;
        };
        function $div(dict) {
            return dict.$div;
        };
        function $percent(dict) {
            return dict.$percent;
        };
        function negate(dict) {
            return dict.negate;
        };
        function numAdd(n1) {  return function(n2) {    return n1 + n2;  };};
        function numSub(n1) {  return function(n2) {    return n1 - n2;  };};
        function numMul(n1) {  return function(n2) {    return n1 * n2;  };};
        function numDiv(n1) {  return function(n2) {    return n1 / n2;  };};
        function numMod(n1) {  return function(n2) {    return n1 % n2;  };};
        function numNegate(n) {  return -n;};
        function $eq$eq(dict) {
            return dict.$eq$eq;
        };
        function $div$eq(dict) {
            return dict.$div$eq;
        };
        function refEq(r1) {  return function(r2) {    return r1 === r2;  };};
        function refIneq(r1) {  return function(r2) {    return r1 !== r2;  };};
        function compare(dict) {
            return dict.compare;
        };
        function numCompare(n1) {  return function(n2) {    return n1 < n2 ? module.LT : n1 > n2 ? module.GT : module.EQ;  };};
        function $amp(dict) {
            return dict.$amp;
        };
        function $bar(dict) {
            return dict.$bar;
        };
        function $up(dict) {
            return dict.$up;
        };
        function shl(dict) {
            return dict.shl;
        };
        function shr(dict) {
            return dict.shr;
        };
        function zshr(dict) {
            return dict.zshr;
        };
        function complement(dict) {
            return dict.complement;
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
            return dict.$amp$amp;
        };
        function $bar$bar(dict) {
            return dict.$bar$bar;
        };
        function not(dict) {
            return dict.not;
        };
        function boolAnd(b1) {  return function(b2) {    return b1 && b2;  };};
        function boolOr(b1) {  return function(b2) {    return b1 || b2;  };};
        function boolNot(b) {  return !b;};
        function $plus$plus(s1) {  return function(s2) {    return s1 + s2;  };};
        var showString_show = function (s) {
            return s;
        };
        var showString = function (_1) {
            return {
                show: showString_show
            };
        };
        var showOrdering_show = function (_1) {
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
        };
        var showOrdering = function (_1) {
            return {
                show: showOrdering_show
            };
        };
        var showNumber_show = showNumberImpl;
        var showNumber = function (_1) {
            return {
                show: showNumber_show
            };
        };
        var showBoolean_show = function (_1) {
            if (_1) {
                return "true";
            };
            if (!_1) {
                return "false";
            };
            throw "Failed pattern match";
        };
        var showBoolean = function (_1) {
            return {
                show: showBoolean_show
            };
        };
        var ordNumber_compare = numCompare;
        var ordNumber = function (_1) {
            return {
                compare: ordNumber_compare
            };
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
        var numNumber_negate = numNegate;
        var numNumber_$times = numMul;
        var numNumber_$plus = numAdd;
        var numNumber_$percent = numMod;
        var numNumber_$minus = numSub;
        var numNumber_$div = numDiv;
        var numNumber = function (_1) {
            return {
                $plus: numNumber_$plus, 
                $minus: numNumber_$minus, 
                $times: numNumber_$times, 
                $div: numNumber_$div, 
                $percent: numNumber_$percent, 
                negate: numNumber_negate
            };
        };
        var functorFromApplicative_$less$dollar$greater = function (__dict_Applicative_0) {
            return function (f) {
                return function (a) {
                    return $less$times$greater(__dict_Applicative_0)(pure(__dict_Applicative_0)(f))(a);
                };
            };
        };
        var functorFromApplicative = function (_1) {
            return {
                $less$dollar$greater: functorFromApplicative_$less$dollar$greater(_1)
            };
        };
        var flip = function (f) {
            return function (b) {
                return function (a) {
                    return f(a)(b);
                };
            };
        };
        var eqString_$eq$eq = refEq;
        var eqString_$div$eq = refIneq;
        var eqString = function (_1) {
            return {
                $eq$eq: eqString_$eq$eq, 
                $div$eq: eqString_$div$eq
            };
        };
        var eqNumber_$eq$eq = refEq;
        var eqNumber_$div$eq = refIneq;
        var eqNumber = function (_1) {
            return {
                $eq$eq: eqNumber_$eq$eq, 
                $div$eq: eqNumber_$div$eq
            };
        };
        var eqBoolean_$eq$eq = refEq;
        var eqBoolean_$div$eq = refIneq;
        var eqBoolean = function (_1) {
            return {
                $eq$eq: eqBoolean_$eq$eq, 
                $div$eq: eqBoolean_$div$eq
            };
        };
        var $$const = function (_1) {
            return function (_2) {
                return _1;
                throw "Failed pattern match";
            };
        };
        var categoryArr_id = function (x) {
            return x;
        };
        var categoryArr_$less$less$less = function (f) {
            return function (g) {
                return function (x) {
                    return f(g(x));
                };
            };
        };
        var categoryArr = function (_1) {
            return {
                id: categoryArr_id, 
                $less$less$less: categoryArr_$less$less$less
            };
        };
        var boolLikeBoolean_not = boolNot;
        var boolLikeBoolean_$bar$bar = boolOr;
        var boolLikeBoolean_$amp$amp = boolAnd;
        var boolLikeBoolean = function (_1) {
            return {
                $amp$amp: boolLikeBoolean_$amp$amp, 
                $bar$bar: boolLikeBoolean_$bar$bar, 
                not: boolLikeBoolean_not
            };
        };
        var eqArray_$eq$eq = function (__dict_Eq_1) {
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
                            return $amp$amp(boolLikeBoolean({}))($eq$eq(__dict_Eq_1)(_1[0])(_2[0]))($eq$eq(eqArray(__dict_Eq_1))(_8)(_6));
                        };
                    };
                    return false;
                    throw "Failed pattern match";
                };
            };
        };
        var eqArray = function (_1) {
            return {
                $eq$eq: eqArray_$eq$eq(_1), 
                $div$eq: eqArray_$div$eq(_1)
            };
        };
        var eqArray_$div$eq = function (__dict_Eq_2) {
            return function (xs) {
                return function (ys) {
                    return not(boolLikeBoolean({}))($eq$eq(eqArray(__dict_Eq_2))(xs)(ys));
                };
            };
        };
        var bitsNumber_zshr = numZshr;
        var bitsNumber_shr = numShr;
        var bitsNumber_shl = numShl;
        var bitsNumber_complement = numComplement;
        var bitsNumber_$up = numXor;
        var bitsNumber_$bar = numOr;
        var bitsNumber_$amp = numAnd;
        var bitsNumber = function (_1) {
            return {
                $amp: bitsNumber_$amp, 
                $bar: bitsNumber_$bar, 
                $up: bitsNumber_$up, 
                shl: bitsNumber_shl, 
                shr: bitsNumber_shr, 
                zshr: bitsNumber_zshr, 
                complement: bitsNumber_complement
            };
        };
        var applicativeFromMonad_pure = function (__dict_Monad_3) {
            return $$return(__dict_Monad_3);
        };
        var applicativeFromMonad_$less$times$greater = function (__dict_Monad_4) {
            return function (f) {
                return function (a) {
                    return $greater$greater$eq(__dict_Monad_4)(f)(function (f$prime) {
                        return $greater$greater$eq(__dict_Monad_4)(a)(function (a$prime) {
                            return $$return(__dict_Monad_4)(f$prime(a$prime));
                        });
                    });
                };
            };
        };
        var applicativeFromMonad = function (_1) {
            return {
                pure: applicativeFromMonad_pure(_1), 
                $less$times$greater: applicativeFromMonad_$less$times$greater(_1)
            };
        };
        var $greater$greater$greater = function (__dict_Category_5) {
            return function (f) {
                return function (g) {
                    return $less$less$less(__dict_Category_5)(g)(f);
                };
            };
        };
        var $greater$eq = function (__dict_Ord_6) {
            return function (a1) {
                return function (a2) {
                    return (function (_1) {
                        if (_1.ctor === "Prelude.LT") {
                            return false;
                        };
                        return true;
                        throw "Failed pattern match";
                    })(compare(__dict_Ord_6)(a1)(a2));
                };
            };
        };
        var $greater = function (__dict_Ord_7) {
            return function (a1) {
                return function (a2) {
                    return (function (_1) {
                        if (_1.ctor === "Prelude.GT") {
                            return true;
                        };
                        return false;
                        throw "Failed pattern match";
                    })(compare(__dict_Ord_7)(a1)(a2));
                };
            };
        };
        var $less$eq = function (__dict_Ord_8) {
            return function (a1) {
                return function (a2) {
                    return (function (_1) {
                        if (_1.ctor === "Prelude.GT") {
                            return false;
                        };
                        return true;
                        throw "Failed pattern match";
                    })(compare(__dict_Ord_8)(a1)(a2));
                };
            };
        };
        var $less = function (__dict_Ord_9) {
            return function (a1) {
                return function (a2) {
                    return (function (_1) {
                        if (_1.ctor === "Prelude.LT") {
                            return true;
                        };
                        return false;
                        throw "Failed pattern match";
                    })(compare(__dict_Ord_9)(a1)(a2));
                };
            };
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
        module.LT = LT;
        module.GT = GT;
        module.EQ = EQ;
        module["++"] = $plus$plus;
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
        module[">>="] = $greater$greater$eq;
        module["return"] = $$return;
        module["<|>"] = $less$bar$greater;
        module.empty = empty;
        module["<*>"] = $less$times$greater;
        module.pure = pure;
        module["<$>"] = $less$dollar$greater;
        module.showNumberImpl = showNumberImpl;
        module.show = show;
        module["#"] = $hash;
        module["$"] = $dollar;
        module[">>>"] = $greater$greater$greater;
        module["<<<"] = $less$less$less;
        module.id = id;
        module.on = on;
        module["const"] = $$const;
        module.flip = flip;
        module.categoryArr = categoryArr;
        module.showString = showString;
        module.showBoolean = showBoolean;
        module.showNumber = showNumber;
        module.functorFromApplicative = functorFromApplicative;
        module.applicativeFromMonad = applicativeFromMonad;
        module.numNumber = numNumber;
        module.eqString = eqString;
        module.eqNumber = eqNumber;
        module.eqBoolean = eqBoolean;
        module.eqArray = eqArray;
        module.showOrdering = showOrdering;
        module.ordNumber = ordNumber;
        module.bitsNumber = bitsNumber;
        module.boolLikeBoolean = boolLikeBoolean;
        return module;
    })();
})((typeof module !== "undefined" && module.exports) ? module.exports : (typeof window !== "undefined") ? window.PS = window.PS || {} : (function () {
    throw "PureScript doesn't know how to export modules in the current environment";
})());