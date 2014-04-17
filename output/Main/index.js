"use strict";
var Graphics_Canvas = require("Graphics.Canvas");
var Prelude = require("Prelude");
var Data_Array = require("Data.Array");
var Data_Tuple = require("Data.Tuple");
var Data_Map = require("Data.Map");
var Math = require("Math");
var Data_Maybe = require("Data.Maybe");
var Data_Monoid_First = require("Data.Monoid.First");
var Data_Foldable = require("Data.Foldable");
var Control_Monad_Eff = require("Control.Monad.Eff");
var Control_Monad_Eff_Ref = require("Control.Monad.Eff.Ref");
var Data_Traversable = require("Data.Traversable");
var Data_String = require("Data.String");
var MovingUp = {
    ctor: "Main.MovingUp", 
    values: [  ]
};
var MovingDown = {
    ctor: "Main.MovingDown", 
    values: [  ]
};
var NoKeyState = {
    ctor: "Main.NoKeyState", 
    values: [  ]
};
var InProgress = {
    ctor: "Main.InProgress", 
    values: [  ]
};
var GameOver = {
    ctor: "Main.GameOver", 
    values: [  ]
};
var MovingLeft = {
    ctor: "Main.MovingLeft", 
    values: [  ]
};
var MovingRight = {
    ctor: "Main.MovingRight", 
    values: [  ]
};
var White = {
    ctor: "Main.White", 
    values: [  ]
};
var Green = {
    ctor: "Main.Green", 
    values: [  ]
};
var Red = {
    ctor: "Main.Red", 
    values: [  ]
};
function getMillis() {  return new Date().getTime();};
function getElementById(id) {  return function() {    return document.getElementById(id);  };};
function setInterval(t) {  return function(action) {    return function() {      window.setInterval(function() {        action();      }, t);    };  };};
function onKeyDown(handler) {  return function() {    window.onkeydown = function(e) {      return handler(e.keyCode)();    };  };};
function onKeyUp(handler) {  return function() {    window.onkeyup = function(e) {      return handler(e.keyCode)();    };  };};
var square = function (ctx) {
    return Graphics_Canvas.fillRect(ctx)({
        x: -1, 
        y: -1, 
        w: 2, 
        h: 2
    });
};
var showBrick = function (_) {
    return {
        "__superclasses": {}, 
        show: function (_1) {
            if (_1.ctor === "Main.White") {
                return "White";
            };
            if (_1.ctor === "Main.Green") {
                return "Green";
            };
            if (_1.ctor === "Main.Red") {
                return "Red";
            };
            throw "Failed pattern match";
        }
    };
};
var eqBrick = function (_) {
    return {
        "__superclasses": {}, 
        "==": function (_1) {
            return function (_2) {
                if (_1.ctor === "Main.White") {
                    if (_2.ctor === "Main.White") {
                        return true;
                    };
                };
                if (_1.ctor === "Main.Green") {
                    if (_2.ctor === "Main.Green") {
                        return true;
                    };
                };
                if (_1.ctor === "Main.Red") {
                    if (_2.ctor === "Main.Red") {
                        return true;
                    };
                };
                return false;
            };
        }, 
        "/=": function (x) {
            return function (y) {
                return !Prelude["=="](eqBrick({}))(x)(y);
            };
        }
    };
};
var collide = function (_1) {
    return function (_2) {
        return function (_3) {
            return function (_4) {
                return (function (_5, _6, _7, _8) {
                    if (_8.ctor === "Main.White") {
                        return (function (_1) {
                            if (_1.ctor === "Main.MovingLeft") {
                                var _1 = {};
                                for (var _2 in _5) {
                                    if (_5.hasOwnProperty(_2)) {
                                        _1[_2] = _5[_2];
                                    };
                                };
                                _1.direction = MovingRight;
                                return _1;
                            };
                            if (_1.ctor === "Main.MovingRight") {
                                var _1 = {};
                                for (var _2 in _5) {
                                    if (_5.hasOwnProperty(_2)) {
                                        _1[_2] = _5[_2];
                                    };
                                };
                                _1.direction = MovingLeft;
                                return _1;
                            };
                            throw "Failed pattern match";
                        })(_5.direction);
                    };
                    if (_8.ctor === "Main.Red") {
                        var _1 = {};
                        for (var _2 in _5) {
                            if (_5.hasOwnProperty(_2)) {
                                _1[_2] = _5[_2];
                            };
                        };
                        _1.status = GameOver;
                        return _1;
                    };
                    if (_8.ctor === "Main.Green") {
                        var newStatus = Prelude["<<<"](Prelude.semigroupoidArr({}))(Data_Array["null"])(Prelude["<<<"](Prelude.semigroupoidArr({}))(Data_Array.filter(Prelude["=="](eqBrick({}))(Green)))(Data_Array.map(Data_Tuple.snd)))(Data_Map.toList(_5.maze)) ? GameOver : InProgress;
                        var newMaze = Data_Map["delete"](Data_Tuple.eqTuple(Prelude.eqNumber({}))(Prelude.eqNumber({})))(Data_Tuple.ordTuple(Prelude.ordNumber({}))(Prelude.ordNumber({})))(_6)(_5.maze);
                        return (function (_1) {
                            if (_1.ctor === "Main.MovingLeft") {
                                var _1 = {};
                                for (var _2 in _5) {
                                    if (_5.hasOwnProperty(_2)) {
                                        _1[_2] = _5[_2];
                                    };
                                };
                                _1.maze = newMaze;
                                _1.direction = MovingRight;
                                _1.status = newStatus;
                                return _1;
                            };
                            if (_1.ctor === "Main.MovingRight") {
                                var _1 = {};
                                for (var _2 in _5) {
                                    if (_5.hasOwnProperty(_2)) {
                                        _1[_2] = _5[_2];
                                    };
                                };
                                _1.maze = newMaze;
                                _1.direction = MovingLeft;
                                _1.status = newStatus;
                                return _1;
                            };
                            throw "Failed pattern match";
                        })(_5.direction);
                    };
                    throw "Failed pattern match";
                })(_1, _2, _3, _4);
            };
        };
    };
};
var circle = function (ctx) {
    return Graphics_Canvas.fillPath(ctx)(Graphics_Canvas.arc(ctx)({
        cx: 0.0, 
        cy: 0.0, 
        r: 1.0, 
        start: 0.0, 
        end: 2 * Math.pi
    }));
};
var checkCollision = function (_1) {
    return function (_2) {
        return (function (_4, _5) {
            var nearestBrick = function (_1) {
                return function (_2) {
                    return function (_3) {
                        if (_1.ctor === "Main.MovingLeft") {
                            return Data_Tuple.Tuple(Math.floor(_2))(Math.round(_3));
                        };
                        if (_1.ctor === "Main.MovingRight") {
                            return Data_Tuple.Tuple(Math.ceil(_2))(Math.round(_3));
                        };
                        throw "Failed pattern match";
                    };
                };
            };
            var checkCollision$prime = function (_1) {
                return function (_2) {
                    var dy = _2.values[1] - _5.values[1];
                    var dx = _2.values[0] - _5.values[0];
                    var dist = Math.sqrt(dx * dx + dy * dy);
                    return (dist >= 0.7) ? Data_Maybe.Nothing : Prelude["<$>"](Data_Maybe.functorMaybe({}))(Data_Tuple.Tuple(_2))(Data_Map.lookup(Data_Tuple.eqTuple(Prelude.eqNumber({}))(Prelude.eqNumber({})))(Data_Tuple.ordTuple(Prelude.ordNumber({}))(Prelude.ordNumber({})))(_2)(_1.maze));
                };
            };
            return (function (_1) {
                return Prelude["<<<"](Prelude.semigroupoidArr({}))(Data_Monoid_First.runFirst)(Data_Foldable.mconcat(Data_Foldable.foldableArray({}))(Data_Monoid_First.monoidFirst({})))(Data_Array.map(Data_Monoid_First.First)([ checkCollision$prime(_4)(Data_Tuple.Tuple(_1.values[0])(_1.values[1])), checkCollision$prime(_4)(Data_Tuple.Tuple(_1.values[0])(_1.values[1] - 1)), checkCollision$prime(_4)(Data_Tuple.Tuple(_1.values[0])(_1.values[1] + 1)) ]));
            })(nearestBrick(_4.direction)(_5.values[0])(_5.values[1]));
        })(_1, _2);
    };
};
var changeKeyState = function (stateRef) {
    return function (newState) {
        return function __do() {
            var _1 = Control_Monad_Eff_Ref.readRef(stateRef)();
            return (function (_2) {
                var state = _2;
                return (function (_1) {
                    if (_1.ctor === "Main.InProgress") {
                        return Control_Monad_Eff_Ref.modifyRef(stateRef)(function (st) {
                            var _1 = {};
                            for (var _2 in st) {
                                if (st.hasOwnProperty(_2)) {
                                    _1[_2] = st[_2];
                                };
                            };
                            _1.keyState = newState;
                            return _1;
                        });
                    };
                    return Prelude["return"](Control_Monad_Eff.monadEff({}))({});
                })(state.status);
            })(_1)();
        };
    };
};
var handleKeyDown = function (_1) {
    return function (_2) {
        if (_2 === 38) {
            return function __do() {
                changeKeyState(_1)(MovingUp)();
                return false;
            };
        };
        if (_2 === 40) {
            return function __do() {
                changeKeyState(_1)(MovingDown)();
                return false;
            };
        };
        return Prelude["return"](Control_Monad_Eff.monadEff({}))(true);
    };
};
var handleKeyUp = function (_1) {
    return function (_2) {
        return function __do() {
            changeKeyState(_1)(NoKeyState)();
            return false;
        };
    };
};
var box = function (ctx) {
    return function (c1) {
        return function (c2) {
            return function __do() {
                Graphics_Canvas.setFillStyle(c1)(ctx)();
                square(ctx)();
                Graphics_Canvas.setFillStyle(c2)(ctx)();
                return Graphics_Canvas.withContext(ctx)(function __do() {
                    Graphics_Canvas.scale({
                        scaleX: 0.8, 
                        scaleY: 0.8
                    })(ctx)();
                    return square(ctx)();
                })();
            };
        };
    };
};
var brick = function (_1) {
    return function (_2) {
        if (_2.ctor === "Main.White") {
            return box(_1)("#c0c000")("#c08000");
        };
        if (_2.ctor === "Main.Red") {
            return box(_1)("#00ff00")("#008000");
        };
        if (_2.ctor === "Main.Green") {
            return box(_1)("#ff0000")("#0000ff");
        };
        throw "Failed pattern match";
    };
};
var maze = function (ctx) {
    return function (m) {
        return function __do() {
            Data_Traversable["for"](Control_Monad_Eff.functorEff({}))(Control_Monad_Eff.applicativeEff({}))(Data_Traversable.traversableArray({}))(Data_Map.toList(m))(function (_1) {
                return Graphics_Canvas.withContext(ctx)(function __do() {
                    Graphics_Canvas.translate({
                        translateX: (_1.values[0]).values[0], 
                        translateY: (_1.values[0]).values[1]
                    })(ctx)();
                    Graphics_Canvas.scale({
                        scaleX: 0.4, 
                        scaleY: 0.4
                    })(ctx)();
                    return brick(ctx)(_1.values[1])();
                });
            })();
            return ctx;
        };
    };
};
var parseMaze = function (ls) {
    var charToBrick = function (_1) {
        if (_1 === "#") {
            return Data_Maybe.Just(White);
        };
        if (_1 === "R") {
            return Data_Maybe.Just(Red);
        };
        if (_1 === "G") {
            return Data_Maybe.Just(Green);
        };
        return Data_Maybe.Nothing;
    };
    var updateMaze = function (r) {
        return function (c) {
            return function (m) {
                return function (s) {
                    var brick = charToBrick(Data_String.charAt(c)(s));
                    return Data_Maybe.maybe(m)(function (b) {
                        return Data_Map.insert(Data_Tuple.eqTuple(Prelude.eqNumber({}))(Prelude.eqNumber({})))(Data_Tuple.ordTuple(Prelude.ordNumber({}))(Prelude.ordNumber({})))(Data_Tuple.Tuple(c)(r))(b)(m);
                    })(brick);
                };
            };
        };
    };
    var lineToMaze = function (__copy__1) {
        return function (__copy__2) {
            return function (__copy__3) {
                return function (__copy__4) {
                    var _1 = __copy__1;
                    var _2 = __copy__2;
                    var _3 = __copy__3;
                    var _4 = __copy__4;
                    tco: while (true) {
                        var c = _2;
                        var m = _3;
                        var s = _4;
                        if (c >= Data_String.length(s)) {
                            return m;
                        };
                        var __tco__1 = _1;
                        var __tco__2 = _2 + 1;
                        var __tco__3 = updateMaze(_1)(_2)(_3)(_4);
                        var __tco__4 = _4;
                        _1 = __tco__1;
                        _2 = __tco__2;
                        _3 = __tco__3;
                        _4 = __tco__4;
                        continue tco;
                    };
                };
            };
        };
    };
    var go = function (__copy__1) {
        return function (__copy__2) {
            return function (__copy__3) {
                var _1 = __copy__1;
                var _2 = __copy__2;
                var _3 = __copy__3;
                tco: while (true) {
                    var m = _2;
                    if (_3.length === 0) {
                        return m;
                    };
                    if (_3.length > 0) {
                        var _8 = _3.slice(1);
                        var __tco__1 = _1 + 1;
                        var __tco__2 = lineToMaze(_1)(0)(_2)(_3[0]);
                        _1 = __tco__1;
                        _2 = __tco__2;
                        _3 = _8;
                        continue tco;
                    };
                    throw "Failed pattern match";
                };
            };
        };
    };
    return go(0)(Data_Map.empty)(ls);
};
var defaultMaze = parseMaze([ "######################################################################", "#G                  #R         G#GG   RRR                            #", "#G       R#R        #          G#GG         #########                #", "#G        #         #          G#############RGG    #########        #", "#G        #                                                          #", "#G        #         #R         G#############       #########        #", "#G       R#R        #          G#GG         #########                #", "#G                  #          G#GG   RRR                            #", "#################################GG###################################", "#G                             G#GG                                 R#", "#G       R#R        #          G#RRRRRRRRRR                ###########", "#G        #G       G#                                            GGGG#", "#G        #        R#          G#RRRRRRRRRR                ###########", "#G       R#G       G#          G#                                GGGG#", "#R                             G#GGGGGG                          GGGG#", "###########################################RRRRRRRRRRRRRRRR###########" ]);
var defaultGameState = {
    lastTime: Data_Maybe.Nothing, 
    maze: defaultMaze, 
    posX: 4.0, 
    posY: 4.0, 
    speed: 10.0, 
    status: InProgress, 
    keyState: NoKeyState, 
    direction: MovingLeft
};
var ball = function (ctx) {
    return function (x) {
        return function (y) {
            return Graphics_Canvas.withContext(ctx)(function __do() {
                Graphics_Canvas.translate({
                    translateX: x, 
                    translateY: y
                })(ctx)();
                Graphics_Canvas.setFillStyle("#0080ff")(ctx)();
                Graphics_Canvas.scale({
                    scaleX: 0.3, 
                    scaleY: 0.3
                })(ctx)();
                return circle(ctx)();
            });
        };
    };
};
var applyKeyState = function (state) {
    return function (d) {
        if (state.keyState.ctor === "Main.MovingUp") {
            var nearestBrick = function (x) {
                return function (y) {
                    return Data_Tuple.Tuple(Math.round(x))(Math.floor(y));
                };
            };
            var location = nearestBrick(state.posX)(state.posY - d);
            var brick = Data_Map.lookup(Data_Tuple.eqTuple(Prelude.eqNumber({}))(Prelude.eqNumber({})))(Data_Tuple.ordTuple(Prelude.ordNumber({}))(Prelude.ordNumber({})))(location)(state.maze);
            return Prelude["=="](Data_Maybe.eqMaybe(eqBrick({})))(brick)(Data_Maybe.Just(White)) ? state.posY : state.posY - d;
        };
        if (state.keyState.ctor === "Main.MovingDown") {
            var nearestBrick = function (x) {
                return function (y) {
                    return Data_Tuple.Tuple(Math.round(x))(Math.ceil(y));
                };
            };
            var location = nearestBrick(state.posX)(state.posY + d);
            var brick = Data_Map.lookup(Data_Tuple.eqTuple(Prelude.eqNumber({}))(Prelude.eqNumber({})))(Data_Tuple.ordTuple(Prelude.ordNumber({}))(Prelude.ordNumber({})))(location)(state.maze);
            return Prelude["=="](Data_Maybe.eqMaybe(eqBrick({})))(brick)(Data_Maybe.Just(White)) ? state.posY : state.posY + d;
        };
        if (state.keyState.ctor === "Main.NoKeyState") {
            return state.posY;
        };
        throw "Failed pattern match";
    };
};
var moveBall = function (state) {
    return function (elapsed) {
        var d = elapsed * state.speed / 1000.0;
        var newY = applyKeyState(state)(d);
        return (function (_1) {
            if (_1.ctor === "Main.MovingLeft") {
                return Data_Tuple.Tuple(state.posX - d)(newY);
            };
            if (_1.ctor === "Main.MovingRight") {
                return Data_Tuple.Tuple(state.posX + d)(newY);
            };
            throw "Failed pattern match";
        })(state.direction);
    };
};
var updateGameState = function (state) {
    return function (elapsed) {
        return (function (_1) {
            var p = _1;
            var _2 = _1.values[0];
            var newX = _2;
            var _3 = _1.values[1];
            return (function (_1) {
                if (_1.ctor === "Data.Maybe.Nothing") {
                    var _1 = {};
                    for (var _2 in state) {
                        if (state.hasOwnProperty(_2)) {
                            _1[_2] = state[_2];
                        };
                    };
                    _1.posX = newX;
                    _1.posY = _3;
                    return _1;
                };
                if (_1.ctor === "Data.Maybe.Just") {
                    return collide(state)((_1.values[0]).values[0])(Data_Tuple.Tuple(newX)(_3))((_1.values[0]).values[1]);
                };
                throw "Failed pattern match";
            })(checkCollision(state)(p));
        })(moveBall(state)(elapsed));
    };
};
var tick = function (state) {
    return function (elapsedTime) {
        if (state.status.ctor === "Main.GameOver") {
            return state;
        };
        if (state.status.ctor === "Main.InProgress") {
            return updateGameState(state)(elapsedTime);
        };
        throw "Failed pattern match";
    };
};
var render = function (ctx) {
    return function (stateRef) {
        return function __do() {
            var _1 = Control_Monad_Eff_Ref.readRef(stateRef)();
            return (function (_2) {
                var state = _2;
                return function __do() {
                    var _1 = getMillis();
                    return (function (_2) {
                        var time = _2;
                        return (function () {
                            var elapsedTime = Data_Maybe.maybe(0)(Prelude.id(Prelude.categoryArr({})))(Prelude["<$>"](Data_Maybe.functorMaybe({}))(Prelude["-"](Prelude.numNumber({}))(time))(state.lastTime));
                            return (function () {
                                var state$prime = tick(state)(elapsedTime);
                                return (function () {
                                    var state$prime$prime = (function () {
                                        var _1 = {};
                                        for (var _2 in state$prime) {
                                            if (state$prime.hasOwnProperty(_2)) {
                                                _1[_2] = state$prime[_2];
                                            };
                                        };
                                        _1.lastTime = Data_Maybe.Just(time);
                                        return _1;
                                    })();
                                    return function __do() {
                                        Control_Monad_Eff_Ref.writeRef(stateRef)(state$prime$prime)();
                                        Graphics_Canvas.setFillStyle("#000000")(ctx)();
                                        Graphics_Canvas.clearRect(ctx)({
                                            x: 0, 
                                            y: 0, 
                                            w: 640, 
                                            h: 480
                                        })();
                                        Graphics_Canvas.withContext(ctx)(function __do() {
                                            Graphics_Canvas.translate({
                                                translateX: 320, 
                                                translateY: 240
                                            })(ctx)();
                                            Graphics_Canvas.scale({
                                                scaleX: 40, 
                                                scaleY: 40
                                            })(ctx)();
                                            Graphics_Canvas.translate({
                                                translateX: -state$prime$prime.posX, 
                                                translateY: -state$prime$prime.posY
                                            })(ctx)();
                                            maze(ctx)(state$prime$prime.maze)();
                                            return ball(ctx)(state$prime$prime.posX)(state$prime$prime.posY)();
                                        })();
                                        return {};
                                    };
                                })();
                            })();
                        })();
                    })(_1)();
                };
            })(_1)();
        };
    };
};
var main = function __do() {
    var _1 = Control_Monad_Eff_Ref.newRef(defaultGameState)();
    return (function (_2) {
        var stateRef = _2;
        return function __do() {
            onKeyDown(handleKeyDown(stateRef))();
            onKeyUp(handleKeyUp(stateRef))();
            var _1 = getElementById("canvas")();
            return (function (_2) {
                return function __do() {
                    var _1 = Graphics_Canvas.getContext2D(_2)();
                    return setInterval(10)(render(_1)(stateRef))();
                };
            })(_1)();
        };
    })(_1)();
};
module.exports = {
    MovingUp: MovingUp, 
    MovingDown: MovingDown, 
    NoKeyState: NoKeyState, 
    MovingLeft: MovingLeft, 
    MovingRight: MovingRight, 
    InProgress: InProgress, 
    GameOver: GameOver, 
    White: White, 
    Green: Green, 
    Red: Red, 
    main: main, 
    onKeyUp: onKeyUp, 
    onKeyDown: onKeyDown, 
    setInterval: setInterval, 
    getElementById: getElementById, 
    render: render, 
    getMillis: getMillis, 
    ball: ball, 
    maze: maze, 
    brick: brick, 
    box: box, 
    circle: circle, 
    square: square, 
    handleKeyUp: handleKeyUp, 
    handleKeyDown: handleKeyDown, 
    changeKeyState: changeKeyState, 
    tick: tick, 
    updateGameState: updateGameState, 
    collide: collide, 
    moveBall: moveBall, 
    applyKeyState: applyKeyState, 
    checkCollision: checkCollision, 
    parseMaze: parseMaze, 
    defaultMaze: defaultMaze, 
    defaultGameState: defaultGameState, 
    showBrick: showBrick, 
    eqBrick: eqBrick
};