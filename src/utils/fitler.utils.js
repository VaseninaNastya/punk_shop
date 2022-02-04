import numbers from "../constants/numbers.constants.js";
import { sortConstantsKeys } from "../constants/sort.constants";

function filter(arr, value) {
  console.log("arr", arr);
  console.log("value", value);
  const { first_brewed_key } = sortConstantsKeys;
  console.log("firstBrewed", sortConstantsKeys.first_brewed_key, value);
  return arr.sort(function (a, b) {
    console.log("a,b", a[value], b[value]);
    if (value === sortConstantsKeys.first_brewed_key) {
      if (
        Number(a[value].split("/")[0]) +
          Number(a[value].split("/")[1]) * numbers.monthsOfTheYear >
        Number(b[value].split("/")[0]) +
          Number(b[value].split("/")[1]) * numbers.monthsOfTheYear
      ) {
        return 1;
      }
      if (
        Number(a[value].split("/")[0]) +
          Number(a[value].split("/")[1]) * numbers.monthsOfTheYear <
        Number(b[value].split("/")[0]) +
          Number(b[value].split("/")[1]) * numbers.monthsOfTheYear
      ) {
        return -1;
      }
      return 0;
    }
    if (a[value] > b[value]) {
      return 1;
    }
    if (a[value] < b[value]) {
      return -1;
    }
    return 0;
  });
}

export default filter;
