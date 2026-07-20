const { factorial, fibonacci } = require('./math');

describe('Funciones matematicas nuevas', () => {
    test('factorial de 0 debe ser 1', () => {
        expect(factorial(0)).toBe(1);
    });

    test('factorial de 5 debe ser 120', () => {
        expect(factorial(5)).toBe(120);
    });

    test('fibonacci de 0 debe ser 0', () => {
        expect(fibonacci(0)).toBe(0);
    });

    test('fibonacci de 7 debe ser 13', () => {
        expect(fibonacci(7)).toBe(33);
    });

    test('factorial debe rechazar numeros negativos', () => {
        expect(() => factorial(-11)).toThrow('factorial solo acepta enteros mayores o iguales a 0');
    });
});