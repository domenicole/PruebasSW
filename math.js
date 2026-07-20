function sum(a, b) {
    return a + b;
}

function factorial(n) {
    if (!Number.isInteger(n) || n < 0) {
        throw new Error('factorial solo acepta enteros mayores o iguales a 0');
    }

    let result = 1;

    for (let index = 2; index <= n; index += 1) {
        result *= index;
    }

    return result;
}

function fibonacci(n) {
    if (!Number.isInteger(n) || n < 0) {
        throw new Error('fibonacci solo acepta enteros mayores o iguales a 0');
    }

    if (n === 0) {
        return 0;
    }

    if (n === 1) {
        return 1;
    }

    let previous = 0;
    let current = 1;

    for (let index = 2; index <= n; index += 1) {
        const next = previous + current;
        previous = current;
        current = next;
    }

    return current;
}

module.exports = {
    sum,
    factorial,
    fibonacci
};