/**
 * :copyright (c) 2014 - 2018, The Regents of the University of California, through Lawrence Berkeley National Laboratory (subject to receipt of any required approvals from the U.S. Department of Energy) and contributors. All rights reserved.
 * :author
 */
/**
 * NumFormatter
 * Numerical column formatter
 */
angular.module('numFormatter', []).filter('numFormatter', function () {

  return function (input) {
    var num = Number(input);
    if (_.isNumber(input) || (_.isString(input) && !isNaN(num))) {
      // return num.toLocaleString();
      return 'NUMBER HERE';
    } else {
      return input;
    }
  };

});
