import { jsx as _jsx } from "react/jsx-runtime";
import Flex from './Flex.js';
import { getTileClasses } from './shared/utils.js';
export default function TileGroup(_a) {
    var className = _a.className, _b = _a.count, count = _b === void 0 ? 3 : _b, dateTransform = _a.dateTransform, dateType = _a.dateType, end = _a.end, hover = _a.hover, offset = _a.offset, renderTile = _a.renderTile, start = _a.start, _c = _a.step, step = _c === void 0 ? 1 : _c, value = _a.value, valueType = _a.valueType, now = _a.now;
    var tiles = [];
    for (var point = start; point <= end; point += step) {
        var date = dateTransform(point);
        tiles.push(renderTile({
            classes: getTileClasses({
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
    return (_jsx(Flex, { className: className, count: count, offset: offset, wrap: true, children: tiles }));
}
