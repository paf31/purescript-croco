(function (_ps) {
    "use strict";
    _ps.Data_String_Regex = (function () {
        var module = {};
        function regex(s1) {  return function(s2) {    return new Regex(s1, s2);  };};
        function test(r) {  return function (s) {    return r.test(s);  };};
        function match(r) {  return function (s) {    return s.match(r);   };};
        function replaceR(r) {  return function(s1) {    return function(s2) {      return s2.replace(r, s1);    };  };};
        function search(r) {  return function (s) {    return s.search(r);  };};
        module.search = search;
        module.replaceR = replaceR;
        module.match = match;
        module.test = test;
        module.regex = regex;
        return module;
    })();
})((typeof module !== "undefined" && module.exports) ? module.exports : (typeof window !== "undefined") ? window.PS = window.PS || {} : (function () {
    throw "PureScript doesn't know how to export modules in the current environment";
})());