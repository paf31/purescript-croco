(function (_ps) {
    "use strict";
    _ps.Control_Monad_Eff_Unsafe = (function () {
        var module = {};
        function unsafeInterleaveEff(f) {  return f;};
        module.unsafeInterleaveEff = unsafeInterleaveEff;
        return module;
    })();
})((typeof module !== "undefined" && module.exports) ? module.exports : (typeof window !== "undefined") ? window.PS = window.PS || {} : (function () {
    throw "PureScript doesn't know how to export modules in the current environment";
})());