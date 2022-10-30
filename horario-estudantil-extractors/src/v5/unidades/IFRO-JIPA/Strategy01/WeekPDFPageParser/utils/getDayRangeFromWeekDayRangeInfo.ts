import { fixMonth } from "./fixMonth";
import { parsePDFSerializedDate } from "./parsePDFSerializedDate";
import { TODAY_YEAR } from "./TODAY_YEAR";

export const getDayRangeFromWeekDayRangeInfo = (
  weekDayRangeInfo: string,
  year = TODAY_YEAR
) => {
  const [weekDayStart, weekDayEnd] =
    weekDayRangeInfo.match(/((\d{1,2})\/?){1,3}/g)!;

  let [startDay, startMonth] = parsePDFSerializedDate(weekDayStart);
  let [endDay, endMonth] = parsePDFSerializedDate(weekDayEnd);

  if (Number.isNaN(startMonth) && endMonth > 0) {
    startMonth = startDay < endDay ? endMonth : endMonth - 1;
  }

  startMonth = fixMonth(startMonth);
  endMonth = fixMonth(endMonth);

  const startDate = new Date(year, startMonth, startDay, 0, 0);
  const endDate = new Date(year, endMonth, endDay, 23, 59);

  return { startDate, endDate };
};
