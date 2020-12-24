// Schrijf hier je code
function foo(x) {
    if (x < 10) {
        return 1;
    } else {
        return 2;
    }
}
function min2(x, y) {
    if (x < y) {
        return x;
    } else {
        return y;
    }
}
function abs(n) {
    if (n > 0) {
        return n;
    } else {
        return -n;
    }
}
function sign(n) {
    if (n > 0) {
        return 1;
    } else if (n < 0) {
        return -1;
    } else {
        return 0;
    }

}
function isDivisibleBy(x, y) {
    return x % y === 0;
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
    } else if (has28Days(month, year)) {
        return 28;
    } else if (has29Days(month, year)) {
        return 29;
    } else {
        return -1;
    }
}
function passPercentage(a, b, c) {
    let passCount = 0;
    if (a >= 10) {
        passCount++;
    }
    if (b >= 10) {
        passCount++;
    }
    if (c >= 10) {
        passCount++;
    }
    return Math.round(passCount / 3 * 100);
}
function democracy(a, b, c, d, e) {
    let pro = 0;
    if (a)
        pro++;
    if (b)
        pro++;
    if (c)
        pro++;
    if (d)
        pro++;
    if (e)
        pro++;
    return pro >= 3;
}
function totalOrderCost(amount) {
    if (amount < 100) {
        amount += 10;
    }
    if (amount >= 200) {
        amount *= 0.9;
    }
    return amount;
}
function quadrants(x, y) {
    if (x === 0 || y === 0) {
        return 0;
    } else {
        if (isPositive(x)) {
            if (isPositive(y)) {
                return 1;
            } else {
                return 2;
            }
        } else {
            if (isPositive(y)) {
                return 4;
            } else {
                return 3;
            }
        }
    }

    function isPositive(x) {
        return x >= 0;
    }
}
function ticket(age) {
    if (age < 12) {
        return 0;
    }
    if (age >= 12 && age < 18) {
        return 30;
    }
    if (age >= 18) {
        return 40;
    }
}
function closest(x, y) {
    let d1 = distance(x, y, -40, 30);
    let d2 = distance(x, y, 60, 20);
    let d3 = distance(x, y, 0, -50);
    let closest = Math.min(d1, d2, d3);
    if (closest === d1) {
        return 1;
    } else if (closest === d2) {
        return 2;
    } else {
        return 3;
    }
}

function distance(x1, y1, x2, y2) {
    let dx = x2 - x1;
    let dy = y2 - y1;
    return (dx ** 2 + dy ** 2) ** 0.5;
}
function darts(x, y) {
    if (x < -100 || x > 100 || y < -100 || y > 100) {
        return 0;
    } else {
        if (-5 < y && y < 5) {
            return 20;
        } else {
            let score;
            if (y > 5) {
                if (x < -50) {
                    score = 1;
                } else if (x < 0) {
                    score = 7;
                } else if (x < 50) {
                    score = 8;
                } else {
                    score = 4;
                }
            } else {
                if (x < -50) {
                    score = 5;
                } else if (x < 0) {
                    score = 3;
                } else if (x < 50) {
                    score = 2;
                } else {
                    score = 6;
                }
            }
            if (Math.abs(y) > 55) {
                score *= 2;
            }
            return score;
        }
    }
}
function min3(x, y, z) {
    return min2(x, min2(y, z));
}
function min4(a, b, c, d) {
    return min2(min2(a, b), min2(c, d));
}
function winner(score1, score2, score3) {
    if (score1 > score2 && score1 > score3) {
        return 1;
    } else if (score2 > score1 && score2 > score3) {
        return 2;
    } else if (score3 > score1 && score3 > score2) {
        return 3;
    } else if (score1 === score2 && score1 > score3) {
        return 12;
    } else if (score1 === score3 && score1 > score2) {
        return 13;
    } else if (score2 === score3 && score2 > score1) {
        return 23;
    } else {
        return 123;
    }
}