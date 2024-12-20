"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TileGroup;
var jsx_runtime_1 = require("react/jsx-runtime");
var Flex_js_1 = __importDefault(require("./Flex.js"));
var utils_js_1 = require("./shared/utils.js");
function TileGroup(_a) {
    var className = _a.className, _b = _a.count, count = _b === void 0 ? 3 : _b, dateTransform = _a.dateTransform, dateType = _a.dateType, end = _a.end, hover = _a.hover, offset = _a.offset, renderTile = _a.renderTile, start = _a.start, _c = _a.step, step = _c === void 0 ? 1 : _c, value = _a.value, valueType = _a.valueType, now = _a.now;
    var tiles = [];
    for (var point = start; point <= end; point += step) {
        var date = dateTransform(point);
        tiles.push(renderTile({
            classes: (0, utils_js_1.getTileClasses)({
                date: date,
                dateType: dateType,
                hover: hover,
                value: value,
                valueType: valueType,
                now: now,
            }),
            date: date,
        }));
    }
    return ((0, jsx_runtime_1.jsx)(Flex_js_1.default, { className: className, count: count, offset: offset, wrap: true, children: tiles }));
}
