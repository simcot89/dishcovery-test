const YEAR_MONTH_DAY_WEEKDAY_FORMATTER = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "long",
    day: "numeric",
    year: "numeric"
});
const yearMonthDayWeekdayFormat = (date) => {
    if (typeof date === "string") {
        return YEAR_MONTH_DAY_WEEKDAY_FORMATTER.format(new Date(date));
    }
    return YEAR_MONTH_DAY_WEEKDAY_FORMATTER.format(date);
};
export default {
    yearMonthDayWeekdayFormat
};
//# sourceMappingURL=DateUtils.js.map