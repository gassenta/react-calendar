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
import { jsx as _jsx } from "react/jsx-runtime";
import { getYearStart } from '@wojtekmaj/date-utils';
import TileGroup from '../TileGroup.js';
import Year from './Year.js';
import { getBeginOfDecadeYear } from '../shared/dates.js';
export default function Years(props) {
    var activeStartDate = props.activeStartDate, hover = props.hover, showNeighboringDecade = props.showNeighboringDecade, value = props.value, valueType = props.valueType, now = props.now, otherProps = __rest(props, ["activeStartDate", "hover", "showNeighboringDecade", "value", "valueType", "now"]);
    var start = getBeginOfDecadeYear(activeStartDate);
    var end = start + (showNeighboringDecade ? 11 : 9);
    return (_jsx(TileGroup, { className: "react-calendar__decade-view__years", dateTransform: getYearStart, dateType: "year", end: end, hover: hover, renderTile: function (_a) {
            var date = _a.date, otherTileProps = __rest(_a, ["date"]);
            return (_jsx(Year, __assign({}, otherProps, otherTileProps, { activeStartDate: activeStartDate, currentDecade: start, date: date }), date.getTime()));
        }, start: start, value: value, valueType: valueType, now: now }));
}
