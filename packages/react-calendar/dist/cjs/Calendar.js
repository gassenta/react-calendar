"use strict";
'use client';
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var clsx_1 = __importDefault(require("clsx"));
var Navigation_js_1 = __importDefault(require("./Calendar/Navigation.js"));
var CenturyView_js_1 = __importDefault(require("./CenturyView.js"));
var DecadeView_js_1 = __importDefault(require("./DecadeView.js"));
var YearView_js_1 = __importDefault(require("./YearView.js"));
var MonthView_js_1 = __importDefault(require("./MonthView.js"));
var dates_js_1 = require("./shared/dates.js");
var utils_js_1 = require("./shared/utils.js");
var baseClassName = 'react-calendar';
var allViews = ['century', 'decade', 'year', 'month'];
var allValueTypes = ['decade', 'year', 'month', 'day'];
var defaultMinDate = new Date();
defaultMinDate.setFullYear(1, 0, 1);
defaultMinDate.setHours(0, 0, 0, 0);
var defaultMaxDate = new Date(8.64e15);
function toDate(value) {
    if (value instanceof Date) {
        return value;
    }
    return new Date(value);
}
/**
 * Returns views array with disallowed values cut off.
 */
function getLimitedViews(minDetail, maxDetail) {
    return allViews.slice(allViews.indexOf(minDetail), allViews.indexOf(maxDetail) + 1);
}
/**
 * Determines whether a given view is allowed with currently applied settings.
 */
function isViewAllowed(view, minDetail, maxDetail) {
    var views = getLimitedViews(minDetail, maxDetail);
    return views.indexOf(view) !== -1;
}
/**
 * Gets either provided view if allowed by minDetail and maxDetail, or gets
 * the default view if not allowed.
 */
function getView(view, minDetail, maxDetail) {
    if (!view) {
        return maxDetail;
    }
    if (isViewAllowed(view, minDetail, maxDetail)) {
        return view;
    }
    return maxDetail;
}
/**
 * Returns value type that can be returned with currently applied settings.
 */
