// addEventListener("resize",()=>{
// 	console.log("Se ha actualizado la resolución");
// })

{// Problema a de Cofla
// const nombre = document.getElementById("nombre");
// const email = document.getElementById("email");
// const materia = document.getElementById("materia");
// const boton = document.getElementById("btn-enviar");
// const resultado = document.querySelector(".resultado");

// const validarCampos()=>{
// 	let error = [];
// 	if (nombre.value.length < 5 || nombre.value.length > 40){
// 		error[0] = true;
// 		error[1] = "El nombre es inválido.";
// 		return error;
// 	} else if (email.value.length < 5 ||
// 			   email.value.length > 40 ||
// 			   email.value.indexOf("@") == -1 ||
// 			   email.value.indexOf(".") == -1){
// 		error[0] = true;
// 		error[1] = "El mail es inválido.";
// 		return error;
// 	} else if (matera.value.length < 4 || materia.value.length > 40){
// 		error[0] = true;
// 		error[1] = "La materia no existe."
// 	}
// 	error[0] = false;
// 	return error;
// }

// boton.addEventListener("click",(e)=>{
// 	e.preventDefault();
// 	let error = validarCampos();
// 	if (error[0]){
// 		resultado.innerHTML = error[1];
// 		resultado.classList.add("red");
// 	} else{
// 		resultado.innerHTML = "Solicitud enviada correctamente";
// 		resultado.classList.add("green");
// 		resultado.classList.remove("red");
// 	}
// })
}

{//Problema b de Cofla
// let alumnos = [{
// 	nombre: "Lucas Dalto",
// 	email: "soydalto@gmail.com",
// 	materia: "Física 3"
// },{
// 	nombre: "Juan José",
// 	email: "juanjosedenk05@gmail.com",
// 	materia: "Física 2"
// },{
// 	nombre: "Jorge Ramírez",
// 	email: "ramirez@gmail.com",
// 	materia: "Cálculo 2"
// },{
// 	nombre: "Facundo Roberto",
// 	email: "robert@gmail.com",
// 	materia: "Literatura"
// },{
// 	nombre: "Cofla XD",
// 	email: "coffla@gmail.com",
// 	materia: "Recreo"
// }];

// const boton = document.querySelector(".boton-confirmar");
// const contenedor = document.querySelector(".grid-container");

// let htmlCode = "";

// for (alumno in alumnos){
// 	let datos = alumnos[alumno];
// 	let nombre = datos["nombre"];
// 	let email = datos["email"];
// 	let materia = datos["materia"];
// 	htmlCode += `
// 	<div class="grid-item nombre">${nombre}</div>
// 	<div class="grid-item email">${email}</div>
// 	<div class="grid-item materia">${materia}</div>
// 	<div class="grid-item semana">
// 		<select class="semana-elegida">
// 			<option value="Semana 1">Semana 1</option>
// 			<option value="Semana 2">Semana 2</option>
// 		</select>
// 	</div>
// 	`
// }

// contenedor.innerHTML = htmlCode;

// boton.addEventListener("click",()=>{
// 	let confirmar = confirm("¿Realmente quieres confirmar las mesas?");
// 	if (confirmar){
// 		document.body.removeChild(boton);
// 		let elementos = document.querySelectorAll(".semana");
// 		let semanasElegidas = document.querySelectorAll(".semana-elegida");
// 		for (elemento in elementos){
// 			let semana = elementos[elemento];
// 			semana.innerHTML = semanasElegidas[elemento].value;

// 		}
// 	}
// })

}
