export default function getStudentIdsSum(array) {
  return array.reduce((currentTotal, item) => item.id + currentTotal, 0);
}
