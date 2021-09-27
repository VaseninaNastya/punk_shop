import numbers from "../constants/numbers.constants.js";

function filter(arr, value) {
  return arr.sort(function (a, b) {
    if(value === "first_brewed"){
      if (Number(a[value].split("/")[0])+ Number(a[value].split("/")[1])*numbers.monthsOfTheYear > Number(b[value].split("/")[0])+ Number(b[value].split("/")[1])*numbers.monthsOfTheYear ) {
        return 1;
      }
      if (Number(a[value].split("/")[0])+ Number(a[value].split("/")[1])*numbers.monthsOfTheYear  < Number(b[value].split("/")[0])+ Number(b[value].split("/")[1])*numbers.monthsOfTheYear ) {
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