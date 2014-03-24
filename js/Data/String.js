(function (_ps) {
    "use strict";
    _ps.Data_String = (function () {
        var module = {};
        function lengthS(s) {  return s.length;};
        function charAt(i) {  return function(s) {    return s.charAt(i);   };};
        function indexOfS(s1) {  return function(s2) {    return s1.indexOf(s2);  }; };
        function lastIndexOfS(s1) {  return function(s2) {    return s1.lastIndexOf(s2);  };};
        function localeCompare(s1) {  return function(s2) {    return s1.localeCompare(s2);  };};
        function replace(s1) {  return function(s2) {    return function(s3) {      return s3.replace(s1, s2);    };  };};
        function sliceS(st) {  return function(e) {    return function(s) {      return s.slice(st, e);    };  };};
        function split(sep) {  return function(s) {    return s.split(sep);  };};
        function substr(n1) {  return function(n2) {    return function(s) {      return s.substr(n1, n2);    };  };};
        function substring(n1) {  return function(n2) {    return function(s) {      return s.substring(n1, n2);    };  };};
        function toLower(s) {  return s.toLowerCase();};
        function toUpper(s) {  return s.toUpperCase();};
        function trim(s) {  return s.trim();};
        module.trim = trim;
        module.toUpper = toUpper;
        module.toLower = toLower;
        module.substring = substring;
        module.substr = substr;
        module.split = split;
        module.sliceS = sliceS;
        module.replace = replace;
        module.localeCompare = localeCompare;
        module.lastIndexOfS = lastIndexOfS;
        module.indexOfS = indexOfS;
        module.charAt = charAt;
        module.lengthS = lengthS;
        return module;
    })();
})((typeof module !== "undefined" && module.exports) ? module.exports : (typeof window !== "undefined") ? window.PS = window.PS || {} : (function () {
    throw "PureScript doesn't know how to export modules in the current environment";
})());