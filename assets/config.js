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
const banner = "data:image/jpeg;base64,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";
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