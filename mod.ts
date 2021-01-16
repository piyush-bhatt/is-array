/** Returns true if arg is an array, else false */
export default function (arg: any): boolean {
  return arg !== null && Array.isArray(arg);
}
