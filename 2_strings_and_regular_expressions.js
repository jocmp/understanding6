// Just keep in mind that when comparing strings, both strings must be normalized to the same form. For example:

const values = ['Raindrop', 'drip', 'drop top']

let normalized = values.map(function (text) {
    return text.normalize();
});

normalized.sort(function (first, second) {
    if (first < second) {
        return -1;
    } else if (first === second) {
        return 0;
    } else {
        return 1;
    }
});

// You can also sort the original array by calling normalize() as part of the comparator, as follows:

values.sort(function (first, second) {
    var firstNormalized = first.normalize(),
        secondNormalized = second.normalize();
    if (firstNormalized < secondNormalized) {
        return -1;
    } else if (firstNormalized === secondNormalized) {
        return 0;
    } else {
        return 1;
    }
});

// "When a regular expression has the u flag set, it switches modes to work on characters, not code units"
var emoji = "🙃"; // not blank!
console.log('length? ' + emoji + '  = ' + emoji.length); // 2
console.log('is emoji? (code units)' + emoji + '  = ' + /^.$/.test(emoji)); // false
console.log('is emoji? (characters)' + emoji + '  = ' + /^.$/u.test(emoji)); // true

function codePointLength(text) {
    // "Although this approach works, it’s not very fast. You can use string iterator as well..."
    // "In general, try to minimize counting code points whenever possible."
    let result = text.match(/[\s\S]/gu);
    return result ? result.length : 0;
}
console.log();
console.log(emoji + '  length=' + emoji.length);
console.log(emoji + '  length with regex=' + codePointLength(emoji));


// "Since the u flag is a syntax change, "
// "attempting to use it in JavaScript engines that aren’t compatible with ECMAScript 6 throws a syntax error."

var msg = "Hello world!";
console.log(msg.startsWith("Hello")); // true
console.log(msg.endsWith("!")); // true
console.log(msg.includes("o")); // true

console.log(msg.startsWith("o")); // false
console.log(msg.endsWith("world!"));  // true
console.log(msg.includes("x")); // false

console.log(msg.startsWith("o", 4)); // true
console.log(msg.endsWith("o", 8));  // true
console.log(msg.includes("o", 8)); // false