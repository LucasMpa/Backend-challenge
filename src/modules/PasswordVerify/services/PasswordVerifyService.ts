export default function validatePasswordService(input: string) {
  const charMap = <any>{};

  for (const char of input.toLowerCase()) {
    charMap[char] = (charMap[char] || 0) + 1;
  }

  const repeatedCharacters = Object.values(charMap).filter(
    (count: any) => count > 1
  ).length;

  //Verifica se existe mais de um caractere repetido
  if (repeatedCharacters > 0) {
    return false;
  }

  //Verifica espaços em branco
  if (input.indexOf(" ") >= 0) {
    return false;
  }

  if (input)
    return /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{9,}$/.test(
      input
    );
}
