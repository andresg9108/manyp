require('shelljs/global');

const sSassFile = './src/sass/main.sass';
const sCssFile = './src/css/dist/main.min.css';
const sOptions = '--style compressed';

console.log('');
console.log('Sass');
console.log('');

exec(`sass ${sSassFile} ${sCssFile} ${sOptions}`);

process.on('message', (msg) => {
	if(typeof msg.watch != 'undefined' && msg.watch){
		exec(`sass --watch ${sSassFile} ${sCssFile} ${sOptions}`);
	}
});