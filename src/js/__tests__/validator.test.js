import validCreditCard from '../validator';

test('should return true if card number is valid', () => {
  const value = '4112344112344113';
  const result = validCreditCard(value);
  expect(result).toBe(true);
});

test('should return false if card number is invalid', () => {
  const value = '24112344112344114';
  const result = validCreditCard(value);
  expect(result).toBe(false);
});

test('should return false if invalid value entered', () => {
  const value = 'irkgkrjgh';
  const result = validCreditCard(value);
  expect(result).toBe(false);
});