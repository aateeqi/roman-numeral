// searches for a queryParam inside of a given queryString
export const extractParamFromQueryString = (queryString, queryParam) => {
  let value = "";
  if (!queryString || !queryParam) {
    //return empty string if no queryString or queryParam is passed in
    return value;
  }
  const query = new URLSearchParams(queryString);
  if (query) {
    value = query.get(queryParam);
  }
  return value ? value : "";
};
