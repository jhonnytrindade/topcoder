function getMax(input) {
    var qttChar = [];
    for (var c of input.split('')) {
        if (qttChar.find(v => v[0] == c)) continue;
        qttChar.push([c, input.match(RegExp(c, 'g')).length]);
    }

    qttChar.sort((a, b) => b[1] - a[1]);

    return qttChar[0][0];
}

console.log(getMax('aaiicccnn'));
console.log(getMax('aabbccdd'));
console.log(getMax('ab2sbf2dj2skl'));