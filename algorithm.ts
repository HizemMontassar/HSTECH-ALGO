const longestSequence = (array: number[]) => {
  let oneSunTrack = 0;
  let zeroSumTrack = 0;
  let prevLongestSequence = 0;
  let index = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 1) {
      oneSunTrack++;
      if (prevLongestSequence <= oneSunTrack) {
        index = i - oneSunTrack;
      }
    } else {
      zeroSumTrack++;
      if (oneSunTrack > prevLongestSequence) {
        prevLongestSequence = oneSunTrack;
        index = i;
      } else if (zeroSumTrack === array.length) {
        index = array.length - 1;
      }
      oneSunTrack = 0;
    }
  }
  return index;
};

const array: number[] = process.argv.slice(2).map(Number);
console.log(longestSequence(array));
