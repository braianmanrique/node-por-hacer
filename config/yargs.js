const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea crear tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    descripcion: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', ' Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Permite borrar una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}