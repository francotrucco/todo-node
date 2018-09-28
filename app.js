const argv = require('./config/yargs').argv;
const todo = require('./por-hacer/por-hacer');

let command = argv._[0];

switch (command) {
    case 'crear': 
        let tarea = todo.create(argv.descripcion);
        console.log(tarea);
    break;
    case 'listar':
        let todoList = todo.getList();

        console.log('=======To Do List======='.green);
        for (let task of todoList) {
            console.log(task.description);
            console.log('Estado: ', task.complete ? 'Terminado'.green : 'Incompleto'.red);
            console.log('-----------------------');
        }
        console.log('======================='.green);

    break;
    case 'actualizar':
        let success = todo.update(argv.descripcion, argv.completado);

        if (success) 
            console.log('La tarea se actualizo correctamente');
        else
            console.log('No se pudo actualizar la tarea');
    break;
    case 'borrar':
        let deleted = todo.del(argv.descripcion);

        if (deleted) 
            console.log('La tarea se elimino correctamente');
        else
            console.log('No se pudo eliminar la tarea');
    break;
    default:
        console.log('comando no reconocido');
    break;
            
}