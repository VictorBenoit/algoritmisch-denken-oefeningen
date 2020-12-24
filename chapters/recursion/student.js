function factorial(n) {
    if (n <= 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
function sum(ns) {
    if (ns.length === 0) {
        return 0;
    } else {
        const first = ns[0];
        const rest = ns.slice(1);
        return first + sum(rest);
    }
}
function minimum(ns) {
    if (ns.length === 1) {
        return ns[0];
    } else {
        const first = ns[0];
        const rest = ns.slice(1);
        const minimumOfRest = minimum(rest);
        if (first < minimumOfRest) {
            return first;
        } else {
            return minimumOfRest;
        }
    }
}
function maximum(ns) {
    if (ns.length === 1) {
        return ns[0];
    } else {
        const first = ns[0];
        const rest = ns.slice(1);
        const maximumOfRest = maximum(rest);
        if (first > maximumOfRest) {
            return first;
        } else {
            return maximumOfRest;
        }
    }
}
function isIncreasing(ns) {
    if (ns.length < 2) {
        return true;
    } else {
        const [first, second, ...rest] = ns;
        return first <= second && isIncreasing([second, ...rest]);
    }
}
function contains(xs, x) {
    if (xs = x) {
        return true;
    } else {

        return false
    }
}