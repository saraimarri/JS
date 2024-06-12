function extractClassName(sessionTitle) {


  if (sessionTitle.includes("Class 2022 Januar")) {
    return "2022-01";
  } else if (sessionTitle.includes("Class 2022 Februar")) {
    return "2022-02";
  } else if (sessionTitle.includes("Class 2022 März")) {
    return "2022-03";
  } else if (sessionTitle.includes("Class 2022 Maerz")) {
    return "2022-03";
  } else if (sessionTitle.includes("Class 2022 April")) {
    return "2022-04";
  } else if (sessionTitle.includes("Class 2022 Mai")) {
    return "2022-05";
  } else if (sessionTitle.includes("Class 2022 September")) {
    return "2022-09";

  } else {
    return null;
  }
}


console.log(extractClassName("Live-Session Class 2022 September")); // "2022-09"

console.log(extractClassName("Live-Session Class 2022 März")); // "2022-03"

console.log(extractClassName("Live-Session Class 2022 Maerz")); // "2022-03"

console.log(extractClassName("Live-Session 2022 April")); // null