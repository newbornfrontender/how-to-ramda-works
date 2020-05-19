// export const add = (...args: number[]): any => {
//   if (args.length === 1) return (v: number): any => add(args[0], v);
//   return args.reduce((acc, v) => Number(acc) + Number(v));
// };

export function add(a: number, b?: number): any {
  if (arguments.length === 1) return (c: number): any => add(a, c);
  return Number(a) + Number(b);
}
