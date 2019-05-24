const argv = require('../04-por-hacer/config/yargs').argv;
const porHacer = require('../04-por-hacer/por-hacer/por-hacer')

console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion)
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado()
        for (let tarea of listado) {
            console.log('========= Por Hacer ==========');
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log("============================");
        }
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.d, argv.c)
        console.log('sss', actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion)
        console.log(borrado);
        break;

    default:
        console.log('Comando no reconocido');
}