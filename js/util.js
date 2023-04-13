
function getRandomNumber(min, max) {
  if (min > max) {
    const t = min;
    min = max;
    max = t;
  }

  const res = Math.round(Math.random() * (max - min) + min);
  return res;

}
function checkLengthStr(str, length) {
  return str.length <= length;
}
export {getRandomNumber, checkLengthStr};
