"use strict";
function regex(s1) {  return function(s2) {    return new Regex(s1, s2);  };};
function test(r) {  return function (s) {    return r.test(s);  };};
function match(r) {  return function (s) {    return s.match(r);   };};
function replaceR(r) {  return function(s1) {    return function(s2) {      return s2.replace(r, s1);    };  };};
function search(r) {  return function (s) {    return s.search(r);  };};
module.exports = {
    search: search, 
    replaceR: replaceR, 
    match: match, 
    test: test, 
    regex: regex
};