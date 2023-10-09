function factorial(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
}

const permutation = (n, r) => {
    return factorial(n) / factorial(n - r);
};

const combination = (n, r) => {
    return factorial(n) / (factorial(r) * factorial(n - r));
};

const multiPermutation = (n, r) => {
    return Math.pow(n, r);
};

const multiCombination = (n, r) => {
    return factorial(n + r - 1) / (factorial(r) * factorial(n - 1));
};

module.exports = {
    permutation,
    combination,
    multiPermutation,
    multiCombination
};
