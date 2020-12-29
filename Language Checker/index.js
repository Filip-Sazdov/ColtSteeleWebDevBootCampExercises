const langs = require('langs');
const franc = require('franc');
const colors = require('colors');

let input = process.argv[2];
let lang = franc(input);
let result = langs.where('3', lang);

if (lang === 'und') {
	console.error('Sorry, cannot recognise language, please try with longer sample text!'.magenta.bgYellow);
} else {
	console.log(`The language provided should be: ${result.name}.`.bgCyan.black);
}
