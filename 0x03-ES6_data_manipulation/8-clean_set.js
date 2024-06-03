export default function cleanSet(set, startString) {
  const stringUni = [];
  for (const value of set) {
    if (value.startsWith(startString)) {
      // WE'RE SLICING value str from the index equivalent to length of startstring
      stringUni.push(value.slice(startString.length));
    }
  }
  return stringUni.join('-');
}
