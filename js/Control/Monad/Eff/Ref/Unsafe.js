(function (_ps) {
    "use strict";
    _ps.Control_Monad_Eff_Ref_Unsafe = (function () {
        var module = {};
        function unsafeRunRef(f) {  return f;};
        module.unsafeRunRef = unsafeRunRef;
        return module;
    })();
})((typeof module !== "undefined" && module.exports) ? module.exports : (typeof window !== "undefined") ? window.PS = window.PS || {} : (function () {
    throw "PureScript doesn't know how to export modules in the current environment";
})());