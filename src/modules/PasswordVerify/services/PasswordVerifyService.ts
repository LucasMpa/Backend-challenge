export function repeatedCharacters(input: string) {
  const charMap = <any>{};

  for (const char of input.toLowerCase()) {
    charMap[char] = (charMap[char] || 0) + 1;
  }

  const repeatedCharacters = Object.values(charMap).filter(
    (count: any) => count > 1
  ).length;

  if (repeatedCharacters > 0) {
    return false;
  }
  return true;

}


export function verifyBlankSpaces(input: string) {
  if (input.indexOf(" ") >= 0) {
    return true;
  }

  return false;
}


export function passwordRules(input: string) {
  if (input)
    return /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{9,}$/.test(
      input
    );
}


export default function validatePasswordService(input: string) {
  if (
    repeatedCharacters(input) &&
    verifyBlankSpaces(input) &&
    passwordRules(input)
  ) {
    return true;
  }

  return false;

}
