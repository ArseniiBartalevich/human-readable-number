module.exports = function toReadable(number) {
    const arr3 = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const arr = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const arr2 = [
        "",
        "",
        "twenty ",
        "thirty ",
        "forty ",
        "fifty ",
        "sixty ",
        "seventy ",
        "eighty ",
        "ninety ",
    ];
    const arr1 = [
        "",
        "one hundred ",
        "two hundred ",
        "three hundred ",
        "four hundred ",
        "five hundred ",
        "six hundred ",
        "seven hundred ",
        "eight hundred ",
        "nine hundred ",
    ];
    const value = number.toString().split("").map(Number);
    if (value.length == 2) value.unshift("");
    if (value.length == 1) value.unshift("", "");
    const result = (
        arr1[value[0]] +
        arr2[value[1]] +
        (arr3[value[2]] == "zero" ? "" : arr3[value[2]])
    ).trim();
    console.log(value);
    return result;
};
