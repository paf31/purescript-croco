"use strict";
var tail = function (_1) {
    if (_1.length > 0) {
        var _4 = _1.slice(1);
        return _4;
    };
    throw "Failed pattern match";
};
var head = function (_1) {
    if (_1.length > 0) {
        return _1[0];
    };
    throw "Failed pattern match";
};
module.exports = {
    tail: tail, 
    head: head
};