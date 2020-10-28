
let fs = require("fs")



let app = [

    {
        titulo:  fs.readFileSync("nota-1.txt", {encoding:"utf-8"}),
        estado: "pendiente",
    },
    {
        titulo:  fs.readFileSync("nota-2.txt", {encoding:"utf-8"}),
        estado: "error",
    },
    {
        titulo:  fs.readFileSync("nota-3.txt", {encoding:"utf-8"}),
        estado: "terminado",
    },
    {
        titulo:  process.argv[2],
        estado: "pendiente",
    }

]


console.log(app)
module.exports = app; 