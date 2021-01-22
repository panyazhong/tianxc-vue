import moment from 'moment';

// formatTime to H:M:S
export function dateToHMS(dateStr) {
  let $moment = moment.duration(dateStr, 'milliseconds');

  return [$moment.hours(), $moment.minutes(), $moment.seconds()].join(':');
}
