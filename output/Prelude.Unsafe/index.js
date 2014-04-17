"use strict";
function unsafeIndex(xs) {  return function(n) {    return xs[n];  };};
module.exports = {
    unsafeIndex: unsafeIndex
};