function getValueType(view) {
    var index = allViews.indexOf(view);
    return allValueTypes[index];
}
function getValue(value, index) {
    var rawValue = Array.isArray(value) ? value[index] : value;
    if (!rawValue) {
        return null;
    }
    var valueDate = toDate(rawValue);
    if (Number.isNaN(valueDate.getTime())) {
        throw new Error("Invalid date: ".concat(value));
    }
    return valueDate;
}
function getDetailValue(_a, index) {
    var value = _a.value, minDate = _a.minDate, maxDate = _a.maxDate, maxDetail = _a.maxDetail;
    var valuePiece = getValue(value, index);
    if (!valuePiece) {
        return null;
    }
    var valueType = getValueType(maxDetail);
    var detailValueFrom = (function () {
        switch (index) {
            case 0:
                return (0, dates_js_1.getBegin)(valueType, valuePiece);
            case 1:
                return (0, dates_js_1.getEnd)(valueType, valuePiece);
            default:
                throw new Error("Invalid index value: ".concat(index));
        }
    })();
    return (0, utils_js_1.between)(detailValueFrom, minDate, maxDate);
}
var getDetailValueFrom = function (args) { return getDetailValue(args, 0); };
var getDetailValueTo = function (args) { return getDetailValue(args, 1); };
var getDetailValueArray = function (args) {
    return [getDetailValueFrom, getDetailValueTo].map(function (fn) { return fn(args); });
};
function getActiveStartDate(_a) {
    var maxDate = _a.maxDate, maxDetail = _a.maxDetail, minDate = _a.minDate, minDetail = _a.minDetail, value = _a.value, view = _a.view;
    var rangeType = getView(view, minDetail, maxDetail);
    var valueFrom = getDetailValueFrom({
        value: value,
        minDate: minDate,
        maxDate: maxDate,
        maxDetail: maxDetail,
    }) || new Date();
    return (0, dates_js_1.getBegin)(rangeType, valueFrom);
}
function getInitialActiveStartDate(_a) {
    var activeStartDate = _a.activeStartDate, defaultActiveStartDate = _a.defaultActiveStartDate, defaultValue = _a.defaultValue, defaultView = _a.defaultView, maxDate = _a.maxDate, maxDetail = _a.maxDetail, minDate = _a.minDate, minDetail = _a.minDetail, value = _a.value, view = _a.view;
    var rangeType = getView(view, minDetail, maxDetail);
    var valueFrom = activeStartDate || defaultActiveStartDate;
    if (valueFrom) {
        return (0, dates_js_1.getBegin)(rangeType, valueFrom);
    }
    return getActiveStartDate({
        maxDate: maxDate,
        maxDetail: maxDetail,
        minDate: minDate,
        minDetail: minDetail,
        value: value || defaultValue,
        view: view || defaultView,
    });
}
function getIsSingleValue(value) {
    return value && (!Array.isArray(value) || value.length === 1);
}
function areDatesEqual(date1, date2) {
    return date1 instanceof Date && date2 instanceof Date && date1.getTime() === date2.getTime();
}
var Calendar = (0, react_1.forwardRef)(function Calendar(props, ref) {
    var activeStartDateProps = props.activeStartDate, allowPartialRange = props.allowPartialRange, calendarType = props.calendarType, className = props.className, defaultActiveStartDate = props.defaultActiveStartDate, defaultValue = props.defaultValue, defaultView = props.defaultView, formatDay = props.formatDay, formatLongDate = props.formatLongDate, formatMonth = props.formatMonth, formatMonthYear = props.formatMonthYear, formatShortWeekday = props.formatShortWeekday, formatWeekday = props.formatWeekday, formatYear = props.formatYear, _a = props.goToRangeStartOnSelect, goToRangeStartOnSelect = _a === void 0 ? true : _a, inputRef = props.inputRef, locale = props.locale, _b = props.maxDate, maxDate = _b === void 0 ? defaultMaxDate : _b, _c = props.maxDetail, maxDetail = _c === void 0 ? 'month' : _c, _d = props.minDate, minDate = _d === void 0 ? defaultMinDate : _d, _e = props.minDetail, minDetail = _e === void 0 ? 'century' : _e, navigationAriaLabel = props.navigationAriaLabel, navigationAriaLive = props.navigationAriaLive, navigationLabel = props.navigationLabel, next2AriaLabel = props.next2AriaLabel, next2Label = props.next2Label, nextAriaLabel = props.nextAriaLabel, nextLabel = props.nextLabel, onActiveStartDateChange = props.onActiveStartDateChange, onChangeProps = props.onChange, onClickDay = props.onClickDay, onClickDecade = props.onClickDecade, onClickMonth = props.onClickMonth, onClickWeekNumber = props.onClickWeekNumber, onClickYear = props.onClickYear, onDrillDown = props.onDrillDown, onDrillUp = props.onDrillUp, onViewChange = props.onViewChange, prev2AriaLabel = props.prev2AriaLabel, prev2Label = props.prev2Label, prevAriaLabel = props.prevAriaLabel, prevLabel = props.prevLabel, _f = props.returnValue, returnValue = _f === void 0 ? 'start' : _f, selectRange = props.selectRange, showDoubleView = props.showDoubleView, showFixedNumberOfWeeks = props.showFixedNumberOfWeeks, _g = props.showNavigation, showNavigation = _g === void 0 ? true : _g, showNeighboringCentury = props.showNeighboringCentury, showNeighboringDecade = props.showNeighboringDecade, _h = props.showNeighboringMonth, showNeighboringMonth = _h === void 0 ? true : _h, showWeekNumbers = props.showWeekNumbers, tileClassName = props.tileClassName, tileContent = props.tileContent, tileDisabled = props.tileDisabled, valueProps = props.value, viewProps = props.view, now = props.now;
    var _j = (0, react_1.useState)(defaultActiveStartDate), activeStartDateState = _j[0], setActiveStartDateState = _j[1];
    var _k = (0, react_1.useState)(null), hoverState = _k[0], setHoverState = _k[1];
    var _l = (0, react_1.useState)(Array.isArray(defaultValue)
        ? defaultValue.map(function (el) { return (el !== null ? toDate(el) : null); })
        : defaultValue !== null && defaultValue !== undefined
            ? toDate(defaultValue)
            : null), valueState = _l[0], setValueState = _l[1];
    var _m = (0, react_1.useState)(defaultView), viewState = _m[0], setViewState = _m[1];
    var activeStartDate = activeStartDateProps ||
        activeStartDateState ||
        getInitialActiveStartDate({
            activeStartDate: activeStartDateProps,
            defaultActiveStartDate: defaultActiveStartDate,
            defaultValue: defaultValue,
            defaultView: defaultView,
            maxDate: maxDate,
            maxDetail: maxDetail,
            minDate: minDate,
            minDetail: minDetail,
            value: valueProps,
            view: viewProps,
        });
    var value = (function () {
        var rawValue = (function () {
            // In the middle of range selection, use value from state
            if (selectRange && getIsSingleValue(valueState)) {
                return valueState;
            }
            return valueProps !== undefined ? valueProps : valueState;
        })();
        if (!rawValue) {
            return null;
        }
        return Array.isArray(rawValue)
            ? rawValue.map(function (el) { return (el !== null ? toDate(el) : null); })
            : rawValue !== null
                ? toDate(rawValue)
                : null;
    })();
    var valueType = getValueType(maxDetail);
    var view = getView(viewProps || viewState, minDetail, maxDetail);
    var views = getLimitedViews(minDetail, maxDetail);
    var hover = selectRange ? hoverState : null;
    var drillDownAvailable = views.indexOf(view) < views.length - 1;
    var drillUpAvailable = views.indexOf(view) > 0;
    var getProcessedValue = (0, react_1.useCallback)(function (value) {
        var processFunction = (function () {
            switch (returnValue) {
                case 'start':
                    return getDetailValueFrom;
                case 'end':
                    return getDetailValueTo;
                case 'range':
                    return getDetailValueArray;
                default:
                    throw new Error('Invalid returnValue.');
            }
        })();
        return processFunction({
            maxDate: maxDate,
            maxDetail: maxDetail,
            minDate: minDate,
            value: value,
        });
    }, [maxDate, maxDetail, minDate, returnValue]);
    var setActiveStartDate = (0, react_1.useCallback)(function (nextActiveStartDate, action) {
        setActiveStartDateState(nextActiveStartDate);
        var args = {
            action: action,
            activeStartDate: nextActiveStartDate,
            value: value,
            view: view,
        };
        if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) {
            onActiveStartDateChange(args);
        }
    }, [activeStartDate, onActiveStartDateChange, value, view]);
    var onClickTile = (0, react_1.useCallback)(function (value, event) {
        var callback = (function () {
            switch (view) {
                case 'century':
                    return onClickDecade;
                case 'decade':
                    return onClickYear;
                case 'year':
                    return onClickMonth;
                case 'month':
                    return onClickDay;
                default:
                    throw new Error("Invalid view: ".concat(view, "."));
            }
        })();
        if (callback)
            callback(value, event);
    }, [onClickDay, onClickDecade, onClickMonth, onClickYear, view]);
    var drillDown = (0, react_1.useCallback)(function (nextActiveStartDate, event) {
        if (!drillDownAvailable) {
            return;
        }
        onClickTile(nextActiveStartDate, event);
        var nextView = views[views.indexOf(view) + 1];
        if (!nextView) {
            throw new Error('Attempted to drill down from the lowest view.');
        }
        setActiveStartDateState(nextActiveStartDate);
        setViewState(nextView);
        var args = {
            action: 'drillDown',
            activeStartDate: nextActiveStartDate,
            value: value,
            view: nextView,
        };
        if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) {
            onActiveStartDateChange(args);
        }
        if (onViewChange && view !== nextView) {
            onViewChange(args);
        }
        if (onDrillDown) {
            onDrillDown(args);
        }
    }, [
        activeStartDate,
        drillDownAvailable,
        onActiveStartDateChange,
        onClickTile,
        onDrillDown,
        onViewChange,
        value,
        view,
        views,
    ]);
    var drillUp = (0, react_1.useCallback)(function () {
        if (!drillUpAvailable) {
            return;
        }
        var nextView = views[views.indexOf(view) - 1];
        if (!nextView) {
            throw new Error('Attempted to drill up from the highest view.');
        }
        var nextActiveStartDate = (0, dates_js_1.getBegin)(nextView, activeStartDate);
        setActiveStartDateState(nextActiveStartDate);
        setViewState(nextView);
        var args = {
            action: 'drillUp',
            activeStartDate: nextActiveStartDate,
            value: value,
            view: nextView,
        };
        if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) {
            onActiveStartDateChange(args);
        }
        if (onViewChange && view !== nextView) {
            onViewChange(args);
        }
        if (onDrillUp) {
            onDrillUp(args);
        }
    }, [
        activeStartDate,
        drillUpAvailable,
        onActiveStartDateChange,
        onDrillUp,
        onViewChange,
        value,
        view,
        views,
    ]);
    var onChange = (0, react_1.useCallback)(function (rawNextValue, event) {
        var previousValue = value;
        onClickTile(rawNextValue, event);
        var isFirstValueInRange = selectRange && !getIsSingleValue(previousValue);
        var nextValue;
        if (selectRange) {
            // Range selection turned on
            if (isFirstValueInRange) {
                // Value has 0 or 2 elements - either way we're starting a new array
                // First value
                nextValue = (0, dates_js_1.getBegin)(valueType, rawNextValue);
            }
            else {
                if (!previousValue) {
                    throw new Error('previousValue is required');
                }
                if (Array.isArray(previousValue)) {
                    throw new Error('previousValue must not be an array');
                }
                // Second value
                nextValue = (0, dates_js_1.getValueRange)(valueType, previousValue, rawNextValue);
            }
        }
        else {
            // Range selection turned off
            nextValue = getProcessedValue(rawNextValue);
        }
        var nextActiveStartDate = 
        // Range selection turned off
        !selectRange ||
            // Range selection turned on, first value
            isFirstValueInRange ||
            // Range selection turned on, second value, goToRangeStartOnSelect toggled on
            goToRangeStartOnSelect
            ? getActiveStartDate({
                maxDate: maxDate,
                maxDetail: maxDetail,
                minDate: minDate,
                minDetail: minDetail,
                value: nextValue,
                view: view,
            })
            : null;
        event.persist();
        setActiveStartDateState(nextActiveStartDate);
        setValueState(nextValue);
        var args = {
            action: 'onChange',
            activeStartDate: nextActiveStartDate,
            value: nextValue,
            view: view,
        };
        if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) {
            onActiveStartDateChange(args);
        }
        if (onChangeProps) {
            if (selectRange) {
                var isSingleValue = getIsSingleValue(nextValue);
                if (!isSingleValue) {
                    onChangeProps(nextValue || null, event);
                }
                else if (allowPartialRange) {
                    if (Array.isArray(nextValue)) {
                        throw new Error('value must not be an array');
                    }
                    onChangeProps([nextValue || null, null], event);
                }
            }
            else {
                onChangeProps(nextValue || null, event);
            }
        }
    }, [
        activeStartDate,
        allowPartialRange,
        getProcessedValue,
        goToRangeStartOnSelect,
        maxDate,
        maxDetail,
        minDate,
        minDetail,
        onActiveStartDateChange,
        onChangeProps,
        onClickTile,
        selectRange,
        value,
        valueType,
        view,
    ]);
    function onMouseOver(nextHover) {
        setHoverState(nextHover);
    }
    function onMouseLeave() {
        setHoverState(null);
    }
    (0, react_1.useImperativeHandle)(ref, function () { return ({
        activeStartDate: activeStartDate,
        drillDown: drillDown,
        drillUp: drillUp,
        onChange: onChange,
        setActiveStartDate: setActiveStartDate,
        value: value,
        view: view,
    }); }, [activeStartDate, drillDown, drillUp, onChange, setActiveStartDate, value, view]);
    function renderContent(next) {
        var currentActiveStartDate = next
            ? (0, dates_js_1.getBeginNext)(view, activeStartDate)
            : (0, dates_js_1.getBegin)(view, activeStartDate);
        var onClick = drillDownAvailable ? drillDown : onChange;
        var commonProps = {
            activeStartDate: currentActiveStartDate,
            hover: hover,
            locale: locale,
            maxDate: maxDate,
            minDate: minDate,
            onClick: onClick,
            onMouseOver: selectRange ? onMouseOver : undefined,
            tileClassName: tileClassName,
            tileContent: tileContent,
            tileDisabled: tileDisabled,
            value: value,
            valueType: valueType,
            now: now,
        };
        switch (view) {
            case 'century': {
                return ((0, jsx_runtime_1.jsx)(CenturyView_js_1.default, __assign({ formatYear: formatYear, showNeighboringCentury: showNeighboringCentury }, commonProps)));
            }
            case 'decade': {
                return ((0, jsx_runtime_1.jsx)(DecadeView_js_1.default, __assign({ formatYear: formatYear, showNeighboringDecade: showNeighboringDecade }, commonProps)));
            }
            case 'year': {
                return ((0, jsx_runtime_1.jsx)(YearView_js_1.default, __assign({ formatMonth: formatMonth, formatMonthYear: formatMonthYear }, commonProps)));
            }
            case 'month': {
                return ((0, jsx_runtime_1.jsx)(MonthView_js_1.default, __assign({ calendarType: calendarType, formatDay: formatDay, formatLongDate: formatLongDate, formatShortWeekday: formatShortWeekday, formatWeekday: formatWeekday, onClickWeekNumber: onClickWeekNumber, onMouseLeave: selectRange ? onMouseLeave : undefined, showFixedNumberOfWeeks: typeof showFixedNumberOfWeeks !== 'undefined'
                        ? showFixedNumberOfWeeks
                        : showDoubleView, showNeighboringMonth: showNeighboringMonth, showWeekNumbers: showWeekNumbers }, commonProps)));
            }
            default:
                throw new Error("Invalid view: ".concat(view, "."));
        }
    }
    function renderNavigation() {
        if (!showNavigation) {
            return null;
        }
        return ((0, jsx_runtime_1.jsx)(Navigation_js_1.default, { activeStartDate: activeStartDate, drillUp: drillUp, formatMonthYear: formatMonthYear, formatYear: formatYear, locale: locale, maxDate: maxDate, minDate: minDate, navigationAriaLabel: navigationAriaLabel, navigationAriaLive: navigationAriaLive, navigationLabel: navigationLabel, next2AriaLabel: next2AriaLabel, next2Label: next2Label, nextAriaLabel: nextAriaLabel, nextLabel: nextLabel, prev2AriaLabel: prev2AriaLabel, prev2Label: prev2Label, prevAriaLabel: prevAriaLabel, prevLabel: prevLabel, setActiveStartDate: setActiveStartDate, showDoubleView: showDoubleView, view: view, views: views }));
    }
    var valueArray = Array.isArray(value) ? value : [value];
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, clsx_1.default)(baseClassName, selectRange && valueArray.length === 1 && "".concat(baseClassName, "--selectRange"), showDoubleView && "".concat(baseClassName, "--doubleView"), className), ref: inputRef, children: [renderNavigation(), (0, jsx_runtime_1.jsxs)("div", { className: "".concat(baseClassName, "__viewContainer"), onBlur: selectRange ? onMouseLeave : undefined, onMouseLeave: selectRange ? onMouseLeave : undefined, children: [renderContent(), showDoubleView ? renderContent(true) : null] })] }));
});
exports.default = Calendar;
