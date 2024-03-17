function isEven(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (number % 2 == 0) {
        resolve(number);
      } else {
        reject(new Error('value is not even'));
      }
    }, 1000);
  });
}

describe('isEven promise', () => {
  test('it should return the argument if the number argument is even', () => {
    // expect.assertions(1);
    return isEven(4).then((data) => expect(data).toBe(4));
  });

  test('it should return an error if the number argument is not even', () => {
    expect.assertions(1);
    return isEven(5).catch((err) => expect(err).toBeInstanceOf(Error));
  });
});
