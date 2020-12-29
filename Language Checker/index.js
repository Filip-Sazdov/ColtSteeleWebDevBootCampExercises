let langs = require('langs');
let franc = require('franc');

let lang = franc('јас сум македонец и доаѓам од Македонија.');
let result = langs.where('2', lang);
console.log(result);
