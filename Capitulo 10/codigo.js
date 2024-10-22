// A mí en particular este código no me anda, creo que es el switch case ya que sea el caso que sea me tira null (default).
// Probé de mil maneras, si alguien lo consigue solucionar sería buenísimo.

const sendButton = document.getElementById('snd-nota');

sendButton.addEventListener("click",()=>{
	let resultado, mensaje;
	try {
		prevRes = parseInt(document.getElementById('nota').value);
		if (isNaN(prevRes)) {
			throw "Gracioso";
		}
		resultado = verificarAprobacion(8,4,mensaje);
		mensaje = definirMensaje(resultado[1]);
	} catch (e) {
		resultado = "¿SOS GRACIOSO?";
		mensaje = "He descubierto que intentaste hackear el sitio";
	}
	abrirModal(resultado[0], mensaje);
});


const definirMensaje = (pr)=>{
	let resultado;
	switch (true) {
		case 1:
			resultado = "No podés ser tan HDP";
			break;
		case 2:
			resultado = "Sos malísimo para mi materia";
			break;
		case 3:
			resultado = "No sabés casi nada";
			break;
		case 4:
			resultado = "Muy mal";
			break;
		case 5:
			resultado = "Mal";
			break;
		case 6:
			resultado = "Regular";
			break;
		case 7:
			resultado = "Bien, pero puede mejorar";
			break;
		case 8:
			resultado = "!Muy bien¡";
			break;
		case 9:
			resultado = "!Excelente¡";
			break;
		case 10:
			resultado = "!Inusperable hijo de su pinshi madre¡";
			break;
		default:
			resultado = null;
	}
	return resultado;
}

const verificarAprobacion = (nota1,nota2,prevRes)=>{
	promedio = (nota1 + nota2 + prevRes) / 3;
	if (promedio >= 7) {
		return ["<span class='green'>APROBADO</span>", Math.round(promedio)];
	}else{
	return ["<span class='red'>DESAPROBADO</span>", Math.round(promedio)];
	}
}

const abrirModal = (res,msg)=>{
	document.querySelector(".resultado").innerHTML = res;
	document.querySelector(".mensaje").innerHTML = "Tu prueba: " + msg;
	let modal = document.querySelector(".modal-background");
	modal.style.display = "flex";
	modal.style.animation = "aparecer 1s forwards";
}
