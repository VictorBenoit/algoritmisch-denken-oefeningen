// Schrijf hier je code
function sum(n) {
    let acc = 0;
    let i = 1;

    while (i <= n) {
        acc += i;
        i++;
    }
    return acc;
}
function sumRange(from, to) {
    let total = 0;
    let i = from;
    while (i <= to) {
        total += i;
        i++;
    }
    return total;
}
function factorial(n) {
    let result = 1;
    let i = 1;

    while (i <= n) {
        result *= i;
        i++;
    }

    return result;
}
function multiply(a, b) {
    let acc = 0;

    while (b > 0) {
        acc += a;
        b--;
    }
    return acc;
}
function power(a, b) {
    let acc = 1;

    while (b > 0) {
        acc *= a;
        b--;
    }
    return acc;
}
function thanos(population, target) {
    let acc = 0;

    while (population > target) {
        population = Math.ceil(population / 2);
        acc++;
    }
    return acc;
}
function amazon(n) {
    let boek1 = 50;
    let boek2 = 50;

    while (n > 0) {
        const nextBoek1 = boek2 * 0.95;
        const nextBoek2 = boek1 * 1.1;
        boek1 = nextBoek1;
        boek2 = nextBoek2;
        n--;
    }
    return boek2;
}
function digitSum(n) {
    let acc = 0;
    while (n > 0) {
        acc += lastDigit(n);
        n = removeLastDigit(n);
    }
    return acc;

    function lastDigit(n) {
        return n % 10;
    }

    function removeLastDigit(n) {
        return Math.floor(n / 10);
    }
}
function divisibleBy3(n) {
    while (n >= 10) {
        n = digitSum(n);
    }
    return n === 0 || n === 3 || n === 6 || n === 9;
}
function sum2(n) {
    let total = 0;
    for (i = 1; i <= n; ++i) {
        total += i;
    }
    return total;
}
function factorial2(n) {
    let total = 1;
    for (i = 2; i <= n; ++i) {
        total *= i;
    }
    return total;
}
function fibonacci(n) {
    let a = 0;
    let b = 1;
    for (let i = 1; i < n; ++i) {
        const next = a + b;
        a = b;
        b = next;
    }
    return a;
}
function countDivisors(n) {
    let count = 0;
    for (let i = 1; i <= n; ++i) {
        if (isDivisorOf(i, n)) {
            ++count;
        }
    }
    return count;

    function isDivisorOf(x, y) {
        return y % x === 0;
    }
}