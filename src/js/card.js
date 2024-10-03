export default function paymentSystem(value) {
    let paySystem = 'no-found';
    const n = String(value);
  
    if (/^4[0-9]{12}(?:[0-9]{3})?$/.test(n)) {
      paySystem = 'visa';
    }
  
    if (/^(5[1-5]|222[1-9]|22[3-9]|2[3-6]|27[01]|2720)[0-9]{0,}$/.test(n)) {
      paySystem = 'master';
    }
  
    if (/^220(0|4)[0-9]{12}$/.test(n)) {
      paySystem = 'mir';
    }
  
    if (/^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/.test(n)) {
      paySystem = 'discover';
    }
  
    if (/^3[47][0-9]{13}$/.test(n)) {
      paySystem = 'amex';
    }
  
    if (/^3(?:0[0-5]|[68][0-9])[0-9]{11}$/.test(n)) {
      paySystem = 'diners_club';
    }
  
    if (/^(?:(?:2131|1800|35\d{3})\d{11})$/.test(value)) {
      paySystem = 'jcb';
    }
  
    return paySystem;
  }