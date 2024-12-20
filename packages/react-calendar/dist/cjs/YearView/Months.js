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
exports.default = Months;
var jsx_runtime_1 = require("react/jsx-runtime");
var date_utils_1 = require("@wojtekmaj/date-utils");
var TileGroup_js_1 = __importDefault(require("../TileGroup.js"));
var Month_js_1 = __importDefault(require("./Month.js"));
function Months(props) {
    var activeStartDate = props.activeStartDate, hover = props.hover, value = props.value, valueType = props.valueType, now = props.now, otherProps = __rest(props, ["activeStartDate", "hover", "value", "valueType", "now"]);
    var start = 0;
    var end = 11;
    var year = (0, date_utils_1.getYear)(activeStartDate);
    return ((0, jsx_runtime_1.jsx)(TileGroup_js_1.default, { className: "react-calendar__year-view__months", dateTransform: function (monthIndex) {
            var date = new Date();
            date.setFullYear(year, monthIndex, 1);
            return (0, date_utils_1.getMonthStart)(date);
        }, dateType: "month", end: end, hover: hover, renderTile: function (_a) {
            var date = _a.date, otherTileProps = __rest(_a, ["date"]);
            return ((0, jsx_runtime_1.jsx)(Month_js_1.default, __assign({}, otherProps, otherTileProps, { activeStartDate: activeStartDate, date: date }), date.getTime()));
        }, start: start, value: value, valueType: valueType, now: now }));
}
