import { formatShortWeekday as defaultFormatShortWeekday, formatWeekday as defaultFormatWeekday } from '../shared/dateFormatter.js';
import type { CalendarType } from '../shared/types.js';
type WeekdaysProps = {
    /**
     * Type of calendar that should be used. Can be `'gregory`, `'hebrew'`, `'islamic'`, `'iso8601'`. Setting to `"gregory"` or `"hebrew"` will change the first day of the week to Sunday. Setting to `"islamic"` will change the first day of the week to Saturday. Setting to `"islamic"` or `"hebrew"` will make weekends appear on Friday to Saturday.
     *
     * @example 'iso8601'
     */
    calendarType: CalendarType | undefined;
    /**
     * Function called to override default formatting of weekday names (shortened). Can be used to use your own formatting function.
     *
     * @example (locale, date) => formatDate(date, 'dd')
     */
    formatShortWeekday?: typeof defaultFormatShortWeekday;
    /**
     * Function called to override default formatting of weekday names. Can be used to use your own formatting function.
     *
     * @example (locale, date) => formatDate(date, 'dd')
     */
    formatWeekday?: typeof defaultFormatWeekday;
    /**
     * Locale that should be used by the calendar. Can be any [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag). **Note**: When using SSR, setting this prop may help resolving hydration errors caused by locale mismatch between server and client.
     *
     * @example 'hu-HU'
     */
    locale?: string;
    onMouseLeave?: () => void;
    /**
     * Determines which date to show as the current date on the calendar
     *
     * @default new Date()
     * @example 'year'
     */
    now?: Date;
};
export default function Weekdays(props: WeekdaysProps): React.ReactElement;
export {};
