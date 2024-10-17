{  // Problema a y b de Cofla

let alto = window.screen.height;
let ancho = window.screen.width;

comprar = confirm(`El alto es: ${alto}, el ancho es ${ancho}`);

if (comprar){
	alert("Compra realizada exitosamente");
}
else{
	alert("Compra canecelada");
}

let href = window.location.href;
let pathname = window.location.pathname;
let hostname = window.location.hostname;
let protocol = window.location.protocol;

let html = `Protocolo: <b>${protocol}</b><br><br>`;
html += `Hostname: <b>${hostname}</b><br><br>`;
html += `Pathname: <b>${pathname}</b><br><br>`;
html += `URL completa: <b>${href}</b><br><br>`;

document.write(html);

}
