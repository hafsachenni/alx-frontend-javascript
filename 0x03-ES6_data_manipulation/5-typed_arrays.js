export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  if (position > length - 1) throw Error('Position outside range');

  const view = new DataView(buffer);
  view.setInt8(position, value);
  return view;
}
