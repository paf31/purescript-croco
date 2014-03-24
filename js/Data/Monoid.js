(function (_ps) {
    "use strict";
    _ps.Data_Monoid = (function () {
        var module = {};
        function mempty(dict) {
            return dict.mempty;
        };
        function $less$greater(dict) {
            return dict.$less$greater;
        };
        var monoidString_mempty = "";
        var monoidString_$less$greater = _ps.Prelude["++"];
        var monoidString = function (_1) {
            return {
                mempty: monoidString_mempty, 
                $less$greater: monoidString_$less$greater
            };
        };
        var monoidArray_mempty = [  ];
        var monoidArray_$less$greater = _ps.Data_Array.concat;
        var monoidArray = function (_1) {
            return {
                mempty: monoidArray_mempty, 
                $less$greater: monoidArray_$less$greater
            };
        };
        module["<>"] = $less$greater;
        module.mempty = mempty;
        module.monoidString = monoidString;
        module.monoidArray = monoidArray;
        return module;
    })();
})((typeof module !== "undefined" && module.exports) ? module.exports : (typeof window !== "undefined") ? window.PS = window.PS || {} : (function () {
    throw "PureScript doesn't know how to export modules in the current environment";
})());