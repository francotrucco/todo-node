const fs = require('fs');

let todoList = [];

const saveDb = () => {

    let data = JSON.stringify(todoList);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('The task couldnt be saved');
    });
}

const readDb = () => {
    try {
        todoList = require('../db/data.json');
    } catch (error) {
        todoList = [];
    }
}

const create = (description) => {

    readDb();

    let todo = {
        description,
        complete: false
    };

    todoList.push(todo);

    saveDb();

    return todo;
}

const getList = () => {
    readDb();

    return todoList;
}

const update = (description, complete) => {
    readDb();

    let index = todoList.findIndex(task => task.description === description);

    if (index >= 0) {
        todoList[index].complete = complete;

        saveDb();
        return true;
    } else {
        return false;
    }
}

const del = (description) => {
    readDb();

    let index = todoList.findIndex(task => task.description === description);

    if (index >= 0) {
        todoList.splice(index, 1);

        saveDb();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    create,
    getList,
    update,
    del
}