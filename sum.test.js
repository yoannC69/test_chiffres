const convertNumber = require('./sum');

//const chiffres = [[1,'I'],[2,'II'],[3,'III'],[4,'IV'],[5,'V'],[6,'VI'],[7,'VII'],[8,'VIII'],[9,'IX'],[10,'X'],]

test('should return 1 when I', () => {
  expect(convertNumber('I')).toBe(1);
});

test('should return I when 1', () => {
    expect(convertNumber(1)).toBe('I');
});

test('should return I when 1', () => {
  expect(convertNumber(2)).toBe('II');
});

test('should return I when 1', () => {
  expect(convertNumber('II')).toBe(2);
});

/*test('should return I when 1', chiffres.forEach(arabe, romain => {
  expect(convertNumber(arabe)).toBe(romain);
}));*/