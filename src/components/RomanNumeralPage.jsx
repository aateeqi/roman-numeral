import { extractParamFromQueryString } from "../utils/extractParamFromQueryString";
import { getRomanNumeral } from "../service/romanNumeralService";

export const RomanNumeral = (props) => {
  let query = "";
  if (props && props.location) {
    query = props.location.search;
  }
  const number = extractParamFromQueryString(query, "query");
  const romanNumeral = getRomanNumeral(number);
  if (!number || !romanNumeral) {
    return <h1>Your parameters are invalid</h1>;
  }

  return (
    <h1>
      Roman Numeral for {number} is {romanNumeral}
    </h1>
  );
};
