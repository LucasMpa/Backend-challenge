const { passwordLength, separateCharacters } = require('./password');
expect.extend({
  acceptedRange(password) {
    if (password >= 9) {
      return {
        message: () => `expected ${password} as password length.`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected nine or more as the password length.`,
        pass: false,
      };
    }
  },
  hasDigit(password) {
    let digit = false;
    password.forEach((letter, _) => {
      if (
        letter == 0 ||
        letter == 1 ||
        letter == 2 ||
        letter == 3 ||
        letter == 4 ||
        letter == 5 ||
        letter == 6 ||
        letter == 7 ||
        letter == 8 ||
        letter == 9
      ) {
        digit = true;
      }

      return;
    });

    if (digit === true) {
      return {
        message: () => `expected to have at least one digit.`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected to have at least one digit`,
        pass: false,
      };
    }
  },
});

describe('Tests for password validation', () => {
  it('Must have 9 or more characters', () => {
    const password = 'AbTp9!fok';
    expect(passwordLength(password)).acceptedRange(password);
  });
});

describe('', () => {
  it('Must have 1 digit', () => {
    const password = 'AbTp9!fok';
    expect(separateCharacters(password)).hasDigit(separateCharacters(password));
  });
});
