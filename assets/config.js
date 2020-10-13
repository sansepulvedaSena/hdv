'use strict';

// Variables:
// Json con la metadata de los atributos de las personas:
const persona = {
	nombre: "Santiago",
	profesion: "Estudiante",
	correo: "sansepulveda90@gmail.com",
	telefono: "+57 301 639 5335",
	perfil: "Estudiante de Tecnología en Análisis y Desarrollo de Sistemas de Información en el SENA. 7mo semestre suspendido de Comunicación Audiovisual en el Politécnico Colombiano Jaime Isaza Cadavid",
	habilidades: {
		comunicativas:['','Persuasivo, ','Actitud Positiva, ','Tolerancia, ','Respeto, ','Diálogo Abierto, ','Orden, ','Apoyo','Capacidad de escucha'],
		gestion: ['Liderazgo, ','Responsabilidad','Puntualidad'],
		tecnicas: ['Manejo básico NetBeans','Manejo medio de Adobe Premiere y Sony Vegas Pro']
	},
	hobbies: ['Escuchar Música, ', 'Ver Peliculas, ', 'Tocar Guitarra y batería, ', 'Video-Juegos','Compartir tiempo en amistad']
}

// Dejar intácto a partir de aquí.
// Constantes SENA:
const banner = "https://scontent-bog1-1.xx.fbcdn.net/v/t1.0-9/93939364_3221922414506022_5702114881294041088_o.jpg?_nc_cat=108&_nc_sid=e3f864&_nc_eui2=AeFy_XvrsWjaofLxmK7HtVwxUMVJ6F7haCVQxUnoXuFoJasJZ5cH1olEv2ges9Ryr-Ykt1ir_UIPin41_jS-e9v5&_nc_ohc=6hPelIxyRtgAX8Cbe-R&_nc_ht=scontent-bog1-1.xx&oh=ab66b3f6ce83164c853e2d730441255d&oe=5FA91377";
// Mostramos el objeto persona en la consola:
console.log(persona);

function dataUser(){
	// Head titulo:
	$('#titulo').html(persona.nombre);
	// Header:
	$('#nombre').html(persona.nombre);
	$('#profesion').html(persona.profesion);
	// Footer:
	$('#correo').html(persona.correo);
	$('#telefono').html(persona.telefono);
	// Sección lateral:
	$('#banner').html('<img src="'+banner+'" class="img-fluid mt-2" alt="">');
	$('#perfil').html(persona.perfil);
	$('#comunicativas').html(persona.habilidades.comunicativas);
	$('#gestion').html(persona.habilidades.gestion);
	$('#tecnicas').html(persona.habilidades.tecnicas);
	// Invocamos una segunda función para traer cada uno de los elementos del arreglo:
	var aficiones = persona.hobbies.map(function(bar){
		return '<li class="list-group-item">'+bar+'</li>' 
	});
	$('#hobbies').html(aficiones);
}