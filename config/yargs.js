const descripcion = {
    desc: "Descripción de la tarea por hacer",
    alias: "d",
    demand: true
};

const completado = {
    desc: "Indica si la tarea fue completada o se encuentra pendiente de hacer",
    demand: true,
    default: true,
    alias: "c"
};

const options_listar = {
    completado
};

const options_crear = {
    descripcion,
    completado
};

const options_actualizar = {
    descripcion,
    completado
};

const options_borrar = {
    descripcion
};

const argv = require("yargs")
    .command("listar", "Lista todas las tareas por hacer", {
        completado: {
            desc: "Indica si la tarea fue completada o se encuentra pendiente de hacer",
            demand: true,
            alias: "c"
        }
    })
    .command("actualizar", "Actualiza una tarea por hacer", options_actualizar)
    .command("crear", "Crea una tarea por hacer", options_crear)
    .command("borrar", "borra una tarea por hacer", options_borrar)
    .help()
    .argv;

module.exports = {
    argv
}