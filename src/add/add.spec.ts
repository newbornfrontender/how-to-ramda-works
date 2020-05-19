// @ts-nocheck

import * as fc from 'fast-check';

import { add } from './add';

describe('add method', () => {
  it('pass correct with numbers', () => {
    expect.hasAssertions();
    fc.assert(fc.property(fc.integer(), fc.integer(), (a, b) => {
      expect(add(a, b)).toStrictEqual(a + b);
      expect(add(a)(b)).toStrictEqual(a + b);
    }));
  });

  it('fails with strings', () => {
    expect.hasAssertions();
    fc.assert(fc.property(fc.string(1, 10), fc.string(1, 10), (a, b) => {
      expect(add(a, b)).toBeNaN();
    }));
  });

  it('works with random specs', () => {
    expect.hasAssertions();
    expect(add(4, '7')).toStrictEqual(11);
    expect(add('2', 5)).toStrictEqual(7);
    expect(add(true, false)).toStrictEqual(1);
    expect(add(null, null)).toStrictEqual(0);
    expect(add(undefined, undefined)).toBeNaN();
    expect(add(new Date(4), new Date(2))).toStrictEqual(6);
  });
});
