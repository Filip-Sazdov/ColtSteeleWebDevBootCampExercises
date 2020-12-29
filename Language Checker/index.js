let langs = require('langs');
let franc = require('franc');

let input = process.argv[2];
let lang = franc(input);
let result = langs.where('3', lang);

if (lang === 'und') {
	console.error('Sorry, cannot recognise language, please try with longer sample text!');
} else {
	console.log(`The language provided should be ${result.name}.`);
}
