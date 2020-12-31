const hbs = require('hbs');
hbs.registerHelper('getAnio',() =>{
	return new Date().getFullYear();
});

hbs.registerHelper('capitalizar',function(texto){
	let palabras = texto.split(' ');
	palabras.forEach(function(palabra, idx){
		palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
	});
	return palabras.join(' ');
});