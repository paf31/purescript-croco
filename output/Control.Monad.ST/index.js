"use strict";
function newSTRef(val) {  return function () {    return { value: val };  };};
function readSTRef(ref) {  return function() {    return ref.value;  };};
function modifySTRef(ref) {  return function(f) {    return function() {      return ref.value = f(ref.value);    };  };};
function writeSTRef(ref) {  return function(a) {    return function() {      return ref.value = a;    };  };};
function newSTArray(len) {  return function(a) {    return function() {      var arr = [];      for (var i = 0; i < len; i++) {        arr[i] = a;      };      return arr;    };  };};
function peekSTArray(arr) {  return function(i) {    return function() {      return arr[i];    };  };};
function pokeSTArray(arr) {  return function(i) {    return function(a) {      return function() {        return arr[i] = a;      };    };  };};
function runST(f) {  return f;};
function runSTArray(f) {  return f;};
module.exports = {
    runSTArray: runSTArray, 
    runST: runST, 
    pokeSTArray: pokeSTArray, 
    peekSTArray: peekSTArray, 
    newSTArray: newSTArray, 
    writeSTRef: writeSTRef, 
    modifySTRef: modifySTRef, 
    readSTRef: readSTRef, 
    newSTRef: newSTRef
};