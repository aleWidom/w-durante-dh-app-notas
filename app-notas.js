

let app = require("./index")


console.log(app);



for (let notas of app) {
    console.log(notas);     //ver todas las notas
}

let guardandoUnaNota = app[1];
console.log(guardandoUnaNota);    //guardando una nota



let pendientes = app.filter(function(notas) {
  return notas.estado === "pendiente";  //guardando pendientes
})

console.log(pendientes);


let hayError = app.map(function(notas) {
  if (notas.estado === "error") {
    throw new Error ("Hay un error en las notas")
  }
})

console.log(hayError);








let pasarAJSon = JSON.stringify(app);//Pasar a JSON
console.log(pasarAJSon);

let pasandoNuevamenteAArray = JSON.parse(pasarAJSon);
console.log(pasandoNuevamenteAArray);