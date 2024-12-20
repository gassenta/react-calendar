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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from 'clsx';
import Days from './MonthView/Days.js';
import Weekdays from './MonthView/Weekdays.js';
import WeekNumbers from './MonthView/WeekNumbers.js';
import { CALENDAR_TYPES, CALENDAR_TYPE_LOCALES } from './shared/const.js';
function getCalendarTypeFromLocale(locale) {
    if (locale) {
        for (var _i = 0, _a = Object.entries(CALENDAR_TYPE_LOCALES); _i < _a.length; _i++) {
            var _b = _a[_i], calendarType = _b[0], locales = _b[1];
            if (locales.includes(locale)) {
                return calendarType;
            }
        }
    }
    return CALENDAR_TYPES.ISO_8601;
}
/**
 * Displays a given month.
 */
export default function MonthView(props) {
    var activeStartDate = props.activeStartDate, locale = props.locale, onMouseLeave = props.onMouseLeave, showFixedNumberOfWeeks = props.showFixedNumberOfWeeks;
    var _a = props.calendarType, calendarType = _a === void 0 ? getCalendarTypeFromLocale(locale) : _a, formatShortWeekday = props.formatShortWeekday, formatWeekday = props.formatWeekday, onClickWeekNumber = props.onClickWeekNumber, showWeekNumbers = props.showWeekNumbers, now = props.now, childProps = __rest(props, ["calendarType", "formatShortWeekday", "formatWeekday", "onClickWeekNumber", "showWeekNumbers", "now"]);
    function renderWeekdays() {
        return (_jsx(Weekdays, { calendarType: calendarType, formatShortWeekday: formatShortWeekday, formatWeekday: formatWeekday, locale: locale, onMouseLeave: onMouseLeave, now: now }));
    }
    function renderWeekNumbers() {
        if (!showWeekNumbers) {
            return null;
        }
        return (_jsx(WeekNumbers, { activeStartDate: activeStartDate, calendarType: calendarType, onClickWeekNumber: onClickWeekNumber, onMouseLeave: onMouseLeave, showFixedNumberOfWeeks: showFixedNumberOfWeeks }));
    }
    function renderDays() {
        return _jsx(Days, __assign({ calendarType: calendarType, now: now }, childProps));
    }
    var className = 'react-calendar__month-view';
    return (_jsx("div", { className: clsx(className, showWeekNumbers ? "".concat(className, "--weekNumbers") : ''), children: _jsxs("div", { style: {
                display: 'flex',
                alignItems: 'flex-end',
            }, children: [renderWeekNumbers(), _jsxs("div", { style: {
                        flexGrow: 1,
                        width: '100%',
                    }, children: [renderWeekdays(), renderDays()] })] }) }));
}
