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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Month;
var jsx_runtime_1 = require("react/jsx-runtime");
var date_utils_1 = require("@wojtekmaj/date-utils");
var Tile_js_1 = __importDefault(require("../Tile.js"));
var dateFormatter_js_1 = require("../shared/dateFormatter.js");
var className = 'react-calendar__year-view__months__month';
function Month(_a) {
    var _b = _a.classes, classes = _b === void 0 ? [] : _b, _c = _a.formatMonth, formatMonth = _c === void 0 ? dateFormatter_js_1.formatMonth : _c, _d = _a.formatMonthYear, formatMonthYear = _d === void 0 ? dateFormatter_js_1.formatMonthYear : _d, otherProps = __rest(_a, ["classes", "formatMonth", "formatMonthYear"]);
    var date = otherProps.date, locale = otherProps.locale;
    return ((0, jsx_runtime_1.jsx)(Tile_js_1.default, __assign({}, otherProps, { classes: __spreadArray(__spreadArray([], classes, true), [className], false), formatAbbr: formatMonthYear, maxDateTransform: date_utils_1.getMonthEnd, minDateTransform: date_utils_1.getMonthStart, view: "year", children: formatMonth(locale, date) })));
}
