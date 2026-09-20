function factorial(n) {
    if (n < 0) {
        console.log("Factorial is not computed for negative numbers"); //
    }
    var result = 1;
    for (var i = 2; i <= n; i++) {
        result = result * i;
    }
    return result;
}
factorial(5);
