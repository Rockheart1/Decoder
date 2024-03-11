function substitution(input, alphabet, encode = true) {
  if (!alphabet || alphabet.length !== 26 || new Set(alphabet).size !== alphabet.length) {
    return false;
  }

  const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const inputLower = input.toLowerCase();

  return inputLower
    .split("")
    .map((char) => {
      if (char === " ") return " ";
      const index = encode ? standardAlphabet.indexOf(char) : alphabet.indexOf(char);
      return encode ? alphabet[index] : standardAlphabet[index];
    })
    .join("");
}

module.exports = { substitution };


