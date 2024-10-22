const materiasHTML = document.querySelector(".materias");

const materias = [
  {
    nombre: "Física 4",
    nota: 7
  },{
    nombre: "Cálculo 3",
    nota: 8
  },{
    nombre: "Bases de datos 3",
    nota: 9
  },{
    nombre: "Matemáticas discretas 2",
    nota: 7
  },{
    nombre: "Programación 4",
    nota: 8
  }
];

const obtenerMateria = (id)=>{
  return new Promise((res,rej)=>{
    materia = materias[id]
    if (materia == undefined) rej("La materia no existe");
    else setTimeout(()=>{res(materia)}, Math.random()*400);
  })
}

const devolverMaterias = async ()=>{
  let materia = [];
  for (let i = 0; i < materias.length; i++) {
    materia[i] = await obtenerMateria(i);
    let newHTMLCode = `
    <div class="materia">
      <div class="nombre">${materia[i].nombre}</div>
      <div class="nota">${materia[i].nota}</div>
    </div>`;
    materiasHTML.innerHTML += newHTMLCode;
  }
}

devolverMaterias();
