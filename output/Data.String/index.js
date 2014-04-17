"use strict";
function charAt(i) {  return function(s) {    return s.charAt(i);   };};
function fromCharCode(n) {  return String.fromCharCode(n);};
function indexOf(s1) {  return function(s2) {    return s1.indexOf(s2);  }; };
function lastIndexOf(s1) {  return function(s2) {    return s1.lastIndexOf(s2);  };};
function length(s) {  return s.length;};
function localeCompare(s1) {  return function(s2) {    return s1.localeCompare(s2);  };};
function replace(s1) {  return function(s2) {    return function(s3) {      return s3.replace(s1, s2);    };  };};
function slice(st) {  return function(e) {    return function(s) {      return s.slice(st, e);    };  };};
function split(sep) {  return function(s) {    return s.split(sep);  };};
function substr(n1) {  return function(n2) {    return function(s) {      return s.substr(n1, n2);    };  };};
function substring(n1) {  return function(n2) {    return function(s) {      return s.substring(n1, n2);    };  };};
function toLower(s) {  return s.toLowerCase();};
function toUpper(s) {  return s.toUpperCase();};
function trim(s) {  return s.trim();};
function joinWith (l) {  return function (s) {    return l.join(s);  };};
module.exports = {
    joinWith: joinWith, 
    trim: trim, 
    toUpper: toUpper, 
    toLower: toLower, 
    substring: substring, 
    substr: substr, 
    split: split, 
    slice: slice, 
    replace: replace, 
    localeCompare: localeCompare, 
    length: length, 
    lastIndexOf: lastIndexOf, 
    indexOf: indexOf, 
    fromCharCode: fromCharCode, 
    charAt: charAt
};