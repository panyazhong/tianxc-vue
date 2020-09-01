export function timeFormat(str, format = '{y}-{m}-{d} {h}:{i}:{s}') {
  const time = new Date(Number(str));
  const obj = {
    y: time.getFullYear(),
    m: time.getMonth() + 1,
    d: time.getDate(),
    h: time.getHours(),
    i: time.getMinutes(),
    s: time.getSeconds(),
  };

  const time_str = format.replace(/{(y|m|d|h|i|s)}/g, (res, key) => {
    const value = obj[key];

    return value < 10 ? `0${value}` : value;
  });

  return time_str;
}
