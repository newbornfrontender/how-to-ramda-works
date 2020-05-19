export const add = (...args) => {
  if (args.length === 1) return (v) => add(args[0], v);
  return args.reduce((acc, v) => Number(acc) + Number(v));
};
