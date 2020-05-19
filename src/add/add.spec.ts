import { add } from './add';

describe('add method', () => {
  it('pass correct with numbers', () => {
    expect.hasAssertions();

    expect(add(1, 2)).toStrictEqual(3);
    expect(add(2)(11)).toStrictEqual(13);
  });
});
