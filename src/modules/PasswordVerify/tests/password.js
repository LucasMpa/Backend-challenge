module.exports = {
  passwordLength: password => {
    return password.split('').length;
  },
  separateCharacters: password => {
    return password.split('');
  },
};
