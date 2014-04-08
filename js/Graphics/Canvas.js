(function (_ps) {
    "use strict";
    _ps.Graphics_Canvas = (function () {
        var module = {};
        function getContext2D(c) {  return function() {    return c.getContext('2d');  };};
        function setLineWidth(width) {  return function(ctx) {    return function() {      ctx.lineWidth = width;      return ctx;    };  };};
        function setFillStyle(style) {  return function(ctx) {    return function() {      ctx.fillStyle = style;      return ctx;    };  };};
        function setStrokeStyle(style) {  return function(ctx) {    return function() {      ctx.strokeStyle = style;      return ctx;    };  };};
        function setShadowColor(color) {  return function(ctx) {    return function() {      ctx.shadowColor = color;      return ctx;    };  };};
        function setShadowBlur(blur) {  return function(ctx) {    return function() {      ctx.shadowBlur = blur;      return ctx;    };  };};
        function setShadowOffsetX(offset) {  return function(ctx) {    return function() {      ctx.shadowOffsetX = offsetX;      return ctx;    };  };};
        function setShadowOffsetY(offsetY) {  return function(ctx) {    return function() {      ctx.shadowOffsetY = offsetY;      return ctx;    };  };};
        function beginPath(ctx) {  return function() {    ctx.beginPath();    return ctx;  };};
        function stroke(ctx) {  return function() {    ctx.stroke();    return ctx;  };};
        function fill(ctx) {  return function() {    ctx.fill();    return ctx;  };};
        function clip(ctx) {  return function() {    ctx.clip();    return ctx;  };};
        function lineTo(ctx) {  return function(x) {    return function(y) {      return function() {        ctx.lineTo(x, y);        return ctx;      };    };  };};
        function moveTo(ctx) {  return function(x) {    return function(y) {      return function() {        ctx.moveTo(x, y);        return ctx;      };    };  };};
        function arc(ctx) {  return function(a) {    return function() {      ctx.arc(a.cx, a.cy, a.r, a.start, a.end);      return ctx;    };  };};
        function rect(ctx) {  return function(r) {    return function() {      ctx.rect(r.x, r.y, r.w, r.h);      return ctx;    };  };};
        function fillRect(ctx) {  return function(r) {    return function() {      ctx.fillRect(r.x, r.y, r.w, r.h);      return ctx;    };  };};
        function strokeRect(ctx) {  return function(r) {    return function() {      ctx.strokeRect(r.x, r.y, r.w, r.h);      return ctx;    };  };};
        function clearRect(ctx) {  return function(r) {    return function() {      ctx.clearRect(r.x, r.y, r.w, r.h);      return ctx;    };  };};
        function scale(t) {  return function(ctx) {    return function() {      ctx.scale(t.scaleX, t.scaleY);      return ctx;    };  };};
        function rotate(angle) {  return function(ctx) {    return function() {      ctx.rotate(angle);      return ctx;    };  };};
        function translate(t) {  return function(ctx) {    return function() {      ctx.translate(t.translateX, t.translateY);      return ctx;    };  };};
        function transform(t) {  return function(ctx) {    return function() {      ctx.transform(t.m11, t.m12, t.m21, t.m22, t.m31, t.m32);      return ctx;    };  };};
        function save(ctx) {  return function() {    ctx.save();    return ctx;  };};
        function restore(ctx) {  return function() {    ctx.restore();    return ctx;  };};
        var withContext = function (ctx) {
            return function (action) {
                return function __do() {
                    save(ctx)();
                    var _1 = action();
                    restore(ctx)();
                    return _1;
                };
            };
        };
        var strokePath = function (ctx) {
            return function (path) {
                return function __do() {
                    beginPath(ctx)();
                    var _1 = path();
                    stroke(ctx)();
                    return _1;
                };
            };
        };
        var fillPath = function (ctx) {
            return function (path) {
                return function __do() {
                    beginPath(ctx)();
                    var _1 = path();
                    fill(ctx)();
                    return _1;
                };
            };
        };
        module.withContext = withContext;
        module.restore = restore;
        module.save = save;
        module.transform = transform;
        module.translate = translate;
        module.rotate = rotate;
        module.scale = scale;
        module.clearRect = clearRect;
        module.strokeRect = strokeRect;
        module.fillRect = fillRect;
        module.rect = rect;
        module.arc = arc;
        module.fillPath = fillPath;
        module.strokePath = strokePath;
        module.moveTo = moveTo;
        module.lineTo = lineTo;
        module.clip = clip;
        module.fill = fill;
        module.stroke = stroke;
        module.beginPath = beginPath;
        module.setShadowOffsetY = setShadowOffsetY;
        module.setShadowOffsetX = setShadowOffsetX;
        module.setShadowBlur = setShadowBlur;
        module.setShadowColor = setShadowColor;
        module.setStrokeStyle = setStrokeStyle;
        module.setFillStyle = setFillStyle;
        module.setLineWidth = setLineWidth;
        module.getContext2D = getContext2D;
        return module;
    })();
})((typeof module !== "undefined" && module.exports) ? module.exports : (typeof window !== "undefined") ? window.PS = window.PS || {} : (function () {
    throw "PureScript doesn't know how to export modules in the current environment";
})());