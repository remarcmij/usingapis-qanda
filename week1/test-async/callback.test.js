function isEven(number, cb) {
  setTimeout(() => {
    if (number % 2 === 0) {
      cb(number);
    } else {
      cb(null, new Error('value is not even'));
    }
  }, 1000);
}

describe('isEven callback', () => {
  test('it should return the argument if the number argument is even', (done) => {
    isEven(4, (value, err) => {
      expect(value).toBe(4);
      done();
    });
  });

  test('it should return an error if the number argument not even', (done) => {
    isEven(5, (value, err) => {
      expect(err).toBeInstanceOf(Error);
      done();
    });
  });
});
