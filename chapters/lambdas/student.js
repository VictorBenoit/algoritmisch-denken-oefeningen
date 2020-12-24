function allPositive(ns) {
    for (let n of ns) {
        if (n < 0) {
            return false;
        }

    }
    return true;

}
function allNegative(ns) {
    for (let n of ns) {
        if (n > 0) {
            return false;
        }

    }
    return true;

}

function allOdd(ns) {
    for (let n of ns) {
        if (n % 2 === 0) {
            return false;
        }

    }
    return true;

}

