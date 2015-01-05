$(document).ready(function() {
	//Si hicimos una busqueda entonces mandamos la busqueda a Google
	if(GET()['busqueda']){
		$('#ir').attr("href","https://www.google.com/search?q="+GET()['busqueda']);
		$('#ir')[0].click();
		console.log($('#ir'));
	}

	//Funcion que busca las palabras que contiene lo que vamos escribiendo
	var substringMatcher = function(strs) {
		return function findMatches(q, cb) {
			var matches, substrRegex;
	    matches = [];
	    substrRegex = new RegExp(q, 'i');
	    $.each(strs, function(i, str) {
	    	if (substrRegex.test(str)) {
		        matches.push({ value: str });
	    	}
		});

    	cb(matches);
		};
	};

	//Palabras que podemos mostrar como sugerencias...claro esta que estas las podemos cargar directo de una base de datos o un archivo.
	var  paises = ['Afganistán', 'Albania', 'Argelia', 'Andorra', 'Argentina',
	'Armenia', 'Australia', 'Austria', 'Bahamas', 'Bangladesh', 'Austria',
	'Bolivia', 'Bélgica', 'Camerún', 'Canadá', 'Chile', 'Colombia', 'Costa Rica',
	'Cuba', 'Ecuador', 'Etiopía', 'Guatemala', 'Honduras',
	'Islandia', 'India', 'Irán', 'Italia', 'Kazajstán', 'Kenia',
	'Líbano', 'Mexico', 'Nicaragua', 'Omán', 'Pakistán',
	'Panamá', 'Perú', 'Qatar', 'Federación Rusa', 'San Vincente y Granadinas',
	'Arabia Saudita', 'Eslovenia', 'España', 'Taiwan', 'Túnez', 'Turquía',
	'Estados Unidos', 'Uruguay', 'Ucrania', 'Venezuela', 'Yemen'
	];

	//Inicializacion del metodo typeahead
	$('#the-basics .typeahead').typeahead({
		hint: true,
		highlight: true,
		minLength: 1
	},
	{
		name: 'paises',
		displayKey: 'value',
		source: substringMatcher(paises)
	});
});


//Funcion que devuelve las variables GET de la url
function GET() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
