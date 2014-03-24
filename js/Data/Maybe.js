(function (_ps) {
    "use strict";
    _ps.Data_Maybe = (function () {
        var module = {};
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
        var showMaybe_show = function (__dict_Show_0) {
            return function (_1) {
                if (_1.ctor === "Data.Maybe.Just") {
                    return "Just " + _ps.Prelude.show(__dict_Show_0)(_1.values[0]);
                };
                if (_1.ctor === "Data.Maybe.Nothing") {
                    return "Nothing";
                };
                throw "Failed pattern match";
            };
        };
        var showMaybe = function (_1) {
            return {
                show: showMaybe_show(_1)
            };
        };
        var monadMaybe_$$return = Just;
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
        var monadMaybe_$greater$greater$eq = function (m) {
            return function (f) {
                return maybe(Nothing)(f)(m);
            };
        };
        var monadMaybe = function (_1) {
            return {
                $$return: monadMaybe_$$return, 
                $greater$greater$eq: monadMaybe_$greater$greater$eq
            };
        };
        var isNothing = maybe(true)(_ps.Prelude["const"](false));
        var isJust = maybe(false)(_ps.Prelude["const"](true));
        var functorMaybe_$less$dollar$greater = function (_1) {
            return function (_2) {
                if (_2.ctor === "Data.Maybe.Just") {
                    return Just(_1(_2.values[0]));
                };
                return Nothing;
                throw "Failed pattern match";
            };
        };
        var functorMaybe = function (_1) {
            return {
                $less$dollar$greater: functorMaybe_$less$dollar$greater
            };
        };
        var fromMaybe = function (a) {
            return maybe(a)(_ps.Prelude.id(_ps.Prelude.categoryArr({})));
        };
        var eqMaybe_$eq$eq = function (__dict_Eq_1) {
            return function (_1) {
                return function (_2) {
                    if (_1.ctor === "Data.Maybe.Nothing") {
                        if (_2.ctor === "Data.Maybe.Nothing") {
                            return true;
                        };
                    };
                    if (_1.ctor === "Data.Maybe.Just") {
                        if (_2.ctor === "Data.Maybe.Just") {
                            return _ps.Prelude["=="](__dict_Eq_1)(_1.values[0])(_2.values[0]);
                        };
                    };
                    return false;
                    throw "Failed pattern match";
                };
            };
        };
        var eqMaybe = function (_1) {
            return {
                $eq$eq: eqMaybe_$eq$eq(_1), 
                $div$eq: eqMaybe_$div$eq(_1)
            };
        };
        var eqMaybe_$div$eq = function (__dict_Eq_2) {
            return function (a) {
                return function (b) {
                    return !_ps.Prelude["=="](eqMaybe(__dict_Eq_2))(a)(b);
                };
            };
        };
        var applicativeMaybe_pure = Just;
        var applicativeMaybe_$less$times$greater = function (_1) {
            return function (_2) {
                if (_1.ctor === "Data.Maybe.Just") {
                    return _ps.Prelude["<$>"](functorMaybe({}))(_1.values[0])(_2);
                };
                if (_1.ctor === "Data.Maybe.Nothing") {
                    return Nothing;
                };
                throw "Failed pattern match";
            };
        };
        var applicativeMaybe = function (_1) {
            return {
                pure: applicativeMaybe_pure, 
                $less$times$greater: applicativeMaybe_$less$times$greater
            };
        };
        module.Nothing = Nothing;
        module.Just = Just;
        module.isNothing = isNothing;
        module.isJust = isJust;
        module.fromMaybe = fromMaybe;
        module.maybe = maybe;
        module.monadMaybe = monadMaybe;
        module.applicativeMaybe = applicativeMaybe;
        module.functorMaybe = functorMaybe;
        module.showMaybe = showMaybe;
        module.eqMaybe = eqMaybe;
        return module;
    })();
})((typeof module !== "undefined" && module.exports) ? module.exports : (typeof window !== "undefined") ? window.PS = window.PS || {} : (function () {
    throw "PureScript doesn't know how to export modules in the current environment";
})());