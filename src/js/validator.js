export default function validCreditCard(setValue) {
  if (/[^0-9-\s]+/.test(setValue)) {
    return false;
  }
  let nCheck = 0;
  let bEven = false;
  const value = setValue.replace(/\D/g, '');

  for (let n = value.length - 1; n >= 0; n -= 1) {
    const cDigit = value.charAt(n);
    let nDigit = parseInt(cDigit, 10);

    /* eslint-disable no-cond-assign */
    if (bEven && (nDigit *= 2) > 9) {
      nDigit -= 9;
    }
    nCheck += nDigit;
    bEven = !bEven;
  }

  return (nCheck % 10) === 0;
}
