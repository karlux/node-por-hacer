const argv = require("./config/yargs").argv;
const colors = require("colors");
const porHacer = require("./por-hacer/por-hacer");

let comando = argv._[0];

switch (comando) {
    case "listar":
        let listado = porHacer.getListado(argv.completado);

        for(let tarea of listado){
            console.log("========Tareas por hacer========".green);
            console.log("Tarea: ", tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log("========Tareas por hacer========\n".green);
        }
        break;
    case "crear":
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case "actualizar":
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        if(actualizado) console.log(`La tarea => ${argv.descripcion}, ha sido actualizada`.blue);
        break;
    case "borrar":
        let borrado = porHacer.borrar(argv.descripcion);
        if(borrado) console.log(`La tarea => ${argv.descripcion}, ha sido borrada`.red);
        break;
    default:
        console.log("Acción incorrecta".red);
        break;
}