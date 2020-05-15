const db = require("../data/db-config.js");

module.exports={
    addTask,
    getTasks
}

function addTask(task){
    return db("tasks").insert(task)
}

function getTasks(){
    return db("tasks")
}