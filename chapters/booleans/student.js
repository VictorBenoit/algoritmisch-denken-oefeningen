// Schrijf hier je code
function isPositive(x) {
    return x >= 0;
}
function isNegative(x) {
    return x <= 0;
}
function isDivisibleBy(x, y) {
    return x % y === 0;
}
function inRange(x, min, max) {
    return min <= x && x <= max;
}
function pingPong(score1, score2) {
    return score1 >= 11 && score1 - score2 >= 2;
}
function freeTicket(age) {
    return age < 12 || age >= 65;
}
function has30Days(month) {
    return month === 4 || month === 6 || month === 9 || month === 11;
}
function has31Days(month) {
    return month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12;
}
function isLeapYear(year) {
    return isDivisibleBy(year, 4) && !isDivisibleBy(year, 100) || isDivisibleBy(year, 400);
}
function has28Days(month, year) {
    return month === 2 && !isLeapYear(year);
}
function has29Days(month, year) {
    return month === 2 && isLeapYear(year);
}
function isValidDate(day, month, year) {
    return inRange(month, 1, 12) &&
        ((has31Days(month) && inRange(day, 1, 31)) ||
            (has30Days(month) && inRange(day, 1, 30)) ||
            (has28Days(month, year) && inRange(day, 1, 28)) ||
            (has29Days(month, year) && inRange(day, 1, 29)));
}
function daysInMonth(month, year) {
    if (has31Days(month)) {
        return 31;
    } else if (has30Days(month)) {
        return 30;
    } else if (has29Days(month, year)) {
        return 29;
    } else if (has28Days(month, year)) {
        return 28;
    } else {
        return -1;
    }
}
function majority(x, y, z) {
    return (x && y) || (x && z) || (y && z);
}
function isHigherCard(x, y) {
    return (x === 1 && y !== 1) || (x > y && y !== 1);
}
function earlier(h1, m1, h2, m2) {
    return h1 < h2 || (h1 === h2 && m1 < m2);
}
function isInteger(x) {
    return x % 1 === 0;

}
function isPerfectSquare(x) {
    return isInteger(x ** 0.5);
}
function isLiquidWaterAt(temperature) {
    return (temperature - 50) ** 2 < 50 ** 2;
}   