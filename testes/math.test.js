


const math = require('../math');
test('soma 2 + 3 igual a 5', () => { 
expect(math.add(2, 3)).toBe(5); 
}); 

test('multiplicação 2 * 3 igual a 6', () => { 
expect(math.multiply(2, 3)).toBe(6); 
}); 


test('subtração de  3 - 3 igual a 0', () => { 
expect(math.sub(3, 3)).toBe(0); 
}); 



test('divisão de  6 / 3 igual a 2', () => { 
expect(math.divide(6, 3)).toBe(2); 
}); 

