module.exports = function toReadable(number) {

  function numberSimple(num) {
    switch (num) {
      case 0: return 'zero'; break;
      case 1: return 'one'; break;
      case 2: return 'two'; break;
      case 3: return 'three'; break;
      case 4: return 'four'; break;
      case 5: return 'five'; break;
      case 6: return 'six'; break;
      case 7: return 'seven'; break;
      case 8: return 'eight'; break;
      case 9: return 'nine'; break;
      case 10: return 'ten'; break;
      case 11: return 'eleven'; break;
      case 12: return 'twelve'; break;
      case 13: return 'thirteen'; break;
      case 14: return 'fourteen'; break;
      case 15: return 'fifteen'; break;
      case 16: return 'sixteen'; break;
      case 17: return 'seventeen'; break;
      case 18: return 'eighteen'; break;
      case 19: return 'nineteen'; break;
    }
    return '';
  }

  function toTens(num) {
    switch (num) {
      case 2: return 'twenty'; break;
      case 3: return 'thirty'; break;
      case 4: return 'forty'; break;
      case 5: return 'fifty'; break;
      case 6: return 'sixty'; break;
      case 7: return 'seventy'; break;
      case 8: return 'eighty'; break;
      case 9: return 'ninety'; break;
    }
    return '';
  }

  let str = '';

  if (number === 0)
    str = numberSimple(number);
  else {
    if (Math.floor(number / 100) > 0) {
      str = numberSimple(Math.floor(number / 100)) + ' hundred';
      number = number % 100;
      if (number > 0) str += ' ';
    }
    if (number > 0) {
      if (number >= 20) {
        str += toTens(Math.floor(number / 10));
        number = number % 10;
        if (number > 0) str += ' ';
      }
      if (number > 0) {
        str += numberSimple(number);
      }
    }
  }
  return str;
}