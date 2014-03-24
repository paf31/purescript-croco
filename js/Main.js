(function (_ps) {
    "use strict";
    _ps.Main = (function () {
        var module = {};
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
            return _ps.Canvas.fillRect(ctx)({
                x: -1, 
                y: -1, 
                w: 2, 
                h: 2
            });
        };
        var showBrick_show = function (_1) {
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
        };
        var showBrick = function (_1) {
            return {
                show: showBrick_show
            };
        };
        var eqBrick_$eq$eq = function (_1) {
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
                throw "Failed pattern match";
            };
        };
        var eqBrick = function (_1) {
            return {
                $eq$eq: eqBrick_$eq$eq, 
                $div$eq: eqBrick_$div$eq
            };
        };
        var eqBrick_$div$eq = function (x) {
            return function (y) {
                return !_ps.Prelude["=="](eqBrick({}))(x)(y);
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
                                var newStatus = _ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(_ps.Data_Array.isEmpty)(_ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(_ps.Data_Array.filter(_ps.Prelude["=="](eqBrick({}))(Green)))(_ps.Data_Array.map(_ps.Data_Tuple.snd)))(_ps.Data_Map.toList(_5.maze)) ? GameOver : InProgress;
                                var newMaze = _ps.Data_Map["delete"](_ps.Data_Tuple.eqTuple(_ps.Prelude.eqNumber({}))(_ps.Prelude.eqNumber({})))(_ps.Data_Tuple.ordTuple(_ps.Prelude.ordNumber({}))(_ps.Prelude.ordNumber({})))(_6)(_5.maze);
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
            return _ps.Canvas.fillPath(ctx)(_ps.Canvas.arc(ctx)({
                cx: 0.0, 
                cy: 0.0, 
                r: 1.0, 
                start: 0.0, 
                end: 2 * _ps.Math.pi
            }));
        };
        var checkCollision = function (_1) {
            return function (_2) {
                return (function (_4, _5) {
                    return (function () {
                        var nearestBrick = function (_1) {
                            return function (_2) {
                                return function (_3) {
                                    if (_1.ctor === "Main.MovingLeft") {
                                        return _ps.Data_Tuple.Tuple(_ps.Math.floor(_2))(_ps.Math.round(_3));
                                    };
                                    if (_1.ctor === "Main.MovingRight") {
                                        return _ps.Data_Tuple.Tuple(_ps.Math.ceil(_2))(_ps.Math.round(_3));
                                    };
                                    throw "Failed pattern match";
                                };
                            };
                        };
                        var checkCollision$prime = function (_1) {
                            return function (_2) {
                                return (function () {
                                    var dy = _2.values[1] - _5.values[1];
                                    var dx = _2.values[0] - _5.values[0];
                                    var dist = _ps.Math.sqrt(dx * dx + dy * dy);
                                    return (dist >= 0.7) ? _ps.Data_Maybe.Nothing : _ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(_ps.Prelude.applicativeFromMonad(_ps.Data_Maybe.monadMaybe({}))))(_ps.Data_Tuple.Tuple(_2))(_ps.Data_Map.lookup(_ps.Data_Tuple.eqTuple(_ps.Prelude.eqNumber({}))(_ps.Prelude.eqNumber({})))(_ps.Data_Tuple.ordTuple(_ps.Prelude.ordNumber({}))(_ps.Prelude.ordNumber({})))(_2)(_1.maze));
                                })();
                                throw "Failed pattern match";
                            };
                        };
                        return (function (_1) {
                            return _ps.Prelude["<<<"](_ps.Prelude.categoryArr({}))(_ps.Data_Monoid_First.runFirst)(_ps.Data_Foldable.mconcat(_ps.Data_Foldable.foldableArray({}))(_ps.Data_Monoid_First.monoidFirst({})))(_ps.Data_Array.map(_ps.Data_Monoid_First.First)([ checkCollision$prime(_4)(_ps.Data_Tuple.Tuple(_1.values[0])(_1.values[1])), checkCollision$prime(_4)(_ps.Data_Tuple.Tuple(_1.values[0])(_1.values[1] - 1)), checkCollision$prime(_4)(_ps.Data_Tuple.Tuple(_1.values[0])(_1.values[1] + 1)) ]));
                            throw "Failed pattern match";
                        })(nearestBrick(_4.direction)(_5.values[0])(_5.values[1]));
                    })();
                    throw "Failed pattern match";
                })(_1, _2);
            };
        };
        var changeKeyState = function (stateRef) {
            return function (newState) {
                return function __do() {
                    var state = _ps.Control_Monad_Eff_Ref.readRef(stateRef)();
                    return (function (_1) {
                        if (_1.ctor === "Main.InProgress") {
                            return _ps.Control_Monad_Eff_Ref.modifyRef(stateRef)(function (st) {
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
                        return _ps.Prelude["return"](_ps.Control_Monad_Eff.monadEff({}))({});
                        throw "Failed pattern match";
                    })(state.status)();
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
                return _ps.Prelude["return"](_ps.Control_Monad_Eff.monadEff({}))(true);
                throw "Failed pattern match";
            };
        };
        var handleKeyUp = function (_1) {
            return function (_2) {
                return function __do() {
                    changeKeyState(_1)(NoKeyState)();
                    return false;
                };
                throw "Failed pattern match";
            };
        };
        var box = function (ctx) {
            return function (c1) {
                return function (c2) {
                    return function __do() {
                        _ps.Canvas.setFillStyle(c1)(ctx)();
                        square(ctx)();
                        _ps.Canvas.setFillStyle(c2)(ctx)();
                        return _ps.Canvas.withContext(ctx)(function __do() {
                            _ps.Canvas.scale({
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
                    _ps.Data_Traversable["for"](_ps.Prelude.applicativeFromMonad(_ps.Control_Monad_Eff.monadEff({})))(_ps.Data_Traversable.traversableArray({}))(_ps.Data_Map.toList(m))(function (_1) {
                        return _ps.Canvas.withContext(ctx)(function __do() {
                            _ps.Canvas.translate({
                                translateX: (_1.values[0]).values[0], 
                                translateY: (_1.values[0]).values[1]
                            })(ctx)();
                            _ps.Canvas.scale({
                                scaleX: 0.4, 
                                scaleY: 0.4
                            })(ctx)();
                            return brick(ctx)(_1.values[1])();
                        });
                        throw "Failed pattern match";
                    })();
                    return ctx;
                };
            };
        };
        var parseMaze = function (ls) {
            var charToBrick = function (_1) {
                if (_1 === "#") {
                    return _ps.Data_Maybe.Just(White);
                };
                if (_1 === "R") {
                    return _ps.Data_Maybe.Just(Red);
                };
                if (_1 === "G") {
                    return _ps.Data_Maybe.Just(Green);
                };
                return _ps.Data_Maybe.Nothing;
                throw "Failed pattern match";
            };
            var updateMaze = function (r) {
                return function (c) {
                    return function (m) {
                        return function (s) {
                            var brick = charToBrick(_ps.Data_String.charAt(c)(s));
                            return _ps.Data_Maybe.maybe(m)(function (b) {
                                return _ps.Data_Map.insert(_ps.Data_Tuple.eqTuple(_ps.Prelude.eqNumber({}))(_ps.Prelude.eqNumber({})))(_ps.Data_Tuple.ordTuple(_ps.Prelude.ordNumber({}))(_ps.Prelude.ordNumber({})))(_ps.Data_Tuple.Tuple(c)(r))(b)(m);
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
                                if (c >= _ps.Data_String.lengthS(s)) {
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
                                throw "Failed pattern match";
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
            return go(0)(_ps.Data_Map.empty)(ls);
        };
        var defaultMaze = parseMaze([ "######################################################################", "#G                  #R         G#GG   RRR                            #", "#G       R#R        #          G#GG         #########                #", "#G        #         #          G#############RGG    #########        #", "#G        #                                                          #", "#G        #         #R         G#############       #########        #", "#G       R#R        #          G#GG         #########                #", "#G                  #          G#GG   RRR                            #", "#################################GG###################################", "#G                             G#GG                                 R#", "#G       R#R        #          G#RRRRRRRRRR                ###########", "#G        #G       G#                                            GGGG#", "#G        #        R#          G#RRRRRRRRRR                ###########", "#G       R#G       G#          G#                                GGGG#", "#R                             G#GGGGGG                          GGGG#", "###########################################RRRRRRRRRRRRRRRR###########" ]);
        var defaultGameState = {
            lastTime: _ps.Data_Maybe.Nothing, 
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
                    return _ps.Canvas.withContext(ctx)(function __do() {
                        _ps.Canvas.translate({
                            translateX: x, 
                            translateY: y
                        })(ctx)();
                        _ps.Canvas.setFillStyle("#0080ff")(ctx)();
                        _ps.Canvas.scale({
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
                            return _ps.Data_Tuple.Tuple(_ps.Math.round(x))(_ps.Math.floor(y));
                        };
                    };
                    var location = nearestBrick(state.posX)(state.posY - d);
                    var brick = _ps.Data_Map.lookup(_ps.Data_Tuple.eqTuple(_ps.Prelude.eqNumber({}))(_ps.Prelude.eqNumber({})))(_ps.Data_Tuple.ordTuple(_ps.Prelude.ordNumber({}))(_ps.Prelude.ordNumber({})))(location)(state.maze);
                    return _ps.Prelude["=="](_ps.Data_Maybe.eqMaybe(eqBrick({})))(brick)(_ps.Data_Maybe.Just(White)) ? state.posY : state.posY - d;
                };
                if (state.keyState.ctor === "Main.MovingDown") {
                    var nearestBrick = function (x) {
                        return function (y) {
                            return _ps.Data_Tuple.Tuple(_ps.Math.round(x))(_ps.Math.ceil(y));
                        };
                    };
                    var location = nearestBrick(state.posX)(state.posY + d);
                    var brick = _ps.Data_Map.lookup(_ps.Data_Tuple.eqTuple(_ps.Prelude.eqNumber({}))(_ps.Prelude.eqNumber({})))(_ps.Data_Tuple.ordTuple(_ps.Prelude.ordNumber({}))(_ps.Prelude.ordNumber({})))(location)(state.maze);
                    return _ps.Prelude["=="](_ps.Data_Maybe.eqMaybe(eqBrick({})))(brick)(_ps.Data_Maybe.Just(White)) ? state.posY : state.posY + d;
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
                        return _ps.Data_Tuple.Tuple(state.posX - d)(newY);
                    };
                    if (_1.ctor === "Main.MovingRight") {
                        return _ps.Data_Tuple.Tuple(state.posX + d)(newY);
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
                            return collide(state)((_1.values[0]).values[0])(_ps.Data_Tuple.Tuple(newX)(_3))((_1.values[0]).values[1]);
                        };
                        throw "Failed pattern match";
                    })(checkCollision(state)(p));
                    throw "Failed pattern match";
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
                    var state = _ps.Control_Monad_Eff_Ref.readRef(stateRef)();
                    var time = getMillis();
                    return (function (_1) {
                        var lastTime = _1;
                        return (function (_1) {
                            var elapsedTime = _1;
                            return (function (_1) {
                                var state$prime = _1;
                                return (function (_3) {
                                    return function __do() {
                                        _ps.Control_Monad_Eff_Ref.writeRef(stateRef)(_3)();
                                        _ps.Canvas.setFillStyle("#000000")(ctx)();
                                        _ps.Canvas.clearRect(ctx)({
                                            x: 0, 
                                            y: 0, 
                                            w: 200, 
                                            h: 200
                                        })();
                                        _ps.Canvas.withContext(ctx)(function __do() {
                                            _ps.Canvas.translate({
                                                translateX: 100, 
                                                translateY: 100
                                            })(ctx)();
                                            _ps.Canvas.scale({
                                                scaleX: 20, 
                                                scaleY: 20
                                            })(ctx)();
                                            _ps.Canvas.translate({
                                                translateX: -_3.posX, 
                                                translateY: -_3.posY
                                            })(ctx)();
                                            maze(ctx)(_3.maze)();
                                            return ball(ctx)(_3.posX)(_3.posY)();
                                        })();
                                        return {};
                                    };
                                    throw "Failed pattern match";
                                })((function () {
                                    var _1 = {};
                                    for (var _2 in state$prime) {
                                        if (state$prime.hasOwnProperty(_2)) {
                                            _1[_2] = state$prime[_2];
                                        };
                                    };
                                    _1.lastTime = _ps.Data_Maybe.Just(time);
                                    return _1;
                                })());
                                throw "Failed pattern match";
                            })(tick(state)(elapsedTime));
                            throw "Failed pattern match";
                        })(_ps.Data_Maybe.maybe(0)(_ps.Prelude.id(_ps.Prelude.categoryArr({})))(_ps.Prelude["<$>"](_ps.Prelude.functorFromApplicative(_ps.Prelude.applicativeFromMonad(_ps.Data_Maybe.monadMaybe({}))))(_ps.Prelude["-"](_ps.Prelude.numNumber({}))(time))(lastTime)));
                        throw "Failed pattern match";
                    })(state.lastTime)();
                };
            };
        };
        var main = function __do() {
            var stateRef = _ps.Control_Monad_Eff_Ref.newRef(defaultGameState)();
            onKeyDown(handleKeyDown(stateRef))();
            onKeyUp(handleKeyUp(stateRef))();
            var canvas = getElementById("canvas")();
            var ctx = _ps.Canvas.getContext2D(canvas)();
            return setInterval(10)(render(ctx)(stateRef))();
        };
        module.MovingUp = MovingUp;
        module.MovingDown = MovingDown;
        module.NoKeyState = NoKeyState;
        module.MovingLeft = MovingLeft;
        module.MovingRight = MovingRight;
        module.InProgress = InProgress;
        module.GameOver = GameOver;
        module.White = White;
        module.Green = Green;
        module.Red = Red;
        module.main = main;
        module.onKeyUp = onKeyUp;
        module.onKeyDown = onKeyDown;
        module.setInterval = setInterval;
        module.getElementById = getElementById;
        module.render = render;
        module.getMillis = getMillis;
        module.ball = ball;
        module.maze = maze;
        module.brick = brick;
        module.box = box;
        module.circle = circle;
        module.square = square;
        module.handleKeyUp = handleKeyUp;
        module.handleKeyDown = handleKeyDown;
        module.changeKeyState = changeKeyState;
        module.tick = tick;
        module.updateGameState = updateGameState;
        module.collide = collide;
        module.moveBall = moveBall;
        module.applyKeyState = applyKeyState;
        module.checkCollision = checkCollision;
        module.parseMaze = parseMaze;
        module.defaultMaze = defaultMaze;
        module.defaultGameState = defaultGameState;
        module.showBrick = showBrick;
        module.eqBrick = eqBrick;
        return module;
    })();
})((typeof module !== "undefined" && module.exports) ? module.exports : (typeof window !== "undefined") ? window.PS = window.PS || {} : (function () {
    throw "PureScript doesn't know how to export modules in the current environment";
})());