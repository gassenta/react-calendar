import { getRange } from './dates.js';
/**
 * Returns a value no smaller than min and no larger than max.
 *
 * @param {Date} value Value to return.
 * @param {Date} min Minimum return value.
 * @param {Date} max Maximum return value.
 * @returns {Date} Value between min and max.
 */
export function between(value, min, max) {
    if (min && min > value) {
        return min;
    }
    if (max && max < value) {
        return max;
    }
    return value;
}
export function isValueWithinRange(value, range) {
    return range[0] <= value && range[1] >= value;
}
export function isRangeWithinRange(greaterRange, smallerRange) {
    return greaterRange[0] <= smallerRange[0] && greaterRange[1] >= smallerRange[1];
}
export function doRangesOverlap(range1, range2) {
    return isValueWithinRange(range1[0], range2) || isValueWithinRange(range1[1], range2);
}
function getRangeClassNames(valueRange, dateRange, baseClassName) {
    var isRange = doRangesOverlap(dateRange, valueRange);
    var classes = [];
    if (isRange) {
        classes.push(baseClassName);
        var isRangeStart = isValueWithinRange(valueRange[0], dateRange);
        var isRangeEnd = isValueWithinRange(valueRange[1], dateRange);
        if (isRangeStart) {
            classes.push("".concat(baseClassName, "Start"));
        }
        if (isRangeEnd) {
            classes.push("".concat(baseClassName, "End"));
        }
        if (isRangeStart && isRangeEnd) {
            classes.push("".concat(baseClassName, "BothEnds"));
        }
    }
    return classes;
}
function isCompleteValue(value) {
    if (Array.isArray(value)) {
        return value[0] !== null && value[1] !== null;
    }
    return value !== null;
}
export function getTileClasses(args) {
    var _a;
    if (!args) {
        throw new Error('args is required');
    }
    var value = args.value, date = args.date, hover = args.hover;
    var className = 'react-calendar__tile';
    var classes = [className];
    if (!date) {
        return classes;
    }
    var now = (_a = args.now) !== null && _a !== void 0 ? _a : new Date();
    var dateRange = (function () {
        if (Array.isArray(date)) {
            return date;
        }
        var dateType = args.dateType;
        if (!dateType) {
            throw new Error('dateType is required when date is not an array of two dates');
        }
        return getRange(dateType, date);
    })();
    if (isValueWithinRange(now, dateRange)) {
        classes.push("".concat(className, "--now"));
    }
    if (!value || !isCompleteValue(value)) {
        return classes;
    }
    var valueRange = (function () {
        if (Array.isArray(value)) {
            return value;
        }
        var valueType = args.valueType;
        if (!valueType) {
            throw new Error('valueType is required when value is not an array of two dates');
        }
        return getRange(valueType, value);
    })();
    if (isRangeWithinRange(valueRange, dateRange)) {
        classes.push("".concat(className, "--active"));
    }
    else if (doRangesOverlap(valueRange, dateRange)) {
        classes.push("".concat(className, "--hasActive"));
    }
    var valueRangeClassNames = getRangeClassNames(valueRange, dateRange, "".concat(className, "--range"));
    classes.push.apply(classes, valueRangeClassNames);
    var valueArray = Array.isArray(value) ? value : [value];
    if (hover && valueArray.length === 1) {
        var hoverRange = hover > valueRange[0] ? [valueRange[0], hover] : [hover, valueRange[0]];
        var hoverRangeClassNames = getRangeClassNames(hoverRange, dateRange, "".concat(className, "--hover"));
        classes.push.apply(classes, hoverRangeClassNames);
    }
    return classes;
}
