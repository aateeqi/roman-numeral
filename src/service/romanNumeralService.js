import { RomanEnum } from "../enums/RomanEnum";

export const getRomanNumeral = (integerNumber) => {
  let str = "";

  // if the number is negative, zero, or above 3999, return empty string
  if (isNaN(integerNumber) || integerNumber <= 0 || integerNumber >= 4000) {
    return str;
  }

  /* 
    Since we are iterating through the Roman enums in descending order,
    the integer will first be divided by the largest roman numeral value (1000),
    and append the particular roman symbol "count" number of times. 
    We will then move to the next Roman value, and run the same process
    on the remainder of the previous divison.
  */
  for (let symbol of Object.keys(RomanEnum)) {
    let count = Math.floor(integerNumber / RomanEnum[symbol]); // Divide the integer number by the  Roman value
    integerNumber -= count * RomanEnum[symbol]; // Set integerNumber to the remainder
    str += symbol.repeat(count); // Append the roman symbol "count" times
  }

  return str;
};
