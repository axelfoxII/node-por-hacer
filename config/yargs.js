const opts = {
    descripcion: {
        alias: 'd',
        demand: true,
        desc: 'Descripcion de la tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como compleado o pendiente la tarea'

    },
    borrar: {
        alias: 'd',
        demand: true,
        desc: 'borra la tarea'

    }
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer.', opts)
    .command('actualizar', 'Actualiza el estado de una tarea por hacer.', opts)
    .command('borrar', 'Borra una tarea por hacer.', opts)
    .help()
    .argv;

module.exports = {

    argv

}