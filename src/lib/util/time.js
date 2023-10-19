// @ts-nocheck
import { endOfDay, endOfMonth, endOfWeek, endOfYear, formatDuration, intervalToDuration, isEqual } from "date-fns";
import moment from 'moment';

const zeroPad = (num) => String(num).padStart(2, "0");

export const parseSecond = (second = 0, hourFormat = true) => {
  second = isNaN(second) ? 0 : second
  const duration = intervalToDuration({ start: 0, end: second * 1000 });
  let format = ["minutes", "seconds"];
  if (hourFormat) {
    format = ["hours", "minutes", "seconds"];
  }
  const formatted = formatDuration(duration, {
    format: format,
    zero: true,
    delimiter: ":",
    locale: {
      formatDistance: (_token, count) => zeroPad(count)
    }
  });
  return formatted
}

export const parseSecondToHour = (sec) => {
  var hours = Math.floor(sec / 3600);
  (hours >= 1) ? sec = sec - (hours * 3600) : hours = '00';
  var min = Math.floor(sec / 60);
  (min >= 1) ? sec = sec - (min * 60) : min = '00';
  (sec < 1) ? sec = '00' : void 0;

  (min.toString().length == 1) ? min = '0' + min : void 0;
  (sec.toString().length == 1) ? sec = '0' + sec : void 0;

  return hours + ':' + min + ':' + sec;
}

/**
 * @param {date|moment} start The start date
 * @param {date|moment} end The end date
 * @param {string} type The range type. eg: 'days', 'hours' etc
 */
export const getRange = (startDate, endDate, type) => {
  let fromDate = moment(startDate)
  let toDate = moment(endDate)
  let diff = toDate.diff(fromDate, type)
  let range = []
  for (let i = 0; i <= diff; i++) {
    range.push(moment(startDate).add(i, type))
  }
  return range
}

export const parseDateToUTC = date => {
  return new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds(),
  );
};

export const convertDuration = (duration) => {
  const durationArray = duration.split(':')
  const hour = parseInt(durationArray[0])
  const minute = parseInt(durationArray[1])
  const second = durationArray[2] ? parseInt(durationArray[2]) : 0
  return hour * 3600 + minute * 60 + second
}

export const parseSecondToTimeFormat = (second, isSecond = false, isEmpty = false) => {
  second = isNaN(second) ? 0 : second
  if (isEmpty && second === 0) {
    return ''
  }
  const duration = intervalToDuration({ start: 0, end: second * 1000 });
  let format = ["hours", "minutes"];
  if (isSecond) {
    format = ["hours", "minutes", "seconds"];
  }
  const formatted = formatDuration(duration, {
    format: format,
    zero: true,
    delimiter: ":",
    locale: {
      formatDistance: (_token, count) => zeroPad(count)
    }
  });
  return formatted
}


export function isSame(d1, d2, unit) {
  let date1 = d1.setMilliseconds(0)
  let date2 = d2.setMilliseconds(999)
  let method;
  switch (unit) {
    case 'day':
      method = endOfDay;
      break;
    case 'week':
      method = endOfWeek;
      break;
    case 'month':
      method = endOfMonth;
      break;
    case 'year':
      method = endOfYear;
      break;
    default:
      break;
  }
  const startTimestamp = method ? method(date1) : date1;
  return isEqual(startTimestamp, date2);
}