// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// ## 1st Solution
// function reverse(str) {
//     return str
//         .split('')
//         .reverse()
//         .join('');
// }

// ## 2nd Solution
// function reverse(str) {
//     let reversed = '';
//
//     for (let char of str) {
//         reversed = char + reversed;
//         console.log(reversed);
//     }
//     return reversed;
// }

// ## 3rd Solution
function reverse(str) {
    debugger;
    return str.split('').reduce((reversed, char) => char + reversed, '');
}

reverse('asdf');
module.exports = reverse;
