(function (_ps) {
    "use strict";
    _ps.Control_Monad_Eff = (function () {
        var module = {};
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
                "<*>": _ps.Prelude.ap(monadEff({}))
            };
        };
        var functorEff = function (_) {
            return {
                "__superclasses": {}, 
                "<$>": _ps.Prelude.liftA1(applicativeEff({}))
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
        module.foreachE = foreachE;
        module.forE = forE;
        module.whileE = whileE;
        module.untilE = untilE;
        module.runPure = runPure;
        module.bindE = bindE;
        module.returnE = returnE;
        module.functorEff = functorEff;
        module.applyEff = applyEff;
        module.applicativeEff = applicativeEff;
        module.bindEff = bindEff;
        module.monadEff = monadEff;
        return module;
    })();
})((typeof module !== "undefined" && module.exports) ? module.exports : (typeof window !== "undefined") ? window.PS = window.PS || {} : (function () {
    throw "PureScript doesn't know how to export modules in the current environment";
})());