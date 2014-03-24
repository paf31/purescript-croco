(function (_ps) {
    "use strict";
    _ps.Control_Monad_Eff = (function () {
        var module = {};
        function retEff(a) {  return function() {    return a;  };};
        function bindEff(a) {  return function(f) {    return function() {      return f(a())();    };  };};
        function runPure(f) {  return f();};
        function untilE(f) {  return function() {    while (!f()) { }    return {};  };};
        function whileE(f) {  return function(a) {    return function() {      while (f()) {        a();      }      return {};    };  };};
        function forE(lo) {  return function(hi) {    return function(f) {      return function() {        for (var i = lo; i < hi; i++) {          f(i)();        }      };    };  };};
        function foreachE(as) {  return function(f) {    for (var i = 0; i < as.length; i++) {      f(as[i])();    }  };};
        var monadEff_$greater$greater$eq = bindEff;
        var monadEff_$$return = retEff;
        var monadEff = function (_1) {
            return {
                $$return: monadEff_$$return, 
                $greater$greater$eq: monadEff_$greater$greater$eq
            };
        };
        module.foreachE = foreachE;
        module.forE = forE;
        module.whileE = whileE;
        module.untilE = untilE;
        module.runPure = runPure;
        module.bindEff = bindEff;
        module.retEff = retEff;
        module.monadEff = monadEff;
        return module;
    })();
})((typeof module !== "undefined" && module.exports) ? module.exports : (typeof window !== "undefined") ? window.PS = window.PS || {} : (function () {
    throw "PureScript doesn't know how to export modules in the current environment";
})());