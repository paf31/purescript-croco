"use strict";
function newRef(val) {  return function () {    return { value: val };  };};
function readRef(ref) {  return function() {    return ref.value;  };};
function modifyRef(ref) {  return function(f) {    return function() {      ref.value = f(ref.value);      return {};    };  };};
function writeRef(ref) {  return function(val) {    return function() {      ref.value = val;      return {};    };  };};
module.exports = {
    writeRef: writeRef, 
    modifyRef: modifyRef, 
    readRef: readRef, 
    newRef: newRef
};