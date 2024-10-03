
import paymentSystem from '../card';

test('return amex', () => {
  const value = '371504344706165';
  const result = paymentSystem(value);
  expect(result).toBe('amex');
});
test('return master', () => {
  const value = '5250767242408995';
  const result = paymentSystem(value);
  expect(result).toBe('master');
});
test('return visa', () => {
  const value = '4485580428564121';
  const result = paymentSystem(value);
  expect(result).toBe('visa');
});
test('return discover', () => {
  const value = '6011720048507690';
  const result = paymentSystem(value);
  expect(result).toBe('discover');
});
test('return jcb', () => {
  const value = '3541828400396887';
  const result = paymentSystem(value);
  expect(result).toBe('jcb');
});
test('return diners-club', () => {
  const value = '36163226829814';
  const result = paymentSystem(value);
  expect(result).toBe('diners_club');
});
test('return mir', () => {
  const value = '2200123456789010';
  const result = paymentSystem(value);
  expect(result).toBe('mir');
});
