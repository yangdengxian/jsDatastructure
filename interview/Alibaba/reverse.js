var reverse = function(x) {
    var n = 0;
    while (x != 0) {
        n = n * 10 + x % 10;
        x = parseInt(x / 10);
    }
    return parseInt(n) == n ? parseInt(n) : 0;
};

var res = reverse(132)
res