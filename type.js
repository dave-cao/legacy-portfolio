import Typed from "./src/typed.js";

(function () {
  "use strict";

  //this ain't my code, when I have the time, I should figure this out.
  function getAge(dateString, dateType) {
    /*
       function getAge
       parameters: dateString dateType
       returns: boolean
    
       dateString is a date passed as a string in the following
       formats:
    
       type 1 : 19970529
       type 2 : 970529
       type 3 : 29/05/1997
       type 4 : 29/05/97
    
       dateType is a numeric integer from 1 to 4, representing
       the type of dateString passed, as defined above.
    
       Returns string containing the age in years, months and days
       in the format yyy years mm months dd days.
       Returns empty string if dateType is not one of the expected
       values.
    */

    var now = new Date();
    var today = new Date(now.getYear(), now.getMonth(), now.getDate());

    var yearNow = now.getYear();
    var monthNow = now.getMonth();
    var dateNow = now.getDate();

    if (dateType == 1)
      var dob = new Date(
        dateString.substring(0, 4),
        dateString.substring(4, 6) - 1,
        dateString.substring(6, 8)
      );
    else if (dateType == 2)
      var dob = new Date(
        dateString.substring(0, 2),
        dateString.substring(2, 4) - 1,
        dateString.substring(4, 6)
      );
    else if (dateType == 3)
      var dob = new Date(
        dateString.substring(6, 10),
        dateString.substring(3, 5) - 1,
        dateString.substring(0, 2)
      );
    else if (dateType == 4)
      var dob = new Date(
        dateString.substring(6, 8),
        dateString.substring(3, 5) - 1,
        dateString.substring(0, 2)
      );
    else return "";

    var yearDob = dob.getYear();
    var monthDob = dob.getMonth();
    var dateDob = dob.getDate();

    let yearAge = yearNow - yearDob;

    if (monthNow >= monthDob) var monthAge = monthNow - monthDob;
    else {
      yearAge--;
      var monthAge = 12 + monthNow - monthDob;
    }

    if (dateNow >= dateDob) var dateAge = dateNow - dateDob;
    else {
      monthAge--;
      var dateAge = 31 + dateNow - dateDob;

      if (monthAge < 0) {
        monthAge = 11;
        yearAge--;
      }
    }

    return (
      yearAge + " years, " + monthAge + " months, and " + dateAge + " days"
    );
  }

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener("load", () => {
    /**
     * Hero type effect
     */
    const ageString = `${getAge("11/10/1999", 3)} old.`;
    const typed = select(".typed");
    if (typed) {
      let typed_strings = typed.getAttribute("data-typed-items");
      typed_strings = typed_strings.split(",");
      typed_strings.unshift(ageString);
      console.log(typed_strings);
      new Typed(".typed", {
        strings: typed_strings,
        loop: true,
        typeSpeed: 50,
        backSpeed: 10,
        backDelay: 2000,
      });
    }
  });
})();
