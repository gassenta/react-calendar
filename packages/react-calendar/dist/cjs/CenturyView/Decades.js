"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Decades;
var jsx_runtime_1 = require("react/jsx-runtime");
var date_utils_1 = require("@wojtekmaj/date-utils");
var TileGroup_js_1 = __importDefault(require("../TileGroup.js"));
var Decade_js_1 = __importDefault(require("./Decade.js"));
var dates_js_1 = require("../shared/dates.js");
function Decades(props) {
    var activeStartDate = props.activeStartDate, hover = props.hover, showNeighboringCentury = props.showNeighboringCentury, value = props.value, valueType = props.valueType, otherProps = __rest(props, ["activeStartDate", "hover", "showNeighboringCentury", "value", "valueType"]);
    var start = (0, dates_js_1.getBeginOfCenturyYear)(activeStartDate);
    var end = start + (showNeighboringCentury ? 119 : 99);
    return ((0, jsx_runtime_1.jsx)(TileGroup_js_1.default, { className: "react-calendar__century-view__decades", dateTransform: date_utils_1.getDecadeStart, dateType: "decade", end: end, hover: hover, renderTile: function (_a) {
            var date = _a.date, otherTileProps = __rest(_a, ["date"]);
            return ((0, jsx_runtime_1.jsx)(Decade_js_1.default, __assign({}, otherProps, otherTileProps, { activeStartDate: activeStartDate, currentCentury: start, date: date }), date.getTime()));
        }, start: start, step: 10, value: value, valueType: valueType }));
}
