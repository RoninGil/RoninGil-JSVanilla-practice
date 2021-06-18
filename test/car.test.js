const Car = require('./../app/car.js');

const golf = new Car({
  color: 'red',
  model: 'Taos',
  year: new Date(2021),
  price: 449990,
  kmPerLt: 16.9,
  tank: 50,
  company: 'VW'
});

test('car current sale price is the same', () => {
  expect(golf.currentSalePrice()).toBe(449990);
});

test('car company to equal vw', () => {
  expect(golf.company).toBe('VW');
});

test('car color to equal red', () => {
  expect(golf.color).toBe('red');
});

test('car current gas to equal zero', () => {
  expect(golf.currentGas()).toBe(0);
});

test('adding gas to car', () => {
  expect(golf.availableGasSpace()).toBeGreaterThanOrEqual(0);
  golf.addGas(80);
  expect(golf.currentGas()).toBeLessThanOrEqual(golf.tank);
});

test('car km per lt to equal', () => {
  expect(golf.kmPerLt).toBe(16.9);
});

test('move car 5,000 kms', () => {
  const kmBefore = golf.kms;
  golf.move(5000);
  expect(golf.currentGas()).toBeLessThanOrEqual(golf.tank);
  expect(golf.currentGas()).toBe(0);
  expect(golf.kms).toBeGreaterThan(kmBefore);
});

test('move car 5 kms', () => {
  const kmBefore = golf.kms;
  golf.move(5);
  expect(golf.kms).toBe(kmBefore);
});

test('car current sale price is lower', () => {
  console.log(golf.currentSalePrice(1000000));
  expect(golf.currentSalePrice(10000)).toBeLessThan(449990);
});
