import type { RangeType, Value } from './shared/types.js';
type TileGroupProps = {
    className?: string;
    count?: number;
    dateTransform: (point: number) => Date;
    dateType: RangeType;
    end: number;
    hover?: Date | null;
    offset?: number;
    renderTile: (props: {
        classes: string[];
        date: Date;
    }) => React.ReactElement;
    start: number;
    step?: number;
    value?: Value;
    valueType: RangeType;
    now?: Date;
};
export default function TileGroup({ className, count, dateTransform, dateType, end, hover, offset, renderTile, start, step, value, valueType, now, }: TileGroupProps): React.ReactElement;
export {};
