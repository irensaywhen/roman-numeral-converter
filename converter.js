function convertToRoman(num) {
  // Roman Numerals
  const romanNumerals = [
    'I',
    'IV',
    'V',
    'IX',
    'X',
    'XL',
    'L',
    'XC',
    'C',
    'CD',
    'D',
    'CM',
    'M',
  ];
  // Corresponding numbers
  const numbers = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  let romanNum = '';

  while (numbers.length !== 0) {
    let topNum = numbers.pop();
    let division = Math.floor(num / topNum);
    num = num % topNum;

    romanNum += romanNumerals.pop().repeat(division);
  }

  return romanNum;
}

module.exports = convertToRoman;
