const fs = require("fs");
const { string } = require("yargs");

let listadoPorHacer = [];

const guardardb = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile("db/data.json", data, (error) => {
        if(error) throw new Error('No se pudo guardar la tarea por hacer');
    });
}

const cargardb = () => {
    listadoPorHacer = require("../db/data.json");
}

const crear = (descripcion) => {
    try {
      cargardb();  
    } catch (error) {
        listadoPorHacer = [];
    }

    let tarea = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(tarea);

    guardardb();

    return tarea;
}

const getListado = (completado) => {

    try {
        cargardb();  
      } catch (error) {
          listadoPorHacer = [];
      }

      return listadoPorHacer.filter( tarea => tarea.completado.toString() === completado);
}

const actualizar = (descripcion, completado = tarea) => {
    try {
        cargardb();  
      } catch (error) {
          listadoPorHacer = [];
      } 

    let indexTarea = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if(indexTarea >= 0){

        listadoPorHacer[indexTarea].completado = completado;

        guardardb();

        return true;
    }else{
        return false;
    }
}

const borrar = (descripcion) => {
    try {
        cargardb();
    } catch (error) {
        console.log("No fue posible cargar los datos", error);
    }

    indexTarea = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if(indexTarea > -1) {
        listadoPorHacer.splice(indexTarea, 1);
        guardardb();
        return true;
    }else{
        return false;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